import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, BookOpen, Users, Globe, ArrowRight, Award, Lightbulb, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teamMembers = [
  {
    id: 'dr-chen',
    name: 'Dr. Mei Chen',
    role: 'Microbiologist & Founder',
    bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria in deep-sea hydrothermal vents.',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'team-chen-img-o4p5q6',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Emeka Okafor',
    role: 'Virologist',
    bio: 'Specialist in bacteriophage biology and phage therapy. Former researcher at the Pasteur Institute.',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'team-okafor-img-r7s8t9',
  },
  {
    id: 'dr-santos',
    name: 'Dr. Lucia Santos',
    role: 'Mycologist',
    bio: 'Expert in fungal ecology and the mycorrhizal networks that connect forest ecosystems worldwide.',
    titleId: 'team-santos-title',
    descId: 'team-santos-desc',
    imgId: 'team-santos-img-u1v2w3',
  },
];

const values = [
  {
    icon: BookOpen,
    title: 'Science Education',
    desc: 'Making complex microbiology accessible to everyone, from students to curious adults.',
    color: 'text-[#00e5ff]',
    bg: 'bg-[#00e5ff]/10',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity-Driven',
    desc: 'We believe wonder is the foundation of discovery. Every microbe has a story worth telling.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    desc: 'Microorganisms connect all life on Earth. Understanding them is understanding ourselves.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    icon: Heart,
    title: 'Open Access',
    desc: 'All our content is freely available. Science belongs to everyone.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
  },
];

const milestones = [
  { year: '2019', event: 'MicroCosmos founded by Dr. Mei Chen after a decade of field research.' },
  { year: '2020', event: 'Launched our first interactive microscopy database with 500+ species.' },
  { year: '2022', event: 'Partnered with 12 universities to expand our image library.' },
  { year: '2024', event: 'Reached 2 million monthly readers across 80 countries.' },
  { year: '2026', event: 'Launched the MicroCosmos Gallery with AI-enhanced microscopy images.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050d1a] pt-20">
      {/* Hero */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#050d1a]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-emerald-400/4 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-[#00e5ff]/4 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">
                Our Mission
              </span>
              <h1 id="about-title" className="text-4xl md:text-5xl font-black text-white mt-3 mb-6 leading-tight">
                Illuminating the
                <br />
                <span className="text-[#00e5ff]">Invisible World</span>
              </h1>
              <p id="about-subtitle" className="text-slate-300 text-lg leading-relaxed mb-6">
                MicroCosmos was born from a simple belief: the microscopic world is the most fascinating place in the universe, and everyone deserves to see it.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We combine rigorous science with stunning visual storytelling to bring the hidden universe of microorganisms to life — for students, educators, and the simply curious.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Users, value: '2M+', label: 'Monthly Readers' },
                  { icon: Globe, value: '80+', label: 'Countries' },
                  { icon: Award, value: '500+', label: 'Species Documented' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-black text-[#00e5ff]">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* About image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#00e5ff]/10 shadow-2xl shadow-black/50">
                <img
                  alt="About MicroCosmos"
                  data-strk-img-id="about-hero-img-x4y5z6"
                  data-strk-img="[about-subtitle] [about-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00e5ff]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="py-20 bg-[#0a1628] border-y border-[#00e5ff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-hover bg-[#050d1a] border border-[#00e5ff]/10 rounded-2xl p-6">
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">The Scientists</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Meet Our Team</h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              World-class researchers dedicated to making microbiology accessible and inspiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card-hover bg-[#0a1628] border border-[#00e5ff]/10 rounded-2xl overflow-hidden text-center">
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-xs text-[#00e5ff] font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                  <p id={member.descId} className="text-sm text-slate-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0a1628] border-t border-[#00e5ff]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#00e5ff]/10" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#050d1a] border-2 border-[#00e5ff]/30 flex items-center justify-center z-10 relative">
                      <span className="text-xs font-bold text-[#00e5ff]">{m.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="bg-[#050d1a] border border-[#00e5ff]/10 rounded-xl p-4 flex-1">
                    <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">{m.year}</span>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mx-auto mb-6">
            <Microscope className="w-8 h-8 text-[#00e5ff]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Dive into our database of microorganisms or browse the gallery of microscopy images.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-[#00e5ff] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all text-base"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 border border-[#00e5ff]/40 text-[#00e5ff] font-semibold px-8 py-4 rounded-full hover:bg-[#00e5ff]/10 transition-all text-base"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
