import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import ProductGallery from '@/components/product/ProductGallery';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-cream mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-light transition-colors">
            Return to Shop
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
            <h4 className="font-medium text-cream mb-2">Materials</h4>
            <p className="text-ink-muted whitespace-pre-line">{product.details}</p>
          </div>
          <div>
            <h4 className="font-medium text-cream mb-2">Care Instructions</h4>
            <p className="text-ink-muted whitespace-pre-line">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-cream mb-2">Shipping</h4>
            <p className="text-ink-muted whitespace-pre-line">{product.shipping}</p>
          </div>
          <div>
            <h4 className="font-medium text-cream mb-2">Returns</h4>
            <p className="text-ink-muted">
              We offer a 30-day return policy for all unworn items in original packaging. 
              Contact our support team to initiate a return.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-ink-muted hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li className="text-ink-muted">/</li>
            <li>
              <Link to="/shop" className="text-ink-muted hover:text-gold transition-colors">
                Shop
              </Link>
            </li>
            <li className="text-ink-muted">/</li>
            <li className="text-cream">{product.name}</li>
          </ol>
        </nav>

        {/* Product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {/* Name and price */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-cream uppercase tracking-wider mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl text-gold">${product.price}</span>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-gold fill-gold" />
                  <span className="text-cream">{product.rating}</span>
                  <span className="text-ink-muted">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-ink-muted leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div>
              <label className="block text-sm text-cream mb-3 tracking-wider uppercase">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wider uppercase transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gold/30 text-cream hover:border-gold'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm text-cream mb-3 tracking-wider uppercase">
                Quantity
              </label>
              <div className="inline-flex items-center border border-gold/30">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-cream hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6 py-3 text-cream min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-cream hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gold text-base font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
            >
              <Check size={18} />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs text-ink-muted">
              <span>Free Shipping</span>
              <span>•</span>
              <span>30-Day Returns</span>
              <span>•</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="border-t border-gold/10 pt-6 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-gold/10">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-lg text-cream">{accordion.title}</span>
                    <ChevronDown
                      size={20}
                      className={`text-ink-muted transition-transform duration-200 ${
                        activeAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <div className="text-ink-muted leading-relaxed">{accordion.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
