import { Link } from 'react-router-dom';

const categoryData = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings collection jewelry flat lay on dark background',
    imgId: 'cat-tile-earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklaces collection jewelry editorial warm lighting',
    imgId: 'cat-tile-necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie earrings collection close up warm tones',
    imgId: 'cat-tile-huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24 bg-brand-ivory">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categoryData.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}] jewelry collection luxury editorial`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark-bg/30 group-hover:bg-brand-dark-bg/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-8 lg:pb-10">
                <div className="text-center">
                  <h3
                    id={`cat-label-${cat.id}`}
                    className="font-serif text-2xl lg:text-3xl text-brand-ivory tracking-[0.1em] mb-1"
                  >
                    {cat.label}
                  </h3>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-brand-ivory/70 font-sans group-hover:text-brand-gold transition-colors">
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
