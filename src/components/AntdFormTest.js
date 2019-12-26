import React from 'react'
import { Form, Icon, Input, Button } from "antd";

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log("Received values of form: ", values)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {
                        getFieldDecorator("userName", {
                            rules: [{required: true, message: "请输入用户名"}]
                        })
                        (<Input
                            prefix={<Icon type="user" style={{color: "rgba(0,0,0,0.4)"}} />}
                            placeholder="用户名"
                        />)
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator("password", {
                            rules: [{required: true, message: "请输入密码"}]
                        })
                        (<Input
                            prefix={<Icon type="lock" style={{color: "rgba(0,0,0,0.4)"}} />}
                            type="password"
                            placeholder="密码"
                        />)
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        )
    }
};

const WrappedNormalLoginForm = Form.create({name: "normal_login"})(NormalLoginForm)
export default WrappedNormalLoginForm;