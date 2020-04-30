import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    title,
    id: Math.floor(Math.random() * 500000),
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  };
};
