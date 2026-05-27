import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Microbial Species' },
  { value: '37T', label: 'Cells in the Human Body' },
  { value: '1mm³', label: 'Water holds 1M bacteria' },
  { value: '3.5B', label: 'Years of Microbial Life' },
];

const HomeStats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-3">
              The Scale of the Invisible
            </p>
            <h2
              id="stats-title"
              className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-6 leading-tight"
            >
              A Universe Hidden in Plain Sight
            </h2>
            <p
              id="stats-desc"
              className="font-body text-slate-400 text-base md:text-lg leading-relaxed mb-8"
            >
              The microscopic world is not just small — it is vast beyond imagination.
              Billions of organisms thrive in every environment on Earth, from the
              deepest ocean trenches to the highest mountain peaks, from boiling
              hydrothermal vents to frozen Antarctic ice.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-cosmos-primary pl-4">
                  <p className="font-heading font-bold text-2xl md:text-3xl text-cosmos-primary">
                    {s.value}
                  </p>
                  <p className="font-body text-sm text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                alt="Microscopic organism close-up"
                className="w-full h-full object-cover"
                data-strk-img-id="stats-img-mc005"
                data-strk-img="[stats-desc] [stats-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  alt="Bacteria under microscope"
                  className="w-full h-full object-cover"
                  data-strk-img-id="stats-img-mc006"
                  data-strk-img="bacteria microscope colorful [stats-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  alt="Microorganism in water"
                  className="w-full h-full object-cover"
                  data-strk-img-id="stats-img-mc007"
                  data-strk-img="microorganism water drop microscope [stats-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
