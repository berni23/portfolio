import React from "react";

const TimelineItem = ({ data,idx }) => {



  const [render, setRender] = React.useState(false);


  React.useEffect(() => {
    const timer = setTimeout(() => {
            
      setRender(true)
        
    }, 6000 + idx*500);
    return () => clearTimeout(timer);
  }, [render,idx]);




  return (


    <div className={`timeline-item ${render?"fade-in":"hide" }`}>
       <div className="timeline-item-content" >
        <div className="header-item">
          <span className="tag" style={{ background: data.category.color }}>
            {data.category.tag}
          </span>

          <time>{data.date}</time>
        </div>
        <p>{data.title}</p>
        <br />

        <p className='text'>{data.text}</p>

        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}

        <span className="circle"></span>
      </div>
    </div>

  )
}

export default TimelineItem;
