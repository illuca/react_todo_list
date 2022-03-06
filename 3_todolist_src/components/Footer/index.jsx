import React, {Component} from 'react'
import "./index.css"
import PropTypes from "prop-types";

export default class Footer extends Component {


    handleDeleteDone = () => {
        return (event) => {
            this.props.deleteDone()
        }
    }
    handleMarkAllDone=()=>{
        return (event)=>{
            this.props.markAllDone(event.target.checked)
        }
    }



    render() {
        return (<div className="todo-footer">
                <label>
                    <input type="checkbox"  checked={this.props.allDone} onChange={this.handleMarkAllDone()}/>
                </label>
                <span>
		            <span>已完成{this.props.doneNum}</span> /
                    <span>全部{this.props.todoNum}</span>
                </span>
                <button className="btn btn-danger" onClick={this.handleDeleteDone()}>清除已完成任务</button>
            </div>)
    }
}



