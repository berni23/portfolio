import React from "react";

import Title from "./name";
// import Particles from "react-particles-js";

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      var nameContainer = document.querySelector(".name");
      if (nameContainer) nameContainer.remove();
    }, 10000);
  });
  return (
    <>
      <Title></Title>

      <div className="stars"></div>
      <div className="twinkling"></div>
    </>
  );
}

export default App;
