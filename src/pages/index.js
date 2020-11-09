import React, { useEffect } from 'react'
import { Button, Card, Form, InputNumber } from 'antd'
import { useAuth, logOut } from 'providers/authProvider'
import HomeProvider, { useHome, getYoutube } from 'providers/homeProvider'

const Home = () => {

    const [authState, authDispatch] = useAuth()
    const [state, dispatch] = useHome()

    useEffect(() => {
        let interval

        if (authState && authState.user) {
            getYoutube(authState.user.clientId, dispatch)

            interval = setInterval(() => {
                getYoutube(authState.user.clientId, dispatch)
            }, 20000000)
        }

        return () => {
            clearInterval(interval)
        }

    }, [authState.user])

    const youtube = state.youtube

    const onFinish = (values) => {}

    return (
        <div>
            {
                authState.user ? (
                    <Button onClick={() => logOut(authState.user.clientId)}>
                        Log Out
                    </Button>
                ) : (
                    <>
                        <Button>
                            <a href="/login">
                                Log In
                            </a>
                        </Button>
                        <Button>
                            <a href="/register">
                                Register
                            </a>
                        </Button>
                    </>
                )
            }
            

            <Card>

                <Form
                    name="basic"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Time"
                        name="updateTime"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your time!',
                            }
                        ]}
                    >
                        <InputNumber max={60} placeholder="1:60" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Change
                        </Button>
                    </Form.Item>
                </Form>

            </Card>

            <Card>
                <iframe url="" />
                <p>comment here</p>
            </Card>
        </div>
    )
}

export default () => {
    return (
        <HomeProvider>
            <Home />
        </HomeProvider>
    )
}