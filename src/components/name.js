import React from "react";

const Title = () => {
  var name = "BERNAT FERRER".split("");

  var [letters, setLetters] = React.useState("");
  React.useEffect(() => {
    var nameContainer = document.querySelector(".name");
    var lettersInt = setInterval(() => {
      var letter = document.createElement("span");
      letter.classList.add("fade-in-out");
      letter.textContent = name.shift();
      nameContainer.append(letter);

      if (!name.length) {
        clearInterval(lettersInt);
      }
    }, 300);
  }, [letters]);
  return (
    <div className=" name-wrapper">
      <h1 className="name"></h1>
    </div>
  );
};

export default Title;
