import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>The skills i have</h5>
        <h2>Experience</h2>
      <div className='container experience-container'>
            <div className='experience-frontend'>
                <h3>Frontend Development</h3>
                <div className='experience-content'>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>CSS</h4>
                      <small className='text-light'>Intemediate</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>JavaScript</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                     <div>
                     <h4>React</h4>
                      <small className='text-light'>Experienced</small>
                     </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>BootStrap</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>MaterialUI</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                    </article>
                </div>

                
            </div>
            
            <div className='experience-backend'>
            <h3>Backend Development</h3>
            <div className='experience-content'>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>Node js</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>Express</h4>
                      <small className='text-light'>Intemediate</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill className='experience-details-icon' />
                      <div>
                      <h4>java</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                     <div>
                     <h4>Mongodb</h4>
                      <small className='text-light'>Experienced</small>
                     </div>
                    </article>
                    <article className='experience-details'>
                      <BsFillPatchCheckFill  className='experience-details-icon'/>
                      <div>
                      <h4>mysql</h4>
                      <small className='text-light'>Intermediat</small>
                      </div>
                    </article>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Experience