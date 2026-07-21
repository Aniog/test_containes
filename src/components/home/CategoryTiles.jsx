import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://placehold.co/800x1000/1a1512/d4a853?text=Vivid+Aura+01',
    query: 'Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://placehold.co/800x1000/1a1512/d4a853?text=Flora+Nectar+01',
    query: 'Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://placehold.co/800x1000/1a1512/d4a853?text=Golden+Huggies+01',
    query: 'Huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/shop?category=${cat.query}`}
            className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-velvet-800"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/80 via-velvet-950/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <span className="font-serif text-2xl tracking-wider uppercase text-warm-50 border-b border-gold-400 pb-1">
                {cat.name}
              </span>
            </div>
            <p className="absolute bottom-5 left-5 font-serif text-lg tracking-wider uppercase text-warm-100 group-hover:opacity-0 transition-opacity duration-300">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
