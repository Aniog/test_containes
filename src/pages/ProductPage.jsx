import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-dark">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="label-caps text-ink">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-muted text-sm font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function SizeGuideModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} />
      <div className="relative bg-cream max-w-md w-full p-8 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink hover:text-gold transition-colors duration-300"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
        <h3
          className="font-serif text-2xl text-ink mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Ring Size Guide
        </h3>
        <div className="space-y-3">
          {[
            { size: '5', mm: '15.7mm', inches: '0.62"' },
            { size: '6', mm: '16.5mm', inches: '0.65"' },
            { size: '7', mm: '17.3mm', inches: '0.68"' },
            { size: '8', mm: '18.2mm', inches: '0.72"' },
            { size: '9', mm: '19.0mm', inches: '0.75"' },
          ].map(row => (
            <div key={row.size} className="flex items-center justify-between py-2 border-b border-cream-dark">
              <span className="label-caps text-ink">Size {row.size}</span>
              <span className="text-muted text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{row.mm}</span>
              <span className="text-muted text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{row.inches}</span>
            </div>
          ))}
        </div>
        <p className="text-muted text-xs font-light mt-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Measure the inner diameter of a ring that fits well, or wrap a strip of paper around your finger and measure the circumference.
        </p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [addedMsg, setAddedMsg] = useState(false);

  const complementary = products
    .filter(p => p.id !== product?.id && p.collection === product?.collection)
    .slice(0, 2);

  useEffect(() => {
    if (product?.sizes?.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <p className="font-serif text-2xl text-ink/40" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Piece not found
        </p>
      </div>
    );
  }

  const handleAddToBag = () => {
    addToCart(product, selectedSize);
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {sizeGuideOpen && <SizeGuideModal onClose={() => setSizeGuideOpen(false)} />}

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 md:mb-12">
          <Link to="/shop" className="label-caps text-muted hover:text-gold transition-colors duration-300" style={{ fontSize: '9px' }}>
            Shop
          </Link>
          <span className="text-muted" style={{ fontSize: '9px' }}>/</span>
          <Link
            to={`/collections/${product.collection}`}
            className="label-caps text-muted hover:text-gold transition-colors duration-300"
            style={{ fontSize: '9px' }}
          >
            {product.collectionName}
          </Link>
          <span className="text-muted" style={{ fontSize: '9px' }}>/</span>
          <span className="label-caps text-ink" style={{ fontSize: '9px' }}>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Images — full-width storytelling */}
          <div className="flex flex-col gap-4">
            {product.images.map((img, idx) => (
              <div
                key={img.id}
                className={`overflow-hidden bg-cream-dark ${idx === 0 ? 'aspect-[3/4]' : idx === 2 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}
              >
                <img
                  data-strk-img-id={img.id}
                  data-strk-img={`[pdp-title-${product.id}] [pdp-desc-${product.id}]`}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width={img.width.toString()}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} — view ${idx + 1}`}
                  className="w-full h-full object-cover img-hover"
                />
              </div>
            ))}
          </div>

          {/* Product info — sticky on desktop */}
          <div className="md:sticky md:top-28 md:self-start">
            {product.new && (
              <span className="label-caps text-gold mb-3 block" style={{ fontSize: '9px' }}>New Arrival</span>
            )}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-ink mt-3 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ${product.price}
            </p>

            <p
              id={`pdp-desc-${product.id}`}
              className="text-muted text-sm font-light mt-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {product.description}
            </p>

            {/* Size selector */}
            {product.sizes && product.sizes.length > 1 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="label-caps text-ink">Size</p>
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="label-caps text-muted hover:text-gold transition-colors duration-300"
                    style={{ fontSize: '9px' }}
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 border transition-all duration-300 label-caps ${
                        selectedSize === size
                          ? 'bg-ink text-cream border-ink'
                          : 'bg-transparent text-ink border-ink/30 hover:border-ink'
                      }`}
                      style={{ fontSize: '10px' }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to bag */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleAddToBag}
                className="btn-primary flex-1"
              >
                {addedMsg ? 'Added to Bag' : 'Add to Bag'}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                  wishlisted
                    ? 'bg-gold border-gold text-ink'
                    : 'bg-transparent border-ink/30 text-ink hover:border-gold hover:text-gold'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={16} strokeWidth={1.5} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Materials */}
            <div className="mt-8 pt-8 border-t border-cream-dark">
              <p className="label-caps text-ink mb-4">Materials</p>
              <ul className="space-y-2">
                {product.materials.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="text-gold mt-1">—</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Long description */}
            <p className="text-muted text-sm font-light mt-6 leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px' }}>
              {product.longDescription}
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free shipping on all orders over $150. Standard delivery 3–5 business days. Express delivery 1–2 business days.</p>
                <p>Returns accepted within 30 days of delivery. Items must be unworn and in original packaging. Final sale items cannot be returned.</p>
              </Accordion>
              <Accordion title="Jewelry Care Guide">
                <p className="mb-3">Store your pieces in the provided pouch or box when not wearing. Avoid contact with perfume, lotions, and water.</p>
                <p className="mb-3">Clean gently with a soft cloth. For deeper cleaning, use warm water and mild soap, then dry thoroughly.</p>
                <p>Gold pieces can be polished with a jewelry cloth to restore their original luster.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Complete the Hour */}
        {complementary.length > 0 && (
          <div className="mt-20 md:mt-28 pt-12 border-t border-cream-dark">
            <h2
              className="font-serif text-3xl md:text-4xl text-ink font-light text-center mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Complete the Hour
            </h2>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {complementary.map(p => (
                <Link key={p.id} to={`/products/${p.slug}`} className="group block">
                  <div className="overflow-hidden bg-cream-dark aspect-[3/4]">
                    <img
                      data-strk-img-id={`comp-${p.imgId}`}
                      data-strk-img={`[comp-${p.id}-desc] [comp-${p.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover img-hover"
                    />
                  </div>
                  <p
                    id={`comp-${p.id}-title`}
                    className="font-serif text-lg text-ink mt-3 font-light group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {p.name}
                  </p>
                  <p id={`comp-${p.id}-desc`} className="label-caps text-muted mt-1" style={{ fontSize: '10px' }}>
                    ${p.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
