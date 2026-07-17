import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import products from '../../data/products';
import { useCartDispatch } from '../../context/CartContext';

const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 5);

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, toggleCart } = useCartDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    toggleCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-brand-sand/30 overflow-hidden mb-4">
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full bg-brand-sand/40 flex items-center justify-center">
            <span className="text-brand-smoke/40 text-xs uppercase tracking-widest">{product.category}</span>
          </div>
        </div>
        {/* Hover quick-add */}
        <div className={`absolute inset-0 bg-brand-ink/20 flex items-center justify-center transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-brand-sand/30 flex items-center justify-center">
            <span className="text-brand-smoke/30 text-xs uppercase tracking-widest">{product.name}</span>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-brand-cream shadow-lg flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300 ${added ? 'bg-brand-gold text-white' : 'text-brand-ink'}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`} />
        ))}
        <span className="text-xs text-brand-smoke ml-2">({product.reviews})</span>
      </div>
      <h3 className="font-serif text-sm tracking-product uppercase text-brand-ink group-hover:text-brand-gold transition-colors">
        {product.name}
      </h3>
      <p className="font-sans text-sm font-medium text-brand-ink mt-1">${product.price}</p>
    </Link>
  );
}

export default function BestsellersGrid() {
  return (
    <section id="bestsellers" className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-smoke mb-3">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-hero text-brand-ink">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">View All Pieces</Link>
      </div>
    </section>
  );
}