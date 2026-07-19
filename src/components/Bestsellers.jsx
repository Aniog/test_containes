import React from 'react';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Bestsellers = () => {
  const { addItem } = useCart();
  const bestsellerProducts = products.filter(p => p.isBestseller).slice(0, 5);

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: 'Gold',
      quantity: 1
    });
  };

  return (
    <section className="section-padding">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl font-light mb-4">
            Bestsellers
          </h2>
          <p className="text-muted-foreground uppercase tracking-wider text-sm">
            Our most loved pieces
          </p>
        </div>

        <div className="product-grid">
          {bestsellerProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`}>
                <div className="relative img-hover mb-4">
                  {/* Product Image */}
                  <img
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full aspect-square object-cover bg-[hsl(var(--velmora-cream))]"
                  />
                  
                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 elegant-transition">
                    <img
                      data-strk-img-id={`bestseller-${product.id}-hover`}
                      data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] side view`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} - alternate view`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickAdd(product);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-foreground px-6 py-2 uppercase tracking-wider text-sm font-medium opacity-0 group-hover:opacity-100 elegant-transition hover:bg-[hsl(var(--velmora-gold))] hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4 inline-block mr-2" />
                    Add to Cart
                  </button>

                  {/* Badges */}
                  {product.isNew && (
                    <span className="badge-new">New</span>
                  )}
                </div>
              </Link>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 id={`product-name-${product.id}`} className="product-name">
                  {product.name}
                </h3>
                <p id={`product-desc-${product.id}`} className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[hsl(var(--velmora-gold))] text-[hsl(var(--velmora-gold))]" />
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
