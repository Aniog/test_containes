import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
    getContent: (product) => product?.description
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    getContent: (product) => (
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">Materials</h4>
          <p className="text-[var(--color-text-secondary)]">{product?.materials}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">Care Instructions</h4>
          <p className="text-[var(--color-text-secondary)]">{product?.care}</p>
        </div>
      </div>
    )
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    getContent: () => (
      <div className="space-y-4 text-[var(--color-text-secondary)]">
        <p><strong className="text-[var(--color-text-primary)]">Free Shipping:</strong> On all orders over $50</p>
        <p><strong className="text-[var(--color-text-primary)]">Standard Delivery:</strong> 5-7 business days</p>
        <p><strong className="text-[var(--color-text-primary)]">Express Delivery:</strong> 2-3 business days (additional fee)</p>
        <p><strong className="text-[var(--color-text-primary)]">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
      </div>
    )
  }
];

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);
  
  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(0);
    }
  }, [product]);
  
  const handleAddToCart = () => {
    const variant = product.variants?.[selectedVariant]?.name;
    addItem(product, quantity, variant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[var(--color-text-primary)] mb-4">Product Not Found</h1>
          <Link to="/collection" className="text-[var(--color-gold)] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <main className="pt-20">
      {/* Product Section */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-[var(--color-text-muted)]">
              <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
              <li>/</li>
              <li><Link to="/collection" className="hover:text-[var(--color-gold)]">Shop</Link></li>
              <li>/</li>
              <li className="text-[var(--color-text-primary)]">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[3/4] bg-[var(--color-surface)] overflow-hidden">
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
                      className={cn(
                        'w-20 h-24 bg-[var(--color-surface)] overflow-hidden border-2 transition-colors',
                        selectedImage === index 
                          ? 'border-[var(--color-gold)]' 
                          : 'border-transparent hover:border-[var(--color-border)]'
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
              {/* Badge */}
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-[var(--color-surface)] text-xs font-medium tracking-wider uppercase text-[var(--color-gold)] mb-4">
                  {product.badge}
                </span>
              )}
              
              {/* Product Name */}
              <h1 className="product-name text-[var(--color-text-primary)] text-2xl md:text-3xl mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < Math.floor(product.rating) 
                          ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' 
                          : 'text-[var(--color-text-muted)]'
                      )}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              {/* Price */}
              <p className="text-2xl font-medium text-[var(--color-text-primary)] mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              {/* Short Description */}
              <p className="text-[var(--color-text-secondary)] mb-8">
                {product.shortDescription}
              </p>
              
              {/* Variant Selector */}
              {product.variants && product.variants.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
                    Finish: <span className="text-[var(--color-text-muted)] font-normal">{product.variants[selectedVariant]?.name}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((variant, index) => (
                      <button
                        key={variant.name}
                        onClick={() => setSelectedVariant(index)}
                        className={cn(
                          'px-4 py-2 border text-sm transition-all',
                          selectedVariant === index
                            ? 'border-[var(--color-gold)] text-[var(--color-gold)]'
                            : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]'
                        )}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <p className="text-sm font-medium text-[var(--color-text-primary)] mb-3">Quantity</p>
                <div className="flex items-center border border-[var(--color-border)] w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center font-medium text-[var(--color-text-primary)]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full mb-4"
                onClick={handleAddToCart}
              >
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </Button>
              
              {/* Product Details Accordions */}
              <div className="mt-8 border-t border-[var(--color-border)]">
                {accordionItems.map((item) => (
                  <div key={item.id} className="border-b border-[var(--color-border)]">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="font-medium text-[var(--color-text-primary)]">{item.title}</span>
                      {openAccordion === item.id ? (
                        <ChevronUp className="w-4 h-4 text-[var(--color-gold)]" strokeWidth={1.5} />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[var(--color-text-muted)]" strokeWidth={1.5} />
                      )}
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        openAccordion === item.id ? 'max-h-96 pb-4' : 'max-h-0'
                      )}
                    >
                      {typeof item.getContent === 'function' && openAccordion === item.id && (
                        <div className="text-sm text-[var(--color-text-secondary)]">
                          {item.getContent(product)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* You May Also Like Section */}
      <section className="section bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] text-center mb-12">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
