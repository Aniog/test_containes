import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '0.001mm', label: 'Smallest visible cell' },
  { value: '37T', label: 'Cells in the human body' },
  { value: '8.7M', label: 'Species on Earth' },
  { value: '1000×', label: 'Optical magnification' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">About MicroCosmos</span>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Universe That Exists <span className="text-violet-400">Within</span>
            </h2>
            <p id="about-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
              MicroCosmos is a visual exploration of the microscopic world — a realm of extraordinary beauty and complexity that surrounds us yet remains invisible to the naked eye. Through the power of electron microscopy, fluorescence imaging, and macro photography, we reveal the hidden architecture of life.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the crystalline lattices of minerals to the intricate networks of neurons, from the alien landscapes of pollen grains to the swirling galaxies of bacterial colonies — every image tells a story of nature's infinite ingenuity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0d1a26] border border-slate-700/50 rounded-2xl p-5">
                  <div className="text-2xl font-extrabold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3x4] row-span-2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic cell structure"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc001"
                data-strk-img="[about-desc] [about-title] microscopic cell structure biology"
                data-strk-img-ratio="2x3"
                data-strk-img-width="400"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Crystal formation under microscope"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc002"
                data-strk-img="crystal formation mineral microscopy [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Pollen grain macro photography"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-mc003"
                data-strk-img="pollen grain macro photography colorful [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
