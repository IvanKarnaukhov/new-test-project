import React, {useState} from 'react';


function CreateForm(props) {

const [newTodoName, setNewTodoName] = useState('')


    const createTodoHandler = () => {
        props.createTodo(newTodoName)
        setNewTodoName('')
    }

    return (


        <div>
            <input type='text' value={newTodoName} onChange={(e)=> setNewTodoName(e.target.value)} />
            <button onClick={createTodoHandler}> Add</button>

        </div>
    );
}

export default CreateForm;
