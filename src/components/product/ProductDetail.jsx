import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import { formatPrice } from '../../lib/utils';
import { useCart } from '../../context/CartContext';
import ProductCard from './ProductCard';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b" style={{ borderColor: 'var(--color-champagne)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--color-espresso)' }}>
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: 'var(--color-taupe)' }}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm leading-relaxed" style={{ color: 'var(--color-walnut)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart, isLoading } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Product Not Found
          </h1>
          <Link to="/collection" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs" style={{ color: 'var(--color-taupe)' }}>
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:underline">Shop</Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--color-espresso)' }}>{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div
              className="relative aspect-square overflow-hidden"
              style={{ backgroundColor: 'var(--color-ivory)' }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ ringColor: 'var(--color-gold)' }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="product-name text-2xl md:text-3xl mb-2"
              style={{ color: 'var(--color-espresso)' }}
            >
              {product.name}
            </h1>
            
            {/* Price */}
            <p className="text-xl font-medium mb-4" style={{ color: 'var(--color-walnut)' }}>
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-current' : ''
                    }`}
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-walnut)' }}>
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm mb-3" style={{ color: 'var(--color-espresso)' }}>
                  Finish: <span className="font-medium">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-sm border transition-all ${
                        selectedVariant === variant
                          ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]'
                          : 'border-[var(--color-champagne)] hover:border-[var(--color-charcoal)]'
                      }`}
                      style={{
                        borderColor: selectedVariant === variant ? 'var(--color-charcoal)' : 'var(--color-champagne)',
                        backgroundColor: selectedVariant === variant ? 'var(--color-charcoal)' : 'transparent',
                        color: selectedVariant === variant ? 'var(--color-cream)' : 'var(--color-espresso)',
                      }}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm mb-3" style={{ color: 'var(--color-espresso)' }}>
                Quantity
              </p>
              <div
                className="inline-flex items-center border"
                style={{ borderColor: 'var(--color-champagne)' }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 transition-opacity hover:opacity-60"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" style={{ color: 'var(--color-espresso)' }} />
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 transition-opacity hover:opacity-60"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" style={{ color: 'var(--color-espresso)' }} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={`w-full py-4 text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
                addedToCart ? 'bg-green-700' : ''
              }`}
              style={{
                backgroundColor: addedToCart ? '#166534' : 'var(--color-charcoal)',
                color: 'var(--color-cream)',
              }}
            >
              {isLoading ? (
                'Adding...'
              ) : addedToCart ? (
                'Added to Bag!'
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Add to Bag
                </>
              )}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on orders over $75.</p>
                <p className="mb-2">Standard delivery: 5-7 business days.</p>
                <p>30-day returns on all unworn items in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <h2
            className="font-serif text-2xl md:text-3xl text-center mb-8"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}