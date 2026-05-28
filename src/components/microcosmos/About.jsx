import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '1μm', label: 'Average Bacteria Size' },
  { value: '99%', label: 'Species Undiscovered' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">About</p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The World Too Small to See
            </h2>
            <p id="about-desc" className="text-gray-400 text-lg leading-relaxed mb-6">
              MicroCosmos is a celebration of the microscopic universe — a realm teeming with life, complexity, and beauty that exists just beyond the threshold of human vision. From the intricate architecture of a single cell to the alien landscapes of bacterial colonies, this world is as vast and wondrous as the cosmos above.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Using cutting-edge electron microscopy and fluorescence imaging, scientists have revealed organisms of extraordinary form and function. Every drop of water, every grain of soil, every breath of air is alive with microscopic inhabitants shaping our world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-gray-800 rounded-xl p-4 bg-gray-900">
                  <div className="text-2xl font-black text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_0_60px_rgba(34,211,238,0.1)]">
              <img
                alt="Microscopic cell structure"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating small image */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden border-2 border-gray-800 shadow-xl hidden md:block">
              <img
                alt="Bacteria colony microscopy"
                className="w-full h-full object-cover"
                data-strk-img-id="about-float-g7h8i9"
                data-strk-img="bacteria colony fluorescence microscopy [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
