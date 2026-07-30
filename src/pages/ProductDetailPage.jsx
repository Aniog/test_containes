import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, products } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 bg-transparent border-none text-left"
      >
        <span className="font-sans text-xs text-obsidian tracking-widest uppercase font-500">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-pebble flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-pebble flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p
                id={`related-${product.titleId}`}
                className="font-serif text-sm text-obsidian uppercase tracking-widest mb-1"
              >
                {product.name}
              </p>
              <p className="font-sans text-sm text-stone">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
      setAdded(false);
      setQuantity(1);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-3xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-sm text-gold hover:text-gold-dark">
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

  const thumbnailImgIds = [
    { id: product.imgId, suffix: 'main' },
    { id: product.img2Id, suffix: 'alt' },
    { id: `${product.imgId}-t3`, suffix: 'detail' },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-sans text-xs text-pebble hover:text-gold transition-colors bg-transparent border-none p-0 tracking-widest uppercase"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <span className="text-linen">/</span>
          <Link to="/shop" className="font-sans text-xs text-pebble hover:text-gold transition-colors tracking-widest uppercase">
            Shop
          </Link>
          <span className="text-linen">/</span>
          <span className="font-sans text-xs text-stone tracking-widest uppercase">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbnailImgIds.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors bg-cream ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${thumb.id}-${thumb.suffix}`}
                    data-strk-img={`[${product.titleId}] gold jewelry ${thumb.suffix}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : activeImg === 1 ? product.img2Id : `${product.imgId}-detail`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-white px-2 py-1">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs text-gold tracking-ultra-wide uppercase mb-3">
              {product.material}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-obsidian uppercase tracking-widest font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-5">
              <StarRating rating={product.rating} count={product.reviewCount} size="md" />
            </div>

            <p className="font-serif text-3xl text-obsidian mb-6">${product.price}</p>

            <p
              id={product.descId}
              className="font-sans text-sm text-stone leading-relaxed mb-8 border-b border-linen pb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs text-obsidian tracking-widest uppercase mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-widest uppercase transition-all ${
                      selectedVariant === v
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'bg-transparent text-stone border-linen hover:border-stone'
                    } border`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs text-obsidian tracking-widest uppercase mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-stone hover:text-obsidian"
                >
                  −
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-stone hover:text-obsidian"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <p className="font-sans text-xs text-pebble text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
