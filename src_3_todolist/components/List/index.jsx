import React, {Component} from 'react'
import PropTypes from "prop-types";
import "./index.css"
import Item from "../Item"

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }
    render() {
        const {deleteTodo,updateTodo}=this.props
        return (
            <ul className="todo-main">
                {
                    this.props.todos.map(todo => {
                        return <Item deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id} todo={todo}/>
                    })
                }
            </ul>
        )
    }
}
