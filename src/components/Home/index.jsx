import React, {Component} from 'react';
import {NavLink, Redirect, Route} from "react-router-dom";
import News from "./News";
import Message from "./Message";

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink activeClassName={"my-highlight"} className={"list-group-item"}
                                     to={"/home/news"}>News</NavLink>
                        </li>
                        <li>
                            <NavLink className={"list-group-item"} to={"/home/message"}>Message</NavLink>
                        </li>
                    </ul>
                    <switch>
                        <Route path={"/home/news"} component={News}/>
                        <Route path={"/home/message"} component={Message}/>
                        <Redirect to={"/home/news"}/>
                    </switch>
                </div>
            </div>
        );
    }
}

export default Home;