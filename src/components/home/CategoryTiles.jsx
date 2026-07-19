import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', label: 'Earrings', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80' },
  { id: 'necklaces', label: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
  { id: 'huggies', label: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80' },
];

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-brand-ink text-center">Shop by Category</h2>
      <p className="mt-2 text-sm text-brand-muted text-center">Find the perfect piece for every moment.</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative h-72 overflow-hidden rounded-2xl"
          >
            <img src={cat.image} alt={cat.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-xl md:text-2xl font-medium tracking-wide text-white drop-shadow-sm">{cat.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
