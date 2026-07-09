import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', color: 'text-cosmos-cyan' },
  { value: '37T', label: 'Cells in Human Body', color: 'text-cosmos-emerald' },
  { value: '0.001mm', label: 'Smallest Bacterium', color: 'text-cosmos-violet' },
  { value: '3.5B', label: 'Years of Microbial Life', color: 'text-cosmos-cyan' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p id="about-label" className="text-cosmos-cyan text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
              What is MicroCosmos?
            </p>
            <h2 id="about-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text leading-tight mb-6">
              A Universe Too Small to See, Too Vast to Ignore
            </h2>
            <p id="about-desc" className="font-inter text-cosmos-muted text-lg leading-relaxed mb-6">
              The microcosmos is the world of organisms invisible to the naked eye — bacteria, archaea, protists, fungi, and viruses. These microscopic beings are the true rulers of Earth, shaping ecosystems, driving evolution, and sustaining all life as we know it.
            </p>
            <p className="font-inter text-cosmos-muted text-lg leading-relaxed">
              Through the lens of modern microscopy, we can now witness their extraordinary complexity: intricate structures, purposeful behaviors, and stunning beauty that rivals anything in the visible world.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_0_60px_rgba(0,212,255,0.15)]">
              <img
                alt="Microscopic organisms under electron microscope"
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cosmos-cyan/20 to-cosmos-violet/10 -z-10 blur-xl" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 text-center hover:border-cosmos-cyan/30 transition-colors duration-300"
            >
              <div className={`font-grotesk text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-inter text-cosmos-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
