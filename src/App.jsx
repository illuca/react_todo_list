import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    getStudentData = () => {
        axios.get("http://localhost:3000/studentAPI/students").then(
            response => {
                console.log("获取到的学生数据: ", response.data)
            },
            error => {
                console.log("获取学生数据失败", error)
            })
    }
    getCarData = () => {
        axios.get("http://localhost:3000/carAPI/cars").then(
            response=> {
                console.log("获取到的汽车数据: ", response.data)
            },
            error => {
                console.log("获取汽车数据失败", error)
            }
        )
    }

    render() {
        return (
            <div id="root">
                <button onClick={this.getStudentData}>
                    获取学生信息
                </button>
                <button onClick={this.getCarData}>
                    获取汽车信息
                </button>
            </div>
        );
    }
}

export default App;