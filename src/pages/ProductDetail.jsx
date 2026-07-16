import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      const inStock = product.variants.find((v) => v.inStock);
      setSelectedVariant(inStock || product.variants[0]);
    }
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-primary inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'desc', title: 'Description', content: product.longDescription },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days and delivered within 5-10 business days. We offer 30-day hassle-free returns on all items in their original condition.' },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20" ref={containerRef}>
      <div className="container-wide">
        {/* Breadcrumb */}
        <nav className="font-sans text-xs text-warm-gray mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-pearl overflow-hidden">
              <img
                data-strk-img-id={`pd-${product.imgId}`}
                data-strk-img={product.imgQuery}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-pearl border-2 border-gold">
                <img
                  data-strk-img-id={`pd-thumb-${product.imgId}`}
                  data-strk-img={product.imgQuery}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-pearl border border-border-warm">
                <img
                  data-strk-img-id={`pd-thumb2-${product.imgId}`}
                  data-strk-img={`${product.secondImageAlt} jewelry close-up detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.secondImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-product font-medium text-charcoal mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={cn(
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-stone'
                    )}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-charcoal mb-6">
              ${product.price}.00
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal font-medium mb-3">
                Tone: {selectedVariant?.label}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.inStock}
                    className={cn(
                      'px-5 py-2.5 font-sans text-sm font-medium border transition-all duration-200',
                      selectedVariant?.id === variant.id
                        ? 'border-charcoal text-charcoal bg-transparent'
                        : 'border-border-warm text-warm-gray hover:border-charcoal',
                      !variant.inStock && 'opacity-40 cursor-not-allowed'
                    )}
                  >
                    {variant.label}
                    {!variant.inStock && ' (Sold Out)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border-warm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-sans text-sm w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-primary w-full flex items-center justify-center gap-2"
              disabled={!selectedVariant?.inStock}
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border-warm">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-border-warm">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-5 font-sans text-sm uppercase tracking-wider font-medium text-charcoal"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? (
                      <ChevronUp size={16} className="text-warm-gray" />
                    ) : (
                      <ChevronDown size={16} className="text-warm-gray" />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordion === acc.id ? 'max-h-60 pb-5' : 'max-h-0'
                    )}
                  >
                    <p className="font-sans text-sm text-warm-gray leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="section-title text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                to={`/product/${rp.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-pearl overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={rp.imgQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-sm mb-1">{rp.name}</h3>
                <p className="font-sans text-sm font-medium text-charcoal">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
