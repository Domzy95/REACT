import { useState } from "react";
import PropTypes from "prop-types";
export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  //!funkcija za pohendlanje submita
  function handleSubmit(e) {
    e.preventDefault(); //!prepreči refresh strani!
    if (newItem === "") return;
    //!vnesemo funkcijo in ne vrednosti kot spodaj za newItem
    onSubmit(newItem);
    //!vsakil ko dodamo nov item resetira input
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form" action="">
      <div className="form-row">
        <label htmlFor="item">New Task</label>
        <input
          value={newItem} //! dobi novi value od inputa in ga vstavi v newItem
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
