import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-paramecium',    label: 'Paramecium',        imgId: 'gal-img-mc013', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-diatom',        label: 'Diatom Shell',       imgId: 'gal-img-mc014', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-2' },
  { id: 'gal-pollen',        label: 'Pollen Grain',       imgId: 'gal-img-mc015', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-neuron',        label: 'Neuron Network',     imgId: 'gal-img-mc016', ratio: '16x9', width: 800, size: 'col-span-2 row-span-1' },
  { id: 'gal-tardigrade',    label: 'Tardigrade',         imgId: 'gal-img-mc017', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-crystal',       label: 'Salt Crystal',       imgId: 'gal-img-mc018', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-spore',         label: 'Fungal Spore',       imgId: 'gal-img-mc019', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-cell',          label: 'Cell Division',      imgId: 'gal-img-mc020', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-amoeba',        label: 'Amoeba',             imgId: 'gal-img-mc030', ratio: '16x9', width: 800, size: 'col-span-2 row-span-1' },
  { id: 'gal-snowflake',     label: 'Snowflake Crystal',  imgId: 'gal-img-mc031', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-2' },
  { id: 'gal-redbloodcell',  label: 'Red Blood Cells',    imgId: 'gal-img-mc032', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-mold',          label: 'Mold Spores',        imgId: 'gal-img-mc033', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-algaebloom',    label: 'Algae Bloom',        imgId: 'gal-img-mc034', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-mitosis',       label: 'Mitosis',            imgId: 'gal-img-mc035', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-nematode',      label: 'Nematode Worm',      imgId: 'gal-img-mc036', ratio: '4x3',  width: 600, size: 'col-span-2 row-span-1' },
  { id: 'gal-chloroplast',   label: 'Chloroplast',        imgId: 'gal-img-mc037', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-bacteriophage', label: 'Bacteriophage',      imgId: 'gal-img-mc038', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-radiolaria',    label: 'Radiolaria',         imgId: 'gal-img-mc039', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-2' },
  { id: 'gal-cilia',         label: 'Cilia Cells',        imgId: 'gal-img-mc040', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
  { id: 'gal-plankton',      label: 'Marine Plankton',    imgId: 'gal-img-mc041', ratio: '1x1',  width: 500, size: 'col-span-1 row-span-1' },
];

export default function GallerySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-gray-900 py-24 md:py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4 block">Visual Archive</span>
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            The MicroCosmos Gallery
          </h2>
          <p id="gallery-desc" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stunning microscopy images capturing the hidden beauty of the microscopic world — from single cells to intricate crystal structures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div key={item.id} className={`${item.size} rounded-2xl overflow-hidden border border-gray-700 group relative`}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}] [gallery-desc] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <span id={item.id} className="text-white font-semibold text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
