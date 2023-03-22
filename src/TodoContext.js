import { nanoid } from 'nanoid';
import { useState, createContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prevState => [...prevState, { id: nanoid(), title: title, isChecked: false, isEdited: false }]);
  };

  const removeTodo = id => {
    setTodos(prevState =>
      prevState.filter(prev => {
        return prev.id !== id;
      })
    );
  };

  return <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</TodoContext.Provider>;
};

export default TodoContext;
