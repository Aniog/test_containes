import { Link } from 'react-router-dom';

const tiles = [
  {
    name: 'Earrings',
    slug: 'earrings',
    description: 'Curated ear artistry for every occasion',
    image: 'https://images.unsplash.com/photo-1633810542437-03e8e8e5a3b2?w=800&q=80',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Elegant pieces that frame your neckline',
    image: 'https://images.unsplash.com/photo-1599643478518-a25e3a5c2e2a?w=800&q=80',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    description: 'Everyday essentials, endlessly stackable',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-warmgray-500 mb-3">Shop By</p>
          <h2 className="font-serif text-3xl md:text-4xl text-noir">Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.name}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={tile.image}
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir/30 group-hover:bg-noir/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-cream tracking-wide mb-2">{tile.name}</h3>
                <p className="font-sans text-sm text-cream/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-1 group-hover:translate-y-0 transform">
                  {tile.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}