import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">
          Bestsellers
        </h2>
        <p className="text-center text-[#8a8a8a] mb-16 font-light">
          Our most loved pieces, cherished by customers worldwide
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#faf9f6] overflow-hidden"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay with second image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>

              <div className="p-4">
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#8a8a8a] mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c9a96e] text-white p-2 hover:bg-[#b8945a]"
                    aria-label="Add to cart"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
