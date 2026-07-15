import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { toast } from 'sonner';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    toast.success(`${product.name} added to cart`);
    setCartOpen(true);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-brand-muted">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="aspect-[3/4] bg-brand-warm rounded-sm overflow-hidden mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm text-brand-muted uppercase tracking-wider">Product Image</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-brand-warm rounded-sm border-2 transition-all duration-300 ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-brand-muted uppercase tracking-wider">Thumb</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-brand-gold text-brand-gold" />
                <span className="text-sm font-medium text-brand-charcoal">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-2xl font-serif text-brand-charcoal mb-6">${product.price}</p>
            <p className="text-brand-muted leading-relaxed mb-8">{product.description}</p>

            <div className="mb-6">
              <label className="block text-xs font-semibold tracking-widest uppercase text-brand-charcoal mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 border rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-brand-gold bg-brand-gold text-brand-black'
                        : 'border-brand-border text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-semibold tracking-widest uppercase text-brand-charcoal mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-brand-border rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-brand-gold transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-brand-gold transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-8">
              Add to Cart
            </button>

            <div className="border-t border-brand-border pt-6 space-y-0">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: product.materials },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((item) => (
                <div key={item.key} className="border-b border-brand-border last:border-b-0">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-semibold tracking-widest uppercase text-brand-charcoal">
                      {item.label}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-brand-muted transition-transform duration-300 ${
                        openAccordion === item.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4">
                      <p className="text-sm text-brand-muted leading-relaxed">{item.content}</p>
                      {item.key === 'materials' && (
                        <p className="text-sm text-brand-muted leading-relaxed mt-2">{product.care}</p>
                      )}
                      {item.key === 'shipping' && (
                        <p className="text-sm text-brand-muted leading-relaxed mt-2">{product.returns}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="section-title text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
