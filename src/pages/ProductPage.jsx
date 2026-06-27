import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = PRODUCTS.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.defaultVariant || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const related = PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setQuantity(1);
    setAdded(false);
    if (product) {
      setSelectedVariant(product.defaultVariant);
    }
  }, [id, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="font-serif text-xl">Product not found.</p>
        <Link to="/shop" className="text-velmora-accent text-sm mt-2 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
              <img
                data-strk-img-id={`pd-main-${product.id}`}
                data-strk-img={`[pd-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-velmora-cream overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-velmora-text' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pd-thumb-${img.id}`}
                    data-strk-img={`[pd-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.displayName} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <h1
              id={`pd-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase text-velmora-text"
            >
              {product.name}
            </h1>
            <p className="font-serif text-xl text-velmora-text mt-2">${product.price}</p>
            <p className="text-sm text-velmora-text-muted leading-relaxed mt-5">
              {product.description}
            </p>

            <div className="mt-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-velmora-text-muted font-medium mb-2.5">
                Tone
              </p>
              <div className="flex items-center gap-2.5">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-[0.1em] uppercase font-medium border rounded-full transition-all ${
                      selectedVariant === v
                        ? 'bg-velmora-text text-white border-velmora-text'
                        : 'bg-transparent text-velmora-text border-velmora-border hover:border-velmora-text'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-velmora-text-muted font-medium mb-2.5">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-border rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-velmora-cream rounded-full transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-velmora-cream rounded-full transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-base text-white hover:bg-velmora-base-light'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
                <br /><br />
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Orders are processed within 1-2 business days and delivered within 5-10 business days depending on your location. We offer free 30-day returns on all unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-velmora-border py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-text mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="group">
                  <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`rel-img-${p.id}`}
                      data-strk-img="gold jewelry earring necklace huggie premium product"
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.displayName}
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>
                  <p className="font-serif text-[11px] tracking-[0.15em] uppercase text-velmora-text truncate">
                    {p.name}
                  </p>
                  <p className="font-serif text-sm text-velmora-text mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
