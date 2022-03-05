import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import "./index.css"

export default class Header extends Component {


	static propTypes = {
		addTodo: PropTypes.func.isRequired //表示必传
	}
	handleKeyUp = (event) => {
		const { target, keyCode } = event

		if (keyCode === 13) {
			const newTodo = { id: nanoid(), name: target.value, done: false }
			//调用函数
			this.props.addTodo(newTodo)
			target.value=""
		}
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		)
	}
}


