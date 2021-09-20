import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcomleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // event.target.valueに入力値が入る
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    // 空文字でtodoを追加した時にreturnで処理を終了させる
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    // console.log(newTodos);
    setImcomleteTodos(newTodos);
    // ボタン「追加」押下後にinputの文字をリセット
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcomleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...imcompleteTodos];
    // indexに対応する値から１つ取り除く
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    // 未完了タスクのリストと完了タスクを更新
    setImcomleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBuck = (index) => {
    // 完了タスクを取得
    const newCompleteTodos = [...completeTodos];
    // 完了タスクからindex番号に対応する値を１つ取り除く
    newCompleteTodos.splice(index, 1);

    //未完了タスクと選択した完了タスクをマージ
    const newIncompleteTodos = [...imcompleteTodos, completeTodos[index]];
    //完了タスク群に取り除かれた後の完了タスクを反映
    setCompleteTodos(newCompleteTodos);
    //未完了タスク群にマージされた後の未完了タスクを反映
    setImcomleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-task-area">
        <p className="title">未完了タスク</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
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

      <div className="complete-task-area">
        <p className="title">完了タスク</p>
        <ul>
          {completeTodos.map((todo, index) => {
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
    </>
  );
};
