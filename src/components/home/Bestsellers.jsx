import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import FadeIn from '@/components/FadeIn';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, setDrawer } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold',
      image: product.images[0],
      qty: 1,
    });
    setDrawer(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-ink-100 overflow-hidden rounded-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {hovered && (
          <div className="absolute inset-0 bg-black/5 transition-opacity duration-300" />
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-white text-ink-950 rounded-full flex items-center justify-center shadow-md hover:bg-ink-50 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-ink-950">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ink-600">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide">Bestsellers</h2>
            <p className="mt-2 text-sm text-ink-500">Our most loved pieces this season</p>
          </div>
        </FadeIn>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {products.map((p) => (
            <motion.div key={p.id} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              to="/shop"
              className="inline-block border border-ink-950 text-ink-950 px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-ink-950 hover:text-white transition-colors rounded-sm"
            >
              View All
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
