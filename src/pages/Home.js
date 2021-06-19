import React from 'react';

import style from '../styles/Home.module.css';

function Home() {
  return (
    <div className={style.home}>
      <div className={style.textContainer}>
        <div className={style.subHeadContainer}>
          <div className={style.line}></div>
          <h4>Hey</h4>
        </div>
        <div className={style.headerContainer}>
          <h2>I am Juliab Braun.</h2>
          <h2>I am a Web Developer</h2>
        </div>
      </div>
      <div className={style.btnContainer}></div>
    </div>
  );
}

export default Home;
