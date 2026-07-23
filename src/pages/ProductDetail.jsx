import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={12}
            className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian">{title}</span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-parchment font-manrope text-[9px] uppercase tracking-[0.12em] px-2.5 py-1">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="pt-3">
        <h4
          id={`related-title-${product.id}`}
          className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian leading-tight"
        >
          {product.name}
        </h4>
        <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDesc}</p>
        <span className="font-manrope text-xs font-medium text-obsidian mt-1 block">${product.price}</span>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveThumb(0);
      setQuantity(1);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-muted mb-4">Product not found</p>
          <button
            onClick={() => navigate('/shop')}
            className="font-manrope text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const thumbImages = [
    { imgId: `pdp-main-${product.imgId}`, query: `[pdp-desc] [pdp-title] gold jewelry product` },
    { imgId: `pdp-worn-${product.imgId2}`, query: `[pdp-title] gold jewelry worn model close up` },
    { imgId: `pdp-detail-${product.id}-det1`, query: `[pdp-title] gold jewelry detail texture close up` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-linen">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-manrope text-xs text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-linen">·</span>
          <Link to="/shop" className="font-manrope text-xs text-muted hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-linen">·</span>
          <span className="font-manrope text-xs text-whisper capitalize">{product.category}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
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
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              {thumbImages.map((thumb, i) => (
                <img
                  key={i}
                  data-strk-img-id={`${thumb.imgId}-lg`}
                  data-strk-img={thumb.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeThumb === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="self-start bg-obsidian text-parchment font-manrope text-[9px] uppercase tracking-[0.12em] px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1
              id="pdp-title"
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.1em] text-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="my-5 border-t border-linen" />

            <span className="font-cormorant text-3xl font-light text-obsidian mb-5">
              ${product.price}
            </span>

            <p id="pdp-desc" className="font-manrope text-sm text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-muted mb-3">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-[0.1em] px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-parchment'
                        : 'border-linen text-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-muted mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-obsidian text-parchment font-manrope text-xs uppercase tracking-[0.15em] py-4 hover:bg-espresso transition-colors duration-300 flex items-center justify-center gap-3 mb-3"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart
            </button>
            <button className="w-full border border-gold text-gold font-manrope text-xs uppercase tracking-[0.15em] py-4 hover:bg-gold hover:text-obsidian transition-all duration-300">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map((t) => (
                <span key={t} className="font-manrope text-[10px] uppercase tracking-[0.1em] text-whisper flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-linen bg-parchment py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
