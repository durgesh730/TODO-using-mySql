import React from 'react';
import { useEditTask } from '../hooks/customhooks';

const EditTaskModal = ({ setInput, input }) => {
    const { handleSumNote } = useEditTask(input)

    function handleClose() {
        document.getElementById("myModal").style.display = "none";
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content mx-auto">
                <div className='text-center'>
                    <h2>Edit Tasks</h2>
                </div>
                <div className='inputs col-6 mx-auto mt-4'>
                    <input type="title" className="form-control" id="title" value={input.title} onChange={(e) => setInput((prev) => ({ ...prev, title: e.target.value }))}
                        name="taskName" aria-describedby="emailHelp" placeholder="Task" />
                </div>
                <div className="textarea col-6 my-4 mx-auto">
                    <textarea type="title" className="form-control" id="title" value={input.description} onChange={(e) => setInput((prev) => ({ ...prev, description: e.target.value }))}
                        name="dueDate" aria-describedby="emailHelp" placeholder="Date" />
                </div>
                <div className="form-check col-6 my-4 mx-auto">
                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={input.completed} onChange={(e) => setInput((prev) => ({ ...prev, completed: e.target.checked }))} />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        If task is completed then check box.
                    </label>
                </div>

                <div className="text-center">
                    <button type="button" className="btn submit mx-4" onClick={handleClose}>Close</button>
                    <button type="button" className="btn submit" onClick={handleSumNote}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;
