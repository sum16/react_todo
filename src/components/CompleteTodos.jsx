import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBuck } = props;
  return (
    <div className="complete-task-area">
      <p className="title">完了タスク</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickBuck(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
