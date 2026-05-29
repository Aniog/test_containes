import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const wines = [
  {
    id: 'chateau-rouge',
    name: 'Château Rouge',
    year: '2019',
    type: 'Red · Cabernet Sauvignon',
    region: 'Bordeaux, France',
    price: '$89',
    rating: '96',
    notes: 'Deep ruby with aromas of blackcurrant, cedar, and dark chocolate. Full-bodied with silky tannins and a long, elegant finish.',
    badge: 'Best Seller',
  },
  {
    id: 'blanc-de-lune',
    name: 'Blanc de Lune',
    year: '2022',
    type: 'White · Chardonnay',
    region: 'Burgundy, France',
    price: '$64',
    rating: '93',
    notes: 'Pale gold with notes of ripe peach, vanilla, and toasted oak. Crisp acidity balanced by a creamy, lingering finish.',
    badge: 'New Arrival',
  },
  {
    id: 'rosato-sole',
    name: 'Rosato del Sole',
    year: '2023',
    type: 'Rosé · Grenache',
    region: 'Provence, France',
    price: '$48',
    rating: '91',
    notes: 'Pale salmon with delicate strawberry, rose petal, and citrus zest. Light and refreshing with a dry, mineral finish.',
    badge: null,
  },
  {
    id: 'gran-reserva',
    name: 'Gran Reserva',
    year: '2016',
    type: 'Red · Tempranillo',
    region: 'Rioja, Spain',
    price: '$112',
    rating: '97',
    notes: 'Garnet with complex layers of dried cherry, leather, tobacco, and spice. Exceptional structure with velvety tannins.',
    badge: 'Award Winner',
  },
  {
    id: 'prosecco-brut',
    name: 'Prosecco Brut',
    year: 'NV',
    type: 'Sparkling · Glera',
    region: 'Veneto, Italy',
    price: '$38',
    rating: '90',
    notes: 'Fine persistent bubbles with fresh green apple, white peach, and floral notes. Light, lively, and perfectly balanced.',
    badge: null,
  },
  {
    id: 'malbec-alto',
    name: 'Malbec Alto',
    year: '2020',
    type: 'Red · Malbec',
    region: 'Mendoza, Argentina',
    price: '$55',
    rating: '94',
    notes: 'Deep violet with intense plum, violet, and mocha. Rich and velvety with a warm, spiced finish that lingers beautifully.',
    badge: 'Staff Pick',
  },
];

const badgeColors = {
  'Best Seller': 'bg-wine-primary text-wine-cream',
  'New Arrival': 'bg-wine-gold/20 text-wine-gold border border-wine-gold/40',
  'Award Winner': 'bg-wine-gold text-wine-deep',
  'Staff Pick': 'bg-wine-surface text-wine-muted border border-wine-border',
};

const WineCard = ({ wine }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="bg-wine-surface border border-wine-border rounded-2xl overflow-hidden shadow-lg hover:border-wine-gold/40 transition-all duration-300 group flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          id={`wine-img-${wine.id}`}
          alt={wine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`wine-card-img-${wine.id}`}
          data-strk-img={`[wine-notes-${wine.id}] [wine-name-${wine.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-surface via-transparent to-transparent" />
        {wine.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[wine.badge]}`}>
            {wine.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-wine-deep/80 text-wine-gold text-xs font-bold px-2 py-1 rounded-lg">
          {wine.rating} pts
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-wine-gold text-xs uppercase tracking-widest font-semibold mb-1">{wine.type}</p>
        <h3 id={`wine-name-${wine.id}`} className="font-serif text-xl text-wine-cream font-semibold mb-1">
          {wine.name} <span className="text-wine-muted font-normal text-base">{wine.year}</span>
        </h3>
        <p className="text-wine-muted text-sm mb-3">{wine.region}</p>
        <p id={`wine-notes-${wine.id}`} className="text-wine-muted text-sm leading-relaxed flex-1 mb-4">
          {wine.notes}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-wine-border">
          <span className="font-serif text-2xl text-wine-cream font-bold">{wine.price}</span>
          <button className="bg-wine-primary hover:bg-wine-hover text-wine-cream px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const filters = ['All', 'Red', 'White', 'Rosé', 'Sparkling'];

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = wines.filter((w) => {
    if (activeFilter === 'All') return true;
    return w.type.startsWith(activeFilter);
  });

  return (
    <section id="collection" className="bg-gradient-to-b from-wine-deep to-wine-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-4">Our Collection</p>
          <h2 className="font-serif text-4xl md:text-5xl text-wine-cream font-bold mb-4">
            Curated Fine Wines
          </h2>
          <p className="text-wine-muted text-lg max-w-xl mx-auto">
            Handpicked from the world's finest vineyards, each wine in our collection is a testament to exceptional craftsmanship.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border ${
                activeFilter === f
                  ? 'bg-wine-primary border-wine-primary text-wine-cream'
                  : 'border-wine-border text-wine-muted hover:border-wine-gold/50 hover:text-wine-cream bg-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
