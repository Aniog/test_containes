import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const mosaicImages = [
  { id: 'mosaic-1', imgId: 'mosaic-img-p1q2r3', query: 'microscopic diatom algae under electron microscope', ratio: '1x1', width: 400 },
  { id: 'mosaic-2', imgId: 'mosaic-img-s4t5u6', query: 'colorful fluorescent microscopy human cell nucleus', ratio: '1x1', width: 400 },
  { id: 'mosaic-3', imgId: 'mosaic-img-v7w8x9', query: 'pollen grain microscope magnification', ratio: '1x1', width: 400 },
  { id: 'mosaic-4', imgId: 'mosaic-img-y0z1a2', query: 'tardigrade water bear microscope', ratio: '1x1', width: 400 },
  { id: 'mosaic-5', imgId: 'mosaic-img-b3c4d5', query: 'snowflake crystal macro photography', ratio: '1x1', width: 400 },
  { id: 'mosaic-6', imgId: 'mosaic-img-e6f7g8', query: 'bacteria colony petri dish microscope', ratio: '1x1', width: 400 },
];

const HomeMosaic = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-microsurface/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
              Image mosaic
            </p>
            <h2 id="mosaic-heading" className="font-display font-bold text-3xl md:text-5xl text-microtext">
              A Glimpse of the Invisible
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-microteal text-microbg font-semibold px-6 py-3 rounded-full hover:bg-microglow transition-colors shrink-0"
          >
            Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {mosaicImages.map((item, i) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '1/2' : '1/1' }}
            >
              <img
                alt={`Microscopic specimen ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={item.imgId}
                data-strk-img={`[mosaic-heading] ${item.query}`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-microbg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMosaic;
