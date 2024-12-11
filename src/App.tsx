import React from 'react';
import {Button, Card, Form, Input, Typography, Layout as AntLayout, Flex} from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

import Layout from './components/layout/Layout.tsx';

const { Text, Title, Link } = Typography;
const { Content } = AntLayout;

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout>
      <Content
        style={{
        padding: '0 48px',
        maxWidth: 1100,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'initial',
          justifyContent: 'center'
      }}
        >
        <Flex justify='center' align='center'>
          <Card style={{ width: 380 }}>
                <Title level={3}>Sign up</Title>
                <Text>
                  Join us! Create an account to get started.
                </Text>

              <Form
                name="normal_signup"
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
              >
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined/>} placeholder="Name"/>
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined/>} placeholder="Email"/>
                </Form.Item>
                <Form.Item
                  name="password"
                  extra="Password needs to be at least 8 characters."
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined/>}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item style={{marginBottom: "0px"}}>
                  <Button block type="primary" htmlType="submit">
                    Sign up
                  </Button>
                    <Text>Already have an account?</Text>{" "}
                    <Link href="">Sign in</Link>
                </Form.Item>
              </Form>
          </Card>
        </Flex>
      </Content>
    </Layout>
  );
};

export default App;
