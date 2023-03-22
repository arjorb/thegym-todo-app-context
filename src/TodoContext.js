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
      prevState.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  const completeTodo = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo;
      })
    );
  };

  return <TodoContext.Provider value={{ todos, addTodo, removeTodo, completeTodo }}>{children}</TodoContext.Provider>;
};

export default TodoContext;
