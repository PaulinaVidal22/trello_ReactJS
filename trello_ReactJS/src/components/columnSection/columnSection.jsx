import React from "react";
import { Column } from '../column/column';
//import classes from './columnSection.module.css'

export function ColumnSection({tasks, openModal}){
  
    const columnNames = ['Backlog', 'To do', 'In progress', 'Blocked', 'Done' ]
    
    const columns = columnNames.map((columnName) => {
        const columnTasks = tasks.length > 0 ? tasks.filter((task) => task.status === columnName): [];

        return <Column key={columnName} 
                        columnName={columnName} 
                        tasks={columnTasks} 
                        // setSelectedTask={setSelectedTask} 
                        // setIsEditModalOpen={setIsEditModalOpen}
                        openModal={openModal}/>;
    });


    return (
        <div 
        className='columns is-mobile'
        //className={`${classes.columns} columns is-mobile`}
        >
            {columns}
        </div>
    );
}
