"use client"
// components/LoginForm.js
import { Form, Input, Button } from 'antd';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import app from '../firebase/config';


const LoginPage = () => {
  const router = useRouter()
  const onFinish = (value) => {
    const { email, password } = value; 
    try {
      const auth = getAuth(app);
      const userCredential =  signInWithEmailAndPassword(
        auth,
        email,
        password

      );
      router.push("/dashboard")
      console.log("User Logged In:", userCredential.user);
     
    } catch (error) {
      console.error("Error creating user:", error);
      // setError(error.message); // Set error message state
    }
    
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
      <p>Do not have an account please <span className="underline text-blue-800"><a href="/signup">Register</a></span></p>
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
