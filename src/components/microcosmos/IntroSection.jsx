import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species', desc: 'Estimated species on Earth' },
  { value: '37T', label: 'Human Cells', desc: 'Cells in the human body' },
  { value: '1μm', label: 'Bacteria Size', desc: 'Average bacterial diameter' },
  { value: '99%', label: 'Invisible Life', desc: 'Life invisible to naked eye' },
];

export default function IntroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-cosmos-teal text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              What Is MicroCosmos?
            </p>
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-slate-50 leading-tight mb-6"
            >
              The Universe Beneath Your Feet
            </h2>
            <p
              id="about-desc"
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              MicroCosmos is a window into the invisible world — a realm of extraordinary
              complexity and beauty that exists all around us, yet remains hidden from
              ordinary sight. From the intricate architecture of a diatom to the alien
              elegance of a tardigrade, microscopic life is endlessly fascinating.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Using advanced microscopy techniques including electron microscopy, confocal
              imaging, and fluorescence photography, we reveal the stunning structures
              that make up the fabric of life itself.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-cosmos-teal/15 glow-teal">
            <img
              alt="Microscopic life close-up"
              data-strk-img-id="about-img-mc002"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cosmos-surface border border-cosmos-teal/15 rounded-2xl p-6 text-center hover:border-cosmos-teal/40 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-cosmos-teal mb-2">
                {stat.value}
              </div>
              <div className="text-slate-50 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
