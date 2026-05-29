import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Globe, BookOpen, FlaskConical } from 'lucide-react';

const teamMembers = [
  {
    id: 'team-01',
    name: 'Dr. Elena Vasquez',
    role: 'Microbiologist',
    bio: 'Specializes in extremophile bacteria and deep-sea microbial ecosystems.',
    imgId: 'team-img-01',
  },
  {
    id: 'team-02',
    name: 'Prof. James Okafor',
    role: 'Virologist',
    bio: 'Studies viral evolution and the role of bacteriophages in ecosystem balance.',
    imgId: 'team-img-02',
  },
  {
    id: 'team-03',
    name: 'Dr. Mei Lin',
    role: 'Mycologist',
    bio: 'Researches fungal networks and their role in forest communication systems.',
    imgId: 'team-img-03',
  },
];

const milestones = [
  { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope.' },
  { year: '1796', event: 'Edward Jenner develops the first vaccine, using cowpox to prevent smallpox.' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin from the mold Penicillium notatum.' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA.' },
  { year: '1983', event: 'Kary Mullis invents PCR, revolutionizing the study of microbial genetics.' },
  { year: '2003', event: 'The Human Genome Project completes sequencing, revealing our microbial heritage.' },
  { year: '2020', event: 'CRISPR-Cas9 wins the Nobel Prize, enabling precise microbial gene editing.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-20">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
            Our Mission
          </span>
          <h1 id="about-title" className="text-5xl font-bold text-white mt-2 mb-6">
            About MicroCosmos
          </h1>
          <p id="about-subtitle" className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We believe the invisible world deserves to be seen. MicroCosmos is a science
            communication platform dedicated to making microbiology accessible, beautiful,
            and awe-inspiring for everyone.
          </p>
        </div>

        {/* Mission image */}
        <div className="relative rounded-3xl overflow-hidden mb-20 aspect-video max-h-96">
          <img
            alt="Microscopy laboratory"
            className="w-full h-full object-cover"
            data-strk-img-id="about-hero-img01"
            data-strk-img="[about-subtitle] [about-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Microscope, title: 'Scientific Accuracy', desc: 'Every fact is verified by our team of researchers and peer-reviewed sources.' },
            { icon: Globe, title: 'Global Perspective', desc: 'Microbes know no borders. We explore microbial life from every corner of the planet.' },
            { icon: BookOpen, title: 'Education First', desc: 'Complex science made simple, engaging, and accessible to all ages.' },
            { icon: FlaskConical, title: 'Research Driven', desc: 'We stay at the cutting edge of microbiology, covering the latest discoveries.' },
          ].map((val) => (
            <div key={val.title} className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-teal-500/50 transition-all">
              <val.icon className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
              The People
            </span>
            <h2 id="team-heading" className="text-4xl font-bold text-white mt-2">
              Meet Our Scientists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all group text-center">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.id}-role] [${member.id}-name] [team-heading]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`${member.id}-name`} className="text-white font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p id={`${member.id}-role`} className="text-teal-400 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-12">
            <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
              History
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              Milestones in Microbiology
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-700 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 hover:border-teal-500/50 transition-all">
                      <div className="text-teal-400 font-bold text-lg mb-1">{m.year}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-teal-500 border-4 border-gray-950 z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
