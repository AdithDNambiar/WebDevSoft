import React from 'react';
import './TeamSection.css';

const teamMembers = [
  { name: 'Name 1', position: 'Position 1', image: '/team1.jpg' },
  { name: 'Name 2', position: 'Position 2', image: '/team2.jpg' },
  { name: 'Name 3', position: 'Position 3', image: '/team3.jpg' },
  { name: 'Name 4', position: 'Position 4', image: '/team4.jpg' },
  // duplicate entries for smooth infinite scroll
  { name: 'Name 1', position: 'Position 1', image: '/team1.jpg' },
  { name: 'Name 2', position: 'Position 2', image: '/team2.jpg' },
];

const TeamSection = () => {
  return (
    <section id="team" className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-carousel">
        <div className="team-track">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-img" loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
