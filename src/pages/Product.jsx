import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState({ description: true, care: false, shipping: false });
  const { addItem, toggleCart } = useCart();

  if (!product) {
    return (
      <main className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-ink">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:text-gold-dark">Back to shop</Link>
        </div>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toggleCart();
  };

  const toggleSection = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <main className="min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-surface-alt">
              <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 w-16 sm:h-20 sm:w-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wide text-ink">{product.name}</h1>
            <p className="mt-2 text-lg text-ink">${product.price}</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-ink/20'}`} />
                ))}
              </div>
              <span className="text-xs text-ink-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-5 text-sm text-ink/80 leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-ink mb-2">Tone</p>
              <div className="flex gap-2">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setVariant(tone)}
                    className={`rounded-full border px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                      variant === tone ? 'border-gold bg-gold/10 text-gold' : 'border-ink/10 text-ink hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <p className="text-xs tracking-widest uppercase text-ink">Qty</p>
              <div className="flex items-center border border-ink/10 rounded-full">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 text-ink hover:text-gold" aria-label="Decrease quantity">
                  -
                </button>
                <span className="px-3 text-sm text-ink">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 text-ink hover:text-gold" aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="mt-8 w-full rounded-full bg-gold text-base py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors">
              Add to Cart
            </button>

            <div className="mt-8 border-t border-ink/5">
              {[
                { key: 'description', label: 'Description', text: product.details },
                { key: 'care', label: 'Materials & Care', text: product.care },
                { key: 'shipping', label: 'Shipping & Returns', text: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-ink/5 last:border-b-0">
                  <button onClick={() => toggleSection(section.key)} className="w-full flex items-center justify-between py-4 text-left">
                    <span className="text-xs tracking-widest uppercase text-ink">{section.label}</span>
                    <ChevronRight className={`h-4 w-4 text-ink/60 transition-transform duration-300 ${expanded[section.key] ? 'rotate-90' : ''}`} />
                  </button>
                  {expanded[section.key] && <p className="pb-4 text-sm text-ink/70 leading-relaxed">{section.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-ink mb-8">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Product;
