import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10,000+', label: 'Species Documented' },
  { value: '1μm', label: 'Smallest Organism' },
  { value: '3.8B', label: 'Years of Evolution' },
  { value: '10×', label: 'Microbes per Human Cell' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Our Mission</span>
            <h2 id="about-title" className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Making the Invisible<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Visible to All
              </span>
            </h2>
            <p id="about-subtitle" className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              MicroCosmos is a science communication project dedicated to bringing the hidden world of microscopic life to everyone. Through stunning imagery, accessible science, and immersive storytelling, we reveal the extraordinary complexity of life at the smallest scales.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              From the bacteria in your gut to the plankton that produce half the world's oxygen — the microscopic world is not just fascinating, it is essential to all life on Earth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  alt="Microscope laboratory science"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-1a2b3c"
                  data-strk-img="[about-subtitle] [about-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  alt="Microscopic organism close up"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-4d5e6f"
                  data-strk-img="microscopic organism close up fluorescent"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  alt="Cell biology research"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-7g8h9i"
                  data-strk-img="cell biology research laboratory microscope"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  alt="Plankton ocean microscopic life"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-j1k2l3"
                  data-strk-img="plankton ocean microscopic life bioluminescent"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
