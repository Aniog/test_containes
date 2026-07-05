import { Link } from 'react-router-dom';

const cats = [
  { id: 'earrings', name: 'Earrings', desc: 'Studs, drops & cuffs' },
  { id: 'necklaces', name: 'Necklaces', desc: 'Pendants & chains' },
  { id: 'huggies', name: 'Huggies', desc: 'Dome & hoop styles' },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subheading mb-3">Browse</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <div
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}] gold jewelry collection editorial photo`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 w-full h-full bg-brand-sand transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/40 transition-all duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 id={`cat-name-${cat.id}`} className="font-serif text-3xl md:text-4xl text-white font-light tracking-wider mb-1">
                  {cat.name}
                </h3>
                <p id={`cat-desc-${cat.id}`} className="font-sans text-xs tracking-widest uppercase text-white/70 group-hover:text-brand-gold transition-colors duration-300">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
