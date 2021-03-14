import timelineData from "../../data";
import React from "react";
import TimelineItem from "./TimelineItem";
import "./Timeline.scss";

import Icons from "../Icons/Icons";

const Timeline = () => {
    const [render, setRender] = React.useState(false);


  React.useEffect(() => {
    const timer = setTimeout(() => {
            
      setRender(true)
        
    }, 4000);
    return () => clearTimeout(timer);
  }, [render]);


  
  

  return (timelineData.length > 0 && (
    <div className={`timeline-wrapper ${render ? "fade-in" : "hide"}`}>
      <Icons></Icons>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} idx={idx} />
        ))}
      </div>
    </div>
    
  )
  )
        }

export default Timeline;
