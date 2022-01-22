
import React from 'react'

import "./Navbar.scss"

import {Link} from 'react-scroll'


const Navbar = () =>

    <div className='navbar'>
        <div className="main-item">BERNAT FERRER</div>
        <div className = "item">
        <div><Link to ='about' spy={true} smooth={true}>About</Link></div>
        {/* <div>Projects</div> */}
            <div style={{marginRight:'20px'}}>Contact </div>
        </div>
        
    </div>


export default Navbar