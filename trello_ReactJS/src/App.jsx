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
            body: JSON.stringify(newTask),});

        //if (response.ok) {
            const savedTask = await response.json();
            setTasks([...tasks, savedTask]);
            return savedTask;
        //}
    } catch (error) {
        console.log("Error posting task: ", error);
    }
}

  async function updateTask(updatedTask) {
    // url + `/${updatedTask.id}`
    try {
        const response = await fetch(`${url}/${updatedTask.id}`,
            { method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask) 
          }
        );

        if (response.ok) {
          const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
          setTasks(updatedTasks);
        }
    } catch (error) {
        console.log("Error updating task: ", error);
    }
}

async function deleteTask(id) {
  try {
      const response = await fetch(url + `/${id}`, { method: "DELETE"});
        if (response.ok) {
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
          closeEditModal();
        }
  } catch (error) {
      console.log("Error deleting task: ", error);
      closeEditModal();
  }
}

const openModal = () => {
  setIsAdditionModalOpen(true);
};

const closeModal = () => {
  setIsAdditionModalOpen(false);
};

const openEditModal = (task) => {
  setSelectedTask(task);
  setIsEditModalOpen(true);
};


const closeEditModal = () => {
  setIsEditModalOpen(false);
  setSelectedTask(null);
};

  return (
    <>
      <Navbar />
      <PanelSection />
      <div className="main-content">
        <div className="button-container">
          <button className={`button customButton`} onClick={() => openModal()}> + add a card</button>
        </div>
        <ColumnSection 
          tasks={tasks}
          openEditModal={openEditModal}
          />
      </div>


      {isAdditionModalOpen && (
        <AddCardModal closeModal={closeModal} postTask={postTask} />
      )}
      {isEditModalOpen && (
        <EditCardModal
          closeEditModal={closeEditModal}
          task={selectedTask}
          updateTask={updateTask}
          deleteTask={() => deleteTask(selectedTask.id)}
        />
      )} 
    </>
  );
}

export default App;
