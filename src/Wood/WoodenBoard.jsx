import React, { useEffect } from 'react';
import './WoodenBoard.css';
import aryan from '../assets/team/Aryan_Gupta.jpg';
import ansh from '../assets/team/Ansh.jpg';
import aryesh from '../assets/team/Aryesh_Srivastava.jpeg';
import tanya from '../assets/team/Tanya_Gupta.jpg';
import abiha from '../assets/team/Abiha_Naqvi.jpg';
import nikita from '../assets/team/Nikita_Bansal.jpg';
import ishika from '../assets/team/Ishika.jpg';
import avisha from '../assets/team/Avisha_Goyal.jpg';
import devang from '../assets/team/Devang.jpg';
import manan from '../assets/team/Manan.jpg';
import megha from '../assets/team/Megha.png';
import nitya from '../assets/team/Nitya_Kapur.jpg';
import komal from '../assets/team/Komal_Paliwal.jpg';
import tanish from '../assets/team/Tanish_Goyal.jpg';
import raghav from '../assets/team/Raghav_Goel.png';
import shaheera from '../assets/team/Shaheera_Fatima.jpg';

function WoodenBoard({ onClose }) {

  const teamMembers = [
    { url: aryan, name: 'Aryan Gupta', position: 'Chairperson' },
    { url: ansh, name: 'Ansh Mishra', position: 'Vice Chairperson' },
    { url: aryesh, name: 'Aryesh Srivastava', position: 'Organising Secretary' },
    { url: tanya, name: 'Tanya Gupta', position: 'Treasurer' },
    { url: abiha, name: 'Abiha Naqvi', position: 'WIE Head' },
    { url: nikita, name: 'Nikita Bansal', position: 'Strategic Head' },
    { url: ishika, name: 'Ishika Shukla', position: 'Head Of Operation' },
    { url: avisha, name: 'Avisha Goyal', position: 'CSE Head' },
    { url: devang, name: 'Devang', position: 'ECE Head' },
    { url: manan, name: 'Manan Jain', position: 'Digital Head' },
    { url: megha, name: 'Megha Chauhan', position: 'Cinematography Head' },
    { url: nitya, name: 'Nitya Kapur', position: 'Marketing Head' },
    { url: komal, name: 'Komal Paliwal', position: 'PR Head' },
    { url: tanish, name: 'Tanish Goyal', position: 'Management Head' },
    { url: tanish, name: 'Saara Tyagi', position: 'Creative Head' },
    { url: raghav, name: 'Raghav Goel', position: 'Webmaster' },
    { url: shaheera, name: 'Shaheera Fatima', position: '128 Head' },
  ];

  const maxCirclesPerRow = 3;
  const numCircles = teamMembers.length;
  const numCirclesPerRow = Math.min(maxCirclesPerRow, numCircles);
  const numRows = Math.ceil(numCircles / numCirclesPerRow);

  const circles = [];
  let index = 0;

  for (let row = 0; row < numRows; row++) {
    const rowCircles = [];
    for (let col = 0; col < numCirclesPerRow && index < numCircles; col++) {
      const teamMember = teamMembers[index];
      const photoUrl = teamMember.url || teamMember;
      rowCircles.push(
        <div key={index} className="circle-container">
          <div className="circle" style={{ backgroundImage: `url(${photoUrl})` }}></div>
          <div className="circle-content">
            <div className="name">{teamMember.name}</div>
            <div className="position">{teamMember.position}</div>
          </div>
        </div>
      );
      index++;
    }
    circles.push(<div key={row} className="circle-row">{rowCircles}</div>);
  }
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          entry.target.classList.add('circle-animate', 'footprint-animate');
        } else {
          entry.target.classList.remove('circle-animate', 'footprint-animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    document.querySelectorAll('.circle, .footprint').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

 
  return (
    <>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="wooden-board">
        <div className='footprint'></div>
        <div className="board-content">
          {circles}
        </div>
      </div>
    </>
  );
}

export default WoodenBoard;