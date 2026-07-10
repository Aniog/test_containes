import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart, ChevronLeft } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import { useCart } from '../../context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{ borderTop: '1px solid rgba(200, 185, 154, 0.3)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm tracking-wider uppercase" style={{ color: 'var(--espresso-mid)' }}>
          {title}
        </span>
        <ChevronDown 
          size={18} 
          style={{ 
            color: 'var(--stone-dark)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="text-sm leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setSelectedImage(0);
    }
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-heading mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      {/* Breadcrumb */}
      <div className="container py-6">
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--gold)]"
          style={{ color: 'var(--stone-dark)' }}
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div 
                className="aspect-square rounded overflow-hidden"
                style={{ backgroundColor: 'var(--cream-dark)' }}
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
                    className={`w-20 h-20 rounded overflow-hidden transition-all ${
                      selectedImage === index 
                        ? 'ring-2 ring-[var(--gold)]' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: 'var(--cream-dark)' }}
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
              {/* Name & Price */}
              <div className="mb-6">
                <h1 
                  className="font-serif text-2xl md:text-3xl uppercase tracking-wider mb-3"
                  style={{ color: 'var(--espresso-mid)' }}
                >
                  {product.name}
                </h1>
                <p className="text-2xl price">${product.price}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(product.rating) ? 'var(--gold)' : 'transparent'}
                      stroke={i < Math.floor(product.rating) ? 'var(--gold)' : 'var(--stone)'}
                    />
                  ))}
                </div>
                <span className="text-sm" style={{ color: 'var(--stone-dark)' }}>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--espresso-light)' }}>
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mb-8">
                  <p className="text-sm mb-3" style={{ color: 'var(--espresso-mid)' }}>
                    Finish: <span className="font-medium">{selectedVariant}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-2 text-sm tracking-wider uppercase rounded transition-all ${
                          selectedVariant === variant
                            ? 'bg-[var(--espresso)] text-[var(--cream)]'
                            : 'border border-[var(--stone)] text-[var(--espresso-light)] hover:border-[var(--espresso)]'
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8">
                <p className="text-sm mb-3" style={{ color: 'var(--espresso-mid)' }}>
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <div 
                    className="flex items-center border"
                    style={{ borderColor: 'rgba(200, 185, 154, 0.3)' }}
                  >
                    <button
                      onClick={decrementQuantity}
                      className="p-3 transition-colors hover:bg-[var(--cream-dark)]"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} style={{ color: 'var(--espresso-mid)' }} />
                    </button>
                    <span 
                      className="w-12 text-center text-sm"
                      style={{ color: 'var(--espresso)' }}
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="p-3 transition-colors hover:bg-[var(--cream-dark)]"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} style={{ color: 'var(--espresso-mid)' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart & Wishlist */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary flex-1"
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 rounded border transition-all"
                  style={{ 
                    borderColor: isWishlisted ? 'var(--gold)' : 'rgba(200, 185, 154, 0.3)',
                    color: isWishlisted ? 'var(--gold)' : 'var(--stone-dark)'
                  }}
                  aria-label="Add to wishlist"
                >
                  <Heart 
                    size={20} 
                    fill={isWishlisted ? 'var(--gold)' : 'transparent'} 
                  />
                </button>
              </div>

              {/* Trust Badges */}
              <div 
                className="flex flex-wrap gap-4 py-4 mb-8"
                style={{ borderTop: '1px solid rgba(200, 185, 154, 0.3)', borderBottom: '1px solid rgba(200, 185, 154, 0.3)' }}
              >
                <span className="text-xs" style={{ color: 'var(--stone-dark)' }}>✓ Free Shipping</span>
                <span className="text-xs" style={{ color: 'var(--stone-dark)' }}>✓ 30-Day Returns</span>
                <span className="text-xs" style={{ color: 'var(--stone-dark)' }}>✓ Hypoallergenic</span>
              </div>

              {/* Accordions */}
              <div>
                <Accordion title="Description" defaultOpen>
                  <p className="mb-4">{product.description}</p>
                  <p>{product.materials}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-4"><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care Instructions:</strong> {product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p className="mb-4">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                  <p>Enjoy free returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-16" style={{ backgroundColor: 'var(--cream-dark)' }}>
          <div className="container">
            <h2 className="section-heading text-center mb-12">You May Also Like</h2>
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
}
