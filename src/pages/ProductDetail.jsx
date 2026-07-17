import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, ChevronRight, Minus, Plus, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button, Rating, Accordion } from '@/components/ui';
import { ProductCard } from '@/components/ui';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal mb-1">Materials</h4>
            <p className="text-taupe font-light">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-1">Care Instructions</h4>
            <p className="text-taupe font-light">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal mb-1">Shipping</h4>
            <p className="text-taupe font-light">
              Free standard shipping on all orders. Express shipping available at checkout.
              Orders typically ship within 1-2 business days.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-1">Returns</h4>
            <p className="text-taupe font-light">
              We offer a 30-day return policy for unworn items in original packaging.
              Contact us to initiate a return or exchange.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container-main py-4 border-b border-light-gray">
        <nav className="flex items-center gap-2 text-sm text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-main py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-warm-cream overflow-hidden group">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - Image ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-gold text-white px-4 py-1.5 text-xs uppercase tracking-wider">
                  {product.badge}
                </span>
              )}

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-colors ${
                  isWishlisted ? 'bg-gold text-white' : 'bg-white/90 text-charcoal hover:bg-white'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-gold ring-offset-2'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Title & Price */}
            <div>
              <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-2xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-taupe line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <Rating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="hairline-divider" />

            {/* Short Description */}
            <p className="text-taupe font-light">{product.shortDescription}</p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div>
                <p className="font-sans text-sm uppercase tracking-extra-wide mb-3">
                  Finish: <span className="text-charcoal">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2.5 border transition-all ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold text-white'
                          : 'border-light-gray text-charcoal hover:border-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <p className="font-sans text-sm uppercase tracking-extra-wide mb-3">Quantity</p>
              <div className="flex items-center border border-light-gray w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-warm-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-2.5 font-medium min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-warm-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button fullWidth size="lg" onClick={handleAddToCart}>
              <ShoppingBag size={18} className="mr-2" />
              Add to Bag
            </Button>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-taupe">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                2-Year Warranty
              </div>
            </div>

            <div className="hairline-divider" />

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-spacing bg-warm-cream">
          <div className="container-main">
            <div className="text-center mb-12">
              <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-3">
                Complete Your Look
              </p>
              <h2 className="section-title text-2xl md:text-3xl">You May Also Like</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
