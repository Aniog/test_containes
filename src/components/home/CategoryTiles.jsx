import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings editorial flat lay warm lighting',
    size: 'lg:col-span-1 lg:row-span-2',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklace draped editorial warm neutral',
    size: 'lg:col-span-1 lg:row-span-1',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings editorial styling',
    size: 'lg:col-span-1 lg:row-span-1',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide text-velmora-deep mb-4">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[280px] lg:auto-rows-[340px]">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className={`relative group overflow-hidden rounded-sm ${cat.size}`}
          >
            <div
              data-strk-bg-id={`cat-tile-${cat.id}`}
              data-strk-bg={`[cat-name-${cat.id}] ${cat.query}`}
              data-strk-bg-ratio={cat.id === 'earrings' ? '3x4' : '16x9'}
              data-strk-bg-width="800"
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-deep/30 group-hover:bg-velmora-deep/45 transition-all duration-500" />
            <span
              id={`cat-name-${cat.id}`}
              className="absolute inset-0 flex items-center justify-center font-serif text-2xl lg:text-3xl tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
