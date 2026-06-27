import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', label: 'Earrings', imgQuery: 'gold earrings collection editorial display dark warm', imgId: 'cat-earrings-b4c8d2' },
  { id: 'necklaces', label: 'Necklaces', imgQuery: 'gold necklace collection jewelry editorial dark background', imgId: 'cat-necklaces-e9f1a6' },
  { id: 'huggies', label: 'Huggies', imgQuery: 'gold huggie earrings collection display editorial warm light', imgId: 'cat-huggies-d3a7e5' },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-charcoal tracking-wide">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4 mb-3" />
          <p className="text-sm text-velmora-taupe tracking-wider">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`${cat.label} jewelry collection editorial gold warm`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-[0.2em] uppercase mb-2">
                    {cat.label}
                  </h3>
                  <span className="text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
