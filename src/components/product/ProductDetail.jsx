import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted" />
        )}
      </button>
      {isOpen && <div className="pb-4 text-sm text-muted leading-relaxed">{children}</div>}
    </div>
  );
}

function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)]">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
              index === activeIndex
                ? 'border-[var(--velmora-gold)]'
                : 'border-transparent hover:border-[var(--velmora-border)]'
            }`}
          >
            <img src={image} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="velmora-heading text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.bestseller))
    .slice(0, 4);

  return (
    <div className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">{product.category}</p>
            <h1 className="velmora-heading-uppercase text-2xl sm:text-3xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-[var(--velmora-gold)] fill-[var(--velmora-gold)]'
                        : 'text-[var(--velmora-border)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>

            <p className="text-muted leading-relaxed mb-8">{product.shortDescription}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-wider uppercase text-muted mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)]/10 text-[var(--velmora-gold-dark)]'
                        : 'border-[var(--velmora-border)] text-muted hover:border-[var(--velmora-gold)]'
                    }`}
                  >
                    {variant} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-wider uppercase text-muted mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-[var(--velmora-border)] w-fit">
                <button
                  className="p-3 hover:text-[var(--velmora-gold)] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  className="p-3 hover:text-[var(--velmora-gold)] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="velmora-btn-primary w-full py-4 text-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Wishlist & Share */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button className="flex items-center gap-2 text-sm text-muted hover:text-[var(--velmora-gold)] transition-colors">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm text-muted hover:text-[var(--velmora-gold)] transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">
                  Each piece comes beautifully packaged in our signature Velmora gift box, 
                  ready for gifting or treating yourself.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K gold plated over sterling silver base</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5-7 business days</li>
                  <li>• Express delivery: 2-3 business days (+$9.95)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-16 border-t border-[var(--velmora-border)]">
            <h2 className="velmora-heading text-2xl sm:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)] mb-3">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="velmora-product-name text-xs text-center group-hover:text-[var(--velmora-gold)] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-xs text-center text-muted mt-1">${relatedProduct.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
