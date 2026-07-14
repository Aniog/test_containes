import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';
import Rating from '@/components/ui/Rating';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/product/ProductCard';

function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, openCart } = useCart();
  
  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setSelectedVariant(null);
    setIsAdded(false);
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/collections/all" className="text-accent hover:text-accent-hover">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.isBestseller))
    .slice(0, 4);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addItem(product, quantity, selectedVariant || product.variants?.[0]?.value || null);
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
        openCart();
      }, 1500);
    }, 500);
  };
  
  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div className="space-y-4">
          <p>{product.description}</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span>18K gold plated for lasting brilliance</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span>Hypoallergenic and nickel-free</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span>Water-resistant for everyday wear</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <p><strong>Materials:</strong></p>
          <ul className="space-y-2 text-text-secondary">
            <li>Premium 18K gold plating over sterling silver base</li>
            <li>High-quality crystals and semi-precious stones</li>
            <li>Lobster clasp closures for secure wear</li>
          </ul>
          <p className="mt-4"><strong>Care Instructions:</strong></p>
          <ul className="space-y-2 text-text-secondary">
            <li>Store in the provided jewelry pouch when not wearing</li>
            <li>Avoid contact with perfumes, lotions, and water</li>
            <li>Clean gently with a soft, dry cloth</li>
            <li>Remove before swimming or exercising</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <p><strong>Shipping:</strong></p>
          <ul className="space-y-2 text-text-secondary">
            <li>Free worldwide shipping on all orders</li>
            <li>Standard delivery: 5-7 business days</li>
            <li>Express delivery: 2-3 business days</li>
            <li>Orders placed before 2 PM EST ship same day</li>
          </ul>
          <p className="mt-4"><strong>Returns:</strong></p>
          <ul className="space-y-2 text-text-secondary">
            <li>30-day return policy for unworn items</li>
            <li>Free return shipping label included</li>
            <li>Full refund to original payment method</li>
            <li>Exchange for different size or style available</li>
          </ul>
        </div>
      ),
    },
  ];
  
  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-text-secondary">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections/all" className="hover:text-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>
      </div>
      
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
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
                      'w-20 h-20 bg-secondary overflow-hidden border-2 transition-all',
                      selectedImage === index ? 'border-accent' : 'border-transparent hover:border-border'
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
            )}
          </div>
          
          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="product-name text-xl md:text-2xl text-text-primary mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="mb-6">
              <Rating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            
            {/* Price */}
            <p className="text-2xl font-medium text-accent mb-6">
              ${product.price}
            </p>
            
            {/* Short Description */}
            <p className="text-text-secondary mb-8">
              {product.shortDescription}
            </p>
            
            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <p className="text-sm font-medium text-text-primary mb-3">
                  Finish: {selectedVariant ? selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1) : product.variants[0]?.name}
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.value}
                      onClick={() => setSelectedVariant(variant.value)}
                      className={cn(
                        'px-5 py-2.5 text-sm font-medium border transition-all',
                        selectedVariant === variant.value || (!selectedVariant && variant === product.variants[0])
                          ? 'bg-primary text-white border-primary'
                          : 'bg-transparent text-text-primary border-border hover:border-primary'
                      )}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-text-primary mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-3 font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
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
              isLoading={isAdding}
              disabled={isAdded}
              className={cn(
                'mb-4',
                isAdded && 'bg-success hover:bg-success'
              )}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Added to Bag
                </>
              ) : (
                'Add to Bag'
              )}
            </Button>
            
            <p className="text-center text-sm text-text-secondary mb-8">
              Free shipping · 30-day returns
            </p>
            
            {/* Divider */}
            <div className="border-t border-border pt-8">
              {/* Accordions */}
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>
      
      {/* You May Also Like */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
