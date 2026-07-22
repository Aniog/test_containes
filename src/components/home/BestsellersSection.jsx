import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function BestsellersSection() {
  const { addItem } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0],
    });
  };

  return (
    <section className="section-padding">
      <div className="container-max">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
          Bestsellers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden mb-4 aspect-square bg-velmora-beige">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Image */}
                  {hoveredProduct === product.id && product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    />
                  )}

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal 
                             px-6 py-2 text-sm uppercase tracking-wider font-medium 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             hover:bg-velmora-charcoal hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>

              <div className="space-y-1">
                <h3 className="product-name text-sm">
                  <Link to={`/product/${product.id}`} className="hover:text-velmora-gold transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-velmora-text-muted">${product.price}</p>
                <div className="flex items-center space-x-1">
                  <Star size={12} className="fill-velmora-gold text-velmora-gold" />
                  <span className="text-xs text-velmora-text-muted">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
