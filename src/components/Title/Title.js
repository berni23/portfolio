import React from "react";
import "./Title.scss";

const Title = () => {
  var name = "BERNAT FERRER".split("");
  const [title, setTitle] = React.useState(true);
  React.useEffect(() => {
    if (title) {
      var nameContainer = document.querySelector(".name");
      setInterval(() => {
        var letter = document.createElement("span");
        letter.classList.add("fade-in-out");
        letter.textContent = name.shift();
        nameContainer.append(letter);
        if (!name.length) {
          setTimeout(() => setTitle(false), 3000);
          clearInterval(this);
        }
      }, 300);
    }
  }, [title, name]);
  return (
    <div className="name-wrapper">
      {
        title && (
          <h1 className="name">
            <div></div>
          </h1>
        )
        // :<Icons></Icons>
      }
    </div>
  );
};

export default Title;
