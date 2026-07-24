import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', href: '/shop?category=earrings', bg: '#8a6c4f', subtitle: 'Studs, drops & huggies' },
  { name: 'Necklaces', href: '/shop?category=necklaces', bg: '#6c5a3f', subtitle: 'Pendants & chains' },
  { name: 'Huggies', href: '/shop?category=huggies', bg: '#9a7c5f', subtitle: 'Everyday gold hoops' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide section-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-3">
            Discover
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-800 font-light tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundColor: cat.bg,
                  backgroundImage: `linear-gradient(135deg, ${cat.bg} 0%, #5c3f2e 100%)`,
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-12">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/60 tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
