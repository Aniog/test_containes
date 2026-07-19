import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `Crafted with ${product.material} over a hypoallergenic base. To maintain its luster, avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing. Gently polish with a soft cloth.`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: "Free worldwide shipping on all orders. Delivery within 5\u20138 business days. 30-day hassle-free returns \u2014 simply contact us and we\u2019ll arrange a prepaid return label.",
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 lg:px-20 py-4 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gold-light overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-e1f2g3`}
                data-strk-img={`[pdp-${product.id}-title] [pdp-${product.id}-desc] gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-gold-light overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-h4i5j6`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail close up`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.1em] text-charcoal font-medium"
            >
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-serif text-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border-subtle'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviewCount} reviews)</span>
            </div>

            <p id={`pdp-${product.id}-desc`} className="mt-6 text-base text-muted leading-relaxed">
              {product.shortDesc}. {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-sm font-medium text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-[0.1em] font-medium border transition-colors ${
                      variant === v
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'border-border-subtle text-muted hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border-subtle flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-medium text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border-subtle flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-white py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border-subtle">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border-subtle">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-muted leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-border-subtle py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal text-center mb-12">
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
