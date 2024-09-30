import React from "react";
import { Column } from '../column/column';
import classes from './columnSection.module.css'

export function ColumnSection({tasks}){
  
    const columnNames = ['Backlog', 'To do', 'In progress', 'Blocked', 'Done' ]
    
    const columns = columnNames.map((columnName) => {
        const columnTasks = tasks.filter(task => task.status === columnName);

        return <Column key={columnName} columnName={columnName} tasks={columnTasks} />;
    });


    return (
        <div className={`${classes.columns} columns is-mobile`}>
            {columns}
        </div>
    );
}
