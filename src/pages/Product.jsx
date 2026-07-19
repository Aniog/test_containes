import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem, openDrawer } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-ink">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm text-brand-accent hover:text-brand-accentHover">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    openDrawer();
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <nav className="mb-8 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-sm bg-brand-warm aspect-[3/4]">
              <img
                data-strk-img-id={product.imgIds[selectedImage]}
                data-strk-img={`[product-detail-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === idx ? 'border-brand-ink' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgIds[idx]}-thumb`}
                    data-strk-img={`[product-detail-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 id="product-detail-title" className="font-serif text-3xl md:text-4xl text-brand-ink uppercase tracking-wide">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-brand-gold">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium text-brand-ink">{product.rating}</span>
              </div>
              <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-brand-ink mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                      variant === v ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-divider text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {variant === v && <Check className="h-3.5 w-3.5" />}
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-brand-ink mb-3">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-divider">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2 text-brand-muted hover:text-brand-ink" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm text-brand-ink w-6 text-center">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-2 text-brand-muted hover:text-brand-ink" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-full bg-brand-accent py-4 text-sm font-medium uppercase tracking-widest text-white hover:bg-brand-accentHover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8 space-y-2">
              {accordions.map((item) => (
                <div key={item.id} className="border-b border-brand-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-brand-ink">{item.title}</span>
                    <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-4 text-sm text-brand-muted leading-relaxed">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-ink mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
