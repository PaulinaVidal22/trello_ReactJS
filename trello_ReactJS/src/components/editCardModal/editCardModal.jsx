import React, { useEffect, useState } from 'react';


export function EditCardModal({ task, closeModal, updateTask, deleteTask }) {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [responsible, setResponsible] = useState(task ? task.responsible : 'User 1');
    const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
    const [status, setStatus] = useState(task ? task.status : 'Backlog');
    const [priority, setPriority] = useState(task ? task.priority : 'Low');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setResponsible(task.assignedTo);
            setDueDate(task.dueDate);
            setStatus(task.status);
            setPriority(task.priority);
        }
    }, [task]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTask = { ...task, title, description, responsible, dueDate, status, priority };
        await updateTask(updatedTask);
        closeModal();
    };

    return (
        <div id="editCardModal" className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
            <div className="box">
                <h2 className="title">Edit Task</h2>
                <p className="subtitle is-4">Editar tarea</p>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input 
                            id="editCardTitle" 
                            className="input" 
                            type="text"
                            //placeholder="Título" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required ></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea 
                            id="editCardDescription" 
                            className="textarea"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Due Date</label>
                        <div className="control">
                            <input 
                            id="editCardDueDate" 
                            className="input" 
                            type="date"
                            value={dueDate} 
                            onChange={(e) => setDeadline(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Status</label>
                        <div className="control">
                            <div className="select">
                                <select id="editCardStatus"
                                value={status} 
                                onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="Backlog">Backlog</option>
                                    <option value="To do">To do</option>
                                    <option value="In progress">In progress</option>
                                    <option value="Blocked">Blocked</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Assigned to</label>
                        <div className="control">
                            <div className="select">
                                <select id="editCardResponsible"
                                value={responsible} 
                                onChange={(e) => setResponsible(e.target.value)}>
                                    <option value="User 1">User 1</option>
                                    <option value="User 2">User 2</option>
                                    <option value="User 3">User 3</option>
                                    <option value="User 4">User 4</option>
                                    <option value="User 5">User 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Priority</label>
                        <div className="control">
                            <div className="select">
                                <select id="editCardPriority"
                                value={priority} 
                                onChange={(e) => setPriority(e.target.value)}>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button 
                    id="updateCardButton" 
                    className="button is-primary"
                    type="submit"
                    // onClick={() => {
                    //     updateTask(updatedTask);
                    //     closeModal();
                    // }}
                    >Save Changes</button>
                    <button 
                    id="deleteCardButton" 
                    className="button is-light"
                    onClick={() => {
                        deleteTask();
                        closeModal();
                    }}
                    >Delete Card</button>
                </form>
            </div>
        </div>
        <button 
        type="button"
        className="modal-close is-large" 
        aria-label="close"
        onClick={closeModal}
        ></button>
        </div>
    );
}