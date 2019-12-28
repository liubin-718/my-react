import React, {Component} from 'react'
import { Input, Button } from "antd";

// 创建高阶组件
function LFormCreate(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            // 表单配置项
            this.options = {} 

            this.state = {}
        }
        

        // 校验所有字段(全局校验)
        validateFields = cb => {
            // 将选项中所有filed组成的数组转换为它们校验结果数组
            const rets = Object.keys(this.options).map(field => {
                return this.validateField(field)
            })
            const ret = rets.every(v => v)
            // 将校验结果传出来，并传递数据
            cb(ret, this.state)
        }
        // 校验指定字段
        validateField = field => {
            // 获取校验规则
            const {rules} = this.options[field]
            // 只要有一项校验失败就返回true跳出，对返回值取反表示校验失败
            const ret = !rules.some(rule => {
                if(rule.required) {
                    // 仅校验必填项
                    if(!this.state[field]) {
                        // 校验失败
                        this.setState({
                            // 设置错误信息
                            [field + "Message"]: rule.message
                        })
                        // 校验失败返回true
                        return true
                    }
                }
                return false
            })
            // 校验成功，清除错误信息
            if(ret) this.setState({[field + "Message"]: ""})
            return ret
        }

        // 变更处理
        handleChange = e => {
            let {name, value} = e.target
            this.setState({[name]: value}, () => {
                // 校验：注意回调中调用
                this.validateField(name)
            })
        }
        

        getFieldDec = (field, option) => {
            this.options[field] = option
            // 返回一个装饰器(高阶组件)
            return InputComp => {
                return (
                    <div>
                        {
                            React.cloneElement(InputComp, {
                                name: field, // 控件name
                                value: this.state[field] || "",
                                onChange: this.handleChange  //输入值变化监听回调
                            })
                        }
                        {/* 添加一个校验提示信息 */}
                        {
                            this.state[field + "Message"] && (
                                <p style={{color: "red"}}>
                                    {this.state[field + "Message"]}
                                </p>
                            )
                        }
                    </div>
                )
            } 
        }
        render() {
            return (
                    <Comp
                        {...this.props}
                        getFieldDec={this.getFieldDec}
                         validateFields={this.validateFields} // 添加校验信息
                    ></Comp>
            )
        }
    }
}

@LFormCreate
class LFormTest extends Component {
    onSubmit = () => {
        // 校验、提交
        this.props.validateFields((isValid, data) => {
            if(isValid) {
                console.log("提交登录", data)
            } else {
                alert("校验失败！")
            }
        })
    }
    render() {
        const {getFieldDec} = this.props
        return (
            <div>
                {/* 接受两个参数返回一个装饰器 */}
                {
                    getFieldDec("userName", {
                        rules: [{required: true, message: "请输入用户名"}]
                    })
                    (
                        <Input type="text"/>
                    )
                }
                {
                    getFieldDec("passWord", {
                        rules: [{required: true, message: "请输入密码"}]
                    })
                    (
                        <Input type="password"/>
                    )
                }
                <Button onClick={this.onSubmit}>登录</Button>
            </div>
        )
    }
}

export default LFormTest