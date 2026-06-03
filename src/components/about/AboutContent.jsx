import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BookOpen, Users, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teamMembers = [
  {
    id: 'dr-chen',
    name: 'Dr. Mei Chen',
    role: 'Lead Microbiologist',
    bio: 'PhD from MIT, specializing in extremophile archaea and deep-sea microbial ecosystems. 15 years of field research.',
    titleId: 'team-dr-chen-title',
    descId: 'team-dr-chen-desc',
    imgId: 'team-img-dr-chen-a1b2c3',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Emeka Okafor',
    role: 'Virologist',
    bio: 'Expert in viral evolution and pandemic preparedness. Former WHO consultant with research published in Nature and Science.',
    titleId: 'team-dr-okafor-title',
    descId: 'team-dr-okafor-desc',
    imgId: 'team-img-dr-okafor-d4e5f6',
  },
  {
    id: 'dr-santos',
    name: 'Dr. Lucia Santos',
    role: 'Mycologist',
    bio: 'Pioneering research on fungal communication networks and the role of mycelium in forest ecosystems.',
    titleId: 'team-dr-santos-title',
    descId: 'team-dr-santos-desc',
    imgId: 'team-img-dr-santos-g7h8i9',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Arjun Patel',
    role: 'Computational Biologist',
    bio: 'Develops AI models to predict microbial behavior and identify novel antibiotic targets from genomic data.',
    titleId: 'team-dr-patel-title',
    descId: 'team-dr-patel-desc',
    imgId: 'team-img-dr-patel-j1k2l3',
  },
];

const milestones = [
  { year: '2018', event: 'MicroCosmos founded by a team of researchers from MIT and Stanford' },
  { year: '2020', event: 'Launched the first open-access microbial image database with 50,000+ images' },
  { year: '2022', event: 'Published landmark study on deep-sea archaeal diversity in Nature Microbiology' },
  { year: '2024', event: 'Reached 1 million monthly visitors and partnered with 40+ universities worldwide' },
  { year: '2026', event: 'Launched AI-powered organism identification tool and expanded to 8 languages' },
];

const values = [
  { icon: Target, title: 'Scientific Rigor', desc: 'Every piece of content is reviewed by domain experts and grounded in peer-reviewed research.' },
  { icon: BookOpen, title: 'Open Knowledge', desc: 'We believe science belongs to everyone. All our educational content is freely accessible.' },
  { icon: Users, title: 'Global Community', desc: 'Connecting researchers, educators, and curious minds across 120+ countries.' },
  { icon: Award, title: 'Excellence', desc: 'Award-winning science communication that makes complex microbiology accessible and engaging.' },
];

const AboutContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="space-y-24">
      {/* Mission Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
              Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-6">
              Making the Invisible{' '}
              <span className="gradient-text">Visible</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              MicroCosmos was born from a simple belief: the microscopic world is the most fascinating and important realm of life on Earth, yet it remains largely unknown to the public.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              We bridge the gap between cutting-edge microbiology research and public understanding. Through stunning imagery, rigorous science, and accessible storytelling, we invite everyone to explore the cosmos within a single drop of water.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the bacteria that make your yogurt to the archaea thriving in volcanic springs, every microorganism has a story worth telling.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all duration-200"
            >
              Start Exploring <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-cyan-900/40">
            <img
              alt="Microscopy laboratory"
              data-strk-img-id="about-mission-img-a1b2c3"
              data-strk-img="[about-mission-desc] [about-mission-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p id="about-mission-title" className="text-slate-50 font-display font-semibold text-sm">Research Laboratory</p>
              <p id="about-mission-desc" className="sr-only">electron microscopy scientific research laboratory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            What We Stand For
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
            Our <span className="gradient-text">Values</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="p-6 rounded-2xl bg-[#0a1628] border border-cyan-900/40 text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-slate-50 mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
            Key <span className="gradient-text">Milestones</span>
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-12 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#050a0e] border-2 border-cyan-400 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <span className="text-cyan-400 font-mono font-bold text-sm">{milestone.year}</span>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">{milestone.event}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 block">
            The People Behind MicroCosmos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
            Meet the <span className="gradient-text">Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-[#0a1628] border border-cyan-900/40 overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={member.name}
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 id={member.titleId} className="font-display font-bold text-slate-50 mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-xs font-mono mb-3">{member.role}</p>
                <p id={member.descId} className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
