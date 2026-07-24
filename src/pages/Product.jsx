import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Check } from 'lucide-react';
import { getProductBySlug, getBestsellers } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-warm-gray" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-velmora-warm-gray text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = getProductBySlug(slug);
  const bestsellers = getBestsellers().filter(p => p.id !== product?.id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.options?.[0] || '');
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="heading-section mb-4">Product Not Found</h1>
        <p className="text-velmora-warm-gray mb-8">The product you're looking for doesn't exist.</p>
        <Link to="/shop" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate a brief delay for feedback
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem(product, selectedVariant, quantity);
    setIsAdding(false);
    setShowAdded(true);
    
    setTimeout(() => {
      setShowAdded(false);
    }, 2000);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="pt-8 md:pt-12 pb-20">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-velmora-warm-gray">
            <li>
              <Link to="/" className="hover:text-velmora-charcoal transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-border/30 rounded-lg overflow-hidden">
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
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-velmora-gold'
                        : 'border-transparent hover:border-velmora-border'
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
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Header */}
            <div className="mb-6">
              {product.isBestseller && (
                <span className="text-xs font-medium uppercase tracking-ultra-wide text-velmora-gold mb-2 block">
                  Bestseller
                </span>
              )}
              <h1 className="font-serif text-3xl md:text-4xl mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-velmora-gold fill-current'
                          : 'text-velmora-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-warm-gray">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              {/* Price */}
              <p className="text-2xl font-medium">${product.price}</p>
            </div>

            {/* Description */}
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants?.options?.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  {product.variants.label}: <span className="font-normal text-velmora-warm-gray">{selectedVariant}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedVariant(option)}
                      className={`px-4 py-2 text-sm rounded-sm border transition-all ${
                        selectedVariant === option
                          ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                          : 'border-velmora-border hover:border-velmora-gold'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-velmora-border rounded-sm w-fit">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors disabled:opacity-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
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
              className={`w-full btn-primary py-4 text-base mb-4 ${
                showAdded ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              {isAdding ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Adding...
                </span>
              ) : showAdded ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  Added to Bag
                </span>
              ) : (
                'Add to Bag'
              )}
            </button>

            <p className="text-center text-sm text-velmora-warm-gray">
              Free shipping on orders over $75 · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
                <p className="mb-3"><strong>Care Instructions:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Store in a cool, dry place away from direct sunlight</li>
                  <li>Remove before swimming, showering, or exercising</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>Avoid contact with perfumes, lotions, and chemicals</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free standard shipping on orders over $75</li>
                  <li>Express shipping available at checkout</li>
                  <li>Free worldwide shipping on orders over $150</li>
                  <li>30-day hassle-free returns</li>
                  <li>Final sale items are non-returnable</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 md:mt-28">
          <h2 className="heading-section text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {bestsellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
