import "./HeroImgStyles.css"

import React from 'react'

import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="content">
            <h1>Blog-post .</h1>
            <div>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg