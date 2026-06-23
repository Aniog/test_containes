import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const introImages = [
  {
    id: 'intro-img-1',
    imgId: 'intro-img-mc101',
    titleId: 'intro-title-1',
    descId: 'intro-desc-1',
    title: 'Microscopic Cells',
    desc: 'Human cells magnified thousands of times under electron microscopy',
  },
  {
    id: 'intro-img-2',
    imgId: 'intro-img-mc102',
    titleId: 'intro-title-2',
    descId: 'intro-desc-2',
    title: 'Crystal Structures',
    desc: 'Mineral crystals forming geometric patterns at microscopic scale',
  },
  {
    id: 'intro-img-3',
    imgId: 'intro-img-mc103',
    titleId: 'intro-title-3',
    descId: 'intro-desc-3',
    title: 'Bacteria Colonies',
    desc: 'Colorized scanning electron microscope image of bacteria',
  },
];

export default function Introduction() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cosmos-bg py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cosmos-cyan mb-4">
            What is MicroCosmos?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-cosmos-text mb-6">
            A Universe Too Small to See
          </h2>
          <p className="text-cosmos-muted text-lg max-w-3xl mx-auto leading-relaxed">
            The microscopic world is teeming with life, structure, and beauty invisible to the naked eye.
            From single-celled organisms to crystalline minerals, every drop of water and grain of soil
            contains an entire cosmos waiting to be discovered.
          </p>
        </div>

        {/* Three intro images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {introImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-card shadow-glow-cyan hover:shadow-glow-cyan-lg transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 id={item.titleId} className="text-cosmos-text font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
