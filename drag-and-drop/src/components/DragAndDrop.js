import React, { useState } from "react";

const DragAndDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [list1, setList1] = useState(["Item 1", "Item 2", "Item 3"]);
  const [list2, setList2] = useState([]);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (setList, currentList) => {
    if (draggedItem) {
      
      setList([...currentList, draggedItem]);

      if (list1.includes(draggedItem)) {
        setList1(list1.filter((i) => i !== draggedItem));
      } else {
        setList2(list2.filter((i) => i !== draggedItem));
      }

      setDraggedItem(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.container}>
      <div style={styles.listContainer}>
        <h3 style={styles.listTitle}>List 1</h3>
        <div
          style={styles.list}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(setList1, list1)}
        >
          {list1.map((item, index) => (
            <div
              key={index}
              style={styles.item}
              draggable
              onDragStart={() => handleDragStart(item)}
            >
              {item}
            </div>
          ))}
          {list1.length === 0 && (
            <p style={styles.placeholder}>Drag are items here</p>
          )}
        </div>
      </div>

      <div style={styles.listContainer}>
        <h3 style={styles.listTitle}>List 2</h3>
        <div
          style={styles.list}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(setList2, list2)}
        >
          {list2.map((item, index) => (
            <div
              key={index}
              style={styles.item}
              draggable
              onDragStart={() => handleDragStart(item)}
            >
              {item}
            </div>
          ))}
          {list2.length === 0 && (
            <p style={styles.placeholder}>Drag items here</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    fontFamily: "'Poppins',Arial, sans-serif",
  },
  listContainer: {
    textAlign: "center",
  },
  listTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  list: {
    width: "200px",
    minHeight: "250px",
    border: "2px dashed #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    overflow: "auto",
  },
  item: {
    padding: "10px",
    margin: "8px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "grab",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  itemHover: {
    transform: "scale(1.05)",
  },
  placeholder: {
    color: "#aaa",
    fontStyle: "italic",
  },
};

export default DragAndDrop;
