import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', label: 'Earrings', imgUrl: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=600&fit=crop&auto=format' },
  { id: 'necklaces', label: 'Necklaces', imgUrl: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=800&h=600&fit=crop&auto=format' },
  { id: 'huggies', label: 'Huggies', imgUrl: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop&auto=format' },
];

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Shop by Category</h2>
          <p className="section-subtitle">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] bg-charcoal-100 overflow-hidden"
            >
              <img
                src={cat.imgUrl}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-cream tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;