"use client";
// // components/LoginForm.js
import { Form, Input, Button } from "antd";
// import UseAuth from "../hooks/page";
// import { useState } from "react";
// import app from "../firebase/config";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const signup = () => {

//  const {createUsers} = UseAuth();
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("")
// console.log(email);

//   const onFinish = (value) => {

//     console.log("Received values:", value);
//   setEmail(value.email);
//   setPassword(value.password)

//   // await createUsers(email, password).then((result) => {
//   //       console.log(result.user);
//   //      })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   try {
//     const auth = getAuth(app);
//     const userCredential = createUserWithEmailAndPassword(auth, email, password);

//     console.log("User created successfully:", userCredential.user);
//     // Handle successful user creation here
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//     // Handle error here
//   }

// };

//   return (
//     <div className="max-w-screen-md mx-auto h-screen justify-center items-center flex">
//       <Form
//         className="border p-12 rounded-xl text-white"
//         name="loginForm"
//         onFinish={onFinish}
//       >
//         <h1 className="text-center pb-8 text-2xl font-bold text-white">
//           Please signup
//         </h1>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please input your password!" }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };


// export default signup;
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
 const router = useRouter();
  const onFinish = (value) => {
    const { email, password } = value; 
    try {
      const auth = getAuth(app);
      const userCredential =  createUserWithEmailAndPassword(
        auth,
        email,
        password

      );
      router.push("/dashboard")
      console.log("User created:", userCredential.user);
     
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error.message); // Set error message state
    }
    
  };

  return (
    <div className="px-4 max-w-screen-md mx-auto h-screen justify-center items-center flex">
      <Form
        className="border p-12 rounded-xl text-white"
        name="loginForm"
        onFinish={onFinish}
      >
        <h1 className="text-center pb-8 text-2xl font-bold text-white">
          Please signup
        </h1>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      <p>Allready have an account please <span className="underline text-blue-800"><a href="/login">login</a></span></p>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
