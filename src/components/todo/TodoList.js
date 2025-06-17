import React from 'react'
import { useSelector } from 'react-redux'
import { TodoDeleteAlert } from './TodoDeleteAlert';
import { TodoEditAlert } from './TodoEditAlert';

export default function TodoList() {

    const todoItems = useSelector((state)=>state.todo.value)
    
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 my-4'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoItems.map((item,i)=> {
                                return(
                                <tr key={i.toString()}>
                                    <td >{i}</td>
                                    <td>{item} </td>
                                    <td><button onClick={()=>TodoEditAlert(i,item)} className='btn btn-sm btn-primary'>Edit</button></td>
                                    <td><button onClick={()=>TodoDeleteAlert(i)} className='btn btn-sm btn-danger'>Delete</button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
  )
}
