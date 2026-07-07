import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/product/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart, isLoading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/collection" className="text-gold hover:underline">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = [product.image, product.hoverImage].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <main className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-warmgray">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/collection" className="hover:text-gold transition-colors">Collection</Link>
            </li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-sand overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream/90 backdrop-blur-sm flex items-center justify-center hover:bg-cream transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-charcoal" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream/90 backdrop-blur-sm flex items-center justify-center hover:bg-cream transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-charcoal" />
                  </button>
                </>
              )}

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gold text-ivory text-xs font-sans font-medium px-3 py-1 tracking-wide">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-20 h-20 border-2 overflow-hidden transition-colors',
                      selectedImage === index ? 'border-gold' : 'border-transparent hover:border-sand'
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Product Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-sand text-sand'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-warmgray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-warmgray font-light leading-relaxed mb-8">
              {product.description}. Crafted with 18K gold plating over hypoallergenic metals 
              for everyday comfort and lasting beauty.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wide text-charcoal uppercase mb-3">
                Finish: <span className="text-warmgray">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-4 py-2 border font-sans text-sm transition-colors',
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-sand text-charcoal hover:border-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wide text-charcoal uppercase mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="accent"
              size="full"
              loading={isLoading}
              onClick={handleAddToCart}
              className="mb-4"
            >
              Add to Bag
            </Button>

            <Button variant="secondary" size="full">
              <Link to="/collection">Continue Shopping</Link>
            </Button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p className="mb-4">
                  The {product.name} is part of our signature demi-fine collection, 
                  designed for those who appreciate understated elegance.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>18K gold plated over hypoallergenic metal</li>
                  <li>Lightweight and comfortable for all-day wear</li>
                  <li>Available in {product.variants.join(' and ')} finishes</li>
                </ul>
              </Accordion>

              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p>
                    <strong className="font-medium">Materials:</strong> 18K gold plating, 
                    hypoallergenic stainless steel base
                  </p>
                  <p>
                    <strong className="font-medium">Care Tips:</strong> To maintain the 
                    luster of your jewelry, avoid contact with water, perfumes, and lotions. 
                    Store in the provided pouch when not wearing.
                  </p>
                </div>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p>
                    <strong className="font-medium">Free Shipping:</strong> On all orders 
                    over $50, worldwide.
                  </p>
                  <p>
                    <strong className="font-medium">Returns:</strong> We offer a 30-day 
                    return policy for unworn items in original packaging.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <p className="text-gold font-sans text-xs tracking-ultra-wide uppercase mb-3">
                You May Also Like
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                Complete the Look
              </h2>
            </div>

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
};

export default ProductDetailPage;
