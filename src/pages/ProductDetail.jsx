import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/lib/data';
import { Star, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found.</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 fade-in">
      <div className="max-w-[1600px] mx-auto px-6 md:px-20">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-velmora-gold transition-colors">
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            <div className="hidden md:flex flex-col gap-4 w-24">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-velmora-cream cursor-pointer border border-velmora-taupe/10 hover:border-velmora-gold transition-colors overflow-hidden">
                  <img 
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[product-title] angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumb ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 bg-velmora-cream aspect-[4/5] overflow-hidden">
              <img 
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-title] model close up`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                id="product-title"
                data-title={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="space-y-4">
              <h1 id="product-title-display" className="text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-widest-xl leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-medium">${product.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < product.rating ? "#D4AF37" : "none"} color="#D4AF37" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40">(12 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-velmora-charcoal/70 leading-relaxed font-sans">
              {product.description}
            </p>

            <div className="hairline" />

            {/* Variants */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold">Metal Tone: <span className="text-velmora-taupe font-normal ml-2">{selectedVariant}</span></h3>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(v => (
                  <button 
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-8 py-3 text-[10px] uppercase tracking-widest border transition-all ${selectedVariant === v ? 'bg-velmora-charcoal text-velmora-warm border-velmora-charcoal' : 'bg-transparent border-velmora-taupe/30 hover:border-velmora-charcoal'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-velmora-taupe/30 py-4 px-6 gap-8">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-velmora-gold transition-colors"><Minus size={16} /></button>
                  <span className="text-sm w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:text-velmora-gold transition-colors"><Plus size={16} /></button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity, selectedVariant)}
                  className="flex-1 bg-velmora-gold text-velmora-warm py-5 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-velmora-charcoal transition-all"
                >
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-taupe/10">
              <Accordion title="Description">
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free standard shipping on all orders over $75. <br/><br/>
                  We accept returns within 30 days of purchase for a full refund. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32">
          <h2 className="text-2xl font-serif text-center mb-16">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
