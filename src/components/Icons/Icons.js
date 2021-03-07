import React from "react";
import './Icons.scss';
import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';


const Icons = () => {
    return(
        <div className='icons'> 
            <a href='https://github.com/berni23'>
            <img  style={{ width: '50px', height: '50px' }} src={Github} alt='github' />
            </a>
            <a href = 'https://www.linkedin.com/in/bernat-ferrer/'>
                <img style={{ width: '50px', height: '50px', backgroundColor: 'black', color: 'white' }} src={Linkedin} alt='linkedin' />

            </a>
 
              <a style = {{marginTop:'10px'}} href = 'https://www.linkedin.com/in/bernat-ferrer/'>
                <span style={{fontSize:'3rem',fontWeight:"1000", color: 'white' }} src={Linkedin} alt='linkedin' >CV</span>

            </a>

        </div>
    )
        
}



export default Icons