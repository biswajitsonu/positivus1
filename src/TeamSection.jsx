import React from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    imgSrc: 'https://i.postimg.cc/nrDTGBsL/Picture-2.png',
    linkedIn: '#',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    imgSrc: 'https://i.postimg.cc/90dZfpRy/Mask-group-5.png',
    linkedIn: '#',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    imgSrc: 'https://i.postimg.cc/BQhj46Mh/Mask-group-3.png',
    linkedIn: '#',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    imgSrc: 'https://i.postimg.cc/1RBtrXh9/Picture.png',
    linkedIn: '#',
    description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    imgSrc: 'https://i.postimg.cc/vB3sf11k/Picture-1.png',
    linkedIn: '#',
    description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    imgSrc: 'https://i.postimg.cc/SQ6ZT0DQ/Mask-group-4.png',
    linkedIn: '#',
    description: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
  },
];

function TeamSection() {
  return (
    <section className="teamsection-container">
      <div className="teamsection-header">
        <span className="teamsection-title">Team</span>
        <p className="teamsection-description">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      <div className="teamsection-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="teamsection-member-card">
            <div className="teamsection-member-header">
              <img
                alt={`${member.name} headshot with green butterfly shape overlay`}
                className="teamsection-member-image"
                height="80"
                src={member.imgSrc}
                width="80"
              />
              <a
                aria-label={`LinkedIn profile ${member.name}`}
                className="teamsection-member-linkedin"
                href={member.linkedIn}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <div className="teamsection-member-info">
                <p className="teamsection-member-name">{member.name}</p>
                <p className="teamsection-member-role">{member.role}</p>
              </div>
            </div>
            <hr className="teamsection-divider" />
            <p className="teamsection-member-description">{member.description}</p>
          </article>
        ))}
      </div>
      <div className="teamsection-footer">
        <button className="teamsection-see-all-button">
          See all team
        </button>
      </div>
    </section>
  );
}

export default TeamSection;
