import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/seed';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group block cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 transition-transform duration-500">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            alt={product.title}
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/50 to-transparent">
          <button 
            className="w-full bg-white text-foreground py-3 text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors cursor-pointer z-10 relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 id={`product-title-${product.id}`} className="font-serif text-lg uppercase tracking-wide mb-1">
          {product.title}
        </h3>
        <p className="text-stone-500 text-sm">${product.price}</p>
        {/* Hidden desc for interpolation */}
        <p id={`product-desc-${product.id}`} className="hidden">{product.description}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="bestsellers-title" className="text-3xl md:text-5xl font-serif mb-4">Our Bestsellers</h2>
          <hr className="w-16 border-t-2 border-gold-500 mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;