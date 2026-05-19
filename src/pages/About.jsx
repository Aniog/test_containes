import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Camera, Globe, Users } from 'lucide-react';

const teamMembers = [
  {
    id: 'tm1',
    name: 'Dr. Elena Vasquez',
    role: 'Lead Microbiologist',
    bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria in deep-sea hydrothermal vents.',
  },
  {
    id: 'tm2',
    name: 'James Okafor',
    role: 'Electron Microscopist',
    bio: 'Specialist in scanning and transmission electron microscopy. Creator of award-winning microscopy imagery.',
  },
  {
    id: 'tm3',
    name: 'Dr. Yuki Tanaka',
    role: 'Science Communicator',
    bio: 'Former researcher turned science writer. Passionate about making microbiology accessible to everyone.',
  },
  {
    id: 'tm4',
    name: 'Sofia Reinholt',
    role: 'Visual Designer',
    bio: 'Combines scientific accuracy with artistic vision to create stunning visualizations of the micro world.',
  },
];

const milestones = [
  { year: '2019', event: 'MicroCosmos founded by a team of microbiologists and science communicators.' },
  { year: '2020', event: 'Launched our first online gallery with 200+ microscopy images.' },
  { year: '2021', event: 'Partnered with 12 universities to expand our scientific content.' },
  { year: '2022', event: 'Reached 1 million visitors and launched the Organisms database.' },
  { year: '2023', event: 'Introduced interactive 3D models of microorganisms.' },
  { year: '2024', event: 'Launched educational programs for schools worldwide.' },
  { year: '2026', event: 'Celebrating 7 years of exploring the invisible world.' },
];

const values = [
  { icon: BookOpen, color: '#00d4ff', title: 'Scientific Accuracy', desc: 'Every piece of content is reviewed by expert microbiologists and researchers.' },
  { icon: Camera, color: '#00ff88', title: 'Visual Excellence', desc: 'We partner with the world\'s best microscopists to bring you stunning imagery.' },
  { icon: Globe, color: '#a855f7', title: 'Open Access', desc: 'We believe science belongs to everyone. Our content is free and accessible.' },
  { icon: Users, color: '#f59e0b', title: 'Community', desc: 'Building a global community of curious minds fascinated by the micro world.' },
];

const About = () => {
  const headerRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) ImageHelper.loadImages(strkImgConfig, headerRef.current);
    if (teamRef.current) ImageHelper.loadImages(strkImgConfig, teamRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f8ff] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-15"
          data-strk-bg-id="about-header-bg-k7l8m9"
          data-strk-bg="[about-header-title] science laboratory microscopy team"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/60 to-[#050d1a] z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00d4ff] text-sm font-medium tracking-wide">Our Story</span>
          </div>
          <h1 id="about-header-title" className="font-grotesk font-bold text-4xl md:text-6xl text-[#f0f8ff] mb-6">
            About MicroCosmos
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            We are a team of scientists, photographers, and educators united by one mission: 
            to reveal the breathtaking beauty and profound importance of the microscopic world 
            to everyone on Earth.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="px-4 md:px-8 py-16 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-[#f0f8ff] mb-5">
                Our Mission
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Microorganisms make up 60% of all living matter on Earth, yet they remain 
                invisible to the naked eye and largely unknown to the public. We believe 
                that understanding the microbial world is essential for addressing the 
                greatest challenges of our time — from climate change to antibiotic resistance.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                MicroCosmos bridges the gap between cutting-edge science and public understanding, 
                using stunning imagery and clear storytelling to make microbiology accessible, 
                engaging, and inspiring.
              </p>
              <Link
                to="/science"
                className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-3 transition-all"
              >
                Explore the Science <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl p-5 hover:border-[#00d4ff]/30 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${v.color}15`, border: `1px solid ${v.color}30` }}
                  >
                    <v.icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <h4 className="font-grotesk font-semibold text-[#f0f8ff] text-sm mb-2">{v.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-[#f0f8ff] mb-3">
              Meet the Team
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Scientists, artists, and storytellers passionate about the invisible world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={`team-img-${member.id}`}
                    data-strk-img={`[team-role-${member.id}] [team-name-${member.id}] scientist portrait professional`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 id={`team-name-${member.id}`} className="font-grotesk font-bold text-[#f0f8ff] text-base mb-1">
                    {member.name}
                  </h3>
                  <div id={`team-role-${member.id}`} className="text-[#00d4ff] text-xs font-medium tracking-wide mb-3">
                    {member.role}
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 md:px-8 py-20 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-[#f0f8ff] mb-3">
              Our Journey
            </h2>
            <p className="text-slate-400 text-lg">Seven years of exploring the invisible world.</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#00d4ff]/20 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0f1f3d] border-2 border-[#00d4ff]/40 flex items-center justify-center z-10 relative">
                      <span className="text-[#00d4ff] text-xs font-bold">{m.year}</span>
                    </div>
                  </div>
                  <div className="bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-xl p-4 flex-1 hover:border-[#00d4ff]/30 transition-all">
                    <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#0f1f3d] via-[#0a1628] to-[#0f1f3d] border border-[#00d4ff]/20 rounded-3xl p-12">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-[#f0f8ff] mb-4">
              Start Exploring
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Dive into our gallery, learn about fascinating organisms, or explore the science 
              behind the invisible world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00b8d9] transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              >
                View Gallery <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/organisms"
                className="inline-flex items-center gap-2 border border-[#00d4ff]/50 text-[#00d4ff] font-semibold px-8 py-4 rounded-full hover:bg-[#00d4ff]/10 transition-all"
              >
                Meet the Organisms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
