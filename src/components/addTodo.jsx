import React, { useState } from "react";
import { addTodo } from "../store/actions/actions";

const AddTodo = ({ store }) => {
  const [text, settext] = useState("");

  return (
    <footer className="footer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (text !== "") {
            store.dispatch(addTodo(text));
          }
          setTimeout(settext(""), 0);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Ну давай, сделай это, запиши что-нибудь твоюж мать!"
        />
        <button type="submit">Добавить</button>
      </form>
    </footer>
  );
};

export default AddTodo;
