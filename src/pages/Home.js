import React from 'react'

import style from '../styles/Home.module.css'
import arrow from '../utils/icons/arrow.png'

function Home() {
  return (
    <div className={style.home}>
      <div className={style.homeWrapper}>
        <div className={style.textContainer}>
          <div className={style.subHeadContainer}>
            <h4>Hey</h4>
          </div>
          <div className={style.headerContainer}>
            <h2>I am Julian Braun.</h2>
            <h2>I am a Web Developer</h2>
          </div>
        </div>

        <div className={style.btnContainer}>
          <button>Latest Projects</button>
        </div>
      </div>

      <div className={style.scrollContainer}>
        {/* <div className={style.relativeParent}> */}
        {/* <div className={style.scrollArrow}></div> */}
        <img src={arrow} alt='' />
        <h4>Scroll</h4>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Home
