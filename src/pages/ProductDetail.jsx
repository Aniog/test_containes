import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { getProductBySlug, getBestsellers } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const bestsellers = getBestsellers().filter(p => p.id !== product?.id).slice(0, 4);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);
  
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setSelectedImage(0);
      setQuantity(1);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-900">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-gold-600 hover:text-gold-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product, quantity, selectedVariant);
    setIsAdding(false);
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
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-2">Materials</h4>
            <p className="font-sans text-sm text-charcoal-800/80">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-2">Care Instructions</h4>
            <p className="font-sans text-sm text-charcoal-800/80">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-2">Shipping</h4>
            <p className="font-sans text-sm text-charcoal-800/80">
              Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express delivery available at checkout.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-2">Returns</h4>
            <p className="font-sans text-sm text-charcoal-800/80">
              We offer a 30-day return policy for unworn items in original packaging. Contact us for a prepaid return label.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-charcoal-800/70">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-900">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-900 capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-cream-200 overflow-hidden">
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
                  className={`w-20 h-20 bg-cream-200 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-charcoal-900'
                      : 'border-transparent hover:border-charcoal-800/30'
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
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Name & Price */}
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 uppercase tracking-wide">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="font-serif text-2xl text-charcoal-900">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-800/20'
                    }`}
                  />
                ))}
                <span className="ml-2 font-sans text-sm text-charcoal-800/70">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mt-8 divider" />

            {/* Description */}
            <p className="mt-6 font-sans text-sm text-charcoal-800/80 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <label className="block font-sans text-xs font-medium text-charcoal-900 uppercase tracking-wide mb-3">
                  Finish
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 border-2 font-sans text-sm transition-colors ${
                        selectedVariant === variant
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-charcoal-800/20 text-charcoal-900 hover:border-charcoal-800'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <label className="block font-sans text-xs font-medium text-charcoal-900 uppercase tracking-wide mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-charcoal-800/20 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream-200 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-sans text-sm min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream-200 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="mt-8 w-full bg-charcoal-900 text-cream-50 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-charcoal-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              {isAdding ? 'Adding to Bag...' : 'Add to Bag'}
            </button>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6">
              <span className="font-sans text-xs text-charcoal-800/70">✓ Free Shipping</span>
              <span className="font-sans text-xs text-charcoal-800/70">✓ 30-Day Returns</span>
              <span className="font-sans text-xs text-charcoal-800/70">✓ Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          <div className="border-t border-charcoal-800/10">
            {accordions.map((accordion) => (
              <div key={accordion.id} className="border-b border-charcoal-800/10">
                <button
                  onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span className="font-sans text-sm font-medium text-charcoal-900 uppercase tracking-wide">
                    {accordion.title}
                  </span>
                  {openAccordion === accordion.id ? (
                    <ChevronUp className="w-4 h-4 text-charcoal-800" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-charcoal-800" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === accordion.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  {typeof accordion.content === 'string' ? (
                    <p className="font-sans text-sm text-charcoal-800/80 leading-relaxed">
                      {accordion.content}
                    </p>
                  ) : (
                    accordion.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-16 sm:py-20 lg:py-24 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
