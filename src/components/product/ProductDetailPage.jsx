import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../ui/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm tracking-[0.1em] uppercase">{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.badge))
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--velmora-text-light)] mb-8">
          <Link to="/" className="hover:text-[var(--velmora-accent)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[var(--velmora-accent)] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--velmora-text-muted)]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-4">
              <img
                data-strk-img-id={`${product.images[selectedImage].id}-detail`}
                data-strk-img={`[${product.id}-detail-desc] [${product.id}-detail-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`aspect-[3/4] bg-[var(--velmora-bg-alt)] border-2 transition-colors ${
                    selectedImage === i ? 'border-[var(--velmora-accent)]' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${product.id}-thumb-${i}-desc] [${product.id}-thumb-${i}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[var(--velmora-accent)]/10 text-[var(--velmora-accent)] text-[10px] tracking-[0.15em] uppercase mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[var(--velmora-gold)] fill-[var(--velmora-gold)]' : 'text-[var(--velmora-border)]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-2xl mb-6">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-6">
              {product.description}. Crafted with care using 18K gold plating over recycled brass. 
              Hypoallergenic and designed for everyday wear.
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    className={`px-6 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-dark)] bg-[var(--velmora-dark)] text-white'
                        : 'border-[var(--velmora-border)] hover:border-[var(--velmora-dark)]'
                    }`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--velmora-border)] w-fit">
                <button
                  className="p-3 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  className="p-3 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              className={`btn-accent w-full mb-4 ${added ? 'bg-green-700' : ''}`}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={16} className="mr-2" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 text-xs text-[var(--velmora-text-muted)] mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[var(--velmora-accent)]">&#10003;</span> Free shipping over $50
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--velmora-accent)]">&#10003;</span> 30-day returns
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--velmora-accent)]">&#10003;</span> 18K gold plated
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--velmora-accent)]">&#10003;</span> Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>
                  {product.name} is a stunning piece from our demi-fine collection. 
                  Each piece is carefully crafted with 18K gold plating over a recycled brass base, 
                  ensuring both beauty and sustainability. The design is inspired by modern elegance 
                  and made for everyday wear.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Material:</strong> 18K gold plated over recycled brass<br />
                  <strong>Stone:</strong> Crystal accents (where applicable)<br />
                  <strong>Care:</strong> Avoid contact with water, perfume, and lotions. 
                  Store in the provided pouch when not wearing. Clean gently with a soft cloth.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  <strong>Shipping:</strong> Free worldwide shipping on orders over $50. 
                  Standard delivery takes 5-7 business days. Express shipping available at checkout.<br />
                  <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn 
                  and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-3xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} showBadge={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
