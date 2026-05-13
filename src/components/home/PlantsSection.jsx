import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingCart } from 'lucide-react';

const plants = [
  {
    id: 'plant-1',
    name: 'Peace Lily',
    category: 'Indoor Flowering',
    price: '$24.99',
    description: 'Elegant white blooms that purify the air. Perfect for low-light rooms.',
    badge: 'Best Seller',
    badgeColor: 'bg-green-700',
  },
  {
    id: 'plant-2',
    name: 'Orchid',
    category: 'Exotic Blooms',
    price: '$34.99',
    description: 'Stunning long-lasting flowers in vibrant colors. A true showstopper.',
    badge: 'Popular',
    badgeColor: 'bg-rose-500',
  },
  {
    id: 'plant-3',
    name: 'African Violet',
    category: 'Compact Bloomer',
    price: '$18.99',
    description: 'Cheerful purple flowers that bloom year-round. Great for windowsills.',
    badge: null,
    badgeColor: '',
  },
  {
    id: 'plant-4',
    name: 'Anthurium',
    category: 'Tropical Flower',
    price: '$29.99',
    description: 'Glossy heart-shaped blooms in red and pink. Adds a tropical touch.',
    badge: 'New Arrival',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 'plant-5',
    name: 'Kalanchoe',
    category: 'Succulent Bloomer',
    price: '$16.99',
    description: 'Clusters of tiny bright flowers. Low maintenance and long-blooming.',
    badge: null,
    badgeColor: '',
  },
  {
    id: 'plant-6',
    name: 'Bromeliad',
    category: 'Exotic Indoor',
    price: '$27.99',
    description: 'Bold, architectural plant with vibrant flower spikes. Unique and striking.',
    badge: 'Staff Pick',
    badgeColor: 'bg-purple-600',
  },
];

const PlantCard = ({ plant, sectionId }) => {
  const imgId = `plant-img-${plant.id}`;
  const nameId = `plant-name-${plant.id}`;
  const descId = `plant-desc-${plant.id}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          alt={plant.name}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${nameId}] [${sectionId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
        />
        {plant.badge && (
          <span className={`absolute top-3 left-3 ${plant.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {plant.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-green-700 uppercase tracking-wider">{plant.category}</span>
        <h3 id={nameId} className="font-serif font-semibold text-xl text-[#5c3d2e] mt-1 mb-2">{plant.name}</h3>
        <p id={descId} className="text-gray-500 text-sm leading-relaxed mb-4">{plant.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-[#5c3d2e]">{plant.price}</span>
          <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const PlantsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="plants" ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#fdf8f0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-700 text-sm font-medium uppercase tracking-widest">Our Collection</span>
          <h2 id="plants-section-title" className="font-serif font-bold text-4xl md:text-5xl text-[#5c3d2e] mt-2 mb-4">
            Live Flowering Plants
          </h2>
          <p id="plants-section-subtitle" className="text-gray-500 text-lg max-w-xl mx-auto">
            Each plant is carefully grown and selected to bring lasting beauty and freshness to your home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} sectionId="plants-section-title" />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-700 hover:text-white transition-colors"
          >
            Request a Custom Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlantsSection;
