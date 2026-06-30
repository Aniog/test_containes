import { Link } from 'react-router-dom';
import { useState } from 'react';

const tiles = [
  {
    label: 'Earrings',
    query: 'gold earrings collection flatlay dark background editorial jewelry',
    filter: 'Earrings',
  },
  {
    label: 'Necklaces',
    query: 'gold necklaces layered collection editorial dark background jewelry',
    filter: 'Necklaces',
  },
  {
    label: 'Huggies',
    query: 'gold huggie earrings collection closeup dark background editorial',
    filter: 'Huggies',
  },
];

function Tile({ tile }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(tile.filter)}`}
      className="relative aspect-[4/5] overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`https://image.pollinations.ai/prompt/${encodeURIComponent(tile.query)}?width=800&height=1000&nologo=true`}
        alt={tile.label}
        className={`w-full h-full object-cover transition-transform duration-700 ease-editorial ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
        loading="lazy"
      />
      <div
        className={`absolute inset-0 bg-base/30 transition-opacity duration-500 ${
          hovered ? 'opacity-50' : 'opacity-30'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif text-white text-2xl md:text-3xl tracking-wide transition-all duration-500 ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
        >
          {tile.label}
        </span>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">Find Your Piece</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Tile key={tile.label} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
