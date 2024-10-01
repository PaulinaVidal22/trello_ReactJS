import React, { useState } from 'react';

export function AddCardModal({ closeModal, postTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('User 1');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('Backlog');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        postTask({ title, description, responsible, dueDate, status });
        closeModal();
    };
    
    return (
        <div id="addCardModal" className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
            <div className="box">
                <h2 className="title">Add a new task</h2>

                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input 
                            id="cardTitle" 
                            className="input" 
                            type="text" 
                            placeholder="Título de la tarjeta"
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required ></input>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea 
                            id="cardDescription" 
                            className="textarea" 
                            placeholder="Descripción de la tarjeta"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Due Date</label>
                        <div className="control">
                                <input 
                                id="cardDueDate" 
                                className="input"
                                type="date"
                                placeholder="dd/mm/aaaa" 
                                value={dueDate} 
                                onChange={(e) => setDueDate(e.target.value)}
                                ></input>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Status</label>
                        <div className="control">
                        <div className="select">
                            <select 
                                id="cardStatus"
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
                            <select id="cardResponsible"
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
                                <select 
                                id="cardPriority"
                                value={priority} 
                                onChange={(e) => setPriority(e.target.value)}>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button id="addCardButton" className="button is-primary" type="submit" onClick={closeModal}>Add</button>
                </form>
            </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>
    
);
}
