import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadImages = async () => {
      const { ImageHelper } = await import('@strikingly/sdk');
      const config = await import('../../strk-img-config.json');
      if (containerRef.current) {
        ImageHelper.loadImages(config.default, containerRef.current);
      }
    };
    loadImages();
  }, []);

  const handleQuickAdd = (product) => {
    addToCart(product, 1, 'Gold');
  };

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Best Sellers
          </h2>
          <div className="hairline w-24 mx-auto mb-4" />
          <p className="text-velmora-warmGray text-sm uppercase tracking-widest">
            Loved by our community
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream">
                <Link to={`/product/${product.id}`}>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.images[0].alt}
                    data-strk-img-id={product.images[0].id}
                    data-strk-img={product.images[0].dataStrkImg}
                    data-strk-img-ratio={product.images[0].dataStrkImgRatio}
                    data-strk-img-width={product.images[0].dataStrkImgWidth}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>

                {/* Quick Add Button - Appears on Hover */}
                <button
                  onClick={() => handleQuickAdd(product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-charcoal text-white px-6 py-2.5 
                           uppercase tracking-wider text-xs font-medium 
                           opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                           transition-all duration-300 hover:bg-velmora-gold"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag size={14} />
                    Add to Cart
                  </span>
                </button>

                {/* Second Image on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.images[1].alt}
                    data-strk-img-id={product.images[1].id}
                    data-strk-img={product.images[1].dataStrkImg}
                    data-strk-img-ratio={product.images[1].dataStrkImgRatio}
                    data-strk-img-width={product.images[1].dataStrkImgWidth}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-base mb-2 hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-velmora-warmGray text-sm mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-medium">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-velmora-gold text-sm">★</span>
                    <span className="text-xs text-velmora-warmGray">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary inline-block">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
