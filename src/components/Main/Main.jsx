import React from 'react';

import './Main.scss';

function Main() {
  return (
    <main className="main">

      <section
        id="about_us"
        className="main_about_us"
      >
        <div className="main_about_us__dolphin" />
        <div className="main_about_us__container">
          <h3 className="main_about_us_title">
            About Us
          </h3>
          <h2 className="main_about_us_label">
            Tagline
          </h2>
          <p className="main_about_us_text">
            Members of a dolphin pod create strong bonds and
            work together to protect one another and thrive.
            Join now to build your pod! As dolphins,
            we have our sonars on at all times and
            form pods of mental health allies to support you.
          </p>
        </div>
        <div className="main_about_us__peoples" />
      </section>

      <div className="main_our_vision">
        <div className="main_our_vision_box main_our_vision_box__lilac">
          <h3 className="main_our_vision_title">Our Vision</h3>
          <p className="main_our_vision_text">
            Catalyze the world&apos;s transition to precise,
            effective and preventative mental healthcare.
          </p>
        </div>
        <div className="main_our_vision_box main_our_vision_box__blue">
          <h3 className="main_our_vision_title">Our Mission</h3>
          <p className="main_our_vision_text">
            Building digital health technology to proactively measure,
            identify and support youth mental health.
          </p>
        </div>
      </div>

    </main>
  );
}

export default Main;
