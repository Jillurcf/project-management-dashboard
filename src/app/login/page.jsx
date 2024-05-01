// components/LoginForm.js
import { Form, Input, Button } from 'antd';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle login logic here
  };

  return (
    <Form
      name="loginForm"
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: 'Please input your username!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
