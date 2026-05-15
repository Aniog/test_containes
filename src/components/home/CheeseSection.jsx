import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cheeseVarieties = [
  {
    id: 'cheese-1',
    name: 'Aged Cheddar',
    origin: 'Somerset, England',
    age: '18 months',
    flavour: 'Sharp, nutty, crystalline',
    description: 'A bold, crumbly cheddar aged in our cellars for 18 months, developing a complex sharpness and satisfying bite.',
    imgId: 'cheese-img-j1k2l3',
  },
  {
    id: 'cheese-2',
    name: 'Brie de Meaux',
    origin: 'Île-de-France',
    age: '4–6 weeks',
    flavour: 'Buttery, earthy, mild',
    description: 'A velvety soft-ripened cheese with a bloomy white rind and a luscious, creamy interior that melts on the tongue.',
    imgId: 'cheese-img-m4n5o6',
  },
  {
    id: 'cheese-3',
    name: 'Manchego',
    origin: 'La Mancha, Spain',
    age: '12 months',
    flavour: 'Tangy, grassy, firm',
    description: 'Made from pure Manchega sheep\'s milk, this firm cheese carries a distinctive herbal tang and a beautiful basket-weave rind.',
    imgId: 'cheese-img-p7q8r9',
  },
  {
    id: 'cheese-4',
    name: 'Gorgonzola',
    origin: 'Lombardy, Italy',
    age: '3 months',
    flavour: 'Bold, creamy, piquant',
    description: 'A rich Italian blue cheese with striking green-blue veins, offering a bold piquancy balanced by a creamy, spreadable texture.',
    imgId: 'cheese-img-s1t2u3',
  },
];

const CheeseSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="cheese" ref={containerRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-semibold text-brown mb-3 block">
            Aged to Perfection
          </span>
          <h2
            id="cheese-section-title"
            className="font-playfair text-4xl md:text-5xl font-bold text-brown-dark mb-4"
          >
            The Cheese Board
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            From soft and bloomy to hard and crystalline — our curated selection spans
            the world's finest cheesemaking traditions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cheeseVarieties.map((cheese) => (
            <div
              key={cheese.id}
              className="bg-parchment rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="relative overflow-hidden w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                <img
                  alt={cheese.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={cheese.imgId}
                  data-strk-img={`[${cheese.id}-desc] [${cheese.id}-name] [cheese-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 id={`${cheese.id}-name`} className="font-playfair text-xl font-bold text-brown-dark mb-1">
                  {cheese.name}
                </h3>
                <p className="text-brown text-xs font-semibold uppercase tracking-widest mb-3">
                  {cheese.origin} · Aged {cheese.age}
                </p>
                <p id={`${cheese.id}-desc`} className="text-warm-gray text-sm leading-relaxed mb-3">
                  {cheese.description}
                </p>
                <span className="inline-block bg-butter/30 text-brown-dark text-xs font-medium px-3 py-1 rounded-full self-start">
                  {cheese.flavour}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pairing tip */}
        <div className="mt-16 bg-sage rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl">🍷</div>
          <div>
            <h3 className="font-playfair text-2xl font-bold text-cream mb-2">
              Pairing Guide
            </h3>
            <p className="text-parchment leading-relaxed max-w-2xl">
              Match aged cheddars with a bold Cabernet Sauvignon, pair creamy Brie with a crisp Champagne,
              and serve Manchego alongside a dry Tempranillo. Our team is always happy to help you build
              the perfect board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheeseSection;
