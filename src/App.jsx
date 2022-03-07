import React, {Component} from 'react';
import Search from "./component/Search"
import "./App.css"
import CardList from "./component/CardList";
class App extends Component {
    state = {
        users:[]
    }
    saveUsers = (newUsers)=>{
        this.setState({users:newUsers})
    }
    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers}/>
                <CardList users={users}/>
            </div>
        );
    }
}

export default App;