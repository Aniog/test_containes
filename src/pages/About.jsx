import { useEffect, useRef } from 'react';
import { Microscope, BookOpen, Users, Globe, Award, Dna, FlaskConical } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope.' },
  { year: '1796', event: 'Edward Jenner develops the first vaccine, using cowpox to protect against smallpox.' },
  { year: '1857', event: 'Louis Pasteur proves that fermentation is caused by microorganisms.' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin from the mold Penicillium notatum.' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA.' },
  { year: '2003', event: 'The Human Genome Project completes the first full sequence of human DNA.' },
  { year: '2020', event: 'SARS-CoV-2 genome sequenced within weeks, enabling rapid vaccine development.' },
];

const team = [
  { name: 'Dr. Elena Vasquez', role: 'Lead Microbiologist', specialty: 'Bacterial genomics', imgId: 'team-elena-a1b2', titleId: 'team-elena-title', descId: 'team-elena-desc' },
  { name: 'Prof. James Okafor', role: 'Virologist', specialty: 'Emerging pathogens', imgId: 'team-james-c3d4', titleId: 'team-james-title', descId: 'team-james-desc' },
  { name: 'Dr. Mei Lin', role: 'Mycologist', specialty: 'Fungal ecology', imgId: 'team-mei-e5f6', titleId: 'team-mei-title', descId: 'team-mei-desc' },
  { name: 'Dr. Arjun Patel', role: 'Protozoologist', specialty: 'Aquatic microbiomes', imgId: 'team-arjun-g7h8', titleId: 'team-arjun-title', descId: 'team-arjun-desc' },
];

const values = [
  { icon: BookOpen, title: 'Scientific Accuracy', desc: 'Every piece of content is reviewed by domain experts and grounded in peer-reviewed research.', color: 'text-[#00d4c8]', bg: 'bg-[#00d4c8]/10', border: 'border-[#00d4c8]/20' },
  { icon: Users, title: 'Public Education', desc: 'We believe science belongs to everyone. Our mission is to make microbiology accessible and inspiring.', color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  { icon: Globe, title: 'Global Perspective', desc: 'Microorganisms know no borders. We explore microbial life from every ecosystem on the planet.', color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
  { icon: Award, title: 'Research Excellence', desc: 'Partnering with leading universities and research institutions to bring cutting-edge discoveries to light.', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050d1a]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 mb-6">
            <span className="text-sky-400 text-xs font-semibold uppercase tracking-widest">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-4 tracking-tight">
            About <span className="text-gradient-teal">MicroCosmos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            We are a team of scientists, educators, and visual storytellers dedicated to revealing the extraordinary world that exists beyond the limits of human sight.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-3 block">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6 leading-tight">
              Making the Invisible <span className="text-gradient-teal">Visible</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              MicroCosmos was founded on a simple but profound idea: the microscopic world is just as rich, complex, and beautiful as anything visible to the naked eye — and it deserves to be explored with the same wonder.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              From the bacteria that help digest your food to the viruses that have shaped human evolution, microorganisms are the hidden architects of life on Earth.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our platform combines rigorous science with stunning imagery to bring these organisms to life for students, researchers, and curious minds everywhere.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-xl bg-[#00d4c8]/10 border border-[#00d4c8]/20 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-[#00d4c8]" />
              </div>
              <div>
                <div className="text-slate-50 font-semibold text-sm">Est. 2018</div>
                <div className="text-slate-500 text-xs">Dedicated to microbial science</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
            <img
              data-strk-img-id="about-mission-img-a1b2c3"
              data-strk-img="[about-mission-desc] microscope laboratory science"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopy laboratory"
              className="w-full h-full object-cover"
            />
            <p id="about-mission-desc" className="sr-only">Scientists working in a microbiology laboratory with microscopes</p>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050d1a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#050d1a]/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-700">
              <Dna className="w-4 h-4 text-[#00d4c8]" />
              <span className="text-slate-50 text-sm font-medium">Research-driven content</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-3 block">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className={`bg-[#0f1f38] border ${v.border} rounded-2xl p-6`}>
                  <div className={`w-11 h-11 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${v.color}`} />
                  </div>
                  <h3 className="text-slate-50 font-semibold mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-3 block">History</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Milestones in Microbiology</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0f1f38] border border-[#00d4c8]/30 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-4 h-4 text-[#00d4c8]" />
                  </div>
                  <div className="bg-[#0f1f38] border border-slate-700/50 rounded-xl p-5 flex-1">
                    <span className="text-[#00d4c8] font-bold text-sm">{m.year}</span>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-3 block">The People</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Meet Our Team</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              World-class scientists and educators united by a passion for the microscopic world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#0f1f38] border border-slate-700/50 rounded-2xl overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 id={member.titleId} className="text-slate-50 font-bold text-base">{member.name}</h3>
                  <p className="text-[#00d4c8] text-xs font-medium mt-0.5">{member.role}</p>
                  <p id={member.descId} className="text-slate-500 text-xs mt-1">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
