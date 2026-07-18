import { Link } from 'react-router-dom';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings collection flatlay elegant',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklaces collection elegant display',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie earrings collection display',
    link: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Explore</p>
          <h2 className="serif-heading text-3xl md:text-4xl font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                data-strk-bg-id={`category-${category.id}-bg`}
                data-strk-bg={category.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="product-name text-white text-lg md:text-xl tracking-[0.2em] mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    {category.name}
                  </h3>
                  <span className="inline-block border border-white/60 text-white text-[10px] tracking-widest uppercase px-5 py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Discover
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
