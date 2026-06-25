import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  const { addToCart, isLoading } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0] || 'gold');
      setSelectedImage(0);
      setQuantity(1);
    }
    // Scroll to top on product change
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    await addToCart(product, quantity, selectedVariant);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-[var(--color-stone)]">
          <Link to="/" className="hover:text-[var(--color-gold)]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-[var(--color-gold)]">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/collection?category=${product.category}`} className="hover:text-[var(--color-gold)] capitalize">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[var(--color-parchment)] overflow-hidden">
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
                    className={`w-20 h-20 bg-[var(--color-parchment)] overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[var(--color-gold)]' : 'border-transparent'
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
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="product-name text-xl md:text-2xl text-[var(--color-charcoal)] mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-[var(--color-gold)] fill-current'
                          : 'text-[var(--color-sand)]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-stone)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-medium text-[var(--color-charcoal)]">
                  ${product.price}
                </span>
                {product.comparePrice && (
                  <span className="text-lg text-[var(--color-stone)] line-through">
                    ${product.comparePrice}
                  </span>
                )}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-[var(--color-stone)] mb-6">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm text-[var(--color-charcoal)] mb-3">
                  Finish: <span className="capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm capitalize transition-all ${
                        selectedVariant === variant
                          ? 'bg-[var(--color-charcoal)] text-[var(--color-ivory)]'
                          : 'bg-transparent text-[var(--color-charcoal)] border border-[var(--color-sand)] hover:border-[var(--color-charcoal)]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm text-[var(--color-charcoal)] mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--color-sand)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-parchment)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-14 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-parchment)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="btn-accent w-full flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-y border-[var(--color-sand)]">
              <span className="text-xs text-[var(--color-stone)]">Free Shipping</span>
              <span className="text-xs text-[var(--color-stone)]">30-Day Returns</span>
              <span className="text-xs text-[var(--color-stone)]">Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-[var(--color-sand)]">
                  <button
                    onClick={() => setExpandedAccordion(
                      expandedAccordion === accordion.id ? null : accordion.id
                    )}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm text-[var(--color-charcoal)] font-medium">
                      {accordion.title}
                    </span>
                    {expandedAccordion === accordion.id ? (
                      <ChevronUp className="w-4 h-4 text-[var(--color-stone)]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[var(--color-stone)]" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[var(--color-stone)] whitespace-pre-line">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-[var(--color-parchment)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)] text-center mb-12">
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
    </main>
  );
}
