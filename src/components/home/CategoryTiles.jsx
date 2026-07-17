import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  },
];

export function CategoryTiles() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="px-5 md:px-8 lg:px-12 xl:px-16">
        <h2 className="mb-10 md:mb-14 font-serif text-3xl md:text-4xl text-center text-velmora-text">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.label}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="img-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-text/20 transition-colors group-hover:bg-velmora-text/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 py-3 border border-white/70 bg-white/10 backdrop-blur-sm font-serif text-lg uppercase tracking-[0.2em] text-white transition-all group-hover:bg-white/20">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
