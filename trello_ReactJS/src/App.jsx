import React, { useEffect, useState } from 'react';
import { Navbar } from './components/navbar/navbar';
import { PanelSection } from './components/panelSection/panelSection';
import { ColumnSection } from './components/columnSection/columnSection';
import {EditCardModal} from './components/editCardModal/editCardModal.jsx';
import { AddCardModal } from './components/addCardModal/addCardModal.jsx';
import './App.css';

const url = "http://localhost:3000/tasks";

function App() {
 
  const [tasks, setTasks] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAdditionModalOpen, setIsAdditionModalOpen] = useState(false);

  async function fetchTasks() {
    try {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        setTasks(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    fetchTasks().then((newTasks) => {
      setTasks(newTasks);
    });
  }, []);

  async function postTask(newTask) {
    try {
        const response = await fetch(url,
            { method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask) });
        const savedTask = await response.json();
        setTasks([...tasks, savedTask]);
        return data;
    } catch (error) {
        console.log("Error posting task: ", error);
    }
}

  async function updateTask(task) {
    try {
        const response = await fetch(url + `/${task.id}`,
            { method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task) 
          }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error updating task: ", error);
    }
}
async function deleteTask(task) {
  try {
      const response = await fetch(url + `/${task.id}`,
          { method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(task)
          });

          if (response.ok) {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
            closeModal();
          }
          
          // const data = await response.json();
          // return data;
  } catch (error) {
      console.log("Error deleting task: ", error);
      closeModal();
  }
}

const openModal = () => {
  setIsAdditionModalOpen(true);
};

const closeModal = () => {
  setIsAdditionModalOpen(false);
};

const handleCardClick = (task) => {
  setSelectedTask(task);
  setIsEditModalOpen(true);
};

  return (
    <>
      <Navbar />
      <PanelSection />
      <div className="main-content">
        <ColumnSection 
          tasks={tasks}
          handleCardClick={handleCardClick}
          openModal={openModal}  />
      </div>


      {isAdditionModalOpen && (
        <AddCardModal closeModal={closeModal} postTask={postTask} />
      )}
      {isEditModalOpen && (
        <EditCardModal
          closeModal={() => setIsEditModalOpen(false)}
          updateTask={updateTask}
          task={selectedTask}
          deleteTask={() => deleteTask(selectedTask.id)}
        />
      )} 
    </>
  );
}

export default App;
