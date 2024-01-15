import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="container">
      <div className="line">
        <div className="box box1">
          <div className="innerbox">
            <p className="p1">
              Date :-<br />
              XX-MM-YYYY <br />
              Time :-<br />
              00:00 pm
            </p>
            <p className="p2">
              "I'm gonna make him an offer he can't refuse." - Don Vito Corleone
            </p>
          </div>
        </div>

        <div className="box box2">
          <div className="innerbox">
            <p className="p1">
              Date :- <br />
              XX-MM-YYYY <br />
              Time :-<br />
              00:00 pm
            </p>
            <p className="p2">
              "Get busy living or get busy dying. The Choice is yours."<br /> -
              Andy Dufresne
            </p>
          </div>
        </div>

        <div className="box box1">
          <div className="innerbox">
            <p className="p1">
              Date :-<br />
              XX-MM-YYYY <br />
              Time :-<br />
              00:00 pm
            </p>
            <p className="p2">
              "The first rule of Fight Club is: You do not talk about Fight
              Club."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
