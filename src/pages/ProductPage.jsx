import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const variants = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="text-accent mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 bg-surface">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-muted hover:text-base transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border transition-colors ${
                    activeImage === i ? 'border-base' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-base/5 overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2 md:py-8">
            <h1
              id={`product-title-${product.id}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.2em] font-light"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="text-2xl font-light mt-4">${product.price}</p>
            <p
              id={`product-desc-${product.id}`}
              className="text-sm text-muted leading-relaxed mt-6"
            >
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-[0.1em] font-medium text-muted">
                Tone
              </span>
              <div className="flex gap-3 mt-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-[0.1em] font-medium border transition-colors ${
                      selectedVariant === v.id
                        ? 'border-base bg-base text-white'
                        : 'border-hairline text-base hover:border-base'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-[0.1em] font-medium text-muted">
                Quantity
              </span>
              <div className="flex items-center border border-hairline w-fit mt-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-base/5 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-base/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`w-full mt-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                added
                  ? 'bg-base text-white'
                  : 'bg-accent text-white hover:bg-accent-hover'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'desc'}
                onToggle={() => toggleAccordion('desc')}
              >
                <p className="text-sm text-muted leading-relaxed">
                  {product.description}
                </p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'care'}
                onToggle={() => toggleAccordion('care')}
              >
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-base font-medium">Materials:</strong>{' '}
                  {product.materials}
                </p>
                <p className="text-sm text-muted leading-relaxed mt-3">
                  <strong className="text-base font-medium">Care:</strong>{' '}
                  {product.care}
                </p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => toggleAccordion('shipping')}
              >
                <p className="text-sm text-muted leading-relaxed">
                  Free worldwide shipping on all orders over $50. Orders are
                  processed within 1–2 business days and shipped via tracked
                  delivery. We offer 30-day hassle-free returns on unworn items in
                  original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-hairline bg-surface">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-hairline">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-[0.1em] font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
