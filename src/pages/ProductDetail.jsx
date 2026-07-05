import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 text-center section-padding">
        <h1 className="font-serif text-3xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="font-sans text-sm text-brand-gold mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materials },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivered in 5–7 business days. 30-day hassle-free returns — simply contact us for a prepaid return label.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-brand-ivory flex items-center justify-center">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-ivory flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="font-serif text-[10px] text-brand-muted-light">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link to="/shop" className="font-sans text-xs text-brand-muted hover:text-brand-charcoal transition-colors no-underline">
                Shop
              </Link>
              <span className="text-brand-muted-light text-xs">/</span>
              <span className="font-sans text-xs text-brand-muted capitalize">{product.category}</span>
            </div>

            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-brand-charcoal"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-brand-charcoal mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p
              id={`pdp-${product.id}-desc`}
              className="font-sans text-sm text-brand-muted mt-4 leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-wider text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs uppercase tracking-wider px-5 py-2.5 border transition-colors rounded-none ${
                      selectedVariant === v
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-brand-warm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-brand-charcoal hover:bg-brand-ivory transition-colors rounded-none"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-brand-charcoal border-x border-brand-warm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-brand-charcoal hover:bg-brand-ivory transition-colors rounded-none"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-brand-charcoal text-brand-cream font-sans text-xs tracking-widest uppercase py-4 border-none hover:bg-brand-graphite transition-colors rounded-none"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-warm">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-brand-warm">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left rounded-none"
                  >
                    <span className="font-sans text-sm text-brand-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 animate-fade-in">
                      <p className="font-sans text-sm text-brand-muted leading-relaxed">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28 border-t border-brand-warm pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal text-center mb-10">
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
