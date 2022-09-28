import React from 'react';
import './services.css';
// import {BsCheck2Circle} from 'react-icons/bs';
import webimg from '../../assets/web-dev.jpeg';
import contentimg2 from '../../assets/content-creator.png';
import uiuximg from '../../assets/Ui-Ux.jpg';

const Services = () => {
  return (
    <section id='services'>
         <h5>What i offer</h5>
         <h2>Services</h2>

         <div className="container service_container">
            <article className='service'>
                <div className="service_head">
                <h3>UI/UX Design</h3>
                </div>
                <img src={uiuximg} alt=""/>
            </article>

            <article className='service'>
                <div className="service_head">
                <h3>Web Developemet</h3>
                </div>
               <img  src={webimg} alt=""/>
            </article>

            <article className='service'>
                <div className="service_head">
                <h3>Content Creation</h3>
                </div>
               <img src={contentimg2} alt=""/>
            </article>

         </div>
    </section>
  )
}

export default Services