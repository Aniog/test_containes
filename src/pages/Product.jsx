import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedMaterial, setSelectedMaterial] = useState(product?.material || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-ink">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-brand-gold hover:text-brand-gold-dark">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity);
    setCartOpen(true);
  };

  const materials = [
    { id: 'gold', label: '18K Gold', available: true },
    { id: 'silver', label: 'Sterling Silver', available: product.id !== 'royal-heirloom-set' },
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="mb-6 sm:mb-8 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-sand">
              <img
                src={`https://placehold.co/800x800/F3EDE4/C9A96E?text=${encodeURIComponent(product.images[activeImage]?.alt || product.name)}`}
                alt={product.images[activeImage]?.alt || product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent hover:border-brand-border'
                  }`}
                >
                  <img
                    src={`https://placehold.co/200x200/F3EDE4/C9A96E?text=${encodeURIComponent(img.alt)}`}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block rounded-full bg-brand-gold/10 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-brand-gold mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-widest uppercase text-brand-ink">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-brand-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviews} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm text-brand-charcoal leading-relaxed">{product.description}</p>

            {/* Material Selector */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Material</p>
              <div className="flex flex-wrap gap-2">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    type="button"
                    disabled={!mat.available}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wider uppercase border transition-all duration-300 ${
                      selectedMaterial === mat.id
                        ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                        : 'border-brand-border text-brand-charcoal hover:border-brand-gold'
                    } ${!mat.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    {mat.label}
                    {selectedMaterial === mat.id && <Check className="h-3 w-3" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-brand-border">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 text-brand-charcoal hover:text-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 text-sm font-medium text-brand-ink min-w-[2rem] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-brand-charcoal hover:text-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-full bg-brand-gold py-4 text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-gold-dark transition-all duration-300 hover:shadow-lg"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-border">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: product.details },
                { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
              ].map((item) => (
                <div key={item.id} className="border-b border-brand-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-semibold tracking-widest uppercase text-brand-ink">{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-brand-muted transition-transform duration-300 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-brand-charcoal leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-ink text-center mb-8 sm:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
