import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import { products, getProductBySlug, getRelatedProducts, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { Accordion } from '@/components/ui/Accordion';
import { ProductCard } from '@/components/ui/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const containerRef = useImageLoader([slug]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-40 text-center">
        <p className="font-serif text-2xl">Product not found.</p>
        <button onClick={() => navigate('/shop')} className="btn-outline mt-6">
          Back to Shop
        </button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);
  const titleId = `pd-title-${product.id}`;
  const descId = `pd-desc-${product.id}`;

  const gallery = [
    { id: `pd-main-${product.id}`, ratio: '3x4', query: `[${descId}] [${titleId}] velmora jewelry` },
    { id: `pd-alt1-${product.id}`, ratio: '1x1', query: `[${titleId}] detail` },
    { id: `pd-alt2-${product.id}`, ratio: '1x1', query: `[${titleId}] worn` },
    { id: `pd-alt3-${product.id}`, ratio: '1x1', query: `[${titleId}] lifestyle` },
  ];


  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ];

  return (
    <div ref={containerRef} className="bg-cream pb-20 pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm text-warmGray hover:text-ink transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {gallery.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden bg-blush border transition-colors ${
                    activeImage === idx ? 'border-ink' : 'border-transparent hover:border-taupe'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-blush">
              {gallery.map((img, idx) => (
                <img
                  key={img.id}
                  data-strk-img-id={`${img.id}-main`}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} main ${idx + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                    activeImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-1 flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-warmGray">({product.reviewCount} reviews)</span>
            </div>
            <h1 id={titleId} className="product-name text-2xl sm:text-3xl">
              {product.name}
            </h1>
            <p id={descId} className="sr-only">{product.description}</p>
            <p className="mt-3 text-2xl font-medium">{formatPrice(product.price)}</p>
            <p className="mt-6 leading-relaxed text-warmGray">{product.description}</p>

            {/* Variants */}
            <div className="mt-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-warmGray">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-6 py-2 text-sm capitalize transition-all ${
                      selectedVariant === variant
                        ? 'border-ink bg-ink text-cream'
                        : 'border-taupe bg-transparent text-ink hover:border-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-warmGray">
                Quantity
              </span>
              <div className="inline-flex items-center border border-taupe">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-blush transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-blush transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-gold mt-10 w-full"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 id="related-title" className="heading-md mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} sectionTitleId="related-title" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
