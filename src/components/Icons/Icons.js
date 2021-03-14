import React from "react";
import './Icons.scss';
import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';

import pdf from '../../assets/docs/CV_bernat.pdf';

const Icons = () => {

    const [render, setRender] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
      
            setRender(true)
   
  }, 5000);
  return () => clearTimeout(timer);
}, [render]);
    

    return (
        
        <div className={`icons ${render? "fade-in" : "hide" }`}>
            <a href='https://github.com/berni23' rel='noreferrer' target="_blank">
            <img  style={{ width: '50px', height: '50px' }} src={Github} alt='github' />
            </a>
            <a href = 'https://www.linkedin.com/in/bernat-ferrer/' rel='noreferrer' target="_blank">
                <img style={{ width: '50px', height: '50px', backgroundColor: 'black', color: 'white' }} src={Linkedin} alt='linkedin' />

            </a>
 
              <a style = {{marginTop:'10px'}} href ={pdf} rel='noreferrer' target="_blank">
                <span style={{fontSize:'3rem',fontWeight:"1000", color: 'white' }} >CV</span>

            </a>

        </div>
    )
        
}



export default Icons