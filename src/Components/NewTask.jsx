import styles from './NewTask.module.css'
import icon from '../assets/plus.svg'
import { useState } from 'react'

export function NewTaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState('');
  
    function handleFormSubmit(event) {
      event.preventDefault();
  
      const newTask = {
        id: Math.random(),
        name: taskName,
        completed: false
      };
  
      onAddTask(newTask);
      setTaskName('');
    }
  
    return (
      <form className={styles.task} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button type='submit'>
          <p>Criar</p>
          <img src={icon} alt="Adicionar" />
        </button>
      </form>
    );
  }