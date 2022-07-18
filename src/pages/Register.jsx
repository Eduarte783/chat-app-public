import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

function Register() {
   const navigate = useNavigate()
   const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const toastOptions= {
      position: "bottom-right",
      pauseOnHover: 8000,
      draggable: true,
      theme: "dark",
   };

   useEffect(() => {
      if(localStorage.getItem('chat-app-user')) {
        navigate('/');
      }
     }, []);

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (handleValidation()) {  
         const { email, username, password } = values;
         const { data } = await axios.post(registerRoute, {
            username,
            email,
            password,
         });
         if (data.status === false) {
            toast.error(data.msg, toastOptions);      
         }
         if (data.status === true) {
            localStorage.setItem('chat-app-user', JSON.stringify(data.user));
         };
         navigate("/");
      }
   };

   const handleValidation = () => {
      const { password, confirmPassword, username, email } = values;
      if (password !== confirmPassword) {
         toast.error(
            "Password and confirm password should be the same.", 
            toastOptions);
            return false;     
         } else if (username.length < 3) {
           toast.error("Username should be greater than 3 characters", toastOptions);
           return false;
         } else if (password.length < 6) {
         toast.error(
            "Password should be equal or greater than 6 characters",
            toastOptions); 
            return false;           
         } else if(email === "") {
         toast.error(
            "email is required", toastOptions);
            return false;
         }
         return true;
      };

   const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
   };

    return (
      <> 
         <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
               <div className="brand">
                  <img src="" alt="" />
                  <h1>((Talkr))</h1>
               </div>
               <input
               type="text"
               placeholder="Username"
               name="username"
               onChange={(e) => handleChange(e)}
               />
               <input
               type="email"
               placeholder="Email"
               name="email"
               onChange={(e) => handleChange(e)}
               />
               <input
               type="password"
               placeholder="Password"
               name="password"
               onChange={(e) => handleChange(e)} 
               />
               <input
               type="password"
               placeholder="Confirm Password"
               name="confirmPassword"
               onChange={(e) => handleChange(e)}   
               />
               <button type="submit">Create User</button>
               <span>Already have an account? <Link to="/login">Login</Link>
               </span>
            </form>
         </FormContainer>
         <ToastContainer />
      </>
    );
}

const FormContainer = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
   align-items: center;
   background: rgb(25,23,221);
   background: linear-gradient(0deg, rgba(25,23,221,1) 0%, rgba(176,1,240,1) 100%);
   .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.5rem;
      justify-content: center;
      padding-top: 0.5rem;
      img {
         height: 2rem;
      }
      h1 {
         color: #1e0079;
         text-tranform: uppercase;
      }
   }
   form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #cacaf7;
      border-radius: 1rem;
      padding: 2rem 5rem;
      input {
         background-color: transparent;
         padding: 1rem;
         border: 0.2rem solid #1e0079;
         border-radius: 0.5rem;
         color: #1e0079;
         width: 100%;
         font-size: 1rem;
         &:focus {
            border: 0.2rem solid #997af0;
            outline: none;
         }         
      }
      button {
         background-color: white;
         color: #1e0079;
         padding: 1rem 2rem;
         border: 0.2rem solid #997af0;
         cursor: pointer;
         border-radius: 0.5rem;
         font-size: 1rem;
         text-transform: uppercase;
         transition: 0.3s ease-in-out;
         &:hover {
            background-color: #997af0;
            border: 0.2rem solid #1e0079;
         }
      }
      span {
         color: #1e0079;
         text-transform: uppercase;
         a {
            color: #7851f0;
            text-decoration: none;
            font-weight: bold;
         }
      }
   }
`;

export default Register