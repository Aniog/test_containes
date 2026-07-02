import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-beige">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-wider text-near-black font-medium"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-taupe" /> : <ChevronDown className="w-4 h-4 text-taupe" />}
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', open ? 'max-h-96 pb-4' : 'max-h-0')}>
        <p className="text-sm text-taupe leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-near-black">Product not found</h1>
          <Link to="/shop" className="text-gold text-sm mt-4 inline-block hover:underline">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="bg-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="py-4 md:py-6">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-taupe">
            <Link to="/" className="hover:text-near-black transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-near-black transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-near-black">{product.name}</span>
          </nav>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-12 md:pb-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-beige/30">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      'w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors',
                      selectedImage === idx ? 'border-gold' : 'border-transparent'
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-near-black uppercase tracking-wide-lg">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-beige'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-near-black mt-4">
              ${product.price}
            </p>

            <div className="w-full h-px bg-beige my-6" />

            <p className="text-sm text-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-near-black font-medium mb-2">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-5 py-2.5 text-xs uppercase tracking-wider border transition-all duration-300',
                      variant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-beige text-taupe hover:border-near-black'
                    )}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-near-black font-medium">Quantity</span>
                <div className="flex items-center border border-beige">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-beige/30 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5 text-near-black" />
                  </button>
                  <span className="px-4 py-2 text-sm font-medium text-near-black min-w-[3ch] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-beige/30 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5 text-near-black" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={cn(
                  'w-full py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300',
                  added
                    ? 'bg-near-black text-white'
                    : 'bg-gold hover:bg-gold-dark text-white'
                )}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-beige">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.details.materials}</p>
                <p>{product.details.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">{product.details.shipping}</p>
                <p>{product.details.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="pb-16 md:pb-24">
          <h2 className="font-serif text-2xl md:text-3xl text-near-black text-center mb-10">
            You May Also Love
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-beige/30 mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-wide-lg text-near-black truncate">
                  {p.name}
                </h3>
                <p className="text-sm font-medium text-near-black mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}