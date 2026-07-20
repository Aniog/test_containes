import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-ultra-wide uppercase text-charcoal-900">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-charcoal-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-charcoal-400" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-charcoal-600 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found);
    setSelectedVariant('Gold');
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!product || !containerRef.current) return;
    const { ImageHelper } = window;
    if (ImageHelper) {
      return ImageHelper.loadImages(containerRef.current);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-xl text-charcoal-400">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);
  const images = [product.imageQuery, product.imageQuery2];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-400 max-w-7xl mx-auto">
          <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="aspect-[3/4] bg-charcoal-50 overflow-hidden">
                <img
                  data-strk-img-id={`pdp-${product.id}-${activeImage}`}
                  data-strk-img={`${product.name} jewelry gold elegant close-up dark background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
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
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-gold-400' : 'border-transparent hover:border-charcoal-200'
                    }`}
                  >
                    <img
                      data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                      data-strk-img={`${product.name} jewelry gold ${i === 0 ? 'product' : 'worn model'}`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-4">
              <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-2">
                {product.category}
              </p>

              <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-charcoal-900 mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-charcoal-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="font-sans text-lg text-charcoal-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-sans text-sm text-charcoal-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="h-px bg-charcoal-100 mb-8" />

              {/* Variant selector */}
              <div className="mb-6">
                <p className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-charcoal-500 mb-3">
                  Tone: {selectedVariant}
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(variant.name)}
                      className={`flex items-center gap-2 px-5 py-2.5 border text-sm font-sans tracking-wide transition-all ${
                        selectedVariant === variant.name
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-400'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-charcoal-200"
                        style={{ backgroundColor: variant.color }}
                      />
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-charcoal-500 mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-charcoal-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-charcoal-500 hover:text-charcoal-900 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 h-11 flex items-center justify-center font-sans text-sm font-medium text-charcoal-900 border-x border-charcoal-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-charcoal-500 hover:text-charcoal-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button onClick={handleAddToCart} className="btn-gold w-full text-sm mb-4">
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-charcoal-100">
                <div className="text-center">
                  <Truck className="w-5 h-5 text-gold-500 mx-auto mb-1" strokeWidth={1.5} />
                  <p className="font-sans text-[10px] text-charcoal-500 tracking-wide">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 text-gold-500 mx-auto mb-1" strokeWidth={1.5} />
                  <p className="font-sans text-[10px] text-charcoal-500 tracking-wide">30-Day Returns</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 text-gold-500 mx-auto mb-1" strokeWidth={1.5} />
                  <p className="font-sans text-[10px] text-charcoal-500 tracking-wide">2-Year Warranty</p>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description" defaultOpen>
                  <p>{product.longDescription}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
                  <p><strong>Returns:</strong> {product.returns}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section-padding pb-16 md:pb-24 bg-cream-100">
        <div className="max-w-7xl mx-auto pt-16 md:pt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
