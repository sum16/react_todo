import React from "react";

export const ImcompleteTodos = (props) => {
  // propsの中身を取り出す
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-task-area">
      <p className="title">未完了タスク</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // 仮想DOMで差分のみを抽出しているため、配列で回す際はkeyを明示する必要がある
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                完了
              </button>
              {/* 関数に引数を渡したいときはアロー関数を使って引数を渡す */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
