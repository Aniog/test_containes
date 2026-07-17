import { Link } from 'react-router-dom';

const tiles = [
  {
    label: 'Earrings',
    href: '/shop?category=Earrings',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a86ab83b1e95?w=600&q=80',
  },
  {
    label: 'Huggies',
    href: '/shop?category=Huggies',
    image: 'https://images.unsplash.com/photo-1633810542707-1d0a74696eac?w=600&q=80',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="section-heading text-center">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-12">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {tile.label}
                </span>
              </div>
              <span className="absolute bottom-6 left-6 font-serif text-lg md:text-xl text-white tracking-wide">
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
