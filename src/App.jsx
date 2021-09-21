import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodos } from "./components/ImcompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      {/* propsを渡す  props名は任意　*/}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />

      {/* 左がtrueの時に右辺を返す */}
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは５個までにしてください</p>
      )}
      {/* propsを渡す  props名は任意　*/}
      <ImcompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBuck={onClickBuck} />
    </>
  );
};
