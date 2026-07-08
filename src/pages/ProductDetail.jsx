import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Minus, Heart, Share2, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/shop');
    }
    // Reset state on product change
    setSelectedImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setIsAdded(false);
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedVariant);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  const toggleAccordion = (panel) => {
    setOpenAccordion(openAccordion === panel ? null : panel);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-velmora-gold"></div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-white pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-sm text-velmora-warm-gray">
            <li><Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-velmora-soft-beige overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage === 0 ? product.images.length - 1 : selectedImage - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage === product.images.length - 1 ? 0 : selectedImage + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-velmora-soft-beige overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-6">
            {/* Product Name */}
            <h1
              className="product-name text-2xl lg:text-3xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ${product.price}
            </p>

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-warm-gray">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="font-sans text-base leading-relaxed text-velmora-charcoal/80">
              {product.description}
            </p>

            {/* Variant Selector (Gold/Silver Tone) */}
            <div className="space-y-3">
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal">
                Tone
              </h3>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 font-sans text-sm tracking-wide uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border bg-transparent text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal">
                Quantity
              </h3>
              <div className="quantity-input">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-sm tracking-ultra-wide uppercase transition-all duration-300 ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'btn-premium'
              }`}
            >
              {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Secondary Actions */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 font-sans text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 font-sans text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-6 space-y-0">
              {/* Description Accordion */}
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="accordion-trigger"
                >
                  <span>Description</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'description' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <div className="pb-6 font-sans text-sm leading-relaxed text-velmora-charcoal/80">
                    <p>{product.description}</p>
                    <p className="mt-4">Each Velmora piece is crafted with meticulous attention to detail, using premium materials that ensure longevity and lasting beauty.</p>
                  </div>
                </div>
              </div>

              {/* Materials & Care Accordion */}
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-trigger"
                >
                  <span>Materials & Care</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'materials' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="pb-6 font-sans text-sm leading-relaxed text-velmora-charcoal/80">
                    <ul className="space-y-2">
                      <li>• 18K Gold Plated over high-quality brass</li>
                      <li>• Hypoallergenic and nickel-free</li>
                      <li>• Tarnish-resistant coating</li>
                      <li>• Avoid contact with water, perfume, and lotions</li>
                      <li>• Store in provided jewelry pouch when not in use</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns Accordion */}
              <div className="accordion-item">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-trigger"
                >
                  <span>Shipping & Returns</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="pb-6 font-sans text-sm leading-relaxed text-velmora-charcoal/80">
                    <ul className="space-y-2">
                      <li>• Free worldwide shipping on all orders</li>
                      <li>• Standard shipping: 5-7 business days</li>
                      <li>• Express shipping available at checkout</li>
                      <li>• 30-day hassle-free returns</li>
                      <li>• Items must be unworn and in original packaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like - Related Products */}
        <div className="mt-20 lg:mt-32 pt-20 lg:pt-32 border-t border-velmora-border">
          <h2
            className="font-serif text-3xl lg:text-4xl text-center mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-velmora-soft-beige mb-4 img-zoom">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3
                  className="product-name text-sm mb-2 group-hover:text-velmora-gold transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {relatedProduct.name}
                </h3>
                <p className="font-sans text-sm text-velmora-warm-gray">
                  ${relatedProduct.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
