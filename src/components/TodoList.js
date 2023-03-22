import { FaTrash } from 'react-icons/fa';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { HiPlusCircle } from 'react-icons/hi';
const TodoList = () => {
  return (
    <div className='flex justify-between gap-5 items-center mt-5 border-b-2 border-gray-100 pb-2 w-150'>
      <div className='flex gap-3 items-baseline'>
        <input type='checkbox' id='todo' />
        <label className={`text-xl text-gray-500 leading-tight`}>This is it the trial</label>
      </div>
      <div className='bg-red-100 p-3 rounded-full cursor-pointer'>
        <FaTrash className='text-red-500' />
      </div>
    </div>
  );
};

export default TodoList;
