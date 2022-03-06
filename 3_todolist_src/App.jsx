import React from "react"
import "./App.css"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import PropTypes from "prop-types";

export default class App extends React.Component {
    state = {
        todos: [
            {id: "1", name: "吃饭", done: false},
            {id: "2", name: "睡觉", done: false},
            {id: "3", name: "打代码", done: false}
        ]

    }
    // 更新操作
    updateTodo = (id, done) => {
        const {todos} = this.state
        todos.map((todo) => {
            if (todo.id === id) {
                todo.done = done
                return todo
            }
        })
        this.setState({todos: todos})
    }

    addTodo = (todoObj) => {
        const {todos} = this.state
        let newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }
    deleteTodo = (id) => {
        const {todos} = this.state

        let newTodos = todos.filter(todo => {
                return todo.id !== id
            }
        )
        this.setState({todos: newTodos})
    }

    markAllDone = (checked)=> {
        const {todos} =this.state
        let newTodos=todos.map(todo=>{
            todo.done=checked
            return todo
        })
        this.setState({todos:newTodos})
    }


    render() {
        const deleteDone = () => {
            let newTodos = this.state.todos.filter(todo => todo.done === false)
            this.setState({todos: newTodos})
        }
        const {todos} = this.state

        const doneNum = todos.reduce((pre, todo) => {
            let adder = todo.done === true ? 1 : 0
            return pre + adder
        },0)
        const allDone = doneNum == todos.length && todos.length >= 1
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/* 这里是一个回调函数 */}
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
                    <Footer markAllDone={this.markAllDone} allDone={allDone} doneNum={doneNum} todoNum={todos.length} deleteDone={deleteDone}/>
                </div>
            </div>
        )
    }
}