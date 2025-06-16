import React from 'react'

export default function TodoList() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Task Name 1 </td>
                            <td><button className='btn btn-sm btn-primary'>Edit</button></td>
                            <td><button className='btn btn-sm btn-danger'>Delete</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
  )
}
