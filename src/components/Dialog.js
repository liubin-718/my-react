import React, { Component } from "react";

import { createPortal, unmountComponentAtNode, unstable_renderSubtreeIntoContainer } from "react-dom";

// 方案2：在v16之前，要用到react中两个秘而不宣的React API: unstable_renderSubtreeIntoContainer,unmountComponentAtNode
export class Dialog extends Component {
    render() {
        // render一个null，目的什么内容都不渲染
        return null
    }
    componentDidMount() {
        // 首次挂载时创建宿主div
        const doc = window.document
        this.node = doc.createElement("div")
        doc.body.appendChild(this.node)
        this.createPortal(this.props)
    }
    componentDidUpdate() {
        this.createPortal(this.props)
    }
    componentWillUnmount() {
            // 清理节点
        unmountComponentAtNode(this.node)
        // 清理宿主div
        window.document.body.removeChild(this.node)
    }
    createPortal() {
        unstable_renderSubtreeIntoContainer(
            this, // 当前组件
            <div className="dialog"> {this.props.children} </div>, // 塞进传送门的jsx
            this.node // 传送门另一端DOM node
        )
    }
}

// 方案1：Portal  传送门，react v16之后出现的portal可以实现内容传送功能。
export default class Dialog2 extends Component {
    constructor(props) {
        super(props)
        this.node = document.createElement("div")
        document.body.appendChild(this.node)
    }
    render() {
        return createPortal(
            <div>
                {this.props.children}
            </div>, 
            this.node
        )
    }
    清除div
    componentWillUnmount() {
        document.body.removeChild(this.node)
    }
}