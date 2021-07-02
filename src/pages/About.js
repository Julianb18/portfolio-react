import React from 'react'

import style from '../styles/About.module.css'

function About() {
  return (
    <div className={style.about}>
      <div className={style.aboutWrapper}>
        <div className={style.title}>
          <span>Some info</span>
          <h2>About Me</h2>
        </div>

        <div className={style.aboutContainer}>
          <div className={style.leftContainer}>
            <div className={style.text}>
              <h3>Hey Again!</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                quam qui exercitationem optio ad maxime quas assumenda
                accusantium doloribus perspiciatis, rerum debitis minima ea,
                fuga neque fugit. Repellat, similique laboriosam.
              </p>
            </div>
          </div>
          <div className={style.rightContainer}>
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
