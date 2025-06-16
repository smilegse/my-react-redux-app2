import React from 'react'

export default function CreateTodo() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-10'>
                <input type='text' className='form-control'placeholder='Task Name'/>
            </div>
            <div className='col-md-2'>
                <button className='btn btn-primary'>Add To Do</button>
            </div>
        </div>
    </div>
    
  )
}
