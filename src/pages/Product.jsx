import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ArrowLeft, Star } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import Rating from '@/components/ui/Rating';

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(0);
      setQuantity(1);
      setSelectedImage(0);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-h2 text-charcoal mb-4">Product Not Found</h1>
          <p className="text-stone mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/collection">
            <Button>Shop Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addItem(product, product.variants[selectedVariant], quantity);
    setAdding(false);
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
            <h4 className="font-medium text-charcoal mb-2">Materials</h4>
            <p>{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-2">Care Instructions</h4>
            <p>{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal mb-2">Shipping</h4>
            <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express delivery available at checkout.</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal mb-2">Returns</h4>
            <p>We offer a 30-day return policy for unworn items in original packaging. Contact us to initiate a return.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="container-narrow py-4">
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 text-stone hover:text-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Collection</span>
        </Link>
      </div>

      {/* Product Section */}
      <section className="container-narrow pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-cream overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-20 h-20 bg-cream overflow-hidden border-2 transition-all duration-200',
                      selectedImage === index ? 'border-gold' : 'border-transparent hover:border-champagne'
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
          <div className="lg:py-8">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-charcoal mb-2">
              {product.name}
            </h1>
            <p className="text-gold text-2xl font-medium mb-4">{formatPrice(product.price)}</p>
            
            <div className="flex items-center gap-3 mb-6">
              <Rating rating={product.rating} reviews={product.reviews} size="sm" />
              <span className="text-sm text-stone">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Finish: <span className="font-normal text-stone">{product.variants[selectedVariant]}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(index)}
                      className={cn(
                        'px-4 py-2 text-sm border transition-all duration-200',
                        selectedVariant === index
                          ? 'border-gold bg-gold/5 text-charcoal'
                          : 'border-champagne text-stone hover:border-charcoal'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal mb-3">Quantity</label>
              <div className="flex items-center border border-champagne w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-charcoal font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
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
              loading={adding}
              className="mb-4"
            >
              Add to Cart
            </Button>

            {/* Features */}
            <div className="flex flex-wrap gap-6 py-6 border-y border-champagne">
              <div className="flex items-center gap-2 text-sm text-stone">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-sm text-stone">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-sm text-stone">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream section-padding">
          <div className="container-narrow">
            <h2 className="heading-h3 text-charcoal mb-8">You May Also Like</h2>
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
