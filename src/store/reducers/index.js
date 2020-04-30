import { ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";

const initialState = {
  todo1: {title: 'asd', id: 1231231}
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.title]:{
          title: action.title,
          id: action.id,
        },
      };
    case REMOVE_TODO: 
      return removeTodo(action.todo, state)
    default:
      return state;
  }
};

function removeTodo(todo, state) {
  alert('ЭТА ХЕРНЯ ВСЕРОВНО УДАЛИТЬСЯ КОГДА ПЕРЕЗАГРУЗИШЬ СТРАНИЦУ НЕ ПАРЬСЯ!')  
  return {...state}
}