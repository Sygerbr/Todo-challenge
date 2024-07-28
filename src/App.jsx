import { useState } from 'react';
import { Header } from './Components/Header'
import { NewTaskForm } from './Components/NewTask'
import { TaskList } from './Components/TaskList'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleToggleTaskCompletion(updatedTasks) {
    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />
      <NewTaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTaskCompletion={handleToggleTaskCompletion}
      />
    </div>
  );
}