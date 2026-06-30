import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-blush">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian">{title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-stone flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-velmora-stone flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-velmora-stone leading-relaxed">{children}</p>
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
    <section ref={containerRef} className="py-20 border-t border-velmora-blush">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group flex flex-col gap-3">
              <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-champagne transition-colors">
                {product.name}
              </h3>
              <p className="font-manrope text-sm font-medium text-velmora-obsidian">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-velmora-stone mb-4">Product not found</p>
          <button onClick={() => navigate('/shop')} className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const images = [
    { id: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}] gold jewelry close up` },
    { id: `pdp-alt-${product.imgId2}`, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `pdp-detail-${product.id}-c3d4e5`, query: `[${product.titleId}] jewelry detail texture` },
    { id: `pdp-lifestyle-${product.id}-f6g7h8`, query: `[${product.titleId}] jewelry lifestyle flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-xs text-velmora-stone/60 hover:text-velmora-stone transition-colors uppercase tracking-widest">Home</Link>
          <span className="text-velmora-stone/40 text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-velmora-stone/60 hover:text-velmora-stone transition-colors uppercase tracking-widest">Shop</Link>
          <span className="text-velmora-stone/40 text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-obsidian uppercase tracking-widest">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-linen aspect-square md:aspect-[4/5]">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-velmora-linen aspect-square border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-velmora-champagne' : 'border-transparent hover:border-velmora-blush'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl font-light uppercase tracking-widest text-velmora-obsidian mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-champagne text-velmora-champagne' : 'text-velmora-blush'}`}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-velmora-obsidian mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p id={product.descId} className="font-manrope text-sm text-velmora-stone leading-relaxed mb-8 border-b border-velmora-blush pb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian mb-3">
                  Finish: <span className="text-velmora-stone font-normal normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-velmora-champagne bg-velmora-champagne text-velmora-obsidian'
                          : 'border-velmora-blush text-velmora-stone hover:border-velmora-stone'
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
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-velmora-blush w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian hover:bg-velmora-linen transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-manrope text-sm text-velmora-obsidian border-x border-velmora-blush">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian hover:bg-velmora-linen transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-3 bg-velmora-champagne text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-obsidian hover:text-velmora-ivory transition-all duration-300 mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-velmora-blush text-velmora-stone font-manrope text-xs uppercase tracking-widest py-4 hover:border-velmora-stone transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-velmora-blush">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic', 'Gift Wrapping'].map(t => (
                <span key={t} className="font-manrope text-[10px] uppercase tracking-widest text-velmora-stone/70 flex items-center gap-1">
                  <span className="text-velmora-champagne">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span className="block">{product.care}</span>
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
