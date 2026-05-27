import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Microscope, BookOpen, FlaskConical, Globe, Dna, Zap } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const timeline = [
  {
    year: '1676',
    title: 'First Microbes Observed',
    desc: 'Antonie van Leeuwenhoek becomes the first person to observe living microorganisms using a self-made microscope, calling them "animalcules".',
  },
  {
    year: '1857',
    title: 'Germ Theory of Disease',
    desc: 'Louis Pasteur demonstrates that microorganisms cause fermentation and disease, overturning the theory of spontaneous generation.',
  },
  {
    year: '1928',
    title: 'Discovery of Penicillin',
    desc: 'Alexander Fleming notices that Penicillium mold kills bacteria, leading to the development of the first antibiotic.',
  },
  {
    year: '1953',
    title: 'DNA Double Helix',
    desc: 'Watson and Crick describe the structure of DNA, revolutionizing our understanding of how genetic information is stored and transmitted.',
  },
  {
    year: '1977',
    title: 'Archaea Discovered',
    desc: 'Carl Woese discovers that archaea are a distinct domain of life, separate from bacteria, fundamentally changing the tree of life.',
  },
  {
    year: '2003',
    title: 'Human Genome Sequenced',
    desc: 'The Human Genome Project completes the sequencing of all human DNA, revealing the genetic blueprint of our species.',
  },
  {
    year: '2020',
    title: 'CRISPR Revolution',
    desc: 'Jennifer Doudna and Emmanuelle Charpentier win the Nobel Prize for developing CRISPR-Cas9 gene editing, originally discovered in bacteria.',
  },
];

const techniques = [
  {
    icon: Microscope,
    name: 'Light Microscopy',
    abbr: 'LM',
    desc: 'The classic technique using visible light and lenses. Can magnify up to 1,000x and observe living specimens in real time.',
    resolution: '200 nm',
  },
  {
    icon: Zap,
    name: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to scan the surface of specimens, producing stunning 3D-like images with extraordinary detail.',
    resolution: '1–20 nm',
  },
  {
    icon: FlaskConical,
    name: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Electrons pass through ultra-thin specimens to reveal internal structures at near-atomic resolution.',
    resolution: '0.05 nm',
  },
  {
    icon: Dna,
    name: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Uses fluorescent dyes or proteins to label specific structures, making them glow against a dark background.',
    resolution: '200 nm',
  },
  {
    icon: Globe,
    name: 'Confocal Microscopy',
    abbr: 'CLSM',
    desc: 'Creates sharp optical sections through thick specimens, allowing 3D reconstruction of complex biological structures.',
    resolution: '180 nm',
  },
  {
    icon: BookOpen,
    name: 'Cryo-Electron Microscopy',
    abbr: 'Cryo-EM',
    desc: 'Specimens are flash-frozen and imaged at cryogenic temperatures, preserving their native structure for near-atomic resolution.',
    resolution: '0.1–0.3 nm',
  },
];

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    [heroRef, missionRef, techRef].forEach(ref => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
    });
  }, []);

  return (
    <div className="bg-[#050d12] min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,201,177,0.07)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">Our Mission</span>
            <h1 id="about-hero-title" className="font-heading text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Making the Invisible <span className="text-[#00c9b1]">Visible</span>
            </h1>
            <p id="about-hero-desc" className="text-[#7fb3c8] text-lg leading-relaxed mb-6">
              MicroCosmos is dedicated to bringing the wonders of the microscopic world to everyone. We believe that understanding the tiny organisms that surround us — and live within us — is fundamental to understanding life itself.
            </p>
            <p className="text-[#7fb3c8] text-lg leading-relaxed">
              Through stunning imagery, accessible science, and deep exploration of microbiology, we invite you to discover a universe that exists just beyond the threshold of human sight.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-56 col-span-2">
              <img
                alt="Microscopy laboratory"
                className="w-full h-full object-cover"
                data-strk-img-id="about-hero-img1-j1k2l3"
                data-strk-img="[about-hero-desc] [about-hero-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44">
              <img
                alt="Scientist at microscope"
                className="w-full h-full object-cover"
                data-strk-img-id="about-hero-img2-m4n5o6"
                data-strk-img="scientist microscope research biology laboratory"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-44">
              <img
                alt="Microscopy sample preparation"
                className="w-full h-full object-cover"
                data-strk-img-id="about-hero-img3-p7q8r9"
                data-strk-img="microscopy sample preparation petri dish laboratory"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-[#0a1a24]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">History</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-3 mb-4">Milestones in Microbiology</h2>
            <p className="text-[#7fb3c8] text-lg">From the first glimpse through a lens to gene editing — the story of how we learned to see the invisible.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#1a3a4a] md:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:px-10">
                    <div className={`bg-[#0f2233] border border-[#1a3a4a] rounded-2xl p-6 hover:border-[#00c9b1]/40 transition-colors ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-[#00c9b1] font-heading font-bold text-2xl">{item.year}</span>
                      <h3 className="font-heading text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                      <p className="text-[#7fb3c8] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 bg-[#00c9b1] rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-[#0a1a24]" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Microscopy Techniques */}
      <section ref={techRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">Technology</span>
            <h2 id="tech-section-title" className="font-heading text-4xl font-bold text-white mt-3 mb-4">Microscopy Techniques</h2>
            <p id="tech-section-desc" className="text-[#7fb3c8] text-lg max-w-2xl mx-auto">
              Modern microscopy uses a range of technologies to reveal structures at scales from micrometers down to individual atoms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.abbr} className="bg-[#0f2233] border border-[#1a3a4a] rounded-2xl p-6 hover:border-[#00c9b1]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,201,177,0.08)]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#00c9b1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#00c9b1]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">{tech.name}</h3>
                      <span className="text-xs text-[#4a7a8a] font-mono">{tech.abbr}</span>
                    </div>
                  </div>
                  <p className="text-[#7fb3c8] text-sm leading-relaxed mb-4">{tech.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#4a7a8a] uppercase tracking-wider">Resolution:</span>
                    <span className="text-xs font-mono text-[#00c9b1] bg-[#00c9b1]/10 px-2 py-0.5 rounded">{tech.resolution}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Images */}
      <section ref={missionRef} className="py-24 px-6 bg-[#0a1a24]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">The World We Study</span>
            <h2 id="mission-title" className="font-heading text-4xl font-bold text-white mt-3 mb-4">Life at Every Scale</h2>
            <p id="mission-desc" className="text-[#7fb3c8] text-lg max-w-2xl mx-auto">
              From ocean depths to the human gut, microorganisms inhabit every environment on Earth and drive the processes that make our planet habitable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'ocean', label: 'Ocean Microbiome', desc: 'marine microorganisms ocean plankton microscopy' },
              { id: 'soil', label: 'Soil Ecosystem', desc: 'soil bacteria fungi microorganisms earth' },
              { id: 'gut', label: 'Human Microbiome', desc: 'human gut microbiome bacteria intestinal' },
              { id: 'extreme', label: 'Extremophiles', desc: 'extremophile archaea hot spring volcanic' },
            ].map((env) => (
              <div key={env.id} className="group relative rounded-2xl overflow-hidden">
                <img
                  alt={env.label}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`mission-${env.id}-img-s0t1u2`}
                  data-strk-img={`[mission-${env.id}-label] [mission-desc] [mission-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d12]/80 to-transparent" />
                <p id={`mission-${env.id}-label`} className="absolute bottom-4 left-4 right-4 text-white font-heading font-semibold text-sm">{env.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
