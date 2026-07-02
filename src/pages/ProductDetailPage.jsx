import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-mist">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-obsidian">{title}</span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <div className="font-manrope text-sm text-mist leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(product?.id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-obsidian">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-manrope text-xs tracking-widest uppercase text-gold">
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
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { id: product.img2Id, query: `[${product.titleId}] worn gold jewelry model` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-4`, query: `[${product.titleId}] gold jewelry flat lay` },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-xs text-mist hover:text-gold transition-colors">Home</Link>
          <span className="text-mist text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-mist hover:text-gold transition-colors">Shop</Link>
          <span className="text-mist text-xs">/</span>
          <span className="font-manrope text-xs text-stone uppercase tracking-wider">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-linen hover:border-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream">
              <img
                data-strk-img-id={`main-${images[activeImg].id}`}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <Link
              to="/shop"
              className="flex items-center gap-1.5 font-manrope text-xs text-mist hover:text-gold transition-colors mb-6 self-start"
            >
              <ArrowLeft size={12} />
              Back to Shop
            </Link>

            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2 capitalize">
              {product.category}
            </p>

            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-obsidian leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="mt-4">
              <span className="font-cormorant text-3xl text-obsidian">${product.price}</span>
            </div>

            <div className="w-10 h-px bg-gold my-6" />

            <p id={product.descId} className="font-manrope text-sm text-mist leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-manrope text-xs tracking-widest uppercase text-stone mb-3">
                  Tone: <span className="text-obsidian capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-manrope text-xs tracking-widest uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-obsidian bg-obsidian text-ivory'
                          : 'border-linen text-stone hover:border-stone'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                >
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-6 w-full flex items-center justify-center gap-2 py-4 font-manrope text-xs tracking-widest uppercase transition-colors ${
                added
                  ? 'bg-stone text-ivory'
                  : 'bg-obsidian text-ivory hover:bg-charcoal'
              }`}
            >
              <ShoppingBag size={14} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <p className="font-manrope text-[10px] text-mist text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian">Materials:</strong> {product.details.materials}</p>
                <p><strong className="text-obsidian">Care:</strong> {product.details.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.details.shipping}</p>
                <p className="mt-2">We offer free 30-day returns on all unworn items in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-20 md:mt-28">
          <div className="border-t border-linen pt-12 mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
