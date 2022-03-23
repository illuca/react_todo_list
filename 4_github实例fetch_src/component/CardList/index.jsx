import React, {Component} from 'react';
import CardItem from "../CardItem";
import PubSub from "pubsub-js";

class CardList extends Component {
    state = {
        users: [],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount() {
        PubSub.subscribe('users topic',(_,stateObj)=>{
            this.setState(stateObj)
        })

    }

    render() {
        const {users}=this.state
        const appState = this.state
        console.log('card list', users)
        return (
            <div className="row">
                {
                    appState.isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        appState.isLoading ? <h2>Loading...</h2> :
                            appState.err ? <h2>{appState.err}</h2> :
                                users.map(user => {
                                    return <CardItem user={user} key={user.id}/>
                                })
                }
            </div>
        );
    }
}

export default CardList;