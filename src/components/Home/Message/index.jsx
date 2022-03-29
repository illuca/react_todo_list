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

    render() {
        return (
            <div>
                {/*导航区*/}
                <ul>
                    {
                        this.state.messages.map(msg => {
                            return <li key={msg.id}>
                                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
                            </li>
                        })
                    }
                </ul>
                {/*路由组件*/}
                <Route path={"/home/message/detail/:id/:title"} component={Detail}></Route>
            </div>
        );
    }
}

export default Message;