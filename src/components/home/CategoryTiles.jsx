import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    query: 'Earrings',
    bg: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)',
  },
  {
    name: 'Necklaces',
    query: 'Necklaces',
    bg: 'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)',
  },
  {
    name: 'Huggies',
    query: 'Huggies',
    bg: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">Curated For You</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-espresso">Shop by Category</h2>
        <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/shop?category=${cat.query}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0" style={{ background: cat.bg }}>
              <div
                className="absolute inset-0 transition-all duration-700 group-hover:scale-105"
                style={{
                  background: `radial-gradient(ellipse at 50% 40%, rgba(196, 162, 101, 0.3) 0%, transparent 70%)`,
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl tracking-widest text-cream uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                {cat.name}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-serif text-lg md:text-xl tracking-wider text-cream uppercase group-hover:opacity-0 transition-opacity duration-500">
                {cat.name}
              </span>
              <div className="w-8 h-[1px] bg-gold/60 mt-3 group-hover:w-16 transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}