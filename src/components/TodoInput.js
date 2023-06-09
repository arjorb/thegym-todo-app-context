import { useContext, useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import TodoContext from '../TodoContext';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleClick = () => {
    if (input.trim() === '') return;
    addTodo(input);
    setInput('');
  };
  return (
    <div className='w-150'>
      <h1 className='text-6xl text-center font-bold text-gray-100'>Todos</h1>
      <div className='flex gap-3 items-center py-3 px-7 rounded-full shadow-3xl mt-6'>
        <input
          type='text'
          onChange={event => setInput(event.target.value)}
          value={input}
          placeholder='add todo...'
          className='w-full bg-transparent text-lg border-none outline-none placeholder:text-gray-200'
        />
        <HiPlusCircle size={30} onClick={handleClick} className={`cursor-pointer ${input.trim() === '' ? 'text-gray-300' : 'text-green-500'} duration-300`} />
      </div>
    </div>
  );
};

export default TodoInput;
