import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet font-semibold">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-stone flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-stone flex-shrink-0" />
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

function RelatedCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden bg-charcoal mb-3">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p id={`related-${product.titleId}`} className="font-serif text-sm tracking-widest uppercase text-velvet font-light">
        {product.name}
      </p>
      <p id={`related-${product.descId}`} className="font-sans text-xs text-stone mt-0.5">{product.shortDesc}</p>
      <p className="font-sans text-sm text-velvet font-medium mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-mist flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-serif text-2xl text-velvet font-light">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-champagne hover:text-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, query: `[pdp-desc] [pdp-title]` },
    { id: product.img2Id, query: `[pdp-title] gold jewelry worn model` },
    { id: `pdp-img3-${product.id}`, query: `[pdp-title] jewelry detail close-up` },
  ];

  return (
    <div ref={containerRef} className="bg-mist min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-[4/5] overflow-hidden bg-charcoal">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 aspect-square overflow-hidden bg-charcoal border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-champagne' : 'border-transparent hover:border-smoke'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="space-y-6 lg:pt-4">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id="pdp-title"
              className="font-serif text-3xl md:text-4xl tracking-widest2 uppercase text-velvet font-light leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} size={14} />
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velvet font-light">${product.price}</p>

            {/* Short description */}
            <p id="pdp-desc" className="font-sans text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            <div className="w-full h-px bg-smoke/40" />

            {/* Variant selector */}
            <div className="space-y-3">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet font-semibold">
                Finish: <span className="text-champagne">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-sans text-xs tracking-widest uppercase font-medium border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-velvet text-champagne border-velvet'
                        : 'bg-transparent text-stone border-smoke hover:border-velvet hover:text-velvet'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet font-semibold">
                Quantity
              </p>
              <div className="flex items-center gap-4 border border-smoke w-fit">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 text-stone hover:text-champagne transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-sm text-velvet w-6 text-center font-medium">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 text-stone hover:text-champagne transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <ShoppingBag size={15} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-stone flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-champagne" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="pt-4 space-y-0">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-3 font-medium">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">
                Complete Your Look
              </h2>
              <div className="w-10 h-px bg-champagne mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
