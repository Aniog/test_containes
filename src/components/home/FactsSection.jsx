import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '3.5B', label: 'Years of microbial life on Earth', color: '#00d4ff' },
  { value: '10³⁰', label: 'Estimated bacteria on Earth', color: '#7c3aed' },
  { value: '50%', label: 'Of Earth\'s oxygen from microbes', color: '#10b981' },
  { value: '37T', label: 'Microbes in the human body', color: '#f59e0b' },
];

const facts = [
  {
    id: 'fact-img-d1',
    titleId: 'fact-title-d1',
    title: 'Bacteria Communicate',
    body: 'Through a process called quorum sensing, bacteria release chemical signals to coordinate group behavior — forming biofilms, launching infections, or producing bioluminescence in unison.',
  },
  {
    id: 'fact-img-d2',
    titleId: 'fact-title-d2',
    title: 'Fungi Have Internet',
    body: 'The "Wood Wide Web" is a vast underground network of fungal mycelium connecting trees in a forest, allowing them to share nutrients and chemical warning signals.',
  },
  {
    id: 'fact-img-d3',
    titleId: 'fact-title-d3',
    title: 'Viral Particles Under Electron Microscope',
    body: 'There are an estimated 10³¹ viruses on Earth — more than all the stars in the observable universe combined. They play crucial roles in evolution and ecosystem balance.',
  },
  {
    id: 'fact-img-d4',
    titleId: 'fact-title-d4',
    title: 'Microbes in Space',
    body: 'Tardigrades have survived exposure to the vacuum of space and cosmic radiation aboard the International Space Station, suggesting microbial life could potentially travel between planets.',
  },
];

export default function FactsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="facts" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-4">
            Mind-Blowing Science
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f0f9ff] mb-5">
            Did You Know?
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            The microcosmos is full of surprises. Here are some of the most astonishing facts about the invisible world.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0f1f35] border border-[#1e3a5f] rounded-2xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-black mb-2" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-[#94a3b8] text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Facts grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-[#0f1f35] border border-[#1e3a5f] rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-[#00d4ff]/30 transition-colors group"
            >
              {/* Image */}
              <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  alt={fact.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={fact.id}
                  data-strk-img={`[${fact.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width={300}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <h4 id={fact.titleId} className="text-[#f0f9ff] font-bold text-lg mb-3">
                  {fact.id === 'fact-img-d3' ? 'Viruses Outnumber Stars' : fact.title}
                </h4>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{fact.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner image */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-64 md:h-80 border border-[#1e3a5f]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="facts-banner-e1f2g3"
            data-strk-bg="[facts-banner-title] microscopic world bioluminescence"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/90 via-[#050d1a]/50 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-14 max-w-xl">
            <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-3">
              The Big Picture
            </span>
            <h3 id="facts-banner-title" className="text-2xl md:text-3xl font-bold text-[#f0f9ff] mb-4">
              Microbes Run the World
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Without microorganisms, all complex life on Earth would collapse within decades. They are not just part of the ecosystem — they are the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
