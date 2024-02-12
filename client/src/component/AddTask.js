import React, { useState } from 'react'
import Navbar from './Navbar'
import EditTaskModal from './EditTask';
import ListTasks from './ListTasks';
import { useAddTasks } from '../hooks/customhooks';

const AddTask = () => {
    const { handleform, inVal, setInpval } = useAddTasks()
    const [input, setInput] = useState({
        id: "",
        title: '',
        description: "",
        completed: false
    })

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inVal,
                [name]: value
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className='container formfields '>
                <form >
                    <h2 className='text-center my-4'>Add Task</h2>
                    <div className='inputs'>
                        <div className="form-group text-center">
                            <input type="fname" className="form-control" value={inVal.title} name="title" id="title" aria-describedby="emailHelp" placeholder="Title" onChange={setVal} minlength="3" />
                        </div>
                        <div className="form-group text-center">
                            <textarea type="text" className="form-control" id="description" name="description" value={inVal.description} placeholder="Description" onChange={setVal} />
                        </div>
                    </div>
                    <div className='formbutton my-4'>
                        <button type="submit" onClick={handleform} className="btn">Submit</button></div>
                </form>
            </div>

            <div className='text-center'>
                <h2>Tasks</h2>
            </div>

            <ListTasks
                setInput={setInput}
                input={input}
            />
            {/*edit notes */}

            <EditTaskModal
                setInput={setInput}
                input={input}
            />
        </>
    )
}

export default AddTask
