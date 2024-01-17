import React from 'react';
import './Events.css'; 

const MiniBooks = () => {
  return (
    <div className="events">
      <div className="row">
        <div className="book">
          <div className="cover"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="last-page">
            {/* <img src="logo.jpg" alt=""> */}
            <h2>CodeBreak</h2>
            <p>The Coding Event</p>
          </div>
          <div className="back-cover"></div>
        </div>
        <div class="book">
                <div class="cover"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="last-page">
                    <h2>HackStreet 2.0</h2>
                    <p>The Hackathon Event</p>
                </div>
                <div class="back-cover"></div>
            </div>
        <div class="book">
                <div class="cover"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="last-page">
                    <h2>Cluedo Quest</h2>
                    <p>Gear up for the mysteries game</p>
                </div>
                <div class="back-cover"></div>
        </div>
      </div>

      <div className="row">
            <div class="book">
                <div class="cover"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="last-page">
                    <h2>Sandbox</h2>
                    <p>A Green-Tech StartUp Pitch Competition</p>
                </div>
                <div class="back-cover"></div>
            </div>
            <div class="book">
                <div class="cover"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="page"></div>
                <div class="last-page">
                    <h2>e-ureak!</h2>
                    <p>The ECE Event</p>
                </div>
                <div class="back-cover"></div>
            </div>
      </div>
    </div>
  );
};

export default MiniBooks;
