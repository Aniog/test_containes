import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0].value);
    }
    setSelectedImage(0);
    setQuantity(1);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark transition-colors">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `Materials: ${product.materials}\n\nCare Instructions:\n• Store in the provided jewelry pouch\n• Avoid contact with water, perfumes, and chemicals\n• Clean gently with a soft cloth\n• Remove before swimming or exercising`,
    },
    {
      title: 'Shipping & Returns',
      content: `Shipping:\n• Free standard shipping on orders over $75\n• Express shipping available at checkout\n• International shipping available\n• Orders typically ship within 1-2 business days\n\nReturns:\n• 30-day return policy\n• Items must be unworn and in original packaging\n• Free returns on all orders\n• Refunds processed within 5-7 business days`,
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Back Navigation */}
      <div className="container-wide py-4 border-b border-light-gray">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-ui text-warm-gray hover:text-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container-wide py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
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
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all',
                    selectedImage === index
                      ? 'ring-2 ring-gold ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  )}
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
          <div className="lg:py-4">
            {/* Category */}
            <span className="text-xs font-medium uppercase tracking-ui text-gold mb-2 block">
              {product.category}
            </span>

            {/* Title */}
            <h1
              className="text-2xl md:text-3xl text-charcoal mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                letterSpacing: '0.12em',
              }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-6">
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-xs font-medium uppercase tracking-ui text-charcoal mb-3 block">
                  Finish: <span className="capitalize font-normal">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.value}
                      onClick={() => setSelectedVariant(variant.value)}
                      className={cn(
                        'px-4 py-2 text-xs font-medium uppercase tracking-ui border transition-all',
                        selectedVariant === variant.value
                          ? 'border-gold bg-gold/10 text-charcoal'
                          : 'border-light-gray text-warm-gray hover:border-charcoal'
                      )}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs font-medium uppercase tracking-ui text-charcoal mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-light-gray w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              fullWidth
              size="lg"
              onClick={handleAddToCart}
              className="mb-4"
            >
              Add to Bag
            </Button>

            {/* Product Details Accordion */}
            <div className="mt-8 pt-8 border-t border-light-gray">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-ivory section-padding">
          <div className="container-wide">
            <h2
              className="text-2xl md:text-3xl text-charcoal text-center mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              You May Also Like
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
