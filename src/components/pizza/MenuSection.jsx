import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const pizzas = [
  {
    id: 'margherita',
    name: 'Margherita',
    desc: 'San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil',
    price: '$14',
    tag: 'Classic',
  },
  {
    id: 'diavola',
    name: 'Diavola',
    desc: 'Spicy salami, crushed tomato, smoked mozzarella, chili flakes',
    price: '$17',
    tag: 'Spicy',
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    desc: 'Mozzarella, gorgonzola, parmesan, ricotta, honey drizzle',
    price: '$18',
    tag: 'Fan Favorite',
  },
  {
    id: 'truffle-funghi',
    name: 'Truffle Funghi',
    desc: 'Wild mushrooms, truffle oil, fontina, fresh thyme, garlic',
    price: '$20',
    tag: 'Chef\'s Pick',
  },
];

export default function MenuSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="menu" className="py-20 px-6 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm mb-3">Our Specialties</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pies Worth Every Bite
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E67E22]/50 transition group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={pizza.name}
                  id={`pizza-img-${pizza.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  data-strk-img-id={`menu-img-${pizza.id}-7g8h`}
                  data-strk-img={`[pizza-name-${pizza.id}] [pizza-desc-${pizza.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                />
                <span className="absolute top-3 left-3 bg-[#C0392B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {pizza.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 id={`pizza-name-${pizza.id}`} className="text-white font-bold text-xl">{pizza.name}</h3>
                  <span className="text-[#E67E22] font-bold text-lg">{pizza.price}</span>
                </div>
                <p id={`pizza-desc-${pizza.id}`} className="text-white/60 text-sm leading-relaxed">{pizza.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
