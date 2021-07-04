import React from 'react'

import nature from '../utils/images/nature.jpg'
import style from '../styles/Projects.module.css'

function Projects() {
  return (
    <div className={style.projects}>
      <div className={style.projectsWrapper}>
        <div className={style.title}>
          <span>Take a look at my</span>
          <h2>Projects</h2>
        </div>
        <div className={style.cardContainer}>
          <div className={style.projectCard}>
            <div className={style.projectImage}>
              <img src={nature} alt='' />
            </div>
            <div className={style.projectDetails}>
              <div className={style.projectTitle}>
                <h3>title</h3>
                <p>
                  <span>Tech used:</span> React, something ...
                </p>
              </div>
              <div className={style.projectText}>
                <ul>
                  <li>some info</li>
                  <li>more info</li>
                  <li>and a little more info</li>
                </ul>
              </div>
              <div className={style.btnsContainer}>
                <button>Live</button>
                <button>Repo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
