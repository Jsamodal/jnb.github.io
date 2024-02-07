import React from 'react'
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Header () {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      loop: true,
      backDelay: 2000,
      backSpeed:50,
      strings: ["May 18, 2024", 
                "Vancouver,BC",
                "See you there!"],
    });
  }, []);

  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp'>
              Bianca & JR
            </h1>
          </div >
        </div>
                <div className='col-md-12 text-center caption'>
                  <h5 className='animate-box' data-animate-effect='fadeInUp'  ><span ref={textRef}></span></h5>
                </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
