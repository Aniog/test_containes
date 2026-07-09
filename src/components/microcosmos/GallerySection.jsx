import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'g1',
    title: 'Diatom Symmetry',
    caption: 'Silicon dioxide shells of diatoms reveal perfect geometric patterns',
    titleId: 'gallery-g1-title',
    captionId: 'gallery-g1-caption',
    imgId: 'gallery-img-g1-mc009',
    size: 'large',
  },
  {
    id: 'g2',
    title: 'Tardigrade',
    caption: 'The water bear — nearly indestructible microscopic animal',
    titleId: 'gallery-g2-title',
    captionId: 'gallery-g2-caption',
    imgId: 'gallery-img-g2-mc010',
    size: 'small',
  },
  {
    id: 'g3',
    title: 'Pollen Grains',
    caption: 'Colorized SEM image of pollen from various flowering plants',
    titleId: 'gallery-g3-title',
    captionId: 'gallery-g3-caption',
    imgId: 'gallery-img-g3-mc011',
    size: 'small',
  },
  {
    id: 'g4',
    title: 'Neuron Network',
    caption: 'Fluorescent microscopy of interconnected neurons firing signals',
    titleId: 'gallery-g4-title',
    captionId: 'gallery-g4-caption',
    imgId: 'gallery-img-g4-mc012',
    size: 'small',
  },
  {
    id: 'g5',
    title: 'Radiolarian Shell',
    caption: 'Intricate silica skeleton of a radiolarian protozoan',
    titleId: 'gallery-g5-title',
    captionId: 'gallery-g5-caption',
    imgId: 'gallery-img-g5-mc013',
    size: 'large',
  },
  {
    id: 'g6',
    title: 'Red Blood Cells',
    caption: 'Biconcave discs of erythrocytes flowing through a capillary',
    titleId: 'gallery-g6-title',
    captionId: 'gallery-g6-caption',
    imgId: 'gallery-img-g6-mc014',
    size: 'small',
  },
  {
    id: 'g7',
    title: 'Paramecium',
    caption: 'Ciliated protozoan propelling itself through pond water',
    titleId: 'gallery-g7-title',
    captionId: 'gallery-g7-caption',
    imgId: 'gallery-img-g7-mc015',
    size: 'small',
  },
  {
    id: 'g8',
    title: 'Fungal Spores',
    caption: 'Colorized spores of Aspergillus ready for dispersal',
    titleId: 'gallery-g8-title',
    captionId: 'gallery-g8-caption',
    imgId: 'gallery-img-g8-mc016',
    size: 'small',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="gallery-section-label" className="text-cosmos-cyan text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            Visual Archive
          </p>
          <h2 id="gallery-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            Gallery of the Invisible
          </h2>
          <p className="font-inter text-cosmos-muted mt-4 max-w-xl mx-auto">
            Stunning microscopy images revealing the hidden architecture of life
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Row 1: large + 2 small */}
          <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden aspect-square">
            <img
              alt={galleryItems[0].title}
              data-strk-img-id={galleryItems[0].imgId}
              data-strk-img={`[${galleryItems[0].captionId}] [${galleryItems[0].titleId}] [gallery-section-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 id={galleryItems[0].titleId} className="font-grotesk text-cosmos-text font-semibold text-lg">{galleryItems[0].title}</h3>
              <p id={galleryItems[0].captionId} className="font-inter text-cosmos-muted text-sm mt-1">{galleryItems[0].caption}</p>
            </div>
          </div>

          {[galleryItems[1], galleryItems[2]].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="font-grotesk text-cosmos-text font-semibold text-sm">{item.title}</h3>
                <p id={item.captionId} className="font-inter text-cosmos-muted text-xs mt-1 hidden md:block">{item.caption}</p>
              </div>
            </div>
          ))}

          {/* Row 2: 3 small + large */}
          {[galleryItems[3], galleryItems[5], galleryItems[6]].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="font-grotesk text-cosmos-text font-semibold text-sm">{item.title}</h3>
                <p id={item.captionId} className="font-inter text-cosmos-muted text-xs mt-1 hidden md:block">{item.caption}</p>
              </div>
            </div>
          ))}

          <div className="col-span-1 row-span-2 group relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/2' }}>
            <img
              alt={galleryItems[4].title}
              data-strk-img-id={galleryItems[4].imgId}
              data-strk-img={`[${galleryItems[4].captionId}] [${galleryItems[4].titleId}] [gallery-section-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 id={galleryItems[4].titleId} className="font-grotesk text-cosmos-text font-semibold text-sm">{galleryItems[4].title}</h3>
              <p id={galleryItems[4].captionId} className="font-inter text-cosmos-muted text-xs mt-1 hidden md:block">{galleryItems[4].caption}</p>
            </div>
          </div>

          {/* Last item full width */}
          <div className="col-span-2 md:col-span-3 group relative rounded-2xl overflow-hidden aspect-[3x1]" style={{ aspectRatio: '3/1' }}>
            <img
              alt={galleryItems[7].title}
              data-strk-img-id={galleryItems[7].imgId}
              data-strk-img={`[${galleryItems[7].captionId}] [${galleryItems[7].titleId}] [gallery-section-title]`}
              data-strk-img-ratio="3x2"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 id={galleryItems[7].titleId} className="font-grotesk text-cosmos-text font-semibold text-lg">{galleryItems[7].title}</h3>
              <p id={galleryItems[7].captionId} className="font-inter text-cosmos-muted text-sm mt-1">{galleryItems[7].caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
