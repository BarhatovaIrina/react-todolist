// import Button from '../UI/Button/Button';
import React, { useEffect, useState } from 'react';
import './TodoList.css';
// import tasks from '../../data.json';
import TodoItem from '../TodoItem/TodoItem';
import AddTodoForm from '../Add-todo-form/AddTodoForm';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, [])
    const handleStatusChange = (id) => {
        // Логика изменения статуса задачи
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isDone: !task.isDone };
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const handleUpdate = (id, value) => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, name: value };
            }
            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const handleDelete = (id) => {
        let updatedTasks = tasks.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };
    const handleAdd = (newTaskValue) => {
        const newId = uuidv4();
        let updatedTasks = [...tasks, {
            "id": newId,
            "name": newTaskValue,
            "isDone": false,
            "type": "work"
        }
        ]
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    return (
        <div className="todoList">
            <AddTodoForm onAdd={handleAdd}></AddTodoForm>
            <h3 className='todoList title'>To Do</h3>
            <div>
                {
                    tasks.map((item) => {
                        return <TodoItem name={item.name} type={item.type} isDone={item.isDone} key={item.id} id={item.id}
                            onStatusChange={handleStatusChange} onUpdate={handleUpdate} onDelete={handleDelete}></TodoItem>
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;