import { FaTrash } from 'react-icons/fa';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import TodoContext from '../TodoContext';
import { useContext } from 'react';
const TodoList = () => {
  const { todos, removeTodo, completeTodo } = useContext(TodoContext);

  const todosElement = todos.map(todo => (
    <div key={todo.id} className='flex justify-between gap-5 items-center mt-5 border-b-2 border-gray-100 pb-2 w-150'>
      <div className='flex gap-3 items-baseline'>
        <input type='checkbox' onChange={() => completeTodo(todo.id)} checked={todo.isChecked} />
        <label className={`text-xl text-gray-500 leading-tight ${todo.isChecked ? 'line-through' : 'no-underline'}`}>{todo.title}</label>
      </div>
      <div className='flex gap-2'>
        <div className='bg-blue-100 p-2 rounded-full cursor-pointer'>
          <HiOutlinePencilSquare className='text-blue-500' />
        </div>
        <div onClick={() => removeTodo(todo.id)} className='bg-red-100 p-2 rounded-full cursor-pointer'>
          <FaTrash className='text-red-500' />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {todos.length === 0 && <h1 className='text-4xl font-bold text-gray-200 text-center mt-20'>No Todo</h1>}
      {todosElement}
    </div>
  );
};

export default TodoList;
