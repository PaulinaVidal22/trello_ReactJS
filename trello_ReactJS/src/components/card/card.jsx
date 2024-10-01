import React from "react";
import { CardContent } from '../cardContent/cardContent';
// import {classes} from './card.module.css';

// { title, description, dueDate, status, tagColor, priority, responsible }

export function Card({ title, priority, openEditModal}) {

    let tagColor = '';

    switch (priority) {
        case 'High':
            tagColor += ' is-danger';
            break;
        case 'Medium':
            tagColor += ' is-warning';
            break;
        case 'Low':
            tagColor += ' is-success';
            break;
        default:
            tagColor += ' is-info';
            break;
    }
    return (
        <div    
            //className={`${classes.card} ${classes['clickable-card']}`}
            className="card clickable-card"
            onClick={openEditModal}
            style={{ cursor: 'pointer' }}>
            <header className="card-header">
                <span 
                className={`card-tag ${tagColor}`}
                //className={`${classes['card-tag']} ${tagColor}`}
                ></span>
            </header>
            {}
            <CardContent 
                title={title}
                // description={description}
                // dueDate={dueDate}
                // status={status}
                // priority={priority}
                // responsible={responsible}
            />
        </div>
    );
}


