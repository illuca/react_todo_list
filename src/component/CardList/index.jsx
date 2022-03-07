import React, {Component} from 'react';
import CardItem from "../CardItem";

class CardList extends Component {
    render() {
        const {users} = this.props
        console.log('card list',users)
        return (
            <div className="row">
                {
                    users.map(user => {
                        return <CardItem user={user} key={user.id}/>
                    })
                }
            </div>
        );
    }
}

export default CardList;