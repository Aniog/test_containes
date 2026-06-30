import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xs uppercase tracking-widest font-bold group-hover:text-velmora-gold transition-colors">
          {title}
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <div className="text-sm text-neutral-500 font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');

  const relatedProducts = useMemo(() => {
    return products.filter(p => p.id !== productId).slice(0, 4);
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold uppercase tracking-widest text-xs font-bold">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link to="/shop" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-400 hover:text-velmora-obsidian transition-colors mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* Left: Gallery */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 order-2 md:order-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "w-20 aspect-[3/4] bg-neutral-100 overflow-hidden transition-all",
                    selectedImage === idx ? "ring-1 ring-velmora-obsidian ring-offset-2" : "opacity-60"
                  )}
                >
                  <img
                    data-strk-img-id={`thumb-${product.id}-${idx}`}
                    data-strk-img={`[pd-name] jewelry gold detail ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-neutral-100 relative order-1 md:order-2 overflow-hidden">
               <img
                data-strk-img-id={`main-img-${product.id}`}
                data-strk-img={`[pd-name] jewelry gold luxury lifestyle ${selectedImage}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="border-b border-neutral-100 pb-8 mb-8">
              <h1 id="pd-name" className="text-3xl md:text-4xl font-serif text-velmora-obsidian uppercase tracking-wider mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-sans font-medium text-velmora-obsidian">${product.price}</span>
                <div className="h-4 w-[1px] bg-neutral-200" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
                  ))}
                  <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-widest ml-1">(24 Reviews)</span>
                </div>
              </div>
              <p className="text-neutral-500 font-sans leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="mb-8">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-4">Metal Finish</h4>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-all border",
                      selectedTone === tone
                        ? "bg-velmora-obsidian text-white border-velmora-obsidian"
                        : "bg-white text-velmora-obsidian border-neutral-200 hover:border-velmora-obsidian"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-4">Quantity</h4>
              <div className="flex items-center border border-neutral-200 w-max">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-neutral-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center text-sm font-sans focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-neutral-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full bg-velmora-obsidian text-white py-5 px-8 text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-800 transition-all duration-300 mb-10"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="flex flex-col border-t border-neutral-100">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-4 flex flex-col gap-2">
                  <li>Hand-crafted with 18K Gold Plating</li>
                  <li>Nickel, Lead, and Cadmium Free</li>
                  <li>Hypoallergenic for sensitive skin</li>
                  <li>Avoid contact with perfumes, lotions, and water to maintain luster</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Enjoy free worldwide shipping on orders over $100. We offer a 30-day return policy for all unworn jewelry in its original packaging. Please note that for hygiene reasons, earrings cannot be returned unless faulty.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <div className="flex items-end justify-between mb-12 border-b border-neutral-100 pb-8">
            <h2 className="text-3xl md:text-5xl font-serif text-velmora-obsidian italic">You may also like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
