/* 用户处理事件 */
import React, { Component } from 'react'    //imrc
import style from '../index.module.css'

export default class Vmodule extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return (
            <div>
                <input 
                    className={style.input}
                    type="text" 
                    placeholder="请输入……"
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                <p>{this.state.name}</p>
            </div>
        )
    }
}

