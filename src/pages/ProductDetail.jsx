import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-gold fill-gold' : 'text-warm-border'}`}
          />
        ))}
      </div>
      <span className="text-[11px] text-taupe">({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[11px] uppercase tracking-[0.15em] text-ink">{title}</span>
        {open ? <ChevronUp className="w-3.5 h-3.5 text-taupe" /> : <ChevronDown className="w-3.5 h-3.5 text-taupe" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-taupe leading-relaxed font-light">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addItem, setCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [material, setMaterial] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-taupe font-serif text-xl mb-4">Product not found</p>
          <Link to="/" className="text-gold text-[11px] uppercase tracking-[0.2em] hover:text-gold-hover transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const formatPrice = (price) => `$${price.toFixed(0)}`;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      material,
      quantity,
      image: product.images[0].id,
    });
    setCartOpen(true);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-taupe mb-8">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/shop/${product.category}`} className="hover:text-ink transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-warm-light overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.images[selectedImage].id}`}
                data-strk-img={`[pdp-title] [pdp-price] gold jewelry detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 bg-warm-light overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[pdp-title] gold jewelry ${img.label}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-4">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl text-ink">{product.name}</h1>
            <p id="pdp-price" className="font-serif italic text-2xl text-ink mt-3">{formatPrice(product.price)}</p>
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="mt-6 text-sm text-taupe leading-relaxed font-light border-b border-warm-border pb-6">
              {product.description}
            </p>

            {/* Material variant */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.12em] text-taupe mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setMaterial(option)}
                    className={`px-6 py-3 text-[11px] uppercase tracking-[0.12em] border transition-all duration-300 ${
                      material === option
                        ? 'border-gold bg-gold/5 text-ink'
                        : 'border-warm-border text-taupe hover:border-taupe'
                    }`}
                  >
                    {option} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.12em] text-taupe mb-3">Quantity</p>
              <div className="flex items-center border border-warm-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-taupe hover:text-ink transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-taupe hover:text-ink transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold hover:bg-gold-hover text-white text-[11px] uppercase tracking-[0.2em] py-4 mt-8 transition-colors"
            >
              Add to Cart &mdash; {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-ink mb-1">Materials</p>
                    <p>{product.details.materials}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-ink mb-1">Care</p>
                    <p>{product.details.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.details.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-warm-border">
          <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="relative aspect-[4/5] bg-warm-light overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 px-0.5">
                  <h3 id={`related-name-${p.id}`} className="text-product-name text-ink truncate">{p.name}</h3>
                  <p className="font-serif italic text-sm text-ink mt-1">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}