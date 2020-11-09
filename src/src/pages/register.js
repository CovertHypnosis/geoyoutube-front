import React, { useEffect } from 'react'
import { Form, Input, Button, Select, InputNumber  } from 'antd'
import RegisterProvider, { useRegister, getCountries } from 'providers/registerProvider'
import { useAuth, registerAction } from 'providers/authProvider'

const { Option } = Select

const Register = () => {

    const [state, dispatch] = useRegister()
    const [authStaet, authDispatch] = useAuth()

    useEffect(() => {
        getCountries(dispatch)
    }, [])

    const onFinish = (values) => {
        registerAction(values, authDispatch)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className="auth-page">
            <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Country"
                name="country"
                rules={[
                    {
                        required: true,
                        message: 'Please select your country!',
                    }
                ]}
            >
                <Select>
                    {
                        state.countries ? state.countries.map(country => (
                            <Option value={country}>
                                { country }
                            </Option>
                        )) : null
                    }
                </Select>
            </Form.Item>
            
            <Form.Item
                label="Time"
                name="time"
                rules={[
                    {
                        required: true,
                        message: 'Please select your time!',
                    }
                ]}
            >
                <InputNumber max={2} placeholder="1:60" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default (props) => {
    return (
        <RegisterProvider>
            <Register {...props} />
        </RegisterProvider>
    )
}