import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function StarRating({ rating, showCount, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            className={s <= Math.round(rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-300'}
          />
        ))}
      </div>
      <span className="text-sm font-sans font-medium text-charcoal-700">{rating}</span>
      {showCount && <span className="text-sm font-sans text-charcoal-500">({reviews} reviews)</span>}
    </div>
  );
}

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-charcoal-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-sans font-semibold uppercase tracking-extra-wide text-charcoal-900">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp size={16} className="text-charcoal-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-charcoal-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="body-text text-charcoal-600 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [added, setAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="heading-3 text-charcoal-700 mb-4">Product not found</p>
          <Link to="/shop" className="btn-secondary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs font-sans text-charcoal-500 hover:text-charcoal-900 transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* LEFT: Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative aspect-square bg-cream-100 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Badges */}
              {product.tags.includes('bestseller') && (
                <span className="absolute top-4 left-4 bg-charcoal-900 text-cream-50 text-[10px] font-sans font-semibold uppercase tracking-ultra-wide px-3 py-1.5">
                  Bestseller
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 bg-cream-100 overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === i ? 'border-charcoal-900' : 'border-transparent hover:border-charcoal-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:py-4 flex flex-col">
            {/* Category label */}
            <p className="label text-gold-500 mb-3">{product.category}</p>

            {/* Product name */}
            <h1 className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-extra-wide text-charcoal-900 mb-3 leading-snug">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} showCount reviews={product.reviews} />
            </div>

            {/* Price */}
            <p className="price text-2xl mb-6">${product.price}</p>

            {/* Description */}
            <p className="body-text text-charcoal-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="hairline mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="label text-charcoal-700 mb-3">
                Finish: <span className="text-charcoal-900">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans font-medium uppercase tracking-wide border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                        : 'bg-white text-charcoal-700 border-charcoal-200 hover:border-charcoal-900'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-4">
              {/* Quantity */}
              <div className="flex items-center border border-charcoal-200 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-sans font-medium text-charcoal-900 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-primary gap-2 ${
                  added ? 'bg-gold-500 hover:bg-gold-500' : ''
                }`}
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`p-3 border transition-colors duration-200 ${
                  wishlist
                    ? 'bg-red-50 border-red-200 text-red-400'
                    : 'bg-white border-charcoal-200 text-charcoal-400 hover:border-charcoal-900 hover:text-charcoal-900'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={18} strokeWidth={1.5} className={wishlist ? 'fill-red-400' : ''} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-charcoal-100">
              {['Free Worldwide Shipping', '30-Day Returns', 'Gift-Ready Packaging'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="text-xs font-sans text-charcoal-600">{item}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion
                title="Description"
                isOpen={activeAccordion === 'description'}
                onToggle={() => setActiveAccordion(activeAccordion === 'description' ? null : 'description')}
              >
                {product.description}
                <br /><br />
                {product.details}
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={activeAccordion === 'materials'}
                onToggle={() => setActiveAccordion(activeAccordion === 'materials' ? null : 'materials')}
              >
                {product.materials}
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={activeAccordion === 'shipping'}
                onToggle={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
              >
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-cream-100 border-t border-charcoal-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="label text-gold-500 mb-3">Complete the look</p>
              <h2 className="heading-3 text-charcoal-900">You may also like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
