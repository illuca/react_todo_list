import React, {Component} from 'react';
import Search from "./component/Search"
import "./App.css"
import CardList from "./component/CardList";

class App extends Component {
    state = {
        users: [],
        isFirst:true,
        isLoading:false,
        err:''
    }
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
                <Search updateAppState={this.updateAppState} state={this.state}/>
                <CardList users={users} state={this.state}/>
            </div>
        );
    }
}

export default App;