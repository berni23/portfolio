import React from "react";

import Title from "./name";
import Timeline from "./components/Timeline";

// import Particles from "react-particles-js";

function App() {
  const [timeline, setActive] = React.useState(false);

  // React.useEffect(() => {
  //   if (!timeline) {
  //     setTimeout(() => {
  //       var nameContainer = document.querySelector(".name");
  //       if (nameContainer) nameContainer.remove();
  //       setActive(!timeline);
  //     }, 10000);
  //   }
  // }, []);

  return (
    <>
      <Timeline></Timeline>
      {/* {timeline && <Timeline></Timeline>}
      {timeline || <Title></Title>} */}
      <div className="stars"></div>
      <div className="twinkling"></div>
    </>
  );
}

export default App;
