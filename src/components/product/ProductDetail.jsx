import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductBySlug, products } from '../../data/products';
import ProductCard from './ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart, isLoading } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold');
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[var(--color-espresso)] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    await addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
        <div className="space-y-3">
          <div>
            <p className="font-medium text-[var(--color-espresso)] mb-1">Materials</p>
            <p className="text-[var(--color-mocha)]">{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-espresso)] mb-1">Care Instructions</p>
            <p className="text-[var(--color-mocha)]">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-[var(--color-mocha)]">
          <p><strong className="text-[var(--color-espresso)]">Free Shipping:</strong> On all orders over $50</p>
          <p><strong className="text-[var(--color-espresso)]">Standard Delivery:</strong> 5-7 business days</p>
          <p><strong className="text-[var(--color-espresso)]">Express Delivery:</strong> 2-3 business days</p>
          <p><strong className="text-[var(--color-espresso)]">Returns:</strong> 30-day hassle-free returns</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container py-4">
        <nav className="flex items-center gap-2 text-xs text-[var(--color-warm-gray)]">
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-[var(--color-gold)] transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[var(--color-espresso)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-[var(--color-cream)] overflow-hidden">
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
                      className={`w-20 h-20 bg-[var(--color-cream)] overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? 'border-[var(--color-gold)]'
                          : 'border-transparent hover:border-[var(--color-divider)]'
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
              {/* Category */}
              <p className="text-xs text-[var(--color-warm-gray)] uppercase tracking-[0.1em] mb-2">
                {product.category}
              </p>

              {/* Name */}
              <h1
                className="text-2xl lg:text-3xl text-[var(--color-espresso)] mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {product.name.toUpperCase()}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'text-[var(--color-gold)]' : 'text-[var(--color-divider)]'}
                      fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-mocha)]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-medium text-[var(--color-espresso)] mb-6">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-[var(--color-mocha)] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-3">
                    Finish: <span className="text-[var(--color-mocha)]">{selectedVariant}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-2 text-xs uppercase tracking-[0.1em] border transition-colors ${
                          selectedVariant === variant
                            ? 'border-[var(--color-espresso)] bg-[var(--color-espresso)] text-[var(--color-ivory)]'
                            : 'border-[var(--color-divider)] text-[var(--color-mocha)] hover:border-[var(--color-espresso)]'
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-espresso)] mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[var(--color-divider)]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-[var(--color-mocha)] hover:text-[var(--color-espresso)] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-12 text-center text-[var(--color-espresso)]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-[var(--color-mocha)] hover:text-[var(--color-espresso)] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} />
                  {isLoading ? 'Adding...' : 'Add to Cart'}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                    isWishlisted
                      ? 'border-[var(--color-espresso)] bg-[var(--color-espresso)] text-[var(--color-ivory)]'
                      : 'border-[var(--color-divider)] text-[var(--color-mocha)] hover:border-[var(--color-espresso)]'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 py-4 border-t border-b border-[var(--color-divider)] mb-8">
                <span className="text-xs text-[var(--color-mocha)]">
                  ✓ Free shipping over $50
                </span>
                <span className="text-xs text-[var(--color-mocha)]">
                  ✓ 30-day returns
                </span>
              </div>

              {/* Accordions */}
              <div className="space-y-0">
                {accordions.map((accordion) => (
                  <div key={accordion.id} className="border-b border-[var(--color-divider)]">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm font-medium text-[var(--color-espresso)] uppercase tracking-[0.05em]">
                        {accordion.title}
                      </span>
                      {activeAccordion === accordion.id ? (
                        <ChevronUp size={16} className="text-[var(--color-mocha)]" />
                      ) : (
                        <ChevronDown size={16} className="text-[var(--color-mocha)]" />
                      )}
                    </button>
                    {activeAccordion === accordion.id && (
                      <div className="pb-4 text-sm text-[var(--color-mocha)] leading-relaxed">
                        {typeof accordion.content === 'string' ? (
                          <p>{accordion.content}</p>
                        ) : (
                          accordion.content
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[var(--color-ivory)]">
          <div className="container">
            <h2
              className="text-2xl lg:text-3xl text-[var(--color-espresso)] text-center mb-10"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
