import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-wider text-text-primary">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-text-secondary" />
        ) : (
          <ChevronDown size={18} className="text-text-secondary" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-text-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function ProductGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-cream overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt="Product image"
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                selectedIndex === index
                  ? 'border-gold'
                  : 'border-transparent hover:border-divider'
              }`}
            >
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.slug === slug);
  const relatedProducts = products
    .filter((p) => p.id !== product?.id)
    .slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'Gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold');
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Product Not Found
          </h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity, selectedVariant);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-text-muted">
          <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} />
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold text-white text-xs uppercase tracking-wider mb-4">
                {product.badge}
              </span>
            )}

            {/* Title */}
            <h1
              className="font-serif text-2xl sm:text-3xl lg:text-4xl uppercase tracking-ultra-wide text-text-primary mb-4"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-text-primary mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm uppercase tracking-wider text-text-primary mb-3">
                  Finish: {selectedVariant}
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-sm uppercase tracking-wider border transition-all ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold text-white'
                          : 'border-divider text-text-primary hover:border-text-primary'
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
              <label className="block text-sm uppercase tracking-wider text-text-primary mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-text-secondary hover:text-text-primary transition-colors"
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
              className={`w-full py-4 text-sm uppercase tracking-wider transition-all duration-300 mb-4 ${
                isAdding
                  ? 'bg-green-600 text-white'
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              {isAdding ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-divider text-xs text-text-muted uppercase tracking-wider">
              <span>Free Shipping</span>
              <span>·</span>
              <span>30-Day Returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care Instructions:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p><strong>Shipping:</strong> We offer free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                  <p><strong>Returns:</strong> We accept returns within 30 days of purchase. Items must be unworn and in original packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-serif text-2xl sm:text-3xl text-center mb-10 sm:mb-14"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
