import { useEffect, useRef } from 'react';
import { Microscope, Heart, Globe, BookOpen, Mail, Twitter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  { id: 'dr-chen', name: 'Dr. Mei Chen', role: 'Microbiologist & Founder', bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria in deep-sea hydrothermal vents.' },
  { id: 'dr-okafor', name: 'Dr. Emeka Okafor', role: 'Virologist', bio: 'Specialist in emerging viral pathogens. Former WHO consultant and author of three textbooks on virology.' },
  { id: 'sara-lindqvist', name: 'Sara Lindqvist', role: 'Science Communicator', bio: 'Former science journalist turned educator. Passionate about making complex microbiology accessible to everyone.' },
  { id: 'prof-tanaka', name: 'Prof. Hiroshi Tanaka', role: 'Mycologist', bio: 'World-leading expert on fungal ecology and the mycorrhizal networks that connect forest ecosystems.' },
];

const values = [
  { icon: Microscope, title: 'Scientific Accuracy', desc: 'Every fact on MicroCosmos is reviewed by our team of researchers and cross-referenced with peer-reviewed literature.' },
  { icon: BookOpen, title: 'Accessible Education', desc: 'We believe science belongs to everyone. We translate complex microbiology into clear, engaging language without dumbing it down.' },
  { icon: Globe, title: 'Global Perspective', desc: 'Microorganisms don\'t respect borders. We cover research from labs around the world, highlighting diverse scientific voices.' },
  { icon: Heart, title: 'Passion-Driven', desc: 'We are scientists and science lovers first. MicroCosmos exists because we genuinely believe the microbial world is endlessly fascinating.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 pt-16">
      {/* Header */}
      <div className="relative py-24 px-4 md:px-8 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
            About MicroCosmos
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            We are a team of scientists, educators, and storytellers united by one belief: the invisible world is the most important world of all.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 leading-tight">
                Revealing the Universe Beneath the Microscope
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                MicroCosmos was founded in 2022 with a simple mission: to make the science of microbiology beautiful, accessible, and relevant to everyday life.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                From the bacteria in your gut to the viruses shaping evolution, microorganisms are the hidden architects of life on Earth. We believe understanding them is not just for scientists — it's for everyone.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Through stunning microscopy imagery, rigorous science writing, and interactive exploration tools, we invite you to see the world differently — at 1,000× magnification.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
              <img
                alt="Laboratory microscopy"
                className="w-full h-full object-cover"
                data-strk-img-id="about-mission-v4w5x6"
                data-strk-img="[about-mission-desc] [about-mission-title] laboratory microscope science"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <span id="about-mission-title" className="sr-only">MicroCosmos Mission</span>
              <span id="about-mission-desc" className="sr-only">Scientists working in a microbiology laboratory with microscopes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-8 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-3">What We Stand For</h2>
            <p className="text-slate-400">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-teal-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-slate-100 font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">The People</span>
            <h2 className="text-3xl font-bold text-slate-100 mb-3">Meet the Team</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Scientists and communicators who live and breathe microbiology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="group bg-slate-900 border border-slate-700 hover:border-teal-500/40 rounded-2xl overflow-hidden transition-all duration-300">
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`about-team-${member.id}-y7z8a9`}
                    data-strk-img={`[team-bio-${member.id}] [team-name-${member.id}] scientist portrait professional`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 id={`team-name-${member.id}`} className="text-slate-100 font-semibold mb-0.5">{member.name}</h3>
                  <p className="text-teal-400 text-xs font-mono mb-3">{member.role}</p>
                  <p id={`team-bio-${member.id}`} className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="text-slate-500 hover:text-teal-400 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="text-slate-500 hover:text-teal-400 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8 border-t border-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Get in Touch</h2>
          <p className="text-slate-400 mb-8">
            Have a question, a correction, or want to collaborate? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@microcosmos.science"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/30"
          >
            <Mail className="w-5 h-5" />
            hello@microcosmos.science
          </a>
        </div>
      </section>
    </div>
  );
}
