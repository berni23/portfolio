import React from "react";


// import location from  "../../assets/images/location.svg"

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
          <div>
            <span className="tag" style={{ background: data.category.color }}>
            {data.category.tag}
            </span>
            {data.category2 &&   
               <span className="tag" style={{ background: data.category2.color}}>
            {data.category2.tag}
            </span>
                   
            }
      
          </div>
          <div>
            <p className='timeline-date'>{data.date}</p>   
            </div>
        </div>
            <br />
        <p className='timeline-title'>{data.title}</p>
      
        <br />
        <p className='text'>{data.text}
        </p>        

        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.img?<img  className='img-timeline' src ={data.img} alt='img'></img> : data.link.text}
          </a>
        )}

        <ul className = 'taglist'>
        
          {data.tags && data.tags.map((tag, idx) => { 
            
            tag = '#' + tag;

            return  <li className='hashtag'>{tag}</li>
        })}
          
          </ul>
        
      
    <span className="circle"></span>
      </div>
       
    </div>

  )
}

export default TimelineItem;
