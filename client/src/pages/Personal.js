import React, { useContext } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import { ThemeContext } from '../context/ThemeContext';

import Navbar from "../components/Navbar";
import placeholder from '../img/placeholder';
import tempImage from '../img/tempImage.jpg';

// should be filled with the fun personal info, resume is professional
function Personal() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={"container-fluid p-0" + theme.bkgrndClr2}>
      
      <Navbar />

      <div className="row m-0">

        {/* the sidebar */}
        <div className={"col-lg-3 d-flex justify-content-center p-0" + theme.bg1}>

          <div className="row sidebar d-flex justify-content-center p-5">

            <div className="col-12 col-sm-6 col-lg-12 d-flex justify-content-center p-0">
              <img src={tempImage} className="rounded-circle" alt="" width="200" height="200" />
            </div>
            <p><small>Temporary</small></p>

            <div className="col-12 col-sm-6 col-lg-12 d-flex justify-content-center p-0">
              <ul className="mt-4">
                <li><a href='#Intro'>Intro</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Interests'>Interests</a></li>
                {/* <li><a href='#section4'> Go to section 4 </a></li>
                <li><a href='#section5'> Go to section 5 </a></li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className={"col-lg-9 p-0 m-0" + theme.bg3}>

          <ScrollableAnchor id={'Intro'} >
            <div className="min-height mb-1 d-flex align-items-center">
              <div className="p-5">
                <h2>Maximilian A. Lewis</h2>
                <p>3753 W. Wayne Ln. 480-625-5534 Max.a.lewis98@gmail.com</p>
                <p>
                  Outgoing outdoors enthusiast and tech nerd looking to grow and expand horizons.
                </p>
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'About'}>
            <div className={"min-height mb-1 d-flex align-items-center" + theme.bg4}>
              <div className="p-4">
                <h2>Born and raised</h2>
                <p>Originally born in Indiana, my family moved to Arizona when I was a toddler.</p>
                <p>Raised alongside 2 brothers and 2 stepbrothers, (that explains the hobbies)</p>
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'Interests'}>
            <div className="min-height mb-1 d-flex align-items-center">
              <div className="p-4">
                <h2>Personal Interests</h2>
                <p>I enjoy </p>
                <ul className="">
                  <li>Skeet shooting</li>
                  <li>Hunting</li>
                  <li>Fishing</li>
                  <li>Board games and Video games</li>
                  <li>and Coding!</li>
                </ul>
              </div>
            </div>
          </ScrollableAnchor>
          {/* <ScrollableAnchor id={'section4'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section5'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor> */}
        </div>
      </div>
    </div>
  )
}

export default Personal