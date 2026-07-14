import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, products } from '../data/products';
import ProductCard from '../components/home/ProductCard';
import { useCart } from '../context/CartContext';

const accordionSections = [
  {
    title: 'Description',
    getContent: (product) => product?.description,
  },
  {
    title: 'Materials & Care',
    getContent: () => (
      <div className="space-y-3 text-[var(--color-text-secondary)]">
        <p><strong className="text-[var(--color-text)]">Materials:</strong> 18K gold plated over sterling silver. Hypoallergenic and nickel-free.</p>
        <p><strong className="text-[var(--color-text)]">Care Instructions:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Store in the provided jewelry pouch when not wearing</li>
          <li>Avoid contact with water, perfume, and chemicals</li>
          <li>Clean gently with a soft cloth</li>
          <li>Apply beauty products before wearing jewelry</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Shipping & Returns',
    getContent: () => (
      <div className="space-y-3 text-[var(--color-text-secondary)]">
        <p><strong className="text-[var(--color-text)]">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-7 business days.</p>
        <p><strong className="text-[var(--color-text)]">Returns:</strong> 30-day hassle-free returns. Items must be unworn with original packaging.</p>
      </div>
    ),
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState('Description');
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[var(--color-text)] mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    openCart();
    
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container-main py-4">
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-[var(--color-accent)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--color-text)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-main pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[var(--color-surface)] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 border-2 overflow-hidden transition-all ${
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
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Title */}
            <h1 className="text-product-name text-[var(--color-text)] text-xl mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-[var(--color-text)] mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Material Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-[var(--color-surface)] text-xs text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                {product.material}
              </span>
              <span className="px-3 py-1 bg-[var(--color-surface)] text-xs text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                Hypoallergenic
              </span>
            </div>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                Finish: <span className="text-[var(--color-text)]">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                        : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-secondary)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 text-[var(--color-text)] min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 mb-4 transition-all ${
                addedToCart ? 'bg-[var(--color-success)] hover:bg-[var(--color-success)]' : ''
              }`}
            >
              <ShoppingBag size={20} />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)]">
              <span>✓ Free Worldwide Shipping</span>
              <span>✓ 30-Day Returns</span>
              <span>✓ Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          <div className="divider mb-6" />
          {accordionSections.map((section) => (
            <div key={section.title} className="border-b border-[var(--color-border)]">
              <button
                onClick={() => setExpandedAccordion(
                  expandedAccordion === section.title ? '' : section.title
                )}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-serif text-lg text-[var(--color-text)]">
                  {section.title}
                </span>
                {expandedAccordion === section.title ? (
                  <ChevronUp size={20} className="text-[var(--color-text-secondary)]" />
                ) : (
                  <ChevronDown size={20} className="text-[var(--color-text-secondary)]" />
                )}
              </button>
              {expandedAccordion === section.title && (
                <div className="pb-6 animate-fade-in">
                  {typeof section.getContent === 'function' 
                    ? section.getContent(product)
                    : section.getContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-[var(--color-surface)]">
          <div className="container-main">
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text)] text-center mb-12">
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
