import styles from './NewTask.module.css'
import icon from '../assets/plus.svg'
import { useState } from 'react'

export function NewTask( {onAddTask} ) {

    const [inputValue, setInputValue] = useState('')


    function handleSubtmit(event) {
        event.preventDefault();

        const todo = {
            id: Math.random(),
            name: inputValue,
            completed: false
        }

        onAddTask(todo)
        setInputValue('')
    }

    return (
        <form className={styles.task} onSubmit={handleSubtmit}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={inputValue}
                onChange={(evento) => setInputValue(evento.target.value)}
            />
            <button type='Submit'>
                <p>Criar</p>
                <img src={icon} alt="" />
            </button>
        </form>
    )
}
