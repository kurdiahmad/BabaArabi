import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  function handleClick(event) {
    props.setNotes((prevValue) => {
      return [...prevValue, { t: title, c: content }];
    });
    console.log(title, content, props.notes);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
        className="arabicFont" 
        onChange={handleChange} 
        name="title" 
        placeholder="العنوان؟" />
        <textarea
          className="arabicFont"
          onChange={handleChange}
          name="content"
          placeholder="الملخص..؟"
          rows="3"
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
