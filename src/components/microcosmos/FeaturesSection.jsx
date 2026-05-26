import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FACTS = [
  { value: '10³⁰', label: 'Microbes on Earth', color: 'text-cyan-400' },
  { value: '99%', label: 'Species Undiscovered', color: 'text-violet-400' },
  { value: '3.5B', label: 'Years of Microbial Life', color: 'text-emerald-400' },
  { value: '50%', label: 'Oxygen from Microbes', color: 'text-amber-400' },
];

const FEATURES = [
  {
    id: 'feat-title-1',
    imgId: 'feat-img-mc020',
    tag: 'Electron Microscopy',
    title: 'Seeing the Unseeable',
    desc: 'Modern scanning electron microscopes can resolve structures as small as 1 nanometer — revealing the molecular machinery of life itself. Every protein, every membrane fold, every flagellum becomes visible.',
    color: 'cyan',
    imgSide: 'right',
  },
  {
    id: 'feat-title-2',
    imgId: 'feat-img-mc021',
    tag: 'Bioluminescence',
    title: 'Life That Glows in the Dark',
    desc: 'Dinoflagellates, firefly bacteria, and deep-sea organisms produce their own cold light through chemical reactions. These living lanterns illuminate the ocean\'s midnight zone in waves of blue fire.',
    color: 'violet',
    imgSide: 'left',
  },
  {
    id: 'feat-title-3',
    imgId: 'feat-img-mc022',
    tag: 'Extremophiles',
    title: 'Life at the Edge of Possibility',
    desc: 'Tardigrades survive the vacuum of space. Thermophiles thrive in boiling volcanic vents. Psychrophiles colonize Antarctic ice. Microscopic life has conquered every extreme environment on Earth.',
    color: 'emerald',
    imgSide: 'right',
  },
];

const colorMap = {
  cyan: { tag: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30', title: 'text-cyan-400' },
  violet: { tag: 'text-violet-400 bg-violet-400/10 border-violet-400/30', title: 'text-violet-400' },
  emerald: { tag: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30', title: 'text-emerald-400' },
};

export default function FeaturesSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-slate-950">
      {/* Stats bar */}
      <div className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {FACTS.map((f) => (
            <div key={f.label}>
              <div className={`text-3xl md:text-4xl font-black mb-1 ${f.color}`}>{f.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature rows */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 md:space-y-32">
          {FEATURES.map((feat) => {
            const c = colorMap[feat.color];
            const isRight = feat.imgSide === 'right';
            return (
              <div
                key={feat.id}
                className={`flex flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}
              >
                {/* Text */}
                <div className="flex-1">
                  <span className={`text-xs font-semibold uppercase tracking-widest border px-3 py-1 rounded-full ${c.tag}`}>
                    {feat.tag}
                  </span>
                  <h3 id={feat.id} className={`text-2xl md:text-4xl font-bold mt-4 mb-4 ${c.title}`}>
                    {feat.title}
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">{feat.desc}</p>
                </div>
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden border border-slate-700/50 aspect-[4/3]">
                    <img
                      alt={feat.title}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                      data-strk-img-id={feat.imgId}
                      data-strk-img={`[${feat.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
