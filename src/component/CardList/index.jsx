import React, {Component} from 'react';
import CardItem from "../CardItem";

class CardList extends Component {
    render() {
        return (
            <div className="row">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        );
    }
}

export default CardList;