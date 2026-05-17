import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingCart } from 'lucide-react';

const plants = [
  {
    id: 'p1',
    name: 'Monstera Deliciosa',
    description: 'The iconic split-leaf plant. Perfect for bright living rooms.',
    price: '$24.99',
    badge: 'Best Seller',
  },
  {
    id: 'p2',
    name: 'Peace Lily',
    description: 'Elegant white blooms and air-purifying qualities. Low maintenance.',
    price: '$18.99',
    badge: 'Air Purifier',
  },
  {
    id: 'p3',
    name: 'Pothos',
    description: 'Trailing vines that thrive in any light. Great for beginners.',
    price: '$12.99',
    badge: 'Easy Care',
  },
  {
    id: 'p4',
    name: 'Snake Plant',
    description: 'Architectural and bold. Survives low light and irregular watering.',
    price: '$21.99',
    badge: 'Low Light',
  },
  {
    id: 'p5',
    name: 'Fiddle Leaf Fig',
    description: 'A statement plant with large, glossy leaves. A designer favorite.',
    price: '$34.99',
    badge: 'Statement',
  },
  {
    id: 'p6',
    name: 'ZZ Plant',
    description: 'Glossy, waxy leaves and nearly indestructible. Perfect for any room.',
    price: '$19.99',
    badge: 'Beginner',
  },
];

const PlantCard = ({ plant }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
    <div className="relative overflow-hidden h-52 bg-brand-green-pale">
      <img
        alt={plant.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={`plant-img-${plant.id}`}
        data-strk-img={`[plant-desc-${plant.id}] [plant-name-${plant.id}] [section-title-plants]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      {plant.badge && (
        <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
          {plant.badge}
        </span>
      )}
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 id={`plant-name-${plant.id}`} className="text-brand-text font-bold text-lg mb-1">
        {plant.name}
      </h3>
      <p id={`plant-desc-${plant.id}`} className="text-brand-muted text-sm leading-relaxed flex-1">
        {plant.description}
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-brand-green font-black text-xl">{plant.price}</span>
        <button className="flex items-center gap-2 bg-brand-green text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-brand-green-light transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const PlantsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="plants" ref={containerRef} className="bg-brand-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Our Collection</span>
          <h2 id="section-title-plants" className="text-brand-text font-black text-4xl md:text-5xl mt-2 mb-4">
            Popular Green Plants
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto leading-relaxed">
            Each plant is carefully selected and nurtured before it reaches your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border-2 border-brand-green text-brand-green rounded-full px-8 py-3 font-bold hover:bg-brand-green hover:text-white transition-colors"
          >
            View Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlantsSection;
