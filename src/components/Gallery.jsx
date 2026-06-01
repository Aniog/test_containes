import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    subtitle: 'Water Bear — the most resilient animal on Earth',
    ratio: '1x1',
    width: '600',
    imgId: 'gallery-img-tardigrade-mc020',
    titleId: 'gallery-title-tardigrade',
    subtitleId: 'gallery-sub-tardigrade',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'diatom',
    title: 'Diatom',
    subtitle: 'Silica-shelled algae with geometric precision',
    ratio: '3x2',
    width: '800',
    imgId: 'gallery-img-diatom-mc021',
    titleId: 'gallery-title-diatom',
    subtitleId: 'gallery-sub-diatom',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'neuron',
    title: 'Neuron',
    subtitle: 'Fluorescent imaging of a brain nerve cell',
    ratio: '3x2',
    width: '800',
    imgId: 'gallery-img-neuron-mc022',
    titleId: 'gallery-title-neuron',
    subtitleId: 'gallery-sub-neuron',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    subtitle: 'No two are alike — hexagonal symmetry at its finest',
    ratio: '1x1',
    width: '600',
    imgId: 'gallery-img-snowflake-mc023',
    titleId: 'gallery-title-snowflake',
    subtitleId: 'gallery-sub-snowflake',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'redbloodcell',
    title: 'Red Blood Cells',
    subtitle: 'Biconcave discs carrying oxygen through the bloodstream',
    ratio: '3x2',
    width: '800',
    imgId: 'gallery-img-rbc-mc024',
    titleId: 'gallery-title-rbc',
    subtitleId: 'gallery-sub-rbc',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'mold',
    title: 'Penicillium Mold',
    subtitle: 'The fungus that gave us penicillin, seen up close',
    ratio: '3x2',
    width: '800',
    imgId: 'gallery-img-mold-mc025',
    titleId: 'gallery-title-mold',
    subtitleId: 'gallery-sub-mold',
    span: 'col-span-1 row-span-1',
  },
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Featured Specimens
          </p>
          <h2 id="gallery-section-title" className="text-4xl md:text-5xl font-bold text-white">
            Gallery of the Invisible
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Stunning microscopy images from the frontiers of science and art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/40 transition-all duration-300 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.subtitleId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-white font-bold text-base">
                  {item.title}
                </h3>
                <p id={item.subtitleId} className="text-slate-300 text-xs mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
