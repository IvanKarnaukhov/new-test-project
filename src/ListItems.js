import React, {useState} from 'react';
import ListItem from "./ListItem";

function ListItems(props) {

const {todos, moveUp, moveDown} = props
    const length = todos.length

    return (

        <div>
            {todos.map((el, i) =>
                <ListItem
                    editTodo={props.editTodo}
                    el={el} todos={todos}
                    key={el.id} moveUp={moveUp}
                    index={i}
                    moveDown={moveDown}
                    length={length}
                />
                )}
        </div>
    );
}

export default ListItems;
