import React from "react";

function Note(props) {
  const id = props.id;

  return (
    <div className="note arabicFont">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={function () {
          props.handleDelete(id);
        }}
      >
        حذف
      </button>
    </div>
  );
}

export default Note;
