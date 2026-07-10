import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10,000×', label: 'Magnification Power' },
  { value: '37 Trillion', label: 'Cells in Human Body' },
  { value: '8.7 Million', label: 'Species on Earth' },
  { value: '1 Micron', label: 'Smallest Visible Life' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#050d1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
            About MicroCosmos
          </span>
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-[#f0f6ff] mt-3 mb-5">
            The World Beneath Our Eyes
          </h2>
          <p id="about-desc" className="text-[#8ba3c7] text-lg max-w-2xl mx-auto leading-relaxed">
            Every drop of water, every grain of soil, every breath of air teems with life invisible to the naked eye. MicroCosmos brings this hidden universe into stunning focus.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#f0f6ff]">
              Microscopy as Art & Science
            </h3>
            <p className="text-[#8ba3c7] leading-relaxed">
              Through the lens of advanced electron and fluorescence microscopes, we reveal the intricate architecture of cells, the alien beauty of microorganisms, and the molecular machinery that powers all life on Earth.
            </p>
            <p className="text-[#8ba3c7] leading-relaxed">
              Our collection spans diatoms and radiolarians, bacteria and viruses, plant cells and animal tissues — each image a window into a cosmos as vast and complex as the stars above.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Electron Microscopy', 'Fluorescence Imaging', 'Confocal Scanning', 'Phase Contrast'].map((tag) => (
                <span key={tag} className="bg-[#00d4c8]/10 text-[#00d4c8] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#00d4c8]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* About image */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1a3050] shadow-lg shadow-black/40">
            <img
              alt="Microscopic life under electron microscope"
              data-strk-img-id="about-img-mc002"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0f1f38] border border-[#1a3050] rounded-2xl p-6 text-center hover:border-[#00d4c8]/40 transition-colors"
            >
              <div className="text-3xl font-black text-[#00d4c8] mb-2">{stat.value}</div>
              <div className="text-sm text-[#8ba3c7]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
