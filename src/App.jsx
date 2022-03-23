import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";


class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <BrowserRouter>
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-2">
                                <div className="list-group">
                                    {/*<a className="list-group-item" href="./about.html">About</a>*/}
                                    {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                                    <Link className="list-group-item" to="/about">about</Link>
                                    <Link className="list-group-item" to="/home">home</Link>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        <Route path="/about" component={About}></Route>
                                        <Route path="/home" component={Home}></Route>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BrowserRouter>

                </div>
            </div>
        );
    }
}

export default App;