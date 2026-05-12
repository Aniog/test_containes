import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teas = [
  {
    id: 'strawberry-lemon',
    emoji: '🍓',
    name: 'Strawberry Lemon Bliss',
    description: 'Sun-ripened strawberries meet zesty lemon in this refreshing classic. Sweet, tangy, and utterly irresistible.',
    tags: ['Bestseller', 'Iced'],
    price: '$5.50',
    color: 'bg-rose-50',
  },
  {
    id: 'mango-passion',
    emoji: '🥭',
    name: 'Mango Passion Twist',
    description: 'Tropical mango blended with exotic passionfruit for a vibrant, sunshine-in-a-cup experience.',
    tags: ['Tropical', 'Hot or Iced'],
    price: '$5.50',
    color: 'bg-amber-50',
  },
  {
    id: 'peach-hibiscus',
    emoji: '🍑',
    name: 'Peach Hibiscus Dream',
    description: 'Velvety peach with the floral tartness of hibiscus. A beautiful ruby-red brew that tastes as good as it looks.',
    tags: ['Floral', 'Antioxidant'],
    price: '$5.50',
    color: 'bg-pink-50',
  },
  {
    id: 'blueberry-mint',
    emoji: '🫐',
    name: 'Blueberry Mint Chill',
    description: 'Plump blueberries with a cool mint finish. Refreshing, bold, and packed with natural goodness.',
    tags: ['Refreshing', 'Iced'],
    price: '$5.50',
    color: 'bg-indigo-50',
  },
  {
    id: 'watermelon-basil',
    emoji: '🍉',
    name: 'Watermelon Basil Splash',
    description: 'Juicy watermelon with a surprising hint of fresh basil. Light, summery, and completely unique.',
    tags: ['Seasonal', 'Light'],
    price: '$5.50',
    color: 'bg-green-50',
  },
  {
    id: 'citrus-ginger',
    emoji: '🍊',
    name: 'Citrus Ginger Zing',
    description: 'A bold blend of orange, grapefruit, and warming ginger. The perfect pick-me-up any time of day.',
    tags: ['Energising', 'Hot or Iced'],
    price: '$5.50',
    color: 'bg-orange-50',
  },
];

const TeaCard = ({ tea, containerRef }) => (
  <div className={`${tea.color} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow border border-border group`}>
    <div className="flex items-start justify-between">
      <span className="text-4xl">{tea.emoji}</span>
      <span className="font-display font-bold text-coral text-lg">{tea.price}</span>
    </div>
    <div className="relative w-full h-44 rounded-xl overflow-hidden">
      <img
        id={`tea-img-${tea.id}`}
        alt={tea.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-strk-img-id={`tea-card-${tea.id}-img`}
        data-strk-img={`[tea-desc-${tea.id}] [tea-name-${tea.id}] fruit tea drink`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
    <div>
      <h3 id={`tea-name-${tea.id}`} className="font-display font-bold text-charcoal text-xl mb-2">{tea.name}</h3>
      <p id={`tea-desc-${tea.id}`} className="font-body text-muted text-sm leading-relaxed">{tea.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tea.tags.map((tag) => (
        <span key={tag} className="bg-leaf-light text-leaf text-xs font-body font-bold px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="menu" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-petal text-coral text-xs font-body font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Our Menu
          </span>
          <h2 id="menu-title" className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Find Your Favourite
          </h2>
          <p id="menu-subtitle" className="font-body text-muted text-lg max-w-xl mx-auto">
            Every blend is crafted with real fruit and premium tea leaves. Served hot or iced — your choice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} containerRef={containerRef} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted text-sm">
            All teas available hot or iced · Customise sweetness level · Dairy-free options available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
