import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-stone'}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-mist">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-ink">{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-mist flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-mist flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-mist leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
      </div>
      <p className="font-inter text-[10px] tracking-widest uppercase text-mist mb-1">{product.category}</p>
      <h4 className="font-cormorant text-sm font-medium tracking-widest uppercase text-ink group-hover:text-gold transition-colors duration-200">
        {product.name}
      </h4>
      <p className="font-inter text-sm font-medium text-ink mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id) : [];
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-mist mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { imgId: product.imgId, altImgId: product.imgId2 },
    { imgId: product.imgId2, altImgId: product.imgId },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <Link to="/shop" className="flex items-center gap-1.5 font-inter text-xs text-mist hover:text-gold transition-colors duration-200">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
          <span className="text-stone/60 font-inter text-xs">/</span>
          <span className="font-inter text-xs text-mist">{product.category}</span>
          <span className="text-stone/60 font-inter text-xs">/</span>
          <span className="font-inter text-xs text-ink">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-linen aspect-[4/5]">
              <img
                data-strk-img-id={images[activeImg].imgId}
                data-strk-img={`[pdp-desc] [pdp-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-linen aspect-square w-20 border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[pdp-title] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
              {product.category}
            </p>
            <h1
              id="pdp-title"
              className="font-cormorant text-3xl md:text-4xl font-medium tracking-widest uppercase text-ink mb-3 leading-tight"
            >
              {product.name}
            </h1>
            <p id="pdp-desc" className="sr-only">{product.shortDescription}</p>

            <div className="flex items-center justify-between mb-6">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <span className="font-cormorant text-3xl font-medium text-ink">
                ${product.price}
              </span>
            </div>

            <div className="w-full h-px bg-stone/40 mb-6" />

            <p className="font-inter text-sm text-mist leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs tracking-widest uppercase text-mist mb-3">
                Finish: <span className="text-ink">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-stone/60 text-mist hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs tracking-widest uppercase text-mist mb-3">Quantity</p>
              <div className="flex items-center border border-stone/60 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-gold transition-colors duration-200"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-gold transition-colors duration-200"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs tracking-widest uppercase py-4 transition-colors duration-200 mb-4 ${
                added
                  ? 'bg-espresso text-cream'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full border border-stone/60 text-mist font-inter text-xs tracking-widest uppercase py-4 hover:border-gold hover:text-gold transition-colors duration-200 mb-8">
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="border-t border-stone/40">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-ink">Materials:</strong> {product.materials}
                <br /><br />
                <strong className="text-ink">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="w-full h-px bg-stone/40 mb-16" />
            <div className="text-center mb-12">
              <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
                Complete the Look
              </p>
              <h2 className="font-cormorant text-4xl font-light text-ink">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
