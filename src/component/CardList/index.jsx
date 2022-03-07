import React, {Component} from 'react';
import CardItem from "../CardItem";

class CardList extends Component {
    render() {
        const {users} = this.props
        const {state:appState} = this.props
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