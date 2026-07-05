import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';
import products from '@/data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <main className="pt-24 md:pt-28 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-dark mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          fill={i < full ? '#C8A45C' : 'none'}
          className={i < full ? 'text-velmora-gold' : 'text-velmora-border'}
        />
      );
    }
    return stars;
  };

  return (
    <main className="pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <p className="font-sans text-xs text-velmora-muted">
            <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-velmora-dark">{product.name}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-velmora-charcoal to-velmora-dark overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-velmora-gold/20 font-serif text-8xl tracking-widest select-none">
                  V
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br from-velmora-charcoal to-velmora-dark overflow-hidden transition-opacity ${
                    activeImage === index ? 'opacity-100 ring-1 ring-velmora-gold' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-velmora-gold/30 font-serif text-xs">V</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="mb-1">
              <div className="flex items-center gap-1.5 mb-2">
                {renderStars(product.rating)}
                <span className="font-sans text-xs text-velmora-muted ml-1">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-velmora-dark mb-3">
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-velmora-gold mb-6">
              ${product.price}
            </p>

            <p className="font-sans text-sm text-velmora-charcoal/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-dark mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-2 border border-velmora-gold bg-velmora-gold/5 text-velmora-dark font-sans text-xs tracking-wider">
                  Gold Tone
                </button>
                <button className="px-6 py-2 border border-velmora-border text-velmora-muted font-sans text-xs tracking-wider hover:border-velmora-dark transition-colors">
                  Silver Tone
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-velmora-dark hover:bg-velmora-border/30 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-velmora-dark">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-velmora-dark hover:bg-velmora-border/30 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`btn-primary w-full ${
                  added ? 'bg-velmora-charcoal' : ''
                }`}
              >
                <ShoppingBag size={16} className="mr-2" />
                {added ? 'Added to Bag' : 'Add to Cart'}
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.features.map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1.5 bg-velmora-border/30 font-sans text-[10px] tracking-[0.08em] uppercase text-velmora-muted"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? (
                      <ChevronUp size={14} className="text-velmora-muted" />
                    ) : (
                      <ChevronDown size={14} className="text-velmora-muted" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-80 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-charcoal/70 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 md:mt-32 mb-16">
          <div className="hairline-divider mb-14" />
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">
              Complete the Look
            </p>
            <h2 className="section-heading">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}