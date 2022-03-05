import React from "react";
import Hello from "./components/Hello/Hello";
import Mike from "./components/Mike/Mike";

export default class App extends React.Component {
    render() {
        return (
			<div>
				<Hello/>
				<Mike/>
			</div>
		);
    }
}
