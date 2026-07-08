import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ChevronDown, Star, Minus, Plus, Check } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-ink mb-3">Product Not Found</h1>
          <Link to="/shop" className="text-brand-accent text-sm tracking-widest uppercase hover:text-brand-accentHover">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span>/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-white rounded-sm overflow-hidden border border-brand-line">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-sm overflow-hidden border transition-colors ${
                    selectedImage === idx ? 'border-brand-ink' : 'border-brand-line hover:border-brand-muted'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink tracking-wide mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-brand-accent">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-brand-muted">{product.reviews} reviews</span>
            </div>
            <p className="font-serif text-2xl text-brand-ink mb-5">${product.price}</p>
            <p className="text-brand-muted leading-relaxed mb-6">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-brand-ink mb-3">Finish</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 text-xs tracking-widest uppercase rounded-sm border transition-colors ${
                      selectedVariant === variant
                        ? 'border-brand-ink bg-brand-ink text-white'
                        : 'border-brand-line text-brand-ink hover:border-brand-muted'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-line rounded-sm">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2.5 text-brand-muted hover:text-brand-ink transition-colors" aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm text-brand-ink min-w-[40px] text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-2.5 text-brand-muted hover:text-brand-ink transition-colors" aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-brand-accent hover:bg-brand-accentHover text-white text-sm tracking-widest uppercase py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-line">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: product.care },
                { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((item) => (
                <div key={item.id} className="border-b border-brand-line last:border-b-0">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-widest uppercase text-brand-ink">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-brand-muted leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-ink tracking-wide mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group bg-white rounded-sm border border-brand-line overflow-hidden">
                  <div className="aspect-[3/4] bg-brand-warm overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base text-brand-ink tracking-wide group-hover:text-brand-accent transition-colors">{p.name}</h3>
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
