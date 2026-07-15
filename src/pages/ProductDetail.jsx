import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Heart, Share2, ChevronLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { ProductCard } from '@/components/products/ProductCard';

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0]?.value || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate a small delay for feedback
    await new Promise(resolve => setTimeout(resolve, 300));
    addItem(product, selectedVariant, quantity);
    setIsAdding(false);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-charcoal mb-1">Materials</h4>
            <p className="text-warm-gray">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-1">Care Instructions</h4>
            <p className="text-warm-gray">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p className="text-warm-gray">
            <strong className="text-charcoal">Free Shipping:</strong> On all orders over $50
          </p>
          <p className="text-warm-gray">
            <strong className="text-charcoal">Standard Delivery:</strong> 5-7 business days
          </p>
          <p className="text-warm-gray">
            <strong className="text-charcoal">Express Delivery:</strong> 2-3 business days
          </p>
          <p className="text-warm-gray">
            <strong className="text-charcoal">Returns:</strong> 30-day hassle-free returns on all items. Items must be unworn and in original packaging.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-soft-gray hover:text-charcoal transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-ivory overflow-hidden">
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
                    className={`w-20 h-20 bg-ivory overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gold' : 'border-transparent'
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
          <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
            {/* Badge */}
            {product.badge && (
              <Badge variant="gold">{product.badge}</Badge>
            )}

            {/* Title */}
            <h1 
              className="heading-serif text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <Rating rating={product.rating} reviewCount={product.reviewCount} size="md" />

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-medium">
                {formatPrice(product.price)}
              </span>
              {product.comparePrice && (
                <span className="text-lg text-soft-gray line-through">
                  {formatPrice(product.comparePrice)}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-warm-gray leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div>
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Color: <span className="text-warm-gray font-normal capitalize">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.value}
                      onClick={() => setSelectedVariant(variant.value)}
                      className={`px-4 py-2 border text-sm transition-all ${
                        selectedVariant === variant.value
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-hairline text-charcoal hover:border-charcoal'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              loading={isAdding}
            >
              Add to Bag
            </Button>

            {/* Secondary Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-hairline">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-warm-gray">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  18K Gold Plated
                </div>
                <div className="flex items-center gap-2 text-warm-gray">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Hypoallergenic
                </div>
                <div className="flex items-center gap-2 text-warm-gray">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Free Shipping $50+
                </div>
                <div className="flex items-center gap-2 text-warm-gray">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  30-Day Returns
                </div>
              </div>
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="bg-ivory py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="heading-serif text-2xl md:text-3xl text-center mb-12"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
