import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import placeholder from '../img/placeholder';

{/*
    experience/ previous jobs
    education
    skills
    certifications */}

function Personal() {
  return <>
    <Navbar />

    <div className="container-fluid p-0">

      <div className="row m-0">

        <div className="col-lg-3 border d-flex justify-content-center p-0">

          <div className="sidebar row d-flex justify-content-center p-5">

            <div className="col-12 col-sm-6 col-lg-12 d-flex justify-content-center">
              <img src={placeholder} className="rounded-circle" alt="" width="200" height="200" />
            </div>

            <div className="col-12 col-sm-6 col-lg-12 d-flex justify-content-center p-0">
              <ul className="mt-4">
                <li><a href='#About'>About</a></li>
                <li><a href='#Interests'>Interests</a></li>
                <li><a href='#section3'> Go to section 3 </a></li>
                <li><a href='#section4'> Go to section 4 </a></li>
                <li><a href='#section5'> Go to section 5 </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-9 border p-0 m-0">
          <ScrollableAnchor id={'About'} >
            <div className="min-height mb-1 d-flex align-items-center">
              <div className="p-5">
                <h2>Maximilian A. Lewis</h2>
                <p>3753 W. Wayne Ln. 480-625-5534 Max.a.lewis98@gmail.com</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'Interests'}>
            <div className="min-height mb-1 d-flex align-items-center">
              <div className="p-5">
                <div className="p-4">
                  <h2>Born and raised</h2>
                  <p>Originally born in Indiana, my family moved to Arizona when I was a toddler.</p>
                </div>
                <div className="p-4">
                  <h2>Personal Interests</h2>
                  <p>I enjoy skeet shooting and skiing, video games suffice when the weather isnt agreable</p>
                </div>
              </div>
            </div>
          </ScrollableAnchor>
          {/* <ScrollableAnchor id={'section3'}>
            <div className="min-height">
              <div> How are you world? </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section4'}>
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

    <Footer />
  </>
}

export default Personal