import React, {useState} from 'react';
import ListItem from "./ListItem";

function ListItems(props) {

const {todos} = props

    return (

        <div>
            {todos.map(el =>
                <ListItem editTodo={props.editTodo} el={el} todos={todos} key={el.id}/>
                )}
        </div>
    );
}

export default ListItems;
