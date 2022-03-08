import React, {Component} from 'react';
import Search from "./component/Search"
import "./App.css"
import CardList from "./component/CardList";

class App extends Component {

    saveUsers = (newUsers) => {
        this.setState({users: newUsers})
    }
    updateAppState = (newState) => {
        this.setState(newState)
    }

    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search/>
                <CardList/>
            </div>
        );
    }
}

export default App;