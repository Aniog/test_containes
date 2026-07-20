import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-gold-600 mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden bg-cream-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-950/25 group-hover:bg-charcoal-950/15 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-serif text-xl text-cream-50 tracking-widest uppercase">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 sm:hidden">
                <span className="font-serif text-lg text-cream-50 tracking-widest uppercase">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
