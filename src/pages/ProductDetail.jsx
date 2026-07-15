import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm font-sans font-medium text-ink uppercase tracking-wider"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-taupe-600 font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.id !== id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 text-center py-20">
        <p className="text-taupe-500 font-sans">Product not found.</p>
        <Link to="/shop" className="text-gold-500 font-sans text-sm mt-2 inline-block hover:text-gold-600">
          Continue shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-16 md:pt-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-taupe-500 mb-8">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-cream-200 rounded-sm overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 bg-cream-200 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold-500' : 'border-transparent hover:border-cream-400'
                  }`}
                >
                  <img
                    alt=""
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <h1 id={product.titleId} className="product-name text-lg md:text-xl text-ink">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-500 text-gold-500'
                        : 'text-cream-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-taupe-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-ink mt-4">${product.price}</p>

            <p id={product.descId} className="text-sm text-taupe-600 font-sans leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">
                Finish: <span className="text-gold-500 capitalize">{selectedVariant} tone</span>
              </h4>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-wider border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-ink bg-ink text-white'
                        : 'border-cream-400 text-taupe-600 hover:border-ink hover:text-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">Quantity</h4>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-cream-400 flex items-center justify-center hover:bg-cream-200 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 text-ink" />
                </button>
                <span className="w-8 text-center text-sm font-sans text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-cream-400 flex items-center justify-center hover:bg-cream-200 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 text-ink" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-8 py-4 text-center ${
                added ? 'bg-green-700 hover:bg-green-800' : ''
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 hairline">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="font-medium text-ink">Materials:</strong> {product.materials}</p>
                <p><strong className="font-medium text-ink">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Orders are processed within 1–2 business days.</p>
                <p className="mt-2">30-day return policy for unworn items in original packaging. Full refund to original payment method.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="hairline mb-10" />
            <h2 className="text-2xl md:text-3xl font-serif text-ink mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}