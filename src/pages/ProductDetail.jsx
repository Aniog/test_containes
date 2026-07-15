import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const accordionItems = [
  {
    title: 'Description',
    content:
      'Each Velmora piece is designed with intention, balancing sculptural form with everyday wearability. This item is crafted from 18K gold-plated brass and finished by hand for a refined, luminous look.',
  },
  {
    title: 'Materials & Care',
    content:
      '18K gold-plated brass with a protective anti-tarnish coating. To keep your jewelry looking its best, store in a dry place, avoid contact with perfumes and lotions, and clean with a soft polishing cloth.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping on all orders. We offer 30-day returns for unworn items in original packaging. Gift sets are final sale unless damaged.',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('Description');

  if (!product) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-4 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-background">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {product.images.map((image, idx) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === idx ? 'border-accent' : 'border-transparent'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl tracking-product text-ink">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-ink-muted">{product.reviewCount} reviews</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-ink">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Tone</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                      variant === v
                        ? 'bg-ink text-white'
                        : 'border border-border text-ink-secondary hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink">Quantity</p>
              <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-ink-secondary hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-ink-secondary hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary mt-8 w-full">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="hairline mt-8" />

            <div className="mt-6 space-y-3">
              {accordionItems.map((item) => (
                <div key={item.title} className="border-b border-border pb-3">
                  <button
                    onClick={() => setOpenAccordion((prev) => (prev === item.title ? '' : item.title))}
                    className="flex w-full items-center justify-between py-2 text-left"
                  >
                    <span className="text-sm font-medium text-ink">{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-ink-muted transition-transform duration-200 ${
                        openAccordion === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === item.title && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-ink">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
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

export default ProductDetail;
