import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-1',
    titleId: 'feat-title-1',
    subtitleId: 'feat-sub-1',
    title: 'Bacterial Colonies',
    subtitle: 'Microscopic bacteria forming intricate colony patterns under electron microscope',
    description:
      'Bacteria are among the oldest life forms on Earth. Their colonies form stunning geometric patterns visible only under powerful microscopes.',
    badge: 'Prokaryotes',
  },
  {
    id: 'feat-2',
    titleId: 'feat-title-2',
    subtitleId: 'feat-sub-2',
    title: 'Living Cells',
    subtitle: 'Human cells dividing and growing in fluorescent microscopy imaging',
    description:
      'Every living organism is built from cells. Fluorescent microscopy reveals the intricate machinery inside each one — organelles, membranes, and DNA.',
    badge: 'Cell Biology',
  },
  {
    id: 'feat-3',
    titleId: 'feat-title-3',
    subtitleId: 'feat-sub-3',
    title: 'Fungal Networks',
    subtitle: 'Mycelium fungal network threads spreading through soil microscope view',
    description:
      'Fungi form vast underground networks called mycelium — nature\'s internet — connecting trees and plants across entire forests.',
    badge: 'Mycology',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Featured Worlds</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Explore the Microscopic
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Three kingdoms of life, each more astonishing than the last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`explore-img-${feat.id}`}
                  data-strk-img={`[${feat.subtitleId}] [${feat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full px-3 py-1 text-xs uppercase tracking-widest">
                  {feat.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 id={feat.titleId} className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p id={feat.subtitleId} className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
