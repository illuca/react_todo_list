import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    search = () => {
        this.props.updateAppState(
            {
                isFirst: false,
                isLoading: true
            }
        )
        console.log(this.keyWordElement.value)
        let keyWord = this.keyWordElement.value
        axios.get(`/githubAPI/search/users?q=${keyWord}`).then(
            response => {
                // console.log(response.data)
                this.props.updateAppState(
                    {
                        users: response.data.items,
                        isLoading: false
                    }
                )
            },
            error => {
                this.props.updateAppState({
                    isLoading: false,
                    err: error.message
                })
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