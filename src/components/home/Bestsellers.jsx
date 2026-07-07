import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { dispatch } = useCart();
  const bestsellers = products.filter((p) => p.is_bestseller).slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-3">
            Curated Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block text-xs tracking-widest uppercase font-medium text-velmora-espresso border-b border-velmora-espresso pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const { dispatch } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url,
        variant: product.variants[0] || 'Default',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div
          className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={product.image_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          {product.hover_image_url && (
            <img
              src={product.hover_image_url}
              alt={`${product.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )}

          {/* Quick add */}
          <button
            onClick={handleAdd}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 text-velmora-espresso text-[11px] font-medium tracking-widest uppercase py-2.5 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        <div className="text-center">
          <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-espresso mb-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-velmora-brown">
              ${product.price}
            </span>
            {product.compare_at_price && (
              <span className="text-xs text-velmora-warm line-through">
                ${product.compare_at_price}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-[11px] text-velmora-brown">{product.rating}</span>
            <span className="text-[11px] text-velmora-warm">({product.review_count})</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
