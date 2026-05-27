import { useEffect, useRef } from 'react';
import { Microscope, BookOpen, Globe, Award, Users, Lightbulb, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope.' },
  { year: '1796', event: 'Edward Jenner develops the first vaccine, leveraging knowledge of microorganisms.' },
  { year: '1857', event: 'Louis Pasteur proves germ theory, overturning spontaneous generation.' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin from Penicillium mold.' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA.' },
  { year: '1977', event: 'Carl Woese discovers Archaea, a third domain of life.' },
  { year: '2003', event: 'Human Genome Project completed, revealing our microbial connections.' },
  { year: '2022', event: 'MicroCosmos launches to make microbiology accessible to everyone.' },
];

const values = [
  { icon: Microscope, title: 'Scientific Accuracy', description: 'Every profile is grounded in peer-reviewed research and reviewed by microbiologists.' },
  { icon: BookOpen, title: 'Education First', description: 'We believe science should be accessible to everyone, not just specialists.' },
  { icon: Globe, title: 'Global Perspective', description: 'Microorganisms connect all life on Earth — our content reflects that universality.' },
  { icon: Heart, title: 'Wonder & Beauty', description: 'We celebrate the aesthetic dimension of the microscopic world through stunning imagery.' },
];

const team = [
  { name: 'Dr. Elena Vasquez', role: 'Chief Scientist', specialty: 'Marine Microbiology', imgId: 'team-elena-mc050' },
  { name: 'Marcus Chen', role: 'Lead Photographer', specialty: 'Electron Microscopy', imgId: 'team-marcus-mc051' },
  { name: 'Dr. Priya Nair', role: 'Science Writer', specialty: 'Microbial Ecology', imgId: 'team-priya-mc052' },
  { name: 'James Okafor', role: 'Visual Designer', specialty: 'Scientific Illustration', imgId: 'team-james-mc053' },
];

const TeamCard = ({ member }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    }
  }, []);

  return (
    <div ref={ref} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-800 mx-auto mb-4 border-2 border-slate-700">
        <img
          alt={member.name}
          className="w-full h-full object-cover"
          data-strk-img-id={member.imgId}
          data-strk-img={`[${member.imgId}-role] scientist portrait`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <h3 className="font-grotesk font-semibold text-white mb-1">{member.name}</h3>
      <p id={`${member.imgId}-role`} className="text-cyan-400 text-sm mb-1">{member.role}</p>
      <p className="text-slate-500 text-xs">{member.specialty}</p>
    </div>
  );
};

const AboutContent = () => {
  const missionRef = useRef(null);

  useEffect(() => {
    if (missionRef.current) {
      ImageHelper.loadImages(strkImgConfig, missionRef.current);
    }
  }, []);

  return (
    <div>
      {/* Mission Section */}
      <section ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Our Mission</span>
          <h2 id="mission-title" className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3 mb-6 leading-tight">
            Making the Invisible World Visible
          </h2>
          <p id="mission-desc" className="text-slate-400 leading-relaxed mb-5">
            MicroCosmos was born from a simple belief: the microscopic world is one of the most fascinating and important realms of nature, yet it remains largely unknown to the general public.
          </p>
          <p className="text-slate-400 leading-relaxed mb-5">
            We combine rigorous science with stunning visual storytelling to bring microorganisms to life. Whether you're a student, educator, scientist, or simply curious — MicroCosmos is your window into the invisible universe.
          </p>
          <p className="text-slate-400 leading-relaxed">
            From the bacteria in your gut to the plankton producing the oxygen you breathe, microorganisms are the foundation of all life. Understanding them is understanding life itself.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-3xl blur-xl" />
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3]">
            <img
              alt="Mission"
              className="w-full h-full object-cover"
              data-strk-img-id="about-mission-mc060"
              data-strk-img="[mission-desc] [mission-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">What We Stand For</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-grotesk font-semibold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">History</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3">Milestones in Microbiology</h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-px" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan-500 border-2 border-microcosmos-bg md:-translate-x-1.5 mt-1.5 z-10" />
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/20 transition-all">
                    <span className="text-cyan-400 font-grotesk font-bold text-lg">{m.year}</span>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
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
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">The People</span>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3">Meet the Team</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Scientists, photographers, and storytellers united by a passion for the microscopic world.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
