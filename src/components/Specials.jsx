import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Flame, Star } from 'lucide-react';

const specials = [
  {
    id: 's1',
    badge: "Chef's Special",
    name: 'Truffle Mushroom Pizza',
    desc: 'Our signature pizza with wild porcini, black truffle cream, fresh thyme, and aged parmigiano — a luxurious wood-fired experience.',
    price: '$24',
    note: 'Available Friday & Saturday evenings',
    highlight: true,
  },
  {
    id: 's2',
    badge: 'Morning Star',
    name: 'Breakfast Pastry Box',
    desc: 'A curated selection of our freshest morning bakes: croissants, pain au chocolat, fruit danish, and a mini sourdough loaf.',
    price: '$22',
    note: 'Order by 8 PM for next-day pickup',
    highlight: false,
  },
  {
    id: 's3',
    badge: 'Seasonal',
    name: 'Strawberry Tart',
    desc: 'Buttery shortcrust pastry filled with vanilla custard cream and topped with fresh seasonal strawberries and a light glaze.',
    price: '$6',
    note: 'Limited quantities daily',
    highlight: false,
  },
];

const Specials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specials" className="py-24 bg-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Limited Offerings</p>
          <h2 id="specials-title" className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">
            Today's Specials
          </h2>
          <p id="specials-subtitle" className="text-white/60 text-lg max-w-xl mx-auto">
            Seasonal creations and chef's picks that change regularly — don't miss out.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl overflow-hidden flex flex-col ${
                item.highlight
                  ? 'ring-2 ring-accent shadow-2xl shadow-accent/20'
                  : 'border border-white/10'
              } bg-white/5 backdrop-blur-sm`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={`special-img-${item.id}`}
                  data-strk-img={`[special-desc-${item.id}] [special-name-${item.id}] [specials-subtitle] [specials-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  {item.highlight && <Flame className="w-4 h-4 text-accent" />}
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.highlight ? 'bg-accent text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 id={`special-name-${item.id}`} className="font-serif font-bold text-xl text-white leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-bold text-accent text-xl flex-shrink-0">{item.price}</span>
                </div>
                <p id={`special-desc-${item.id}`} className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Star className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>{item.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-8 py-4 font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <Flame className="w-5 h-5" />
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specials;
