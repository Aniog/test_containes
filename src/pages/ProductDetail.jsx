import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-primary">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-secondary transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const cleanup1 = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    const cleanup2 = ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-primary mb-3">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-sm text-accent hover:underline"
          >
            Browse all jewelry
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAdd = () => {
    addItem(product, quantity, tone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-secondary capitalize">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible hide-scrollbar">
              {Array.from({ length: product.images }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border overflow-hidden transition-colors ${
                    selectedImage === i
                      ? 'border-primary'
                      : 'border-hairline hover:border-secondary'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[product-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-surface border border-hairline overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-1">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
                {product.category}
              </span>
            </div>
            <h1
              id={`product-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-wider text-primary mb-3"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="font-serif text-xl font-medium text-primary mb-6">
              ${product.price}
            </p>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <span className="text-xs font-medium uppercase tracking-wider text-primary mb-3 block">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider border transition-all duration-300 ${
                      tone === t
                        ? 'border-primary bg-primary text-white'
                        : 'border-hairline text-secondary hover:border-primary'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs font-medium uppercase tracking-wider text-primary mb-3 block">
                Quantity
              </span>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-accent hover:bg-accent-hover text-white'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <span className="text-primary font-medium">Materials:</span>{' '}
                  {product.details}
                </p>
                <p>
                  <span className="text-primary font-medium">Care:</span>{' '}
                  {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-hairline py-14 md:py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-base border border-hairline overflow-hidden mb-3">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                    />
                  </div>
                  <h4
                    id={`related-name-${p.id}`}
                    className="font-serif text-sm font-medium uppercase tracking-wider text-primary mb-1"
                  >
                    {p.name}
                  </h4>
                  <p className="font-serif text-sm text-secondary">
                    ${p.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
