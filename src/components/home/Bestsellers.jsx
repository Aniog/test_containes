import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBestsellers = async () => {
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      const { data: response, error } = await client
        .from('Products')
        .select('*')
        .eq('is_bestseller', true)
        .limit(5);

      if (!error && response?.success) {
        setProducts(response.data.list);
      }
      setLoading(false);
    };

    fetchBestsellers();
  }, []);

  if (loading) return null;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:row items-baseline justify-between mb-16 space-y-4 md:space-y-0">
        <h2 className="text-4xl md:text-5xl font-serif">Curated Favorites</h2>
        <Link to="/shop" className="text-xs uppercase tracking-[0.3em] font-medium border-b border-accent pb-1 hover:opacity-70 transition-opacity">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} onAdd={() => {
            addToCart(item.data, 1, 'Gold');
            toast.success(`${item.data.name} added to bag`);
          }} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [hovered, setHovered] = useState(false);
  const fields = product.data;

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-6">
        <img
          alt={fields.name}
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[product-title-${product.id}] jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          alt={fields.name}
          data-strk-img-id={`product-${product.id}-secondary`}
          data-strk-img={`[product-title-${product.id}] on model lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onAdd();
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md py-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-medium">Quick Add</span>
        </button>
      </Link>

      <Link to={`/product/${product.id}`} className="space-y-2">
        <h3 id={`product-title-${product.id}`} className="text-xs uppercase tracking-widest leading-relaxed">
          {fields.name}
        </h3>
        <p className="text-sm font-serif italic">${fields.price}</p>
      </Link>
    </div>
  );
};

// Internal utility for Bestsellers component
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Bestsellers;
