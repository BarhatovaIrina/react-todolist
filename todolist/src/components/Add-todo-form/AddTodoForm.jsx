import React, { useState } from 'react';
import './AddTodoForm.css';
import img_add from '../../assets/images/add.png';

function AddTodoForm(props) {
    const { onAdd } = props
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAdd = () => {
        if (text !== '') {
            onAdd(text)
            setText('')
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };
    return (
        <div className="add-todo-form">
            {/* <h2 className='add-todo-form__title'>Todo List</h2> */}
            <section className="add-todo-form__forma">
                <input type="text" placeholder="Add your new todo" onChange={handleChange} onKeyDown={handleKeyPress} value={text} className="add-todo-form__forma__text"></input>
                {/* <button class="add-todo-form button">Add new task</button> */}
                <img src={img_add} className='button_form' alt='add' onClick={handleAdd}></img>
            </section>

        </div>
    );
}

export default AddTodoForm;