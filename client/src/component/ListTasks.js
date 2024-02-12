import React from 'react';
import { useDeleteTask, useFetachAllTasks } from '../hooks/customhooks';

const ListTasks = ({ setInput }) => {
    const { task } = useFetachAllTasks()
    const { handleDelete } = useDeleteTask()

    const handleOpen = (not) => {
        console.log(not)
        setInput({
            id: not.id,
            title: not.title,
            description: not.description,
            completed: not.completed
        })
        document.getElementById("myModal").style.display = "block";
    }
    return (
        <div className='container'>
            <div className='tableVerified'>
                <table>
                    <thead>
                        <tr className='my-4'>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task?.length === 0 || task === undefined ? (
                            <div class="loader"></div>
                        ) : (
                            task?.map((item, index) => {
                                return (
                                    <tr key={index} className='trtd'>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.completed}</td>
                                        <td>
                                            <div className='pt-3'>
                                                <button className='btn-view' onClick={() => { handleOpen(item) }}>Edit</button>
                                            </div>
                                            <div className='pt-2' >
                                                <button className='btn-card' onClick={() => { handleDelete(item.id) }}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListTasks;
