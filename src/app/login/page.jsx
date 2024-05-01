"use client"
// components/LoginForm.js
import { Form, Input, Button } from 'antd';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle login logic here
  };

  return (
  <div className='max-w-screen-md mx-auto h-screen justify-center items-center flex'>
   
      <Form className='border p-12 rounded-xl text-white'
      name="loginForm"
      onFinish={onFinish}
    >
         <h1 className='text-center pb-8 text-2xl font-bold text-white'>Please Login Here</h1>
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
  </div>
  );
};

export default LoginPage;
