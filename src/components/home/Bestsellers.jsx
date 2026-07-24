import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ShoppingBag, Eye } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-[#E5E1DA] overflow-hidden mb-4">
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={`best-${product.id}`}
            data-strk-img={`[best-title-${product.id}] gold jewelry on model close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
        </Link>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button
            onClick={() => {
              addToCart(product);
              toast.success(`Added ${product.name} to bag`);
            }}
            className="bg-white text-[#1A1A1A] p-3 rounded-full hover:bg-[#B69750] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <ShoppingBag size={18} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-[#1A1A1A] p-3 rounded-full hover:bg-[#B69750] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="space-y-1 text-center">
        <h3 id={`best-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm font-medium">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="font-sans text-xs opacity-60 tracking-wider font-light">${product.price}</p>
      </div>
    </motion.div>
  );
};

const Bestsellers = ({ addToCart }) => {
  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] opacity-60">The Essentials</h4>
            <h2 className="font-serif text-4xl font-medium uppercase tracking-wider">Bestsellers</h2>
          </div>
          <Link to="/shop" className="font-sans uppercase text-[10px] tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:text-[#B69750] hover:border-[#B69750] transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
EOF > src/components/home/Bestsellers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ShoppingBag, Eye } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-[#E5E1DA] overflow-hidden mb-4">
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={`best-${product.id}`}
            data-strk-img={`[best-title-${product.id}] gold jewelry on model close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
        </Link>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button
            onClick={() => {
              addToCart(product);
              toast.success(`Added ${product.name} to bag`);
            }}
            className="bg-white text-[#1A1A1A] p-3 rounded-full hover:bg-[#B69750] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <ShoppingBag size={18} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-[#1A1A1A] p-3 rounded-full hover:bg-[#B69750] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="space-y-1 text-center">
        <h3 id={`best-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm font-medium">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="font-sans text-xs opacity-60 tracking-wider font-light">${product.price}</p>
      </div>
    </motion.div>
  );
};

const Bestsellers = ({ addToCart }) => {
  return (
    <section className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h4 className="font-sans uppercase tracking-[0.3em] text-[10px] opacity-60">The Essentials</h4>
            <h2 className="font-serif text-4xl font-medium uppercase tracking-wider">Bestsellers</h2>
          </div>
          <Link to="/shop" className="font-sans uppercase text-[10px] tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:text-[#B69750] hover:border-[#B69750] transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
