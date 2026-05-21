import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Zap, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    id: 'pillar-title-1',
    title: 'Invisible to the Naked Eye',
    desc: 'Billions of organisms share our world, yet remain completely invisible without magnification. They outnumber stars in the galaxy.',
  },
  {
    icon: Zap,
    id: 'pillar-title-2',
    title: 'Powering All Life',
    desc: 'Microorganisms drive every major cycle on Earth — from oxygen production to nutrient recycling. Without them, life as we know it would cease.',
  },
  {
    icon: Globe,
    id: 'pillar-title-3',
    title: 'Every Habitat on Earth',
    desc: 'From boiling hydrothermal vents to frozen Antarctic ice, microscopic life colonizes every corner of our planet and beyond.',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-4">
            What Is MicroCosmos?
          </span>
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-bold text-[#f0f9ff] mb-6"
          >
            A Universe Within Our Universe
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto leading-relaxed">
            The microcosmos is the vast, teeming world of life too small to see — bacteria, archaea, fungi, protozoa, algae, and more. It is the foundation upon which all visible life depends.
          </p>
        </div>

        {/* Two-column layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 id="about-sub-heading" className="text-2xl md:text-3xl font-bold text-[#f0f9ff] mb-5">
              Life at the Microscopic Scale
            </h3>
            <p className="text-[#94a3b8] leading-relaxed mb-5">
              When you look through a microscope for the first time, you enter a world that has existed for over 3.5 billion years. Single-celled organisms were the first life on Earth, and they remain the most abundant and diverse forms of life today.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. A drop of ocean water teems with thousands of species of phytoplankton, each one a complete, self-sufficient living being.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Bacteria', 'Fungi', 'Protozoa', 'Algae', 'Archaea', 'Viruses'].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#00d4ff]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* About image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#1e3a5f] shadow-lg shadow-black/40">
            <img
              alt="Microscopic life forms"
              className="w-full h-full object-cover"
              data-strk-img-id="about-img-d4e5f6"
              data-strk-img="[about-sub-heading] [about-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, id, title, desc }) => (
            <div
              key={id}
              className="bg-[#0f1f35] border border-[#1e3a5f] rounded-2xl p-6 hover:border-[#00d4ff]/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-5 group-hover:bg-[#00d4ff]/20 transition-colors">
                <Icon className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <h4 id={id} className="text-[#f0f9ff] font-semibold text-lg mb-3">{title}</h4>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
