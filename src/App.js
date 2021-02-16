import React from "react";
import Title from "./components/Title/Title";
import Timeline from "./components/Timeline/Timeline";
import Background from "./components/Background/Background";

function App() {
  // const [timeline, setActive] = React.useState(false);
  // const [name, setName] = React.useState(true);

  // React.useEffect(() => {
  //   if (!timeline) {
  //     setTimeout(() => {
  //       setName(!name);
  //       setActive(!timeline);
  //     }, 10000);
  //   }
  // }, [timeline, name]);

  return (
    <>
      <Title></Title>
      <Timeline></Timeline>
      <Background></Background>
      <Background></Background>
    </>
  );
}

export default App;
