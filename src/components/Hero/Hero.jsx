import React from 'react'
import './Hero.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero" style={{backgroundImage: `url(${assets.prakki_me_interview})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Welcome to My World</h1>
        <p>Moments, Memories & Stories</p>
        <button><Link to="/explore">Explore More</Link></button>
      </div>
    </section>
  )
}

export default Hero
