import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-charcoal-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal-800">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-charcoal-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-charcoal-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setQuantity(1);
    setOpenAccordion('description');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-secondary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity, product.variants?.[selectedVariant] || null);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <main className="min-h-screen bg-cream-100 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-500">
          <Link to="/" className="hover:text-charcoal-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-800 transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-charcoal-800 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-charcoal-800">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-product bg-charcoal-200 overflow-hidden">
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
                    className={`w-20 h-20 bg-charcoal-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-charcoal-800'
                        : 'border-transparent hover:border-charcoal-300'
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
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="font-serif text-2xl sm:text-3xl text-charcoal-900 uppercase tracking-wide mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-charcoal-300'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-charcoal-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="font-serif text-2xl text-charcoal-900">${product.price}</p>
            </div>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs font-medium tracking-wider uppercase text-charcoal-700 mb-3">
                  Finish: <span className="text-charcoal-500">{product.variants[selectedVariant]}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(index)}
                      className={`px-5 py-2 border font-sans text-xs tracking-wider uppercase transition-all ${
                        selectedVariant === index
                          ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                          : 'border-charcoal-300 text-charcoal-700 hover:border-charcoal-800'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium tracking-wider uppercase text-charcoal-700 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-charcoal-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 font-sans text-sm font-medium text-charcoal-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-4 flex items-center justify-center gap-3 font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300 mb-4 ${
                isAdding
                  ? 'bg-gold-500 text-charcoal-900'
                  : 'bg-charcoal-800 text-cream-50 hover:bg-charcoal-900'
              }`}
            >
              {isAdding ? (
                <>
                  <CheckIcon />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  Add to Bag
                </>
              )}
            </button>

            {/* Product Details */}
            <div className="py-6 border-t border-charcoal-200">
              <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Accordions */}
            <div>
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                <p className="mb-4">{product.description}</p>
                <p className="text-charcoal-500 italic">
                  Each piece is hand-finished by skilled artisans for exceptional quality and lasting beauty.
                </p>
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-charcoal-800">Material:</span>
                    <span>{product.material}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-charcoal-800">Care:</span>
                    <span>{product.care}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-charcoal-500">
                    <li>Remove before swimming, showering, or exercising</li>
                    <li>Apply perfume and lotions before wearing</li>
                    <li>Store in the provided pouch when not in use</li>
                  </ul>
                </div>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-charcoal-800 mb-1">Free Shipping</p>
                    <p className="text-charcoal-500">On all orders over $50. Standard delivery 5-7 business days.</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 mb-1">Easy Returns</p>
                    <p className="text-charcoal-500">30-day return policy. Items must be unworn with original packaging.</p>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-cream-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default ProductDetailPage;
