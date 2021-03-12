import timelineData from "../../data";
import React from "react";
import TimelineItem from "./TimelineItem";
import "./Timeline.scss";

import Icons from "../Icons/Icons";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-wrapper">
      <Icons></Icons>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </div>
  );

export default Timeline;
