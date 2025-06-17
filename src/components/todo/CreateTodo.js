import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/state/todo/todoSlice';

export default function CreateTodo() {

  const dispatch = useDispatch();
  const refTaskInput = useRef();

  const handleAddTodo = () =>{
    dispatch(AddTodo(refTaskInput.current.value));
  }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-10'>
                <input ref={refTaskInput} type='text' className='form-control'placeholder='Task Name'/>
            </div>
            <div className='col-md-2'>
                <button onClick={handleAddTodo} className='btn btn-primary'>Add To Do</button>
            </div>
        </div>
    </div>
    
  )
}
