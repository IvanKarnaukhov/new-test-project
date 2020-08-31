import React, {useEffect, useState} from 'react';
import ListItems from "./ListItems";
import CreateForm from "./CreateForm";
import axios from 'axios';

function App() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }, [])



    const createTodo = (newTodoName) => {
        console.log('newTodoName', newTodoName)
        const newCreateTodo = [...todos]
        newCreateTodo.push({
            "id": Math.random(),
            "name": newTodoName,
        })
        setTodos(newCreateTodo)
    }
    console.log(todos)

    const deleteTodo = (id) => {
        const newTodo = todos.filter(el => el.id !== id)
        setTodos(newTodo)
    }

    const editTodo = (id, editTodo) => {
        const newTodo = todos.map(el => {
            if (el.id === id) {
                return {...el, name: editTodo}
            }
            return el
        })
    setTodos(newTodo)
    }

    const pushAllTodos = () => {
        const promises = [];
        for (let i = 0; i < todos.length; i++) {
            promises.push(
                axios.post('https://todo-server-ivan.herokuapp.com/todo', {name: todos[i].name, description: todos[i].email})
            )
        }
        console.log(promises)
        Promise.all(promises)
            .then(results => console.log(results))
            .catch(error => console.log(error))


    }

    return (

        <div>
            <CreateForm createTodo={createTodo}/>
            <ListItems todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
            <button onClick={()=> pushAllTodos()}>Push</button>
        </div>
    );
}

export default App;
