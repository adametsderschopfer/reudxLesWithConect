import React, { useState, useEffect } from "react";
import { removeTodo } from "../store/actions/actions";

const ListTodo = ({ store }) => {
  const [Todoses, setTodoses] = useState();


  store.subscribe(() => {
    setTodoses(store.getState().todos);
  });

  return (
    <main className="main">
      {Todoses !== undefined &&
        Object.keys(Todoses).map((todo, index) => {
          todo = Todoses[todo]
          return (
            <div className="todo" key={index}>
              <div className="title">{todo.title}</div>
              <button className="delete" onClick={() => store.dispatch(removeTodo(todo))}>DEL</button>
            </div>
          );
        })}
    </main>
  );
};

export default ListTodo;
