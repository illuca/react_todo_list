import React, {Component} from 'react'
import PropTypes from "prop-types";
import "./index.css"

export default class Item extends Component {
    static propType = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        todo: PropTypes.array.isRequired
    }
    state = {mouse: false}
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    handleCheck = (id) =>{
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }
    handleDelete = (id) => {
        return (event) => {
            this.props.deleteTodo(id)
        }
    }


    render() {
        const {deleteTodo,todo} = this.props
        return (
            <li style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: this.state.mouse ? '' : 'none'}} onClick={this.handleDelete(todo.id)}>删除</button>
            </li>
        )
    }
}
