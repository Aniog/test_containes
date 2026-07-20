import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-pale">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-sans text-charcoal">{title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-stone flex-shrink-0" strokeWidth={1.5} />
          : <ChevronDown className="w-4 h-4 text-stone flex-shrink-0" strokeWidth={1.5} />
        }
      </button>
      {open && (
        <div className="pb-5 text-sm font-sans text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section className="py-16 lg:py-20 border-t border-stone-pale">
      <div className="mb-10">
        <h2 className="font-serif text-3xl text-charcoal font-light">You May Also Like</h2>
        <div className="w-8 h-px bg-gold mt-3" />
      </div>
      <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group block">
            <div className="aspect-[3/4] bg-stone-pale overflow-hidden mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p id={`related-title-${product.id}`} className="font-serif text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors duration-300">
              {product.name}
            </p>
            <p id={`related-desc-${product.id}`} className="text-xs text-stone font-sans mt-1">{product.shortDesc}</p>
            <p className="text-sm font-sans text-charcoal font-medium mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-alt1-${product.img2Id}`, query: `[pdp-title-${product.id}] gold jewelry worn close up` },
    { id: `pdp-alt2-${product.imgId}-3`, query: `[pdp-title-${product.id}] jewelry detail texture` },
    { id: `pdp-alt3-${product.img2Id}-4`, query: `[pdp-title-${product.id}] jewelry lifestyle flat lay` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-[10px] uppercase tracking-widest font-sans text-stone">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 overflow-hidden border transition-all duration-300 ${
                    activeThumb === i ? 'border-charcoal' : 'border-stone-pale hover:border-stone-light'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.id}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-stone-pale overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-active-${product.imgId}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-[10px] uppercase tracking-widest font-sans text-gold mb-3">
              {product.category}
            </p>

            {/* Product name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-charcoal font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-light'
                    }`}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-xs text-stone font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-stone text-sm leading-relaxed mb-7"
            >
              {product.shortDesc}
            </p>

            <div className="w-full h-px bg-stone-pale mb-7" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-widest font-sans text-charcoal mb-3">
                Finish: <span className="text-stone">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-sans border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'bg-transparent text-charcoal border-stone-light hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-[10px] uppercase tracking-widest font-sans text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-stone-light w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-stone-pale transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-sans text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-stone-pale transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal text-ivory text-xs uppercase tracking-widest font-sans py-4 hover:bg-charcoal-light transition-colors duration-300 mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-col gap-2.5 mt-5 pt-5 border-t border-stone-pale">
              {[
                { icon: Truck, text: 'Free worldwide shipping on all orders' },
                { icon: RotateCcw, text: '30-day hassle-free returns' },
                { icon: Shield, text: 'Hypoallergenic · 18K gold plated' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-sans text-stone">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone-pale">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">
                  <strong className="text-charcoal font-medium">Material:</strong> {product.material}, hypoallergenic base metal
                </p>
                <p className="mb-3">
                  <strong className="text-charcoal font-medium">Care:</strong> Avoid contact with water, perfume, and lotions.
                  Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.
                </p>
                <p>
                  <strong className="text-charcoal font-medium">Plating:</strong> 18K gold plating over hypoallergenic brass.
                  With proper care, plating lasts 1–2 years with daily wear.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">
                  <strong className="text-charcoal font-medium">Shipping:</strong> Free worldwide shipping on all orders.
                  Standard delivery 5–10 business days. Express available at checkout.
                </p>
                <p>
                  <strong className="text-charcoal font-medium">Returns:</strong> We accept returns within 30 days of delivery.
                  Items must be unworn and in original packaging. Contact us to initiate a return.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
