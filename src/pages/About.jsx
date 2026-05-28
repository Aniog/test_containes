import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Globe, BookOpen, Users, ArrowRight, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const timeline = [
  { year: '1676', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope', icon: '🔬' },
  { year: '1857', event: 'Louis Pasteur disproves spontaneous generation and establishes germ theory', icon: '🧫' },
  { year: '1892', event: 'Dmitri Ivanovsky discovers viruses — the first filterable infectious agents', icon: '🦠' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin from the mold Penicillium notatum', icon: '💊' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA', icon: '🧬' },
  { year: '1977', event: 'Carl Woese discovers Archaea — a third domain of life', icon: '🌍' },
  { year: '2003', event: 'Human Genome Project completed, revealing viral DNA in our genome', icon: '📊' },
  { year: '2020', event: 'CRISPR-Cas9 wins Nobel Prize, revolutionizing microbial gene editing', icon: '✂️' },
];

const team = [
  { id: 'team-1', name: 'Dr. Elena Vasquez', role: 'Microbiologist & Founder', query: 'female scientist microscope laboratory portrait', specialty: 'Bacterial Ecology' },
  { id: 'team-2', name: 'Prof. James Chen', role: 'Virologist', query: 'male scientist laboratory research portrait', specialty: 'Viral Genomics' },
  { id: 'team-3', name: 'Dr. Amara Osei', role: 'Mycologist', query: 'female scientist research laboratory portrait', specialty: 'Fungal Networks' },
  { id: 'team-4', name: 'Dr. Luca Ferretti', role: 'Imaging Specialist', query: 'male scientist microscopy imaging laboratory portrait', specialty: 'Electron Microscopy' },
];

const values = [
  { icon: Microscope, title: 'Scientific Rigor', desc: 'Every image and fact is verified by our team of expert microbiologists.' },
  { icon: Globe, title: 'Global Perspective', desc: 'We source imagery and research from laboratories across six continents.' },
  { icon: BookOpen, title: 'Open Education', desc: 'We believe science should be accessible to everyone, everywhere.' },
  { icon: Users, title: 'Community Driven', desc: 'Built with input from researchers, educators, and curious minds worldwide.' },
];

export default function About() {
  const heroRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (teamRef.current) ImageHelper.loadImages(strkImgConfig, teamRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f9ff] min-h-screen">
      {/* Hero */}
      <div ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="about-hero-bg-mc003"
          data-strk-bg="[about-title] [about-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />
        <div className="absolute inset-0 z-10 bg-grid-pattern opacity-20" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00d4aa] text-sm font-medium">Our Mission</span>
          </div>
          <h1 id="about-title" className="text-4xl md:text-6xl font-black text-white mb-6 max-w-3xl">
            Making the Invisible <span className="gradient-text">Visible</span>
          </h1>
          <p id="about-subtitle" className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            MicroCosmos was founded with a single mission: to reveal the extraordinary beauty 
            and complexity of the microbial world to everyone on Earth.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-[#0a1628] border-y border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Microbes Matter
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Microorganisms are the invisible foundation of all life on Earth. They were here 
                  3.5 billion years before us, and they will be here long after. They created the 
                  oxygen we breathe, they cycle the nutrients that feed our crops, and they keep 
                  our bodies healthy.
                </p>
                <p>
                  Yet most people have never seen a bacterium, a virus, or a diatom. The microscopic 
                  world is hidden from our senses — but it is no less real, no less beautiful, and 
                  no less important than the world we can see.
                </p>
                <p>
                  MicroCosmos bridges that gap. Through stunning imagery, rigorous science, and 
                  accessible storytelling, we bring the invisible world to life.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <Link
                  to="/explore"
                  className="flex items-center gap-2 bg-[#00d4aa] text-[#050d1a] font-bold px-6 py-3 rounded-full hover:bg-[#00bfa0] transition-all"
                >
                  Start Exploring <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'about-img-1', query: 'scientist microscope laboratory research', ratio: '4x3', width: 500 },
                { id: 'about-img-2', query: 'bacteria microscope colorful science', ratio: '1x1', width: 300 },
                { id: 'about-img-3', query: 'electron microscopy laboratory equipment', ratio: '1x1', width: 300 },
                { id: 'about-img-4', query: 'microorganism fluorescence microscopy beautiful', ratio: '4x3', width: 500 },
              ].map((img, i) => (
                <div key={img.id} className="overflow-hidden rounded-xl bg-[#0f1f38]">
                  <img
                    data-strk-img-id={img.id}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width={img.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.query}
                    className={`w-full object-cover ${i % 2 === 0 ? 'h-44' : 'h-36'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              The principles that guide everything we do at MicroCosmos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0f1f38] border border-[#1e3a5f] rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/20 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-[#00d4aa]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0a1628] border-y border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Milestones in Microbiology
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              From Leeuwenhoek's first microscope to CRISPR — the discoveries that changed our world.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#1e3a5f] md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#00d4aa] border-2 border-[#050d1a] -translate-x-1/2 mt-4 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                    <div className="bg-[#0f1f38] border border-[#1e3a5f] rounded-xl p-5 card-hover">
                      <div className="flex items-center gap-2 mb-2 md:justify-end" style={{ justifyContent: i % 2 !== 0 ? 'flex-start' : undefined }}>
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-[#00d4aa] font-black text-lg">{item.year}</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              World-class scientists and communicators dedicated to sharing the wonders of the microbial world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-[#0f1f38] border border-[#1e3a5f] rounded-2xl overflow-hidden card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img
                    data-strk-img-id={member.id}
                    data-strk-img={member.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base">{member.name}</h3>
                  <p className="text-[#00d4aa] text-sm font-medium mt-1">{member.role}</p>
                  <div className="flex items-center gap-1.5 mt-3">
                    <Award className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-slate-500 text-xs">{member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1628] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the <span className="gradient-text">MicroCosmos</span> Community
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Explore our gallery, dive into the science, and discover the extraordinary 
            universe that exists all around us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gallery"
              className="flex items-center gap-2 bg-[#00d4aa] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition-all hover:scale-105"
            >
              Browse Gallery <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-2 border border-[#1e3a5f] text-slate-300 font-semibold px-8 py-4 rounded-full hover:border-[#00d4aa]/50 hover:text-white transition-all"
            >
              Explore Organisms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
