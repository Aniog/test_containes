import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/home/Bestsellers';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-parchment">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-sans font-medium text-velvet">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-mink flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-mink flex-shrink-0" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm font-sans text-mink leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImg(0);
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-velvet mb-4">Product not found</p>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-sans text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]`, label: 'Main' },
    { id: product.imgId2, query: `gold jewelry worn model [${product.titleId}]`, label: 'Worn' },
    { id: `${product.imgId}-detail`, query: `gold jewelry detail texture close up [${product.titleId}]`, label: 'Detail' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans text-mink">
          <Link to="/" className="hover:text-velvet transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velvet transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    alt={`${product.name} ${img.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  alt={`${product.name} ${img.label}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-sans text-gold mb-2">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <h1
                id={product.titleId}
                className="font-serif text-2xl md:text-3xl uppercase tracking-widest2 text-velvet font-light leading-tight mb-3"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      style={i < Math.floor(product.rating) ? { color: '#c9a96e', fill: '#c9a96e' } : { color: '#d9d2c5', fill: '#d9d2c5' }}
                    />
                  ))}
                </div>
                <span className="text-xs font-sans text-mink">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-serif text-2xl text-velvet">${product.price}</p>
            </div>

            {/* Short description */}
            <p id={product.descId} className="text-sm font-sans text-mink leading-relaxed mb-8 border-t border-parchment pt-6">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-sans text-charcoal mb-3">
                Finish: <span className="text-velvet font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`text-xs uppercase tracking-widest font-sans px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-velvet text-ivory border-velvet'
                        : 'bg-transparent text-charcoal border-parchment hover:border-velvet'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-sans text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:text-velvet transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-sans text-velvet">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:text-velvet transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 ${
                added
                  ? 'bg-gold text-velvet'
                  : 'bg-velvet text-ivory hover:bg-charcoal'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-4 py-4 border-t border-parchment">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="text-[10px] uppercase tracking-widest font-sans text-mink">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and harsh chemicals. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Delivered in 3–7 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-parchment py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">Discover More</p>
            <h2 className="font-serif text-2xl md:text-3xl text-velvet font-light">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
