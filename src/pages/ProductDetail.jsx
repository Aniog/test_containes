import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-sm font-medium tracking-[0.08em] uppercase text-ink">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-mist" /> : <ChevronDown size={16} className="text-mist" />}
      </button>
      {open && (
        <div className="pb-6">
          <p className="font-manrope text-sm text-mist leading-relaxed">{children}</p>
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
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-linen">
      <div className="mb-10">
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-ink">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group block">
            <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
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
            <h3
              id={`related-title-${product.id}`}
              className="font-cormorant text-sm font-medium tracking-widest2 uppercase text-ink group-hover:text-gold transition-colors duration-300"
            >
              {product.name}
            </h3>
            <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
            <p className="font-manrope text-sm text-mist mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setSelectedVariant('Gold Tone');
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-mist mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-sm text-gold hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgIds = [product.imgId, product.img2Id];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-xs text-mist hover:text-gold transition-colors duration-300">Home</Link>
          <span className="text-whisper text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-mist hover:text-gold transition-colors duration-300">Shop</Link>
          <span className="text-whisper text-xs">/</span>
          <span className="font-manrope text-xs text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-linen" style={{ aspectRatio: '3/4' }}>
              {imgIds.map((imgId, i) => (
                <img
                  key={imgId}
                  data-strk-img-id={`pdp-${imgId}-${i}`}
                  data-strk-img={i === 0
                    ? `[pdp-desc-${product.id}] [pdp-title-${product.id}]`
                    : `[pdp-title-${product.id}] gold jewelry worn model`
                  }
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {imgIds.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 bg-linen overflow-hidden border-2 transition-colors duration-300 ${activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'}`}
                  aria-label={`View image ${i + 1}`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                    <span className="font-cormorant text-xs text-mist">{i + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="font-manrope text-xs font-medium tracking-[0.15em] uppercase text-gold mb-2">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <h1
                id={`pdp-title-${product.id}`}
                className="font-cormorant text-3xl md:text-4xl font-medium tracking-widest2 uppercase text-ink leading-tight mb-4"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      style={{
                        color: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF',
                        fill: i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF',
                      }}
                    />
                  ))}
                </div>
                <span className="font-manrope text-xs text-mist">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-cormorant text-3xl font-light text-ink">${product.price}</p>
            </div>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-mist leading-relaxed mb-8 border-t border-linen pt-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs font-medium tracking-[0.1em] uppercase text-ink mb-3">
                Finish: <span className="text-mist font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs font-medium tracking-[0.08em] px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-ink bg-ink text-cream'
                        : 'border-linen text-mist hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs font-medium tracking-[0.1em] uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-mist hover:text-ink hover:bg-linen transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-mist hover:text-ink hover:bg-linen transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-gold text-cream font-manrope text-xs font-semibold tracking-[0.15em] uppercase py-5 hover:bg-gold-light transition-colors duration-300 mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button className="w-full border border-ink text-ink font-manrope text-xs font-medium tracking-[0.15em] uppercase py-4 hover:bg-ink hover:text-cream transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-linen flex flex-col gap-2">
              {['Free worldwide shipping', '30-day hassle-free returns', 'Hypoallergenic & nickel-free'].map(t => (
                <p key={t} className="font-manrope text-xs text-mist flex items-center gap-2">
                  <span className="text-gold">✓</span> {t}
                </p>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}
