import React, { Component } from "react";
class TreeNode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    // 判断是否有子元素
    get isFolder() {
        return this.props.model.children &&
                this.props.model.children.length
    }
    toggle = () => {
        if(this.isFolder){
            this.setState({
                open: !this.state.open
            })
        }
    }

    render() {
        return (
            <ul>
                <li>
                    <div onClick={this.toggle}>
                        {this.props.model.title}
                        {this.isFolder ? <span>{this.state.open ? "-" : "+"}</span> : null}
                    </div>
                    {/* 可能存在子树 */}
                    {this.isFolder ? (
                        <div style={{display: this.state.open ? "block" : "none"}}>
                            {this.props.model.children.map(model => (
                                <TreeNode model={model} key={model.title} />
                            ))}
                        </div>
                    ) : null}
                </li>
            </ul>
        )
    }
}

export default class Tree extends Component {
    treeData = {
        title: "web全栈架构师",
        children: [
            {title: "Java架构"},
            {
                title: 'js高级',
                children: [
                    {title: "ES6"},
                    {title: "性能优化"},
                    {title: "Cavas绘图"},
                    {title: "websocket"}    
                ]
            },{
                title: "Web全栈",
                children: [
                    {
                        title: "Vue",
                        expand: true,
                        children: [
                            {title: "组件化"},
                            {title: "源码"},
                            {title: "docker部署"}
                        ]
                    },
                    {
                        title: "React",
                        children: [
                            {title: "JSX语法"},
                            {title: "虚拟Dom"},
                            {title: "Diff算法"},
                            {title: "Redux"}
                        ]
                    },
                    {
                        title: "Node"
                    }

                ]
            }
        ]
    }
    render() {
        return (
            <div>
                <TreeNode model={this.treeData} />
            </div>
        )
    }
}