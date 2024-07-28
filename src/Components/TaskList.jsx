import styles from './TaskList.module.css'
import clipboard from '../assets/Clipboard.svg'
import { useState, useEffect } from 'react';

export function TaskList({ tasks, onToggleTaskCompletion }) {
    const [completedTaskCount, setCompletedTaskCount] = useState(0);
  
    useEffect(() => {
      const completedCount = tasks.filter(task => task.completed).length;
      setCompletedTaskCount(completedCount);
    }, [tasks]);
  
    function handleTaskCompletionToggle(taskId) {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      onToggleTaskCompletion(updatedTasks);
    }
  
    return (
      <section className={styles.task}>
        <div>
          <p className={styles.taskp1}>{`Tarefas criadas ${tasks.length}`}</p>
          <p className={styles.taskp2}>{`Concluídas ${completedTaskCount}`}</p>
        </div>
        {tasks.length === 0 ? (
          <div className={styles.container}>
            <img src={clipboard} alt="Nenhuma tarefa cadastrada" />
            <h4>Você ainda não tem tarefas cadastradas</h4>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className={styles.newTaskList}>
            {tasks.map((task) => (
              <div key={task.id} className={styles.taskItem}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskCompletionToggle(task.id)}
                />
                <span>{task.name}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }