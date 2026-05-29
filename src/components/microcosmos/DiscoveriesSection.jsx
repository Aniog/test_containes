import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const discoveries = [
  {
    id: 'disc1',
    imgId: 'disc-img-mc015',
    year: '2023',
    title: 'Quantum Dots in Living Cells',
    excerpt: 'Researchers successfully tracked individual quantum dot nanoparticles navigating through living cell membranes, revealing new drug delivery pathways.',
    tag: 'Nanotechnology',
  },
  {
    id: 'disc2',
    imgId: 'disc-img-mc016',
    year: '2024',
    title: 'Extremophile Microbes in Deep Ice',
    excerpt: 'A new species of extremophile bacteria was discovered thriving in Antarctic ice cores, surviving temperatures of −40°C and extreme pressure.',
    tag: 'Astrobiology',
  },
  {
    id: 'disc3',
    imgId: 'disc-img-mc017',
    year: '2025',
    title: 'Cryo-EM Reveals Protein Folding',
    excerpt: 'Cryo-electron microscopy captured the first real-time images of a protein folding from a disordered chain into its functional 3D structure.',
    tag: 'Structural Biology',
  },
];

export default function DiscoveriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#7c3aed] mb-3">Latest Research</p>
          <h2 id="disc-heading" className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-4">
            Recent Discoveries
          </h2>
          <p className="text-[#8bafc7] max-w-xl mx-auto leading-relaxed">
            The frontier of microscopic science is advancing faster than ever. Here are the breakthroughs shaping our understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {discoveries.map((d) => (
            <article
              key={d.id}
              className="group bg-[#0f2236] rounded-2xl overflow-hidden border border-[#7c3aed]/20 hover:border-[#7c3aed]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={d.imgId}
                  data-strk-img={`[${d.id}-excerpt] [${d.id}-title] [disc-heading]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2236] to-transparent" />
                <div className="absolute top-4 right-4 bg-[#7c3aed]/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {d.year}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium tracking-widest uppercase text-[#7c3aed] mb-2 block">{d.tag}</span>
                <h3 id={`${d.id}-title`} className="text-lg font-semibold text-[#f0f8ff] mb-3 leading-snug">{d.title}</h3>
                <p id={`${d.id}-excerpt`} className="text-[#8bafc7] text-sm leading-relaxed">{d.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
