import React from "react";
import {classes} from './cardContent.module.css';

// { title, description, dueDate,status, priority, responsible }

export function CardContent({ title }) {
    return (
        <div className="card-content">
            <p className={classes['card-title']}>{title}</p>
            {/* <p className="card-description">{description}</p>
            <p className="card-dueDate">Due: {dueDate}</p>
            <p className="card-status">Status: {status}</p>
            <p className="card-priority">Priority: {priority}</p>
            <p className="card-responsible">Assigned to: {responsible}</p> */}
        </div>
    );
}
