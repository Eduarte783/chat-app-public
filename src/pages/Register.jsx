import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Register() {
   const handleSubmit = (event)=> {
      event.preventDefault();
      alert("form");
   };
   const handleChange = (event) => {};
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
               name="passowrd"
               onChange={(e) => handleChange(e)} 
               />
               <input
               type="password"
               placeholder="Confirm Password"
               name="confirmPassowrd"
               onChange={(e) => handleChange(e)}   
               />
               <button type="submit">Create User</button>
               <span>Already have an account? <Link to="/login">Login</Link>
               </span>
            </form>
         </FormContainer>
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
   }
`;

export default Register
