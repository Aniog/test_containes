import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mist">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-xs tracking-widest2 uppercase text-charcoal group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h3 className="font-serif text-2xl lg:text-3xl text-velvet font-light mb-10 text-center">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="aspect-[3/4] bg-ivory overflow-hidden mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.id}-desc] [related-${product.id}-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${product.id}-title`} className="font-serif text-xs text-velvet tracking-widest2 uppercase group-hover:text-gold transition-colors">
                {product.name}
              </p>
              <p id={`related-${product.id}-desc`} className="font-sans text-xs text-stone mt-0.5">{product.description}</p>
              <p className="font-sans text-sm text-charcoal font-medium mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductImageGallery({ product }) {
  const containerRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => { setActiveImg(0); }, [product.id]);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const thumbCls = (i) =>
    `flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
      activeImg === i ? 'border-gold' : 'border-transparent hover:border-mist'
    }`;
  const mainCls = (i) =>
    `absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
      activeImg === i ? 'opacity-100' : 'opacity-0'
    }`;
  const imgQuery = `[pdp-${product.id}-desc] [pdp-${product.id}-title]`;
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-4">
      {/* Text references co-located inside the scanned container */}
      <span id={`pdp-${product.id}-title`} className="sr-only">{product.name}</span>
      <span id={`pdp-${product.id}-desc`} className="sr-only">{product.description}</span>

      {/* Thumbnails — rendered directly so build plugin can resolve each data-strk-img-id */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        <button onClick={() => setActiveImg(0)} className={thumbCls(0)}>
          <img
            data-strk-img-id={`pdp-th-main-${product.imgId}`}
            data-strk-img={imgQuery}
            data-strk-img-ratio="3x4" data-strk-img-width="160"
            src={placeholder} alt={`${product.name} main`}
            className="w-full h-full object-cover"
          />
        </button>
        <button onClick={() => setActiveImg(1)} className={thumbCls(1)}>
          <img
            data-strk-img-id={`pdp-th-alt-${product.img2Id}`}
            data-strk-img={imgQuery}
            data-strk-img-ratio="3x4" data-strk-img-width="160"
            src={placeholder} alt={`${product.name} alternate`}
            className="w-full h-full object-cover"
          />
        </button>
        <button onClick={() => setActiveImg(2)} className={thumbCls(2)}>
          <img
            data-strk-img-id={`pdp-th-detail-${product.imgId}`}
            data-strk-img={imgQuery}
            data-strk-img-ratio="3x4" data-strk-img-width="160"
            src={placeholder} alt={`${product.name} detail`}
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main images — rendered directly */}
      <div className="flex-1 aspect-[3/4] bg-ivory overflow-hidden relative">
        <img
          data-strk-img-id={`pdp-main-${product.imgId}`}
          data-strk-img={imgQuery}
          data-strk-img-ratio="3x4" data-strk-img-width="800"
          src={placeholder} alt={`${product.name} main`}
          className={mainCls(0)}
        />
        <img
          data-strk-img-id={`pdp-alt-${product.img2Id}`}
          data-strk-img={imgQuery}
          data-strk-img-ratio="3x4" data-strk-img-width="800"
          src={placeholder} alt={`${product.name} alternate`}
          className={mainCls(1)}
        />
        <img
          data-strk-img-id={`pdp-detail-${product.imgId}`}
          data-strk-img={imgQuery}
          data-strk-img-ratio="3x4" data-strk-img-width="800"
          src={placeholder} alt={`${product.name} detail`}
          className={mainCls(2)}
        />
      </div>
    </div>
  );
}


export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant('gold');
    setQty(1);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-velvet mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-sm text-gold hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 font-sans text-xs text-stone hover:text-gold transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
          <span className="text-mist">·</span>
          <Link to="/shop" className="font-sans text-xs text-stone hover:text-gold transition-colors capitalize">
            {product.category}
          </Link>
          <span className="text-mist">·</span>
          <span className="font-sans text-xs text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery — self-contained component with its own ImageHelper ref */}
          <ProductImageGallery product={product} />

          {/* Right: Product info */}
          <div className="lg:pt-4">
            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-4xl text-velvet tracking-widest2 uppercase font-light leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-mist'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mb-5">${product.price}</p>

            {/* Short description */}
            <p className="font-sans text-sm text-stone leading-relaxed mb-8 border-b border-mist pb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest2 uppercase text-charcoal mb-3">
                  Tone: <span className="text-gold capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-sans text-xs tracking-widest uppercase border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-cream'
                          : 'border-mist text-stone hover:border-gold hover:text-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest2 uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-mist w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-charcoal">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-cream font-sans text-xs tracking-widest2 uppercase py-4 flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300 font-medium mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-mist text-stone font-sans text-xs tracking-widest2 uppercase py-4 hover:border-gold hover:text-gold transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-sans text-stone">
              <span>✓ Free worldwide shipping</span>
              <span>✓ 30-day returns</span>
              <span>✓ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To care for your Velmora jewelry: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth to restore shine.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
