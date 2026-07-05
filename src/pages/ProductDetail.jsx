import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { formatPrice, generateStars } from '../lib/utils';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState('description');

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-700 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const { fullStars, hasHalfStar, emptyStars } = generateStars(product.rating);
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main className="pt-20 lg:pt-24">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-sm text-charcoal-400">
            <li>
              <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-charcoal-700 transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-charcoal-700">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] bg-cream-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-cream-400">Product Image {activeImage + 1}</span>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    activeImage === index
                      ? 'ring-2 ring-gold-400'
                      : 'ring-1 ring-cream-300 hover:ring-cream-400'
                  } transition-all`}
                >
                  <div className="w-full h-full bg-cream-200 flex items-center justify-center">
                    <span className="text-cream-400 text-xs">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="product-name text-2xl sm:text-3xl lg:text-4xl text-charcoal-700 mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-2xl lg:text-3xl font-medium text-charcoal-700">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-lg text-charcoal-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(fullStars)].map((_, i) => (
                  <Star key={`full-${i}`} size={16} className="fill-gold-400 text-gold-400" />
                ))}
                {hasHalfStar && (
                  <Star size={16} className="fill-gold-400/50 text-gold-400" />
                )}
                {[...Array(emptyStars)].map((_, i) => (
                  <Star key={`empty-${i}`} size={16} className="text-cream-300" />
                ))}
              </div>
              <span className="font-sans text-sm text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="font-sans text-sm font-medium text-charcoal-700 mb-3 block">
                Tone: {product.variants[selectedVariant].name}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2.5 rounded-full font-sans text-sm transition-all ${
                      selectedVariant === index
                        ? 'bg-charcoal-700 text-cream-50'
                        : 'border border-cream-300 text-charcoal-600 hover:border-charcoal-400'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-sm font-medium text-charcoal-700 mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-cream-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-charcoal-400 hover:text-charcoal-700 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 font-sans text-sm font-medium text-charcoal-700 border-x border-cream-300 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-charcoal-400 hover:text-charcoal-700 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Wishlist & Share */}
            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">
                <Heart size={16} />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-cream-200">
              {/* Description */}
              <div className="border-b border-cream-200">
                <button
                  onClick={() => toggleSection('description')}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm font-medium text-charcoal-700"
                >
                  Description
                  {expandedSection === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSection === 'description' && (
                  <div className="pb-4 font-sans text-sm text-charcoal-600 leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div className="border-b border-cream-200">
                <button
                  onClick={() => toggleSection('materials')}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm font-medium text-charcoal-700"
                >
                  Materials & Care
                  {expandedSection === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSection === 'materials' && (
                  <div className="pb-4 font-sans text-sm text-charcoal-600 leading-relaxed space-y-2">
                    <p><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleSection('shipping')}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm font-medium text-charcoal-700"
                >
                  Shipping & Returns
                  {expandedSection === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSection === 'shipping' && (
                  <div className="pb-4 font-sans text-sm text-charcoal-600 leading-relaxed space-y-2">
                    <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                    <p><strong>Returns:</strong> We offer a 30-day return policy. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24 pt-16 border-t border-cream-200">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-700 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.slug}`} className="group">
                  <div className="aspect-[3/4] bg-cream-200 rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-cream-400 text-sm">Image</span>
                    </div>
                  </div>
                  <h3 className="product-name text-sm text-charcoal-700 mb-1 line-clamp-2">
                    {related.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-charcoal-700">
                    {formatPrice(related.price)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
