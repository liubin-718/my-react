import React, {Component} from 'react'

function LFormCreate(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.options = {}
            this.state = {}
        }
        handleChange = e => {
            let {name, value} = e.target
            this.setState({[name]: value}, () => {
                // 校验：注意回调中调用
                this.validateField(name)
            })
        }
        // 校验指定字段
        validateField = field => {
            // 获取校验规则
            const rules = this.options[field].rules
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
            })
            // 校验成功，清除错误信息
            if(ret) this.setState({[field + "Message"]: ""})
            return ret
        }
        // 校验所有字段
        validateFields = cb => {
            // 将选项中所有filed组成的数组转换为它们校验结果数组
            const ret = Object.keys(this.options).every(field => {
                this.validateField(field)
            })
            cb(ret, this.state)
        }

        getFieldDec = (field, option) => {
            this.options[field] = option
            return InputComp => (
                <div>
                    {
                        React.cloneElement(InputComp, {
                            name: field,
                            value: this.state[field] || "",
                            onChange: this.handleChange
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

        render() {
            return (
                <div>
                    <Comp
                        {...this.props}
                        getFieldDec={this.getFieldDec}
                        validate={this.validate} // 添加校验信息
                    ></Comp>
                </div>
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
                {
                    getFieldDec("userName", {
                        rules: [{required: true, message: "请输入用户名"}]
                    })
                    (
                        <input type="text"/>
                    )
                }
                {
                    getFieldDec("passWord", {
                        rules: [{required: true, message: "请输入密码"}]
                    })
                    (
                        <input type="password"/>
                    )
                }
                <button onClick={this.onSubmit}>登录</button>
            </div>
        )
    }
}

export default LFormTest