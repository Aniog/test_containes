import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    id: 'gallery-item-1',
    imgId: 'gallery-img-d4e5f6',
    titleId: 'gallery-title-1',
    descId: 'gallery-desc-1',
    title: 'Diatom Algae',
    description: 'Microscopic algae with intricate silica shells',
    tag: 'Algae',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-item-2',
    imgId: 'gallery-img-g7h8i9',
    titleId: 'gallery-title-2',
    descId: 'gallery-desc-2',
    title: 'Snowflake Crystal',
    description: 'Ice crystal formation under polarized light',
    tag: 'Crystals',
    ratio: '4x3',
    width: 800,
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gallery-item-3',
    imgId: 'gallery-img-j1k2l3',
    titleId: 'gallery-title-3',
    descId: 'gallery-desc-3',
    title: 'Tardigrade',
    description: 'Water bear — the most resilient creature on Earth',
    tag: 'Micro-animals',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-item-4',
    imgId: 'gallery-img-m4n5o6',
    titleId: 'gallery-title-4',
    descId: 'gallery-desc-4',
    title: 'Pollen Grains',
    description: 'Colorized scanning electron microscope image of pollen',
    tag: 'Botany',
    ratio: '1x1',
    width: 600,
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'gallery-item-5',
    imgId: 'gallery-img-p7q8r9',
    titleId: 'gallery-title-5',
    descId: 'gallery-desc-5',
    title: 'Neuron Network',
    description: 'Fluorescent imaging of neural connections in the brain',
    tag: 'Neuroscience',
    ratio: '4x3',
    width: 800,
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
];

const HomeGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Gallery</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Glimpses of the Invisible
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors shrink-0"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.size} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                id={item.imgId}
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500 bg-slate-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-teal-900/70 text-teal-300 border border-teal-700 rounded-full px-2.5 py-0.5 text-xs font-medium">
                  {item.tag}
                </span>
                <h3
                  id={item.titleId}
                  className="text-white font-semibold mt-2 text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-xs mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
