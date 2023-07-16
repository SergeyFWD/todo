import { ADD_TODO, TOGGLE_TODO, DEL_TODO, SORT_TODO } from "../types/todo";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const delTodo = (id) => ({
  type: DEL_TODO,
  payload: { id },
});

export const sortTodo = (tasks) => ({
  type: SORT_TODO,
  payload: { tasks },
});
