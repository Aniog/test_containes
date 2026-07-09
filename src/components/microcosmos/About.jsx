import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-cells',
    titleId: 'about-feat-cells-title',
    descId: 'about-feat-cells-desc',
    imgId: 'about-feat-cells-img-mc002',
    title: 'Living Cells',
    desc: 'Peer inside the fundamental units of life — from red blood cells to neurons firing in real time.',
    icon: '🔬',
  },
  {
    id: 'feat-bacteria',
    titleId: 'about-feat-bacteria-title',
    descId: 'about-feat-bacteria-desc',
    imgId: 'about-feat-bacteria-img-mc003',
    title: 'Microbial Life',
    desc: 'Discover the teeming world of bacteria, archaea, and microorganisms that shape our planet.',
    icon: '🦠',
  },
  {
    id: 'feat-crystals',
    titleId: 'about-feat-crystals-title',
    descId: 'about-feat-crystals-desc',
    imgId: 'about-feat-crystals-img-mc004',
    title: 'Crystal Structures',
    desc: 'Witness the geometric perfection of minerals and snowflakes under polarized light.',
    icon: '💎',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-cosmos-dark relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #00d4ff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase text-cosmos-cyan font-semibold mb-4 font-heading">
            What is MicroCosmos
          </p>
          <h2
            id="about-title"
            className="font-heading text-4xl md:text-5xl font-bold text-cosmos-text mb-6"
          >
            The World Too Small to See
          </h2>
          <p
            id="about-subtitle"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Beneath the threshold of human vision lies an entire universe of staggering complexity and beauty. MicroCosmos brings it to light.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group rounded-2xl overflow-hidden border border-cosmos-cyan/15 bg-cosmos-card hover:border-cosmos-cyan/40 transition-all duration-500 hover:shadow-glow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [about-subtitle] [about-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{feat.icon}</div>
                <h3 id={feat.titleId} className="font-heading text-xl font-semibold text-cosmos-text mb-2">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
