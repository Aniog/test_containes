import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import Rating from '@/components/ui/Rating';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/products/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addItem(product, quantity, selectedVariant);
    setIsAdding(false);
    setQuantity(1);
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
          <p><strong>Materials:</strong> {product.material}, Hypoallergenic, Nickel-free</p>
          <p><strong>Care Instructions:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-muted">
            <li>Avoid contact with water, perfume, and chemicals</li>
            <li>Store in a cool, dry place</li>
            <li>Clean gently with a soft cloth</li>
            <li>Remove before swimming or exercising</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-7 business days.</p>
          <p><strong>Returns:</strong> 30-day returns on all full-price items. Items must be unworn with original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-border">
        <nav className="flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-bg-warm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-20 h-20 bg-bg-warm overflow-hidden border-2 transition-colors',
                      selectedImage === index ? 'border-accent' : 'border-transparent hover:border-border'
                    )}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <div className="mb-4">
                <Badge variant={product.badge === 'Bestseller' ? 'accent' : 'gold'}>
                  {product.badge}
                </Badge>
              </div>
            )}

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              <span className="text-sm text-muted">
                {product.rating} out of 5
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">
                {formatPrice(product.price)}
              </span>
              {product.comparePrice && (
                <span className="text-lg text-muted line-through">
                  {formatPrice(product.comparePrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  Finish: <span className="font-normal text-secondary">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        'px-4 py-2 text-sm font-medium tracking-wider uppercase border transition-all',
                        selectedVariant === variant
                          ? 'border-accent bg-accent text-white'
                          : 'border-border text-secondary hover:border-primary'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-secondary hover:text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-secondary hover:text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="full"
              loading={isAdding}
              className="mb-4"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>

            {/* Product Details Accordion */}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-bg py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center mb-12">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
