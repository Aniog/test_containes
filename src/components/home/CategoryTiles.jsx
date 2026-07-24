import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TILES = [
  {
    id: 'earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    imgId: 'cat-earrings-2a8c4e',
    titleId: 'cat-earrings-title',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-necklaces-7d1f9b',
    titleId: 'cat-necklaces-title',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-huggies-3c5e2a',
    titleId: 'cat-huggies-title',
  },
];

function Tile({ tile }) {
  return (
    <Link
      to={tile.to}
      className="group relative block aspect-[3/4] overflow-hidden bg-champagne/30"
    >
      <img
        alt={tile.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
        data-strk-img-id={tile.imgId}
        data-strk-img={`[${tile.titleId}] [category-tiles-eyebrow]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="900"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />

      {/* base gradient for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent"
      />

      {/* hover: extra darken + reveal label/arrow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500 ease-editorial"
      />

      {/* label */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
        <div>
          <h3
            id={tile.titleId}
            className="font-serif text-3xl md:text-4xl text-ivory"
          >
            {tile.label}
          </h3>
          <p className="mt-1.5 text-[10px] uppercase tracking-widest-2 text-ivory/75 inline-flex items-center gap-2">
            Shop
            <ArrowRight
              className="w-3 h-3 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              strokeWidth={1.6}
            />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-20 md:py-28">
        <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
          <p id="category-tiles-eyebrow" className="eyebrow">Shop by category</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink-soft">
            Find your everyday
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile) => (
            <Tile key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
