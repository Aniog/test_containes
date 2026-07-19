import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Explore</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Shop by Category</h2>
          <div className="w-12 h-px bg-accent/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] rounded overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="product-name text-white text-2xl md:text-3xl tracking-[0.2em] mb-2">
                    {cat.name}
                  </h3>
                  <span className="inline-block text-white/80 text-sm tracking-widest uppercase border-b border-white/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
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
