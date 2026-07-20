import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0],
    });
    openCart();
  };

  return (
    <section className="section-container py-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl text-[#1c1917] md:text-4xl">Bestsellers</h2>
          <p className="mt-2 text-sm text-[#5c5650]">Our most-loved pieces, chosen again and again.</p>
        </div>
        <Link to="/shop" className="hidden text-xs uppercase tracking-wide-custom text-[#5c5650] hover:text-[#1c1917] md:block">
          View All
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-[3x4] overflow-hidden rounded-lg bg-[#f1efe9]">
              <img
                src={hoveredId === product.id ? product.images[1] : product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/50 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <Button
                  size="sm"
                  className="w-full bg-white text-[#1c1917] hover:bg-[#b8860b] hover:text-white"
                  onClick={(e) => handleQuickAdd(e, product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="mt-3">
              <p className="font-serif text-sm uppercase tracking-wide-custom text-[#1c1917]">{product.name}</p>
              <p className="mt-1 text-sm text-[#5c5650]">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-xs uppercase tracking-wide-custom text-[#5c5650] hover:text-[#1c1917]">
          View All
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
