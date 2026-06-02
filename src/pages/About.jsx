import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    name: 'Dr. Sarah Chen',
    role: 'Lead Microbiologist',
    bio: 'PhD from MIT, 15 years studying extremophile bacteria in deep-sea environments.',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'team-chen-img-a1b2c3',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. James Okafor',
    role: 'Virologist',
    bio: 'Specialist in RNA viruses and host-pathogen interactions at the cellular level.',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'team-okafor-img-d4e5f6',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Priya Patel',
    role: 'Cell Biologist',
    bio: 'Expert in fluorescence microscopy and live-cell imaging techniques.',
    titleId: 'team-patel-title',
    descId: 'team-patel-desc',
    imgId: 'team-patel-img-g7h8i9',
  },
];

const milestones = [
  { year: '2018', event: 'MicroCosmos founded by a team of research scientists' },
  { year: '2019', event: 'First electron microscopy archive published online' },
  { year: '2021', event: 'Reached 1 million visitors and 10,000 documented species' },
  { year: '2023', event: 'Launched interactive 3D molecular visualization tools' },
  { year: '2025', event: 'Partnership with 50+ universities and research institutions' },
  { year: '2026', event: 'Expanded to cover environmental microbiome research' },
];

const stats = [
  { icon: BookOpen, value: '50+', label: 'Research Articles' },
  { icon: Users, value: '2M+', label: 'Monthly Visitors' },
  { icon: Award, value: '12', label: 'Science Awards' },
  { icon: Globe, value: '80+', label: 'Countries Reached' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      {/* Page Header */}
      <div className="bg-cosmos-navy border-b border-cyan-900/30 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
            Our Story
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            About MicroCosmos
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            We are scientists, educators, and storytellers united by a passion for the invisible world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 bg-cosmos-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
                Our Mission
              </div>
              <h2 id="mission-title" className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-6">
                Making the Invisible Visible
              </h2>
              <p id="mission-desc" className="text-slate-400 text-lg leading-relaxed mb-6">
                MicroCosmos was born from a simple belief: the microscopic world is just as breathtaking as the cosmos above us. We exist to bridge the gap between cutting-edge science and public curiosity.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Through stunning imagery, rigorous research, and accessible storytelling, we invite everyone — from students to scientists — to explore the hidden universe that surrounds us.
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-cosmos-cyan text-cosmos-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all duration-200"
              >
                Start Exploring <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
                <img
                  data-strk-img-id="about-mission-img-x1y2z3"
                  data-strk-img="[mission-desc] [mission-title] microscope laboratory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Scientists at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-cosmos-navy border border-cyan-400/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                <div className="font-heading font-bold text-3xl text-cosmos-cyan">10K+</div>
                <div className="text-slate-400 text-sm mt-1">Species Documented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cosmos-navy border-y border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-cosmos-cyan" />
                </div>
                <div className="font-heading font-bold text-3xl text-slate-50 mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-cosmos-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
              The Team
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-4">
              Meet the Scientists
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Our team of researchers and educators are dedicated to sharing the wonders of the microscopic world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-cosmos-navy border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="font-heading font-semibold text-slate-50 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-cosmos-cyan text-sm font-medium mb-3">{member.role}</p>
                  <p id={member.descId} className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cosmos-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
              Our Journey
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmos-cyan/40 via-cosmos-cyan/20 to-transparent" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cosmos-cyan border-2 border-cosmos-black mt-1.5" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-cosmos-dark border border-cyan-900/30 rounded-xl p-5 hover:border-cyan-400/30 transition-all duration-300">
                      <span className="text-cosmos-cyan text-sm font-bold font-heading">{m.year}</span>
                      <p className="text-slate-300 text-sm mt-1 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
