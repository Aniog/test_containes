import { useEffect, useRef } from 'react';
import { Microscope, BookOpen, Users, Award, Heart, Lightbulb, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    name: 'Dr. Elena Vasquez',
    role: 'Founder & Chief Scientist',
    bio: 'Microbiologist with 15 years studying extremophiles in deep-sea hydrothermal vents.',
    imgId: 'team-img-001',
  },
  {
    name: 'Prof. James Okafor',
    role: 'Head of Research',
    bio: 'Specialist in microbial ecology and the role of soil microbiomes in climate regulation.',
    imgId: 'team-img-002',
  },
  {
    name: 'Dr. Yuki Tanaka',
    role: 'Imaging Specialist',
    bio: 'Pioneer in cryo-electron microscopy techniques for visualizing viral structures.',
    imgId: 'team-img-003',
  },
  {
    name: 'Dr. Amara Singh',
    role: 'Science Communicator',
    bio: 'Dedicated to making complex microbiology accessible and exciting for everyone.',
    imgId: 'team-img-004',
  },
];

const values = [
  {
    icon: BookOpen,
    title: 'Scientific Accuracy',
    desc: 'Every fact is peer-reviewed and sourced from current scientific literature.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
  },
  {
    icon: Heart,
    title: 'Passion for Discovery',
    desc: 'We believe curiosity is the most powerful force in science.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/30',
  },
  {
    icon: Users,
    title: 'Open Access',
    desc: 'Science belongs to everyone. All our content is freely available.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
  {
    icon: Lightbulb,
    title: 'Education First',
    desc: 'We translate complex research into clear, engaging stories.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
  },
];

const milestones = [
  { year: '2019', event: 'MicroCosmos founded by Dr. Elena Vasquez' },
  { year: '2020', event: 'Launched first organism database with 50 species' },
  { year: '2021', event: 'Partnered with 3 major research universities' },
  { year: '2022', event: 'Reached 1 million monthly readers worldwide' },
  { year: '2023', event: 'Launched interactive microscopy gallery' },
  { year: '2024', event: 'Expanded to cover 500+ microorganism species' },
  { year: '2026', event: 'Ongoing — exploring the next frontier of microbiology' },
];

const About = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    if (teamRef.current) ImageHelper.loadImages(strkImgConfig, teamRef.current);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Illuminating the<br />
              <span className="text-emerald-400">Invisible World</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              MicroCosmos was born from a simple belief: the most extraordinary life on Earth is the life 
              we cannot see. We exist to bridge the gap between cutting-edge microbiology research and 
              the curious minds of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Globe, value: '500+', label: 'Species Documented', color: 'text-cyan-400' },
              { icon: Users, value: '2M+', label: 'Monthly Readers', color: 'text-emerald-400' },
              { icon: Award, value: '12', label: 'Research Partners', color: 'text-violet-400' },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className={`text-4xl font-extrabold ${color}`}>{value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These principles guide everything we create and every story we tell.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className={`w-11 h-11 rounded-xl border ${bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 md:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">The People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Scientists, educators, and communicators united by a love for the microscopic world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl overflow-hidden transition-colors group"
              >
                <div className="aspect-square relative overflow-hidden bg-slate-800">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[team-name-${i}] [team-role-${i}] scientist portrait professional`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`team-name-${i}`} className="text-white font-semibold">{member.name}</h3>
                  <p id={`team-role-${i}`} className="text-violet-400 text-xs font-medium mt-0.5 mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950 z-10 mt-1.5" />
                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                      <span className="text-cyan-400 font-bold text-sm">{year}</span>
                      <p className="text-slate-300 text-sm mt-1">{event}</p>
                    </div>
                  </div>
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Science section */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">The Science</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Microbiology Matters
              </h2>
              <div className="space-y-4">
                {[
                  'Microbes produce 50% of the oxygen we breathe through photosynthesis.',
                  'The human microbiome contains 38 trillion microbial cells — more than human cells.',
                  'Soil microbes are essential for nutrient cycling and plant growth worldwide.',
                  'Extremophile bacteria have inspired new materials, medicines, and technologies.',
                  'Microbial communities in the ocean drive global carbon and nitrogen cycles.',
                ].map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <p className="text-slate-300 leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Antibiotic Resistance', value: 'Critical', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
                { label: 'Climate Impact', value: 'Massive', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
                { label: 'Medical Breakthroughs', value: 'Ongoing', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
                { label: 'Biodiversity', value: 'Vast', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
                { label: 'Food Production', value: 'Essential', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/30' },
                { label: 'Space Exploration', value: 'Promising', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/30' },
              ].map(({ label, value, color, bg }) => (
                <div key={label} className={`border rounded-xl p-4 ${bg}`}>
                  <div className={`text-lg font-bold ${color}`}>{value}</div>
                  <div className="text-slate-400 text-xs mt-1">{label}</div>
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
