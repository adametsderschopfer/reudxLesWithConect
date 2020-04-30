import React, { useState } from "react";

const InfoTodos = ({ store }) => {
  const [Todoses, setTodoses] = useState();

  store.subscribe(() => {
    setTodoses(store.getState().todos);
  });
  return (
    <header className="header">
      <div className="allTasks m">
        Всего задач:{" "}
        <span className="value">{Todoses && Object.keys(Todoses).length}</span>
      </div>
      {/* <div className="SuccessedTask m">
        Выполненных задач: <span className="value"></span>
      </div>
      <div className="m">
        Осталось:
        <span className="value"></span>
      </div> */}
    </header>
  );
};

export default InfoTodos;
