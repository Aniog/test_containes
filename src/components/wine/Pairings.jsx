import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const pairings = [
  {
    id: 'red-meat',
    food: 'Red Meat & Game',
    wine: 'Cabernet Sauvignon',
    description: 'The bold tannins of Cabernet cut through the richness of red meat, creating a harmonious balance of flavors.',
    icon: '🥩',
  },
  {
    id: 'seafood',
    food: 'Seafood & Shellfish',
    wine: 'Chardonnay',
    description: 'Crisp, mineral-driven Chardonnay complements the delicate sweetness of fresh seafood and shellfish.',
    icon: '🦞',
  },
  {
    id: 'cheese',
    food: 'Artisan Cheese',
    wine: 'Pinot Noir',
    description: 'The earthy, fruit-forward notes of Pinot Noir pair beautifully with aged and soft-ripened cheeses.',
    icon: '🧀',
  },
  {
    id: 'pasta',
    food: 'Pasta & Risotto',
    wine: 'Sangiovese',
    description: 'Italy\'s beloved Sangiovese is the natural companion to tomato-based pastas and creamy risottos.',
    icon: '🍝',
  },
  {
    id: 'dessert',
    food: 'Chocolate & Desserts',
    wine: 'Late Harvest Riesling',
    description: 'The honeyed sweetness of late harvest Riesling creates a divine contrast with rich chocolate desserts.',
    icon: '🍫',
  },
  {
    id: 'appetizers',
    food: 'Charcuterie & Tapas',
    wine: 'Rosé',
    description: 'Versatile and refreshing, Rosé bridges the gap between light and bold flavors on any charcuterie board.',
    icon: '🫒',
  },
];

const Pairings = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="pairings" ref={containerRef} className="bg-gradient-to-b from-wine-surface to-wine-deep py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-4">Food & Wine</p>
          <h2 id="pairings-title" className="font-serif text-4xl md:text-5xl text-wine-cream font-bold mb-4">
            The Perfect Pairing
          </h2>
          <p id="pairings-subtitle" className="text-wine-muted text-lg max-w-xl mx-auto">
            Elevate every meal with the right wine. Our sommelier-curated pairings guide you to unforgettable dining experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairings.map((pair) => (
            <div
              key={pair.id}
              className="bg-wine-surface border border-wine-border rounded-2xl p-6 hover:border-wine-gold/40 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{pair.icon}</div>
              <p className="text-wine-gold text-xs uppercase tracking-widest font-semibold mb-1">
                Pairs with {pair.wine}
              </p>
              <h3 className="font-serif text-xl text-wine-cream font-semibold mb-3">
                {pair.food}
              </h3>
              <p className="text-wine-muted text-sm leading-relaxed">
                {pair.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden relative">
          <div
            className="h-72 md:h-96"
            data-strk-bg-id="pairings-banner-g7h8i9"
            data-strk-bg="[pairings-subtitle] [pairings-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wine-deep/90 via-wine-deep/60 to-transparent flex items-center">
            <div className="px-10 md:px-16 max-w-lg">
              <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-3">Expert Guidance</p>
              <h3 className="font-serif text-3xl md:text-4xl text-wine-cream font-bold mb-4">
                Book a Private Tasting
              </h3>
              <p className="text-wine-muted text-base mb-6">
                Let our sommeliers guide you through a curated tasting experience tailored to your palate.
              </p>
              <a
                href="#contact"
                className="inline-block bg-wine-primary hover:bg-wine-hover text-wine-cream px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pairings;
