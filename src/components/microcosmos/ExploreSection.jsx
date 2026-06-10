import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-cells',
    imgId: 'explore-img-cells-d4e5f6',
    titleId: 'explore-title-cells',
    descId: 'explore-desc-cells',
    title: 'Living Cells',
    desc: 'Witness the intricate machinery of life — mitochondria, nuclei, and membranes working in perfect harmony inside every living organism.',
    label: 'Biology',
  },
  {
    id: 'feat-crystals',
    imgId: 'explore-img-crystals-g7h8i9',
    titleId: 'explore-title-crystals',
    descId: 'explore-desc-crystals',
    title: 'Crystal Structures',
    desc: 'Minerals and salts form geometric masterpieces at the microscopic scale — snowflakes, quartz, and salt crystals reveal nature\'s mathematical precision.',
    label: 'Mineralogy',
  },
  {
    id: 'feat-bacteria',
    imgId: 'explore-img-bacteria-j1k2l3',
    titleId: 'explore-title-bacteria',
    descId: 'explore-desc-bacteria',
    title: 'Microbial Life',
    desc: 'Bacteria, archaea, and protozoa — the oldest life forms on Earth — thrive in every environment from deep ocean vents to the human gut.',
    label: 'Microbiology',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-20 md:py-28 bg-[#fdf2f8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#be185d] text-sm font-semibold tracking-widest uppercase">What We Explore</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#1e1b2e]">Worlds Within Worlds</h2>
          <p className="mt-4 text-[#7c4d6a] max-w-2xl mx-auto text-lg">
            Every drop of water, every grain of soil, every breath of air teems with microscopic life and structure beyond imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="group rounded-2xl overflow-hidden bg-[#fff0f7] border border-[#f9a8d4] hover:border-[#f472b6] transition-all duration-300 hover:shadow-[0_0_40px_rgba(219,39,119,0.1)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={f.title}
                  data-strk-img-id={f.imgId}
                  data-strk-img={`[${f.descId}] [${f.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fff0f7] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#fbcfe8] border border-[#f472b6] text-[#be185d] text-xs font-semibold">
                  {f.label}
                </span>
              </div>
              <div className="p-6">
                <h3 id={f.titleId} className="text-xl font-bold text-[#1e1b2e] mb-3">{f.title}</h3>
                <p id={f.descId} className="text-[#7c4d6a] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
