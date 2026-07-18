import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase text-velmora-charcoal">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-velmora-warmgray" /> : <ChevronDown className="w-4 h-4 text-velmora-warmgray" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-velmora-slate leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const containerRef = useRef(null);
  const { addItem, openDrawer } = useCart();
  const product = products.find(p => p.id === productId);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const related = products.filter(p => p.id !== productId).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setAdded(false);
    setQuantity(1);
    setSelectedVariant('gold');
  }, [productId]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [productId, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal tracking-wide">Product Not Found</h1>
          <Link to="/shop" className="btn-outline mt-6 inline-flex">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const imageKeys = [
    `${product.imgId}-1`,
    `${product.imgId}-2`,
    `${product.imgId2}-1`,
    `${product.imgId2}-2`,
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="section-padding mb-6">
        <div className="flex items-center gap-2 text-xs text-velmora-warmgray">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.shortName}</span>
        </div>
      </div>

      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
              <img
                alt={product.shortName}
                data-strk-img-id={`pdp-main-${product.id}-${imageKeys[activeImage]}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {imageKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-velmora-sand overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'}`}
                >
                  <img
                    alt={`${product.shortName} view ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${key}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <span className="hidden" id={product.titleId}>{product.shortName}</span>
            <span className="hidden" id={product.descId}>{product.description}</span>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-velmora-charcoal leading-tight">
              {product.shortName}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`} />
                ))}
              </div>
              <span className="text-xs text-velmora-warmgray">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-medium text-velmora-charcoal">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-sm text-velmora-slate leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-[10px] tracking-widest uppercase text-velmora-warmgray mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-border text-velmora-slate hover:border-velmora-charcoal'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[10px] tracking-widest uppercase text-velmora-warmgray mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-slate hover:border-velmora-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm tabular-nums w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-slate hover:border-velmora-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary mt-8 w-full ${added ? 'bg-green-700 border-green-700 hover:bg-green-700 hover:border-green-700' : ''}`}
            >
              {added ? 'ADDED TO BAG' : `ADD TO BAG — $${(product.price * quantity).toFixed(2)}`}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velmora-charcoal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velmora-charcoal">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-3">Free 30-day returns. Items must be unworn and in original packaging. Contact our care team to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="section-padding mt-20 md:mt-28">
        <div className="hairline-divider mb-12" />
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-charcoal text-center mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {related.map(rp => (
            <Link key={rp.id} to={`/product/${rp.id}`} className="group">
              <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
                <img
                  alt={rp.shortName}
                  data-strk-img-id={`related-${rp.id}-${rp.imgId}`}
                  data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-xs tracking-widest uppercase text-velmora-charcoal text-center">{rp.shortName}</p>
              <p className="mt-1 text-sm text-velmora-charcoal text-center">${rp.price}</p>
              <span className="hidden" id={rp.titleId}>{rp.shortName}</span>
              <span className="hidden" id={rp.descId}>{rp.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
