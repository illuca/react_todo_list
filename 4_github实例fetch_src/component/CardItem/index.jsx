import React, {Component} from 'react';

class CardItem extends Component {
    render() {
        const {user}=this.props
        return (
            <div className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                    <img src={user.avatar_url} style={{width: "100px"}}/>
                </a>
                <p className="card-text">{user.login}</p>
            </div>
        );
    }
}

export default CardItem;