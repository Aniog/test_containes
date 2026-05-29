import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-bacteria',
    title: 'Bacteria',
    subtitle: 'Single-celled prokaryotes',
    description:
      'The most abundant life forms on Earth. Bacteria inhabit every environment imaginable, from deep ocean vents to the human gut.',
    tag: 'Prokaryote',
    imgId: 'feat-img-bact01',
  },
  {
    id: 'feat-virus',
    title: 'Viruses',
    subtitle: 'Nanoscale infectious agents',
    description:
      'Smaller than any cell, viruses hijack living cells to replicate. They drive evolution and shape ecosystems across the planet.',
    tag: 'Pathogen',
    imgId: 'feat-img-viru01',
  },
  {
    id: 'feat-fungi',
    title: 'Fungi',
    subtitle: 'Spore-bearing organisms',
    description:
      'From microscopic yeasts to vast underground networks, fungi are nature\'s recyclers, breaking down organic matter and forming vital symbioses.',
    tag: 'Eukaryote',
    imgId: 'feat-img-fung01',
  },
];

const FeaturedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
            Featured Worlds
          </span>
          <h2 id="featured-heading" className="text-4xl font-bold text-white mt-2 mb-4">
            Life at the Microscale
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover the major kingdoms of microscopic life and the extraordinary roles they play in our biosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-subtitle] [${item.id}-title] [featured-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-teal-500/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full border border-teal-500/30">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={`${item.id}-title`} className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p id={`${item.id}-subtitle`} className="text-teal-400 text-sm mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/organisms"
            className="border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-3 rounded-full transition-colors inline-block"
          >
            View All Organisms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
