import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Globe, BookOpen, Camera, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  { id: 'dr-chen', name: 'Dr. Sarah Chen', role: 'Lead Microbiologist', bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria.' },
  { id: 'prof-okafor', name: 'Prof. James Okafor', role: 'Cell Biologist', bio: 'Pioneer in fluorescence microscopy techniques at Johns Hopkins.' },
  { id: 'dr-petrov', name: 'Dr. Elena Petrov', role: 'Virologist', bio: 'Specialist in viral evolution and emerging infectious diseases.' },
  { id: 'dr-nakamura', name: 'Dr. Kenji Nakamura', role: 'Crystallographer', bio: 'Expert in X-ray crystallography and protein structure determination.' },
];

const values = [
  { icon: Microscope, title: 'Scientific Rigor', desc: 'Every image and fact is verified by our team of expert scientists.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Globe, title: 'Global Reach', desc: 'Making microscience accessible to curious minds around the world.', color: 'text-teal-400', bg: 'bg-teal-500/10' },
  { icon: BookOpen, title: 'Education First', desc: 'We believe science education should be beautiful and engaging.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Camera, title: 'Visual Excellence', desc: 'Partnering with the world\'s best microscopy labs for stunning imagery.', color: 'text-amber-400', bg: 'bg-amber-500/10' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050d1a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 id="about-title" className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Mission to Reveal the <span className="text-cyan-400">Invisible</span>
            </h1>
            <p id="about-subtitle" className="text-slate-300 text-lg leading-relaxed mb-6">
              MicroCosmos was founded with a single belief: the microscopic world is just as breathtaking as the cosmos above us. We bring together scientists, photographers, and educators to share the wonder of life at the smallest scales.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the first microscope built by Antonie van Leeuwenhoek in the 17th century to today's cryo-electron microscopes that can image individual atoms, humanity has been captivated by what lies beyond the naked eye.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/30"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-cyan-900/40 aspect-[4/3]">
            <img
              alt="About MicroCosmos"
              className="w-full h-full object-cover"
              data-strk-img-id="about-hero-img-y7z8a9"
              data-strk-img="[about-subtitle] [about-title] microscopy laboratory science"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-4xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">The People</p>
            <h2 id="team-title" className="text-4xl font-bold text-white">Meet Our Scientists</h2>
            <p id="team-subtitle" className="text-slate-400 text-lg mt-3 max-w-xl mx-auto">
              World-class researchers dedicated to making microscience accessible and beautiful.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="group card-glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={`about-team-${member.id}-b1c2d3`}
                    data-strk-img={`[about-team-${member.id}-role] [about-team-${member.id}-name] [team-subtitle] [team-title] scientist portrait`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`about-team-${member.id}-name`} className="text-white font-bold text-base">{member.name}</h3>
                  <p id={`about-team-${member.id}-role`} className="text-cyan-400 text-sm mb-2">{member.role}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-900/40 bg-gradient-to-r from-cyan-900/30 via-[#0d1f35] to-purple-900/30 p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Collaborate With Us
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Are you a researcher, photographer, or educator? We'd love to feature your work and expand the MicroCosmos collection.
          </p>
          <a
            href="mailto:hello@microcosmos.science"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/30"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
