import { nanoid } from 'nanoid';
import { useState, createContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prevState => [...prevState, { id: nanoid(), title: title, isChecked: false, isEdited: false }]);
  };

  return <TodoContext.Provider value={{ todos, addTodo }}>{children}</TodoContext.Provider>;
};

export default TodoContext;
