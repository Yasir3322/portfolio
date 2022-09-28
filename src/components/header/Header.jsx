import React from 'react';
import './header.css';
import Buttons from './Buttons';
import Me from '../../assets/My project (1).png';

const Header = () => {
  return (
       <header>
         <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Yasir ud din</h1>
          <div className="text-light">Fullstack Developer</div>
          <Buttons />
            <div className='me'>
              <img src={Me} alt="Me"/>
            </div>
         </div>
       </header>
    )
}

export default Header