import React, {Component} from 'react';
import Search from "./component/Search"
import "./App.css"
import CardList from "./component/CardList";
class App extends Component {
    render() {
        return (
            <div className="container">
                <Search/>
                <CardList/>
            </div>
        );
    }
}

export default App;