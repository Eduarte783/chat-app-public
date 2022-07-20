import React, { useState, useEffect } from 'react';
import styled from "styled-components";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function fetchData() {
    setUserName(
      await JSON.parse(
        localStorage.getItem('chat-app-user')
      ).username
    );
   }
   fetchData();
  }, []);
  return (
    <Container>
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}
/* export default function Welcome({currentUser}) {
  return (
    <Container>
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start messaging</h3>
    </Container>
  );
} */

const Container = styled.div`
  dsiplay: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 20rem; 
  span {
    color: #3014f2;
  }
`;