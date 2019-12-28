/* 状态管理 */

import React, {Component, useState, useEffect} from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            counter: 0
        }
    }

    componentDidMount(){
        this.setState(
            nextState => {
                return {
                    counter: nextState.counter + 1
                },
                () => {
                    console.log(this.state.counter)
                }
            }
        )

        this.timerId = setInterval( () => {
            this.setState(
                {
                    date: new Date()
                },
                () => {
                    // 每次状态更新通知父组件
                    this.props.change(this.state.date)
                }
            )
        }, 1000 )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
export default function StateMsg() {
    return (
        <div>
            <Clock change={
                date => {
                        // console.log(date.toLocaleTimeString())
                    }
                }
            />
        </div>
    )
}

