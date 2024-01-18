import { useState } from 'react';
import img_del from '../../assets/images/del.png';
import img_check from '../../assets/images/check.png';
import img_edit from '../../assets/images/edit.png';
import './TodoItem.css';

function TodoItem(props) {
    const { id, name, isDone, onStatusChange, onUpdate, onDelete } = props
    const [isEdit, setEdit] = useState(false)
    const [text, setText] = useState()

    const handleEdit = () => {
        setEdit(true)
        setText(name)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    const handleUpdate = (e) => {
        if (text !== '' && text !== name) {
            onUpdate(id, text);
        }
        setEdit(false)
    }
    const handleDelete = (e) => {
        onDelete(id)
    };
    const handleStatusChange = (e) => {
        onStatusChange(id);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };
    return (
        <div >
            {isEdit ?
                (
                    <div className="todoItem">
                        <input type='text' onChange={handleChangeText} value={text} onKeyDown={handleKeyPress} />
                        <button id={id} onClick={handleUpdate}>Ok</button>
                    </div>
                ) : (
                    <div className="todoItem">
                        <span className={'task_text' && isDone ? 'done' : 'notdone'} onClick={handleEdit}>{name}</span>

                        <div>
                            <button onClick={handleStatusChange} id={id} className="todoItem__button">
                                <img src={img_check} alt="Check" className="todoItem__button__img" />
                            </button>

                            <button id={id} onClick={handleEdit} className="todoItem__button">
                                <img src={img_edit} alt='edit' className='todoItem__button__img'></img>
                            </button>
                            <button id={id} onClick={handleDelete} className="todoItem__button">
                                <img src={img_del} alt='del' className='todoItem__button__img'></img>
                            </button>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default TodoItem;