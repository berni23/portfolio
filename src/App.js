import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title/Title";
import Timeline from "./components/Timeline/Timeline";
import Background from "./components/Background/Background";


function App() {
  return (
    <>
   <Background></Background>
      <Navbar></Navbar>
      <div className='main'>
        <Title></Title>
      <Timeline></Timeline>
          </div>
    </>
  );
}

export default App;
