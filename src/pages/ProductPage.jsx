import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/product/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(product?.variants?.[0]?.value || null);
    setQuantity(1);
    setJustAdded(false);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedVariant, quantity);
    
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
    }, 500);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Materials: ${product.material}
• 18K gold plating over sterling silver base
• Hypoallergenic and nickel-free
• Cubic zirconia crystals (where applicable)

Care Instructions:
• Store in the provided jewelry pouch or box
• Avoid contact with water, perfumes, and lotions
• Clean gently with a soft dry cloth
• Remove before swimming or exercising`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Shipping:
• Free standard shipping on all orders
• Express shipping available at checkout
• Worldwide shipping available
• Orders typically ship within 1-2 business days

Returns:
• 30-day return policy
• Items must be unworn and in original packaging
• Free return shipping on all orders
• Refunds processed within 5-7 business days`,
    },
  ];

  return (
    <main className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-taupe">
            <li>
              <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/collection" className="hover:text-charcoal transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-ivory overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 border-2 overflow-hidden transition-colors ${
                      selectedImage === index ? 'border-charcoal' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4">
              {product.isNew && (
                <span className="px-3 py-1 bg-charcoal text-cream text-xs uppercase tracking-wider">
                  New
                </span>
              )}
              {product.isBestseller && (
                <span className="px-3 py-1 bg-gold-500 text-espresso text-xs uppercase tracking-wider">
                  Bestseller
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-stone'}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl text-charcoal font-medium">
                {formatPrice(product.price)}
              </span>
              {product.comparePrice && (
                <span className="text-lg text-taupe line-through">
                  {formatPrice(product.comparePrice)}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm text-charcoal/80 mb-3">
                  Finish: <span className="capitalize">{selectedVariant || 'Select'}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.value}
                      onClick={() => setSelectedVariant(variant.value)}
                      disabled={!variant.inStock}
                      className={`px-5 py-2 border text-sm transition-all ${
                        selectedVariant === variant.value
                          ? 'border-charcoal bg-charcoal text-cream'
                          : 'border-sand text-charcoal hover:border-charcoal'
                      } ${!variant.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm text-charcoal/80 mb-3">Quantity</label>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-4 text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 mb-4 ${
                justAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-charcoal text-cream hover:bg-espresso'
              }`}
            >
              {justAdded ? (
                <>
                  <Check size={18} />
                  Added to Bag
                </>
              ) : isAdding ? (
                'Adding...'
              ) : (
                <>
                  Add to Bag
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </>
              )}
            </button>

            {/* Wishlist */}
            <button className="w-full py-3 border border-sand text-sm text-charcoal/80 hover:border-charcoal hover:text-charcoal transition-colors flex items-center justify-center gap-2">
              <Heart size={16} />
              Add to Wishlist
            </button>

            {/* Trust Icons */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-sand">
              <div className="flex items-center gap-2 text-xs text-taupe">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-taupe">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                30-Day Returns
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 divide-y divide-sand">
              {accordions.map((accordion) => (
                <div key={accordion.id}>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{accordion.title}</span>
                    <ChevronDown
                      size={18}
                      className={`text-taupe transition-transform duration-200 ${
                        activeAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-charcoal/70 whitespace-pre-line leading-relaxed">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="divider mb-12" />
            <h2 className="font-serif text-2xl text-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
