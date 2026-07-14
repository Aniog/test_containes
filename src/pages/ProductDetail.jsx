import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/shop/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-accent text-sm mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Store in the included pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day returns — items must be unworn and in original packaging.',
    },
  ];

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setQuantity(1);
  };

  return (
    <div className="pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-muted">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted-bg overflow-hidden">
              <div
                className="w-full h-full"
                data-strk-bg-id={`pdp-main-${product.id}`}
                data-strk-bg={`[pdp-name-${product.id}] gold jewelry product photo`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['front view', 'side angle', 'detail close-up', 'worn on model'].map((view, i) => (
                <div key={i} className="aspect-square bg-muted-bg overflow-hidden cursor-pointer border border-transparent hover:border-accent transition-colors">
                  <img
                    alt={`${product.name} - ${view}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name-${product.id}] ${view} gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2">
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl text-charcoal font-medium mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-border'}`}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="text-sm text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className="px-5 py-2 text-xs uppercase tracking-wider border transition-colors"
                    style={
                      variant === v
                        ? { borderColor: '#B8860B', backgroundColor: '#B8860B', color: '#FAF7F2' }
                        : { borderColor: '#E8E2D9', color: '#1A1A1A' }
                    }
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 text-sm uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#B8860B', color: '#FAF7F2' }}
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-border pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
