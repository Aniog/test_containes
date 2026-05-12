import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  {
    imgId: 'highlight-img-9i0j',
    titleId: 'hl-title-1',
    descId: 'hl-desc-1',
    title: 'Celestial Coordinates',
    desc: 'Right Ascension and Declination — the longitude and latitude of the sky.',
    path: '/knowledge#constellations',
  },
  {
    imgId: 'highlight-img-1k2l',
    titleId: 'hl-title-2',
    descId: 'hl-desc-2',
    title: 'Life Cycle of a Star',
    desc: 'From nebula to neutron star — the dramatic journey of stellar evolution.',
    path: '/knowledge#stellar-evolution',
  },
  {
    imgId: 'highlight-img-3m4n',
    titleId: 'hl-title-3',
    descId: 'hl-desc-3',
    title: 'Telescopes & Light',
    desc: 'How we observe the invisible — from radio waves to gamma rays.',
    path: '/knowledge#observational',
  },
  {
    imgId: 'highlight-img-5o6p',
    titleId: 'hl-title-4',
    descId: 'hl-desc-4',
    title: 'Aurora Borealis',
    desc: 'Solar wind meets Earth\'s magnetosphere in a dance of light.',
    path: '/gallery',
  },
];

export default function HomeHighlights() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#2dd4bf] mb-3">
              Featured Topics
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#f0f4ff]">
              Highlights from the Cosmos
            </h2>
          </div>
          <Link
            to="/knowledge"
            className="flex items-center gap-2 text-sm text-[#8892b0] hover:text-[#f0f4ff] transition-colors group"
          >
            View all topics
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ imgId, titleId, descId, title, desc, path }) => (
            <Link
              key={imgId}
              to={path}
              className="group relative rounded-xl overflow-hidden border border-[#1e2a4a] hover:border-[#6366f1]/40 transition-all duration-500 aspect-[3/4]"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={title}
                data-strk-img-id={imgId}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={titleId} className="text-sm font-medium text-[#f0f4ff] mb-1.5 leading-snug">
                  {title}
                </h3>
                <p id={descId} className="text-xs text-[#8892b0] leading-relaxed line-clamp-2">
                  {desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
