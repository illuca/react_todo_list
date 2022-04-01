import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state = {
        messages: [
            {id: '001', title: 'message001'},
            {id: '002', title: 'message002'},
            {id: '003', title: 'message003'}
        ]
    }

    handleReplace = (id, title) => {
        console.log(id, title)
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    handlePush = (id, title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
    handleBack = () => {
        this.props.history.goBack()
    }
    handleForward = () => {
        this.props.history.goForward()
    }
    handleGo = () => {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                {/*导航区*/}
                <ul>
                    {
                        this.state.messages.map(msg => {
                            return <li key={msg.id}>
                                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
                                <button onClick={() => this.handlePush(msg.id, msg.title)}>push查看</button>
                                &nbsp;
                                <button onClick={() => this.handleReplace(msg.id, msg.title)}>replace查看</button>
                            </li>
                        })
                    }
                </ul>

                {/*路由组件*/}
                <Route path={"/home/message/detail/:id/:title"} component={Detail}/>
                <button onClick={() => this.handleBack()}>回退</button>
                <button onClick={() => this.handleForward()}>前进</button>
                <button onClick={() => this.handleGo()}>Go</button>
            </div>
        );
    }
}

export default Message;