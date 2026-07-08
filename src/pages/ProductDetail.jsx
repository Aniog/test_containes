import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base uppercase tracking-wider text-text">{title}</span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-text-secondary" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-text-secondary" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-text-secondary text-sm leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-text mb-4">Product Not Found</h1>
        <Link to="/collection" className="btn-primary">Browse Collection</Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const galleryImages = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgIdAlt, query: `[${product.descId}] [${product.titleId}] detail angle` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <nav className="flex items-center gap-2 text-text-muted text-xs">
          <Link to="/" className="hover:text-text transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-text transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-text">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-bg-elevated rounded-lg overflow-hidden mb-3">
              <img
                data-strk-img-id={galleryImages[activeImage].id}
                data-strk-img={galleryImages[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 rounded overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === idx ? 'border-text-accent' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="py-2">
            <p className="text-text-accent text-xs uppercase tracking-[0.2em] font-medium mb-2">
              {product.material}
            </p>
            <h1 className="product-name text-2xl md:text-3xl text-text mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={i < Math.round(product.rating) ? '#B08D57' : 'transparent'}
                    strokeWidth={1}
                    className="text-text-accent"
                  />
                ))}
              </div>
              <span className="text-text-muted text-xs">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-text text-xl font-medium mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="border-t border-border pt-6 mb-6">
              {/* Variant */}
              <div className="mb-5">
                <p className="text-text text-xs uppercase tracking-wider font-medium mb-3">
                  Tone: <span className="text-text-secondary font-normal capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-xs uppercase tracking-wider border transition-all duration-200 ${
                        selectedVariant === variant
                          ? 'border-text-accent bg-bg-accent text-white'
                          : 'border-border text-text-secondary hover:border-text-accent'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-text text-xs uppercase tracking-wider font-medium mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-3 py-2 text-text-secondary hover:text-text transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 py-2 text-sm font-medium text-text min-w-[40px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-3 py-2 text-text-secondary hover:text-text transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full text-center"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-text text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-bg-elevated rounded-lg overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-xs text-text group-hover:text-text-accent transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-text-accent text-sm font-medium mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
