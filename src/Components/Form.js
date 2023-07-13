import { useState } from "react";

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, title, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);
    setDescription("");
    setTitle("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Write✍️ your task for the Day</h3>
      <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
