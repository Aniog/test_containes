import { useEffect, useRef } from 'react';
import { Microscope, BookOpen, Users, Globe, Mail, Twitter, Github } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    name: 'Dr. Mei Chen',
    role: 'Founder & Chief Scientist',
    bio: 'PhD in Microbiology from MIT. 15 years studying extremophiles and deep-sea ecosystems.',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'team-img-chen-a1b2c3',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Emeka Okafor',
    role: 'Virology Lead',
    bio: 'Virologist and science communicator. Former WHO consultant on emerging infectious diseases.',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'team-img-okafor-d4e5f6',
  },
  {
    id: 'sara-lindqvist',
    name: 'Sara Lindqvist',
    role: 'Science Writer & Editor',
    bio: 'Award-winning science journalist. Translates complex microbiology into compelling stories.',
    titleId: 'team-sara-title',
    descId: 'team-sara-desc',
    imgId: 'team-img-sara-g7h8i9',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Arjun Patel',
    role: 'Imaging Specialist',
    bio: 'Expert in electron microscopy and fluorescence imaging. Creates the stunning visuals you see here.',
    titleId: 'team-patel-title',
    descId: 'team-patel-desc',
    imgId: 'team-img-patel-j1k2l3',
  },
];

const values = [
  {
    icon: Microscope,
    title: 'Scientific Accuracy',
    description: 'Every fact is peer-reviewed and sourced from published research. We never sacrifice accuracy for engagement.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: BookOpen,
    title: 'Accessible Science',
    description: 'Complex microbiology explained clearly — no PhD required. We believe science belongs to everyone.',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Microbes don\'t respect borders. Our team spans continents, bringing diverse scientific perspectives.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Built for curious minds everywhere — students, educators, researchers, and lifelong learners.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-16 bg-[#050d1a] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-cyan-400/5 blur-3xl rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 max-w-3xl">
            We Make the{' '}
            <span className="gradient-text">Invisible</span>{' '}
            Visible
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            MicroCosmos was born from a simple belief: the microscopic world is the most fascinating place in the universe, and everyone deserves to explore it.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#0a1628] border border-cyan-900/40 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                Science for the Curious
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Founded in 2022, MicroCosmos has grown from a personal blog into a global platform reaching over 2 million readers monthly. We partner with universities, research institutions, and independent scientists to bring you the most accurate and engaging microbiology content available.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our team of scientists, writers, and visual artists work together to transform dense research papers into stories that inspire wonder and understanding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2M+', label: 'Monthly Readers' },
                { value: '500+', label: 'Articles Published' },
                { value: '50+', label: 'Research Partners' },
                { value: '180+', label: 'Countries Reached' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#050d1a] border border-slate-700/50 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-mono-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className={`bg-[#0a1628] border ${v.border} rounded-2xl p-6 text-center`}>
                <div className={`w-12 h-12 ${v.bg} border ${v.border} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-slate-50 font-semibold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
            The People Behind the Science
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#0a1628] border border-cyan-900/40 rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:border-cyan-400/40 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={member.name}
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={member.titleId} className="text-slate-50 font-bold text-lg">{member.name}</h3>
                <span className="text-cyan-400 text-xs font-mono-label block mb-2">{member.role}</span>
                <p id={member.descId} className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#0a1628] to-[#0d2040] border border-cyan-400/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-400/8 blur-3xl rounded-full" />
          <div className="relative z-10">
            <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Let's Talk Science
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Have a research tip, collaboration idea, or just want to geek out about microbes? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@microcosmos.science"
                className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                hello@microcosmos.science
              </a>
              <div className="flex gap-3 justify-center">
                {[Twitter, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-14 h-14 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/60 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
