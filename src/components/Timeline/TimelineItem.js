import React from "react";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <div className="header-item">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>

        <time>{data.date}</time>
      </div>
      <p>{data.title}</p>
      <br/>

      <p class = 'text'>{data.text}</p>

      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}

      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
