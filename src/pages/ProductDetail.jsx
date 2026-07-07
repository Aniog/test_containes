import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-stone/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs tracking-[0.12em] uppercase text-velmora-text">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-mist flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-mist flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-inter text-sm text-velmora-mist leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== current.id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 border-t border-velmora-stone/20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-3xl font-light text-velmora-text tracking-wide mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
                <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
              </div>
              <h3 className="font-cormorant text-sm tracking-[0.1em] uppercase text-velmora-text group-hover:text-velmora-gold transition-colors">
                {product.name}
              </h3>
              <p className="font-inter text-sm text-velmora-mist mt-1">{formatPrice(product.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  const images = [
    { id: `pdp-main-${product.imgId}`, id2: `pdp-main-title-${product.id}`, id3: `pdp-main-desc-${product.id}` },
    { id: `pdp-alt-${product.imgId2}`, id2: `pdp-alt-title-${product.id}`, id3: `pdp-alt-desc-${product.id}` },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImage(0);
  }, [product.id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-velmora-linen min-h-screen pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 md:mb-12">
          <Link to="/" className="font-inter text-xs text-velmora-mist hover:text-velmora-gold transition-colors">Home</Link>
          <span className="text-velmora-sand text-xs">/</span>
          <Link to="/shop" className="font-inter text-xs text-velmora-mist hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="text-velmora-sand text-xs">/</span>
          <span className="font-inter text-xs text-velmora-text">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={images[activeImage].id}
                data-strk-img={`[${images[activeImage].id3}] [${images[activeImage].id2}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span id={images[activeImage].id2} className="sr-only">{product.name}</span>
              <span id={images[activeImage].id3} className="sr-only">{product.shortDescription}</span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-square overflow-hidden bg-velmora-cream border-2 transition-colors duration-200 ${activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${img.id3}] [${img.id2}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-cormorant text-3xl md:text-4xl tracking-[0.1em] uppercase text-velmora-text font-light leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} size={13} showCount />
            </div>

            {/* Price */}
            <p className="font-inter text-2xl font-light text-velmora-text mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-velmora-stone/15 mb-6" />

            {/* Description */}
            <p className="font-inter text-sm text-velmora-mist leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs tracking-[0.1em] uppercase text-velmora-text mb-3">
                Finish: <span className="text-velmora-mist font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs tracking-[0.08em] px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/40 text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs tracking-[0.1em] uppercase text-velmora-text mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-velmora-stone/30 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-gold transition-colors border-r border-velmora-stone/30"
                  aria-label="Decrease quantity"
                >
                  <Minus size={12} />
                </button>
                <span className="w-12 text-center font-inter text-sm text-velmora-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-gold transition-colors border-l border-velmora-stone/30"
                  aria-label="Increase quantity"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-obsidian text-velmora-text-light font-inter text-xs tracking-[0.15em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart
            </button>

            {/* Material note */}
            <p className="font-inter text-xs text-velmora-mist text-center mt-2">
              {product.material}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-velmora-stone/15 mt-8 mb-2" />

            {/* Accordions */}
            <Accordion title="Description">
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3">{product.material}</p>
              <p>To preserve the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Wipe gently with a soft cloth after each wear.</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-3">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
              <p>We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts current={product} />
    </div>
  );
}
