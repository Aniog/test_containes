import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
  }, [product, navigate]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedImage]);

  if (!product) return null;

  const relatedProducts = product.related
    .map(rid => products.find(p => p.id === rid))
    .filter(Boolean);

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[var(--velmora-text-muted)] mb-8">
          <Link to="/" className="hover:text-[var(--velmora-accent)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--velmora-accent)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--velmora-text)]">{product.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-[var(--velmora-bg-secondary)] overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main-${selectedImage}`}
                data-strk-img="[velmora-jewelry]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.shortName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-[var(--velmora-bg-secondary)] overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--velmora-accent)]'
                      : 'border-transparent hover:border-[var(--velmora-warm-gray)]'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${index}`}
                    data-strk-img="[velmora-jewelry]"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="velmora-heading-uppercase text-2xl sm:text-3xl mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[var(--velmora-accent)] text-[var(--velmora-accent)]'
                        : 'text-[var(--velmora-warm-gray)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium mb-6">${product.price}</p>

            {/* Short description */}
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 text-sm tracking-wider border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent-light)] text-[var(--velmora-accent)]'
                        : variant.available
                        ? 'border-[var(--velmora-border)] hover:border-[var(--velmora-text-muted)]'
                        : 'border-[var(--velmora-border-light)] text-[var(--velmora-text-light)] cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[var(--velmora-border)] hover:border-[var(--velmora-text-muted)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[var(--velmora-border)] hover:border-[var(--velmora-text-muted)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 velmora-btn-primary py-4"
              >
                Add to Bag — ${product.price * quantity}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border border-[var(--velmora-border)] transition-colors ${
                  isWishlisted
                    ? 'text-red-500 border-red-200 bg-red-50'
                    : 'hover:border-[var(--velmora-text-muted)]'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button
                className="p-4 border border-[var(--velmora-border)] hover:border-[var(--velmora-text-muted)] transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Material badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--velmora-bg-secondary)] text-xs text-[var(--velmora-text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--velmora-accent)]" />
              {product.material} · Hypoallergenic
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {/* Description */}
              <div className="border-t border-[var(--velmora-border)]">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-medium tracking-wide">Description</span>
                  {openAccordion === 'description'
                    ? <ChevronUp className="w-4 h-4" />
                    : <ChevronDown className="w-4 h-4" />
                  }
                </button>
                {openAccordion === 'description' && (
                  <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
                    {product.description}
                    <p className="mt-2">Each piece arrives in our signature gift box, ready for gifting or keeping as a personal treasure.</p>
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="border-t border-[var(--velmora-border)]">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-medium tracking-wide">Materials & Care</span>
                  {openAccordion === 'materials'
                    ? <ChevronUp className="w-4 h-4" />
                    : <ChevronDown className="w-4 h-4" />
                  }
                </button>
                {openAccordion === 'materials' && (
                  <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed space-y-2">
                    <p><strong className="text-[var(--velmora-text)]">Materials:</strong> {product.details.materials}</p>
                    <p><strong className="text-[var(--velmora-text)]">Care:</strong> {product.details.care}</p>
                    <p><strong className="text-[var(--velmora-text)]">Dimensions:</strong> {product.details.dimensions}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-[var(--velmora-border)]">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-medium tracking-wide">Shipping & Returns</span>
                  {openAccordion === 'shipping'
                    ? <ChevronUp className="w-4 h-4" />
                    : <ChevronDown className="w-4 h-4" />
                  }
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed space-y-2">
                    <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                    <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                    <p>Express shipping available at checkout for 2-4 business day delivery.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">Complete the Look</p>
              <h2 className="velmora-heading text-3xl sm:text-4xl">You May Also Like</h2>
              <div className="velmora-divider-thin w-16 mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
