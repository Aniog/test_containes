import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
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
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="text-sm text-brand-gold mt-4 inline-block underline underline-offset-4">
          Back to Shop
        </Link>
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
      content: `${product.materials}\n\nCare: Store in the included pouch when not wearing. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days available at checkout.\n\n30-day returns on all unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-ivory overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-q1w2e3`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-brand-ivory overflow-hidden cursor-pointer border border-transparent hover:border-brand-gold transition-colors">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-r4t5y6`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry detail view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1 id={`pdp-title-${product.id}`} className="font-serif text-2xl md:text-3xl uppercase tracking-product text-brand-charcoal mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl text-brand-charcoal font-light mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>

            {/* Description */}
            <p id={`pdp-desc-${product.id}`} className="text-sm text-brand-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-brand-charcoal font-medium mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-wider border transition-colors ${
                      selectedVariant === variant
                        ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                        : 'border-brand-warm text-brand-muted hover:border-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-brand-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-brand-warm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-brand-charcoal border-x border-brand-warm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-brand-charcoal text-brand-cream py-4 text-sm uppercase tracking-wider font-medium hover:bg-brand-graphite transition-colors mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-brand-warm">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-brand-warm">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm text-brand-charcoal font-medium">{accordion.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${
                        openAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-sm text-brand-muted leading-relaxed whitespace-pre-line animate-fade-in">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
