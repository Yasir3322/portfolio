import React from 'react';
import './portfolio.css';
import img from '../../assets/portfolio1.jpg';

const portfolioProj = [
  {
    id:1,
    Image:img,
    title:"Portfolio item title",
    github:'#',
    livedemo:'#'
  },
  {
    id:2,
    Image:img,
    title:"Portfolio item title",
    github:'#',
    livedemo:'#'
  },
  {
    id:3,
    Image:img,
    title:"Portfolio item title",
    github:'#',
    livedemo:'#'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
             {
              portfolioProj.map(port => {
                  const {id , Image ,title,github,livedemo} = port;
                  
                  return(
                    <article className='portfolio_item' key={id}>
                    <div className='portfolio_item-img'>
                        <img src={Image} alt=""/>
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_btn'>
                        <a href={github} className='btn'>Github</a>
                        <a href={livedemo} className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                  )
              })
             }
            
        </div>
    </section>
  )
}

export default Portfolio