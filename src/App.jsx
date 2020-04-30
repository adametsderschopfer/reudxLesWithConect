import React, { useEffect } from "react";
import AddTodo from "./components/addTodo";
import ListTodo from "./components/listTodo";
import InfoTodos from "./components/infoTodos";

function App({ store }) {

  useEffect(() => {
    store.dispatch({ type: "APP_INIT" });
  }, [store]);

  return (
    <div className="App">
      <center>
        <h1>TODOSHNIK WITH REDUX</h1>
      </center>
      <div className="Todo">
        <InfoTodos store={store} />
        <ListTodo store={store} />
        <AddTodo store={store} />
      </div>
    </div>
  );
}

export default App;
