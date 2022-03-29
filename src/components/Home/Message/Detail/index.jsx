import React, {Component} from 'react';

class Detail extends Component {
    state = {
        messageContents: [
            {id: "001", content: "我爱你,中国"},
            {id: "002", content: "挣更多的w"},
            {id: "003", content: "more free"}
        ]
    }

    render() {
        console.log(this.props)
        const {id, title} = this.props.match.params
        const {content} = this.state.messageContents.find((item) => {
            return id === item.id
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;