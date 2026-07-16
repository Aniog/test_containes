import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-gold/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-dark">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-velmora-taupe" /> : <ChevronDown className="w-4 h-4 text-velmora-taupe" />}
      </button>
      {open && <div className="pb-4 text-sm text-velmora-taupe leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="velmora-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="velmora-btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream">
      {/* Breadcrumb */}
      <div className="velmora-container py-4">
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs text-velmora-taupe hover:text-velmora-dark transition-colors">
          <ChevronLeft className="w-3 h-3" /> Back to Shop
        </Link>
      </div>

      <div className="velmora-container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-velmora-charcoal to-velmora-dark flex items-center justify-center">
              <span className="font-serif text-velmora-gold/20 text-8xl italic">V</span>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 flex-shrink-0 bg-velmora-sand ${i === activeImage ? 'ring-1 ring-velmora-gold' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            {product.isNew && (
              <span className="inline-block bg-velmora-dark text-white text-[10px] font-sans tracking-widest uppercase px-2.5 py-1 mb-4">
                New
              </span>
            )}
            <h1 className="velmora-product-name text-2xl md:text-3xl lg:text-4xl mb-3">
              {product.name}
            </h1>
            <p className="font-sans text-2xl text-velmora-dark font-light mb-4">${product.price}</p>

            <div className="flex items-center gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
              ))}
              <span className="text-xs text-velmora-taupe ml-1">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-sm text-velmora-taupe leading-relaxed mb-6">{product.description}</p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-[11px] tracking-widest uppercase text-velmora-dark mb-3">Finish</p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs font-sans tracking-wider uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-gold/20 text-velmora-dark hover:border-velmora-gold/50'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex items-end gap-4 mb-8">
              <div>
                <p className="font-sans text-[11px] tracking-widest uppercase text-velmora-dark mb-2">Quantity</p>
                <div className="flex items-center border border-velmora-gold/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-velmora-gold transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm tabular-nums">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-velmora-gold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <button onClick={handleAdd} className="velmora-btn-primary flex-1">
                {added ? 'Added!' : 'Add to Bag'}
              </button>
            </div>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{product.details}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3"><strong className="text-velmora-dark">Materials:</strong> {product.materials}</p>
              <p><strong className="text-velmora-dark">Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">Complete the Look</p>
            <h2 className="velmora-heading text-2xl md:text-3xl font-light">You May Also Like</h2>
            <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-velmora-sand to-velmora-sand/50 mb-3 flex items-center justify-center">
                  <span className="font-serif text-velmora-gold/15 text-5xl italic">V</span>
                </div>
                <h3 className="velmora-product-name text-xs md:text-sm mb-1">{p.name}</h3>
                <p className="font-sans text-sm text-velmora-dark">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
