import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const discoveries = [
  {
    id: 'crispr',
    titleId: 'sci-crispr-title',
    descId: 'sci-crispr-desc',
    imgId: 'sci-img-crispr-ab1cd2',
    year: '2012',
    title: 'CRISPR Gene Editing',
    description: 'Scientists harness a bacterial immune system to edit DNA with unprecedented precision, opening doors to curing genetic diseases.',
    tag: 'Genetics',
  },
  {
    id: 'cryo-em',
    titleId: 'sci-cryo-em-title',
    descId: 'sci-cryo-em-desc',
    imgId: 'sci-img-cryo-em-ef3gh4',
    year: '2017',
    title: 'Cryo-EM Revolution',
    description: 'Cryo-electron microscopy allows scientists to image proteins at near-atomic resolution, frozen in their natural state.',
    tag: 'Imaging',
  },
  {
    id: 'alphafold',
    titleId: 'sci-alphafold-title',
    descId: 'sci-alphafold-desc',
    imgId: 'sci-img-alphafold-ij5kl6',
    year: '2020',
    title: 'AlphaFold Protein Structures',
    description: 'AI predicts the 3D structure of virtually every known protein, solving a 50-year-old grand challenge in biology.',
    tag: 'AI & Biology',
  },
  {
    id: 'nanomachines',
    titleId: 'sci-nanomachines-title',
    descId: 'sci-nanomachines-desc',
    imgId: 'sci-img-nanomachines-mn7op8',
    year: '2023',
    title: 'Molecular Nanomachines',
    description: 'Synthetic molecular motors and switches operate at the nanoscale, paving the way for drug delivery inside individual cells.',
    tag: 'Nanotechnology',
  },
];

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a24]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Breakthroughs
          </span>
          <h2 id="science-section-title" className="text-3xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Science at the Edge
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto">
            Recent discoveries that are rewriting our understanding of life at the microscopic scale.
          </p>
        </div>

        {/* Discovery cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {discoveries.map((disc) => (
            <div
              key={disc.id}
              className="group flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#00d4c8]/15 bg-[#112233] hover:border-[#00d4c8]/35 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                <img
                  alt={disc.title}
                  data-strk-img-id={disc.imgId}
                  data-strk-img={`[${disc.descId}] [${disc.titleId}] [science-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#112233] hidden md:block" />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#00d4c8] bg-[#00d4c8]/10 px-2.5 py-1 rounded-full border border-[#00d4c8]/20">
                    {disc.tag}
                  </span>
                  <span className="text-xs text-[#4a7a8a] font-medium">{disc.year}</span>
                </div>
                <h3 id={disc.titleId} className="text-lg font-bold text-[#e8f4f8] mb-2">{disc.title}</h3>
                <p id={disc.descId} className="text-[#7fb3c8] text-sm leading-relaxed">{disc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
