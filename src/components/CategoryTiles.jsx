import { Link } from 'react-router-dom';

const categories = [
  { label: 'Earrings', id: 'cat-earrings', query: 'gold earrings collection product shot dark background elegant jewelry' },
  { label: 'Necklaces', id: 'cat-necklaces', query: 'gold necklaces collection product shot dark background elegant jewelry' },
  { label: 'Huggies', id: 'cat-huggies', query: 'gold huggie earrings collection product shot dark background elegant' },
];

export default function CategoryTiles() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 md:mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-parchment"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={`[${cat.id}-label]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span id={`${cat.id}-label`} className="sr-only">{cat.label}</span>
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {cat.label}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                <span className="font-serif text-xl text-white tracking-widest uppercase">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
