import React from "react";

import Title from "./components/name";
import Timeline from "./components/Timeline";

// import Particles from "react-particles-js";

function App() {
  const [timeline, setActive] = React.useState(false);
  const [name, setName] = React.useState(true);

  React.useEffect(() => {
    if (!timeline) {
      setTimeout(() => {
        setName(!name);
        setActive(!timeline);
      }, 10000);
    }
  }, [timeline, name]);

  return (
    <>
      {timeline && <Timeline></Timeline>}
      {name && <Title></Title>}
      <div className="stars"></div>
      <div className="twinkling"></div>
    </>
  );
}

export default App;
