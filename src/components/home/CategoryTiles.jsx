import { Link } from 'react-router-dom';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';

const TILES = [
  {
    label: 'Earrings',
    to: '/shop?category=Earrings',
    query: 'curated flat lay of gold earrings collection, drop earrings and studs on warm beige stone, editorial jewelry photography',
  },
  {
    label: 'Necklaces',
    to: '/shop?category=Necklaces',
    query: 'curated flat lay of delicate gold necklaces collection draped on warm linen fabric, editorial jewelry photography',
  },
  {
    label: 'Huggies',
    to: '/shop?category=Huggies',
    query: 'curated flat lay of chunky gold huggie hoop earrings collection on warm marble, editorial jewelry photography',
  },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">Explore</p>
        <h2 className="mt-3 font-serif text-4xl font-medium text-espresso md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <ImageScope className="grid gap-4 md:grid-cols-3 md:gap-6">
        {TILES.map((tile, i) => (
          <Link
            key={tile.label}
            to={tile.to}
            className="group relative block overflow-hidden bg-espresso animate-fade-up"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <StrkImg
              imgId={`cat-${tile.label.toLowerCase()}`}
              query={tile.query}
              ratio="3x4"
              width={700}
              alt={tile.label}
              className="aspect-[4/3] w-full object-cover opacity-95 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-80 md:aspect-[3/4]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
              <span className="font-serif text-2xl uppercase tracking-[0.2em] text-ivory">
                {tile.label}
              </span>
              <span className="translate-x-2 border border-ivory/60 px-4 py-2 text-[10px] font-medium uppercase tracking-luxe text-ivory opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                Discover
              </span>
            </div>
          </Link>
        ))}
      </ImageScope>
    </section>
  );
}
