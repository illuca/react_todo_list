import React, {Component} from 'react';
import axios from "axios";
import PubSub from "pubsub-js"

class Search extends Component {
    search = () => {

        PubSub.publish('users topic',{isFirst:false, isLoading: true})
        console.log(this.keyWordElement.value)

        let keyWord = this.keyWordElement.value
        axios.get(`/githubAPI/search/users?q=${keyWord}`).then(
            response => {
                PubSub.publish('users topic',{isLoading:false, users: response.data.items})
            },
            error => {
                PubSub.publish('users topic', {isLoading: false, err: error.message})
            }
        )
    }
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.search()
        }
    }

    render() {

        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input onKeyUp={this.handleKeyUp} ref={currentNode => this.keyWordElement = currentNode} type="text"
                           placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;