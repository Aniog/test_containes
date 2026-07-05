import { Link } from 'react-router-dom';

const categories = [
  {
    label: 'Earrings',
    to: '/shop/earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    label: 'Necklaces',
    to: '/shop/necklaces',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
  },
  {
    label: 'Huggies',
    to: '/shop/huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold">
          Shop by Category
        </h2>
        <p className="font-sans text-sm text-velmora-muted mt-4">
          Find the perfect piece for every moment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={cat.to}
            className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-white tracking-widetitle opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold">
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
