import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&q=80',
    description: 'From studs to statement drops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&q=80',
    description: 'Layer-worthy chains and pendants',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop&q=80',
    description: 'Everyday sculptural essentials',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-xl md:text-[3.5rem] text-velmora-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-black/20 group-hover:bg-velmora-black/40 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-heading-lg md:text-heading-xl text-velmora-white mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.name}
                </h3>
                <p className="text-body-sm text-velmora-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {cat.description}
                </p>
                <span className="mt-4 text-caption uppercase tracking-widest-xl text-velmora-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
