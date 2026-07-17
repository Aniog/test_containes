import { Link } from 'react-router-dom';

const tiles = [
  {
    label: 'Earrings',
    href: '/shop?category=Earrings',
    bg: '#D5CDC1',
    hoverBg: '#C8BFB3',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=Necklaces',
    bg: '#C8BFB3',
    hoverBg: '#BBB2A5',
  },
  {
    label: 'Huggies',
    href: '/shop?category=Huggies',
    bg: '#D5CDC1',
    hoverBg: '#C8BFB3',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-4 font-medium">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-light tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.href}
              className="group relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
              style={{ backgroundColor: tile.bg }}
            >
              <div
                className="absolute inset-0 transition-colors duration-600"
                style={{ backgroundColor: tile.hoverBg }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <span className="font-serif text-3xl lg:text-4xl text-espresso tracking-wide italic">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
