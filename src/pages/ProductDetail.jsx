import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import Bestsellers from '@/components/home/Bestsellers';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-6">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    toast.success('Added to cart');
    openCart();
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="mb-8 text-xs uppercase tracking-widest text-brand-muted">
          <Link to="/" className="hover:text-brand-charcoal">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-16 overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-charcoal' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-brand-charcoal">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-brand-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 font-serif text-2xl text-brand-charcoal">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink/80">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-brand-muted">Tone</p>
              <div className="mt-3 flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                      variant === v ? 'border-brand-charcoal bg-brand-charcoal text-white' : 'border-brand-border text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {variant === v && <Check className="h-3 w-3" />}
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-brand-muted">Quantity</p>
              <div className="mt-3 flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-brand-charcoal hover:border-brand-charcoal"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-brand-charcoal hover:border-brand-charcoal"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary mt-8 w-full">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-10 space-y-0 border-t border-brand-border">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
              ].map(item => (
                <div key={item.key} className="border-b border-brand-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-widest text-brand-charcoal">{item.label}</span>
                    <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <p className="pb-4 text-sm leading-relaxed text-brand-ink/80">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="section-title text-center">You May Also Like</h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="product-card group">
                  <div className="product-image-wrapper aspect-[3/4]">
                    <img src={p.images[0]} alt={p.name} className="product-image" loading="lazy" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-serif text-xs uppercase tracking-widest text-brand-charcoal">{p.name}</h3>
                    <p className="mt-1 text-sm text-brand-muted">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
