import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, BookOpen, Globe, Users, ArrowRight, Mail } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    name: 'Dr. Mei Chen',
    role: 'Microbiologist',
    bio: 'Specializes in extremophile research and tardigrade biology at the Institute for Microscopic Life.',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'about-team-chen-img-a1b2c3',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Emeka Okafor',
    role: 'Marine Microbiologist',
    bio: 'Studies deep-sea microbial communities and their role in global carbon and nitrogen cycles.',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'about-team-okafor-img-d4e5f6',
  },
  {
    id: 'dr-santos',
    name: 'Dr. Lucia Santos',
    role: 'Virologist',
    bio: 'Researches bacteriophage diversity and the role of viruses in shaping microbial ecosystems.',
    titleId: 'team-santos-title',
    descId: 'team-santos-desc',
    imgId: 'about-team-santos-img-g7h8i9',
  },
];

const values = [
  {
    icon: Microscope,
    title: 'Scientific Accuracy',
    desc: 'Every fact, figure, and image is reviewed by domain experts and sourced from peer-reviewed research.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: BookOpen,
    title: 'Open Education',
    desc: 'We believe science belongs to everyone. Our content is free, accessible, and written for curious minds of all ages.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    desc: 'Microbes don\'t respect borders. We cover research from labs and field stations across every continent.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Users,
    title: 'Community Driven',
    desc: 'Built with input from students, educators, and researchers who share our passion for the microscopic world.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] min-h-screen text-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#1a3a5c]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Our Story</span>
          <h1 id="about-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            About MicroCosmos
          </h1>
          <p id="about-page-subtitle" className="text-slate-400 max-w-xl">
            We are a team of scientists, educators, and designers on a mission to make
            the invisible world visible — and fascinating — for everyone.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Making the Invisible{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Unforgettable
              </span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Microorganisms make up the vast majority of life on Earth, yet they remain
              largely invisible to the naked eye — and to public awareness. MicroCosmos
              was founded to change that.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              We combine cutting-edge electron microscopy imagery, rigorous scientific data,
              and accessible storytelling to bring the microscopic world to life. Whether
              you're a student, a teacher, or simply a curious human, there's something
              here to amaze you.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the tardigrade that survives the vacuum of space to the cyanobacteria
              that first filled our atmosphere with oxygen — these tiny organisms have
              shaped every aspect of life on Earth, and they continue to do so today.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-cyan-400 text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors text-sm"
            >
              Start Exploring
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#1a3a5c] h-80">
              <img
                data-strk-img-id="about-mission-img-j1k2l3"
                data-strk-img="[about-page-subtitle] [about-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopy lab"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/50 to-transparent rounded-2xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-4 shadow-xl">
              <p className="text-xs font-mono text-slate-500 mb-1">Founded</p>
              <p className="text-white font-bold text-lg">2024</p>
              <p className="text-cyan-400 text-xs font-mono">Science for all</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a1628] border-y border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Our Values</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These principles guide everything we create and publish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-[#0f1f38] border border-[#1a3a5c] rounded-2xl p-6 hover:border-cyan-400/30 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${v.color}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">The People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Meet the Team</h2>
          <p id="team-section-subtitle" className="text-slate-400 max-w-xl mx-auto">
            Scientists and educators passionate about sharing the wonders of microbiology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.07)] transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}] [team-section-subtitle]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={member.name}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={member.titleId} className="text-white font-semibold text-lg mb-0.5">
                  {member.name}
                </h3>
                <p className="text-cyan-400 text-xs font-mono mb-3">{member.role}</p>
                <p id={member.descId} className="text-slate-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#0a1628] border-t border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-400 mb-8">
              Have a question, a correction, or want to collaborate? We'd love to hear from you.
              Science is better when we work together.
            </p>
            <a
              href="mailto:hello@microcosmos.science"
              className="inline-flex items-center gap-2 bg-cyan-400 text-[#050d1a] font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              hello@microcosmos.science
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
