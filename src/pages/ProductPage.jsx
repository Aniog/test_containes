import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (product && product.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
    setSelectedImage(0);
    setQuantity(1);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Materials</h4>
            <p className="text-[var(--color-text-secondary)]">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Care Instructions</h4>
            <p className="text-[var(--color-text-secondary)]">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <p><strong>Free Shipping:</strong> On all orders over $50</p>
          <p><strong>Standard Delivery:</strong> 5-7 business days</p>
          <p><strong>Express Delivery:</strong> 2-3 business days (additional cost)</p>
          <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link to="/" className="hover:text-[var(--color-accent)]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-[var(--color-accent)]">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-[var(--color-text-primary)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[var(--color-bg)] overflow-hidden">
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
                    className={`w-20 h-20 border-2 overflow-hidden transition-colors ${
                      selectedImage === index
                        ? 'border-[var(--color-accent)]'
                        : 'border-transparent hover:border-[var(--color-border)]'
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
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Product Name */}
            <h1
              className="text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-[0.1em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-[var(--color-gold)] fill-current'
                        : 'text-[var(--color-taupe)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-[var(--color-text-primary)] font-medium mb-6">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-[var(--color-text-secondary)] mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                  Finish: <span className="font-normal text-[var(--color-text-muted)]">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all ${
                        selectedVariant === variant
                          ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white'
                          : 'border-[var(--color-border)] hover:border-[var(--color-text-primary)]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-[var(--color-bg)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-[var(--color-bg)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-4 border-t border-b border-[var(--color-border)]">
              <span className="text-xs text-[var(--color-text-muted)]">✓ Free Shipping</span>
              <span className="text-xs text-[var(--color-text-muted)]">✓ 30-Day Returns</span>
              <span className="text-xs text-[var(--color-text-muted)]">✓ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-[var(--color-border)]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-medium">{accordion.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {accordion.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-[var(--color-border)]">
            <h2
              className="text-2xl md:text-3xl text-center mb-12"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}