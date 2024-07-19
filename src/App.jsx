import { useState } from 'react';
import { Header } from './Components/Header'
import { NewTask } from './Components/NewTask'
import { TaskList } from './Components/TaskList'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    console.log(task);
    setTasks([...tasks, task])
  }

  return (
    <div>
      <Header />
      <NewTask onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
      />
    </div>
  )
}