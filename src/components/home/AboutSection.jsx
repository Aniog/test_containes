import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Dna, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Eye,
    id: 'about-h1',
    title: 'Invisible to the Naked Eye',
    desc: 'Most microorganisms are too small to see without magnification, yet they make up the vast majority of life on Earth.',
  },
  {
    icon: Dna,
    id: 'about-h2',
    title: 'Ancient & Diverse',
    desc: 'Microbial life has existed for over 3.5 billion years, evolving into millions of unique species across every habitat.',
  },
  {
    icon: Globe,
    id: 'about-h3',
    title: 'Essential to Life',
    desc: 'Microorganisms drive nutrient cycles, produce oxygen, and form the foundation of every ecosystem on the planet.',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block bg-teal-900/50 text-teal-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-700/40">
              What is MicroCosmos?
            </span>
            <h2 id="about-title" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              A Universe <span className="text-teal-400">Hidden</span> in Plain Sight
            </h2>
            <p id="about-desc" className="text-slate-300 text-lg leading-relaxed mb-8">
              MicroCosmos is your window into the extraordinary world of microscopic life. From the single-celled organisms that first sparked life on Earth, to the complex microbial communities that sustain every ecosystem — this is the story of the smallest, most abundant life forms on our planet.
            </p>
            <div className="flex flex-col gap-6">
              {highlights.map(({ icon: Icon, id, title, desc }) => (
                <div key={id} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-900/60 border border-teal-700/40 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 id={id} className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden h-64 relative">
              <img
                alt="Microscopic life under electron microscope"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc001"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 relative">
              <img
                alt="Bacteria colony microscope view"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc002"
                data-strk-img="bacteria colony microscope colorful [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 relative">
              <img
                alt="Protozoa single cell organism"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc003"
                data-strk-img="protozoa single cell organism microscope [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
