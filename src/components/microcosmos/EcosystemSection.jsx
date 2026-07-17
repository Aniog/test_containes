import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'eco-01', titleId: 'eco-01-title', descId: 'eco-01-desc',
    imgId: 'eco-img-mc015',
    title: 'Ocean Plankton', desc: 'Microscopic marine organisms that form the base of ocean food webs',
    size: 'large',
  },
  {
    id: 'eco-02', titleId: 'eco-02-title', descId: 'eco-02-desc',
    imgId: 'eco-img-mc016',
    title: 'Soil Microbiome', desc: 'Billions of bacteria and fungi in a teaspoon of healthy soil',
    size: 'small',
  },
  {
    id: 'eco-03', titleId: 'eco-03-title', descId: 'eco-03-desc',
    imgId: 'eco-img-mc017',
    title: 'Gut Flora', desc: 'Trillions of microbes living in the human digestive system',
    size: 'small',
  },
  {
    id: 'eco-04', titleId: 'eco-04-title', descId: 'eco-04-desc',
    imgId: 'eco-img-mc018',
    title: 'Pond Water Life', desc: 'A single drop of pond water teems with hundreds of species',
    size: 'small',
  },
  {
    id: 'eco-05', titleId: 'eco-05-title', descId: 'eco-05-desc',
    imgId: 'eco-img-mc019',
    title: 'Root Mycorrhizae', desc: 'Fungal networks connecting plant roots underground',
    size: 'small',
  },
  {
    id: 'eco-06', titleId: 'eco-06-title', descId: 'eco-06-desc',
    imgId: 'eco-img-mc020',
    title: 'Biofilm Communities', desc: 'Organized bacterial communities on surfaces',
    size: 'large',
  },
];

export default function EcosystemSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const large = ecosystems.filter((e) => e.size === 'large');
  const small = ecosystems.filter((e) => e.size === 'small');

  return (
    <section id="ecosystem" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cosmos-teal text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Hidden Worlds
          </p>
          <h2
            id="ecosystem-title"
            className="text-4xl md:text-5xl font-bold text-slate-50 mb-4"
          >
            Microscopic Ecosystems
          </h2>
          <p
            id="ecosystem-subtitle"
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Every environment on Earth hosts its own invisible civilization — from ocean depths to your own skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {large.map((item) => (
            <div
              key={item.id}
              className="group relative md:col-span-1 rounded-2xl overflow-hidden border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-300"
            >
              <div className="aspect-[3x4] md:aspect-auto md:h-80 overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [ecosystem-subtitle] [ecosystem-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={item.titleId} className="text-slate-50 font-bold text-lg mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}

          <div className="md:col-span-2 grid grid-cols-2 gap-5">
            {small.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [ecosystem-subtitle] [ecosystem-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 id={item.titleId} className="text-slate-50 font-semibold text-sm mb-0.5">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-slate-400 text-xs leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-cosmos-teal/15 bg-cosmos-elevated p-10 text-center">
          <p className="text-cosmos-teal text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Did You Know?
          </p>
          <blockquote className="text-slate-200 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "There are more microorganisms in a teaspoon of healthy soil than there are
            people who have ever lived on Earth."
          </blockquote>
          <p className="text-slate-500 text-sm mt-4">— Microbiology Research Institute</p>
        </div>
      </div>
    </section>
  );
}
