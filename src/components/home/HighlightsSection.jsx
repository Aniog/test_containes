import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  {
    id: 'hl-tardigrade',
    title: 'Tardigrades',
    subtitle: 'The Indestructible',
    description: 'Survive in outer space, extreme radiation, and boiling water.',
    imgId: 'hl-img-tardi01',
  },
  {
    id: 'hl-diatom',
    title: 'Diatoms',
    subtitle: 'Glass Architects',
    description: 'Single-celled algae with intricate silica shells of stunning beauty.',
    imgId: 'hl-img-diat01',
  },
  {
    id: 'hl-radiolaria',
    title: 'Radiolaria',
    subtitle: 'Ocean Jewels',
    description: 'Marine protozoa with geometric mineral skeletons of extraordinary complexity.',
    imgId: 'hl-img-radio01',
  },
  {
    id: 'hl-slime',
    title: 'Slime Molds',
    subtitle: 'Collective Intelligence',
    description: 'Solve mazes and find optimal paths without a brain or nervous system.',
    imgId: 'hl-img-slime01',
  },
];

const HighlightsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
            Remarkable Creatures
          </span>
          <h2 id="highlights-heading" className="text-4xl font-bold text-white mt-2 mb-4">
            Nature's Most Extraordinary Microbes
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Some microscopic organisms defy everything we thought we knew about the limits of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-subtitle] [${item.id}-title] [highlights-heading]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p id={`${item.id}-subtitle`} className="text-teal-400 text-xs font-medium mb-1">
                  {item.subtitle}
                </p>
                <h3 id={`${item.id}-title`} className="text-white font-bold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-8 py-3 rounded-full transition-colors inline-block"
          >
            Browse Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
