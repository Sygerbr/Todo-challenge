import styles from './TaskList.module.css'
import clipboard from '../assets/Clipboard.svg'

export function TaskList({ tasks, onAddTask }) {

    function handleComplete(id) {
        const novaLista = tasks.map(task => 
            task.id === id ? {
                ...task,
                completed: !task.completed
            } : task 
        )
        onAddTask(novaLista)
    }

    return (
        <section className={styles.task}>
            <div>
                <p className={styles.taskp1}>{`Tarefas criadas ${tasks.length}`}</p>
                <p className={styles.taskp2}>Concluidas</p>
            </div>
            {tasks.length === 0 ? (
                <div className={styles.container}>
                    <img src={clipboard} alt="" />
                    <h4>Você ainda não tem tarefas cadastradas</h4>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                <div className={styles.newTaskList}>
                    {tasks.map((task) => (
                        <div key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onClick={() => handleComplete(task.id)}                               
                            />
                            <span>{task.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </section >
    );
}
