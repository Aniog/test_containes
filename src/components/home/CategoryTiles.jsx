import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings editorial warm tone studio lighting',
    link: '/shop?category=Earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklace editorial warm tone studio lighting',
    link: '/shop?category=Necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie earrings editorial warm tone studio lighting',
    link: '/shop?category=Huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={tile.link}
            className="group relative aspect-[4/5] bg-velmora-sand overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-${tile.id}`}
              data-strk-img={tile.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={tile.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {tile.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}