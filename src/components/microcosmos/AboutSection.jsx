import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1 μm', label: 'Avg Bacteria Size' },
  { value: '37T', label: 'Cells in Human Body' },
  { value: '99%', label: 'Life is Microscopic' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-cosmos-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p id="about-label" className="text-xs font-semibold uppercase tracking-widest text-cosmos-magenta mb-3">
              What is MicroCosmos?
            </p>
            <h2 id="about-title" className="text-3xl md:text-5xl font-extrabold text-cosmos-text mb-6 leading-tight">
              Life at the Scale of Micrometers
            </h2>
            <p id="about-desc" className="text-cosmos-muted text-lg leading-relaxed mb-6">
              The microcosmos is a world teeming with life invisible to the naked eye. From single-celled organisms navigating their watery worlds, to the intricate machinery inside every living cell — this hidden universe is more complex and beautiful than most people ever imagine.
            </p>
            <p className="text-cosmos-muted leading-relaxed mb-8">
              Through advanced microscopy techniques — fluorescence, electron, and confocal imaging — scientists have revealed landscapes of breathtaking detail. Every drop of pond water is a bustling metropolis. Every grain of soil holds entire ecosystems.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-cosmos-surface border border-cosmos-border rounded-2xl p-4">
                  <div className="text-2xl font-extrabold text-cosmos-cyan">{s.value}</div>
                  <div className="text-sm text-cosmos-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-video rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Microscopic life under fluorescence microscopy"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-main-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Single cell organism microscopy"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-cell-g7h8i9"
                data-strk-img="single cell organism microscopy [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Bacteria colony microscope image"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-bacteria-j1k2l3"
                data-strk-img="bacteria colony colorful microscope [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
