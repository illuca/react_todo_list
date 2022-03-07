import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    search = () => {
        console.log(this.keyWordElement.value)
        let keyWord=this.keyWordElement.value
        axios.get(`/githubAPI/search/users?q=${keyWord}`).then(
            response=>{
                // console.log(response.data)
                this.props.saveUsers(response.data.items)
            },
            error=>{
                console.log(error)
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input onKeyUp={this.search} ref={currentNode => this.keyWordElement = currentNode} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;