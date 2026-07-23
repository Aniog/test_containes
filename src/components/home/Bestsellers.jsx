import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellerIds = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
];

const bestsellers = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

export default function Bestsellers() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-espresso">Bestsellers</h2>
        <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: product.id === 'vivid-aura-jewels' ? 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)' :
              product.id === 'majestic-flora-nectar' ? 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)' :
              product.id === 'golden-sphere-huggies' ? 'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)' :
              product.id === 'amber-lace-earrings' ? 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)' :
              'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(196,162,101,0.3) 0%, rgba(196,162,101,0.05) 100%)' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="w-3/4 h-[2px] bg-gold/30 mx-auto" />
          </div>
        </div>

        {/* Hover image */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: product.id === 'vivid-aura-jewels' ? 'linear-gradient(135deg, #4A3D35 0%, #3D3028 100%)' :
              product.id === 'majestic-flora-nectar' ? 'linear-gradient(135deg, #4A3D35 0%, #3D3028 100%)' :
              product.id === 'golden-sphere-huggies' ? 'linear-gradient(135deg, #3D3028 0%, #4A3D35 100%)' :
              product.id === 'amber-lace-earrings' ? 'linear-gradient(135deg, #4A3D35 0%, #3D3028 100%)' :
              'linear-gradient(135deg, #3D3028 0%, #4A3D35 100%)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(196,162,101,0.4) 0%, rgba(196,162,101,0.08) 100%)' }}
            />
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-espresso text-[10px] px-2 py-1 tracking-wider uppercase font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAdd}
            className={`p-2.5 rounded-full shadow-lg transition-all duration-300 ${
              added ? 'bg-gold text-cream' : 'bg-cream text-espresso hover:bg-gold hover:text-cream'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-espresso mb-1">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-muted-light text-muted-light'}`}
          />
        ))}
        <span className="text-[10px] text-muted ml-1">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-espresso">${product.price}</p>
    </Link>
  );
}