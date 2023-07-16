import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { sortTodo } from "../../store/actions/creators/todo";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  let list = false;
  const dispatch = useDispatch();

  const filterTodo = (sort) => {
    if (sort === "completedTask") {
      list = true;
      todos.sort((x, y) => y.complete - x.complete);
      dispatch(sortTodo(todos));
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => filterTodo("completedTask")}>
          Сначала сделанные
        </button>{" "}
        <button onClick={() => filterTodo("notCompletedTask")}>
          Сначала не сделанные
        </button>
      </div>
      <ul className="todo-list" key={list}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
