import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-chip',
    titleId: 'feat-chip-title',
    descId: 'feat-chip-desc',
    imgId: 'feat-chip-img-4a2b1c',
    title: 'M4 Chip',
    desc: 'The next-generation M4 chip delivers breakthrough CPU and GPU performance with incredible power efficiency.',
    badge: 'New',
  },
  {
    id: 'feat-memory',
    titleId: 'feat-memory-title',
    descId: 'feat-memory-desc',
    imgId: 'feat-memory-img-9d3e2f',
    title: 'Up to 64GB Memory',
    desc: 'Unified memory architecture lets the CPU, GPU, and Neural Engine share data at blazing speeds.',
    badge: 'Pro',
  },
  {
    id: 'feat-ai',
    titleId: 'feat-ai-title',
    descId: 'feat-ai-desc',
    imgId: 'feat-ai-img-7c5f8a',
    title: 'Apple Intelligence',
    desc: 'Built-in AI capabilities powered by the Neural Engine for smarter, faster everyday tasks.',
    badge: 'AI',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Features</span>
          <h2 id="features-title" className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            Built for what's next
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Every component engineered to push the boundaries of what a mini PC can do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="group rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-gray-50"
            >
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  alt={f.title}
                  data-strk-img-id={f.imgId}
                  data-strk-img={`[${f.descId}] [${f.titleId}] [features-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {f.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 id={f.titleId} className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p id={f.descId} className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
