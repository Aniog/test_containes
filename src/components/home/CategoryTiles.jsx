import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const tileImages = {
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop',
  huggies: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&auto=format&fit=crop',
};

export default function CategoryTiles() {
  const tiles = categories.filter(c => tileImages[c.id]).slice(0, 3);

  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Curated Categories
        </p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
          >
            <img
              data-strk-img-id={`category-${cat.id}`}
              data-strk-img={`[category-label-${cat.id}] gold jewelry ${cat.id}`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src={tileImages[cat.id]}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`category-label-${cat.id}`}
                className="font-serif text-2xl md:text-3xl tracking-widest text-white uppercase opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
