import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock } from 'lucide-react';

const specials = [
  {
    id: 'sunday-brunch',
    titleId: 'special-sunday-brunch-title',
    descId: 'special-sunday-brunch-desc',
    imgId: 'special-img-sunday-brunch-j1k2l3',
    title: 'Sunday Brunch Board',
    desc: 'Sourdough toast, house-made ricotta, seasonal jam, soft-boiled eggs, and a pastry of the day.',
    badge: 'Weekend Only',
    time: 'Sat–Sun · 9am–1pm',
  },
  {
    id: 'pizza-night',
    titleId: 'special-pizza-night-title',
    descId: 'special-pizza-night-desc',
    imgId: 'special-img-pizza-night-m4n5o6',
    title: 'Pizza Night Special',
    desc: 'Any two pizzas + a bottle of house wine for a fixed price. Perfect for date night.',
    badge: 'Friday & Saturday',
    time: 'Fri–Sat · 6pm–10pm',
  },
  {
    id: 'bakers-dozen',
    titleId: 'special-bakers-dozen-title',
    descId: 'special-bakers-dozen-desc',
    imgId: 'special-img-bakers-dozen-p7q8r9',
    title: "Baker's Dozen Box",
    desc: 'A curated box of 13 freshly baked items — croissants, rolls, and a seasonal sweet treat.',
    badge: 'Pre-order',
    time: 'Daily · Pick up by 10am',
  },
];

export default function Specials() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specials" ref={containerRef} className="bg-charcoal py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-inter text-sm uppercase tracking-widest text-ember mb-3">Limited Time</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Weekly Specials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {specials.map((s) => (
            <div key={s.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={s.title}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-ember text-white text-xs font-semibold font-inter px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 id={s.titleId} className="font-playfair text-xl font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p id={s.descId} className="font-inter text-sm text-white/70 leading-relaxed mb-4">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-ember">
                  <Clock size={14} />
                  <span className="font-inter text-xs font-medium">{s.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
