import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [singleSelection, setSingleSelection] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSingleSelection(getCurrentId === singleSelection ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        className="btn"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div
              className={`item ${
                singleSelection === dataItem.id ||
                multiple.includes(dataItem.id)
                  ? "active"
                  : ""
              }`}
              key={index}
            >
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(singleSelection === dataItem.id ||
                multiple.includes(dataItem.id)) && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
