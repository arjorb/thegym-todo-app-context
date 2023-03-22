import { useState, createContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  return <TodoContext.Provider value={{ item: 1 }}>{children}</TodoContext.Provider>;
};

export default TodoContext;
