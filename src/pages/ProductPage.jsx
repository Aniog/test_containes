import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RefreshCw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart, isLoading } = useCart();
  
  const product = products.find(p => p.slug === slug);
  const relatedProducts = products.filter(p => p.id !== product?.id && p.category === product?.category).slice(0, 4);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const images = [product.image, product.hoverImage];

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
            <h4 className="font-medium mb-2">Materials</h4>
            <p className="text-warm-gray">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Care Instructions</h4>
            <p className="text-warm-gray">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <Truck size={20} className="text-gold flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-1">Free Worldwide Shipping</h4>
              <p className="text-sm text-warm-gray">On all orders over $50. Standard delivery 5-7 business days.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <RefreshCw size={20} className="text-gold flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-1">30-Day Returns</h4>
              <p className="text-sm text-warm-gray">Not satisfied? Return unworn items in original packaging within 30 days.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-warm-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-warm-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-ivory overflow-hidden">
              <img 
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-ivory overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="product-name text-lg mb-3">{product.name}</h1>
              <p className="text-2xl font-medium">{formatPrice(product.price)}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'var(--color-muted)'}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-warm-gray mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm text-warm-gray mb-3">Finish: <span className="capitalize">{selectedVariant}</span></p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm border transition-all ${
                        selectedVariant === variant
                          ? 'border-warm-black bg-warm-black text-cream'
                          : 'border-champagne hover:border-warm-black'
                      }`}
                    >
                      {variant === 'gold' ? 'Gold' : 'Silver'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm text-warm-gray mb-3">Quantity</p>
              <div className="flex items-center border w-fit" style={{ borderColor: 'var(--color-champagne)' }}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="w-full py-5 text-sm tracking-widest uppercase bg-charcoal text-cream hover:bg-warm-black transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Adding...' : 'Add to Bag'}
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-champagne)' }}>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <Truck size={14} className="text-gold" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <RefreshCw size={14} className="text-gold" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <Shield size={14} className="text-gold" />
                2-Year Warranty
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-b" style={{ borderColor: 'var(--color-champagne)' }}>
              <button
                onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-medium">{accordion.title}</span>
                {activeAccordion === accordion.id ? (
                  <ChevronUp size={18} className="text-gold" />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {activeAccordion === accordion.id && (
                <div className="pb-6 text-warm-gray leading-relaxed animate-fade-in">
                  {accordion.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
