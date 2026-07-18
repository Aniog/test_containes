import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, product.variants[0]);
    setIsCartOpen(true);
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Curated for You</p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`bestseller-${product.id}-bg`}
                  data-strk-bg={`[${product.id}-desc] [${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2.5 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick add */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-foreground/90 text-background text-xs tracking-widest uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-foreground transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Product info */}
              <Link to={`/product/${product.id}`}>
                <h3 id={`${product.id}-title`} className="product-name text-xs md:text-sm mb-1.5 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p id={`${product.id}-desc`} className="text-xs text-muted-foreground mb-2 line-clamp-1 hidden md:block">
                  {product.description}
                </p>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground/60">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-flex items-center gap-2">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
