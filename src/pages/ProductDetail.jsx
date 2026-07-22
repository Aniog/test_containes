import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-warm-800 tracking-wider uppercase">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-warm-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.value || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-warm-800">Product not found</h2>
          <Link to="/shop" className="btn-outline mt-6 inline-block">
            Back to Shop
          </Link>
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
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-wide section-padding py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-warm-500 hover:text-warm-700 transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 md:order-first">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-name-${product.id}] view ${idx + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="128"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-warm-100 rounded-sm overflow-hidden">
              <img
                alt={`${product.name} view ${activeImage + 1}`}
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-name-${product.id}] main view`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="md:pl-4 lg:pl-8">
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">
              {product.category}
            </p>
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase text-warm-900"
            >
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xl md:text-2xl font-semibold text-warm-900">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'fill-warm-200 text-warm-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-warm-500">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-warm-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs font-medium text-warm-700 tracking-wider uppercase mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-sm border text-sm transition-all ${
                      selectedVariant === variant.value
                        ? 'border-accent bg-accent/5 text-warm-900'
                        : 'border-warm-300 text-warm-600 hover:border-warm-400'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-warm-300"
                      style={{ backgroundColor: variant.hex }}
                    />
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p className="text-xs font-medium text-warm-700 tracking-wider uppercase">
                  Quantity
                </p>
                <div className="flex items-center border border-warm-300 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-warm-600 hover:text-warm-900 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-medium text-warm-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-warm-600 hover:text-warm-900 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`btn-accent w-full !py-3.5 text-sm ${
                  added ? '!bg-green-700' : ''
                }`}
              >
                {added ? 'Added to Cart' : `Add to Cart — ${formatPrice(product.price * quantity)}`}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <strong className="text-warm-800">Materials:</strong> {product.materials}
                </p>
                <p>
                  <strong className="text-warm-800">Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  <strong className="text-warm-800">Shipping:</strong> {product.shipping}
                </p>
                <p>
                  <strong className="text-warm-800">Returns:</strong> {product.returns}
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding py-20 md:py-28">
          <div className="container-wide">
            <div className="text-center mb-10">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}