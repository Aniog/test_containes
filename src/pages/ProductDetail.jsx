import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus } from 'lucide-react';
import { getProductById, getBestsellers } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import { Accordion } from '@/components/ui/Accordion';
import { ProductCard } from '@/components/sections/ProductCard';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = getBestsellers()
    .filter(p => p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
      setSelectedImage(0);
      setSelectedVariant(0);
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
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
            <p className="font-medium text-charcoal mb-1">Materials</p>
            <p className="text-taupe">{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-charcoal mb-1">Care Instructions</p>
            <p className="text-taupe">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-charcoal mb-1">Shipping</p>
            <p className="text-taupe">Free worldwide shipping on all orders. Standard delivery 5-7 business days, express 2-3 business days.</p>
          </div>
          <div>
            <p className="font-medium text-charcoal mb-1">Returns</p>
            <p className="text-taupe">We offer free returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-taupe hover:text-charcoal transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-cream rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all',
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-sand'
                  )}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Header */}
            <div className="mb-6">
              <h1 className="product-name text-xl mb-2">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl text-charcoal">${product.price}</span>
                <Rating value={product.rating} showCount count={product.reviewCount} />
              </div>
            </div>

            {/* Description */}
            <p className="text-charcoal/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-charcoal mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={cn(
                      'px-6 py-2.5 rounded-sm border text-sm font-medium transition-all',
                      selectedVariant === index
                        ? 'border-gold bg-gold/10 text-charcoal'
                        : 'border-sand text-taupe hover:border-charcoal hover:text-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="p-3 text-taupe hover:text-charcoal disabled:opacity-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  disabled={quantity >= 10}
                  className="p-3 text-taupe hover:text-charcoal disabled:opacity-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <Button
              size="full"
              onClick={handleAddToCart}
              className={cn(
                'mb-4 transition-all',
                addedToCart && 'bg-green-600 hover:bg-green-600'
              )}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </Button>

            {/* Product details */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
