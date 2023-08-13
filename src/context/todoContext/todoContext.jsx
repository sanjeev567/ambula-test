// todoContext.js
import React, { createContext, useContext, useReducer } from "react";
import todoReducer from "./todoReducer";

const INITIAL_STATE = {
  todos: [],
  completedTodos: [],
};

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
