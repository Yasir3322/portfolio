import React from 'react'
import './about.css';
import img from'../../assets/My-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about' className='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
      <div className='about-me'>
        <div className='about-me-image'>
        <img src={img} className='about-image' alt='About Me'/>
        </div>
      </div>

      <div className='about-content'>
        <div className='about-cards'>
        <article className='about-card'>
             <FaAward className='about-card-icon'/>
             <h5>Experience</h5>
             <small>1 Year working</small>
        </article>
        <article className='about-card'>
             <FiUsers className='about-icon'/>
             <h5>Clients</h5>
             <small>20 clients</small>
        </article>
        <article className='about-card'>
             <AiOutlineFolderOpen className='about-icon'/>
             <h5>Projects</h5>
             <small>1 project</small>
        </article>
        </div>
        <p className='my_intro'>Myself Yasir uddin . I'm from the city of flower called peshawer.I recently completed my four year of greduation at Software Engineering and currently working on the Web Developement technologies.</p>
         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About