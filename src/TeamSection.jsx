import React from 'react';

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
<section className="mt-12 bg-white text-black p-8">
      <div className="flex items-center gap-6 mb-12 max-w-[600px]">
        <span className="bg-[#B9FF66] rounded-md px-3 py-1 text-2xl font-extrabold leading-none">
          Team
        </span>
        <p className="text-base font-normal leading-5">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mx-auto">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-3xl border border-black/30 shadow-[6px_6px_0_0_#1A1C23] p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4 relative">
              <img
                alt={`${member.name} headshot with green butterfly shape overlay`}
                className="rounded-3xl shadow-[6px_6px_0_0_#1A1C23]"
                height="80"
                src={member.imgSrc}
                width="80"
              />
              <a
                aria-label={`LinkedIn profile ${member.name}`}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[#B9FF66] text-sm font-bold absolute top-0 right-0"
                href={member.linkedIn}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <div className="flex flex-col justify-start ml-1" style={{ marginTop: '56px' }}>
                <p className="font-semibold text-base leading-5">{member.name}</p>
                <p className="text-sm leading-5">{member.role}</p>
              </div>
            </div>
            <hr className="border-black/30 mb-4" />
            <p className="text-sm leading-5">{member.description}</p>
          </article>
        ))}
      </div>
      <div className="flex justify-end mt-12">
        <button className="bg-[#1A1C23] text-white rounded-lg px-8 py-4 text-base font-normal leading-6">
          See all team
        </button>
      </div>
    </section>
  );
}

export default TeamSection;
