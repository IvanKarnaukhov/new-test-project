import React, {useState} from 'react';

function ListItem(props) {

    const {el} = props

    const [editTodo, setEditTodo] = useState('')
    const [editIsOpen, setEditIsOpen] = useState(false)

    const editHandler = (el) => {
        setEditTodo(el)
        setEditIsOpen(false)
    }

    const saveHandler = (id) => {
        props.editTodo(id, editTodo)
        setEditIsOpen(false)
        setEditTodo('')
    }

    return (

        <div>
            <li key={el.id}>
                {editIsOpen ? (
                    <>
                        <input type='text' value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
                        <button onClick={() => saveHandler(el.id)}>Save</button>
                        <button onClick={()=> setEditIsOpen(false)}>Cancel</button>
                    </>

                ) : (
                    <>
                        {el.name}
                        <button onClick={() => editHandler(el.name, el.id)}>Edit</button>
                        <button onClick={() => props.deleteTodo(el.id)}>Del</button>
                    </>
                )
                }

            </li>
        </div>
    );
}

export default ListItem;
