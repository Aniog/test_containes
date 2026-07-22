import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const bestsellers = products.slice(0, 5);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Bestsellers</h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group card animate-fade-in"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                {/* Main Image */}
                <img
                  data-strk-img-id={product.shopImgId}
                  data-strk-img={`[${product.titleId}] [${product.descId}] Velmora ${product.name} gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-white text-charcoal-800 px-6 py-3 text-sm uppercase tracking-wider hover:bg-gold-500 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h3
                  id={product.titleId}
                  className="product-name text-base mb-1 line-clamp-1"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="text-sm text-charcoal-600 mb-2 line-clamp-1"
                >
                  {product.description}
                </p>
                <p className="text-gold-600 font-semibold">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg" className="tracking-widest">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;