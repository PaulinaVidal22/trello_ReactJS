import React, { useState } from 'react';
import { Card } from '../card/card';
// import {classes} from './column.module.css';


export function Column ({columnName, tasks, openModal, handleCardClick}){
    
    
    const taskList = tasks.map((task) => (
        <Card 
            key={task.id}
            title={task.title}
            // description={task.description}
            // dueDate={task.dueDate}
            // status={task.status}
            //tagColor={task.tagColor}
            priority={task.priority}
            // responsible={task.responsible}
            handleCardClick={handleCardClick}
        />
    ));

    return (
        <div 
            className="column is-one-fifth"
            //className={`${classes.column} column is-one-fifth`} 
            data-status={columnName}>
            <p className="bd-notification is-info">{columnName}</p>
            <div className="tasks">
                {taskList}
            </div>
            <footer id = "todo-column-footer" className="column-footer">
            <a 
            href="#" 
            className="column-footer-item"
            //className={classes['column-footer-item']} 
            onClick={() => openModal()}
           >
                + Add a card</a>
            </footer>
    </div> 
    );
}