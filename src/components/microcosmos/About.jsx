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
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <p className="text-teal-400 text-xs tracking-widest uppercase font-semibold mb-4 text-center">
          About MicroCosmos
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <div>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 leading-tight"
            >
              The Universe Beneath the Lens
            </h2>
            <p
              id="about-desc"
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              MicroCosmos is a visual exploration of the microscopic realm — a world teeming with life, structure, and beauty that exists just beyond the threshold of human perception. Through advanced microscopy, we reveal the extraordinary complexity hidden in every drop of water, every grain of soil, every breath of air.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              From the elegant geometry of diatoms to the alien landscapes of bacterial colonies, the microbial world is a testament to the boundless creativity of nature operating at the smallest scales.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Bacteria', 'Viruses', 'Fungi', 'Algae', 'Protozoa', 'Archaea'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-teal-400/30 text-teal-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden border border-teal-400/20 shadow-[0_0_40px_rgba(0,212,200,0.1)]">
            <img
              alt="Microscopic world cells and organisms"
              className="w-full h-80 md:h-96 object-cover"
              data-strk-img-id="about-main-img-d4e5f6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 to-transparent" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-teal-400/20 bg-[#0a1628]"
            >
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
