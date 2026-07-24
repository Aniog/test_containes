import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl text-base">Product Not Found</h1>
        <Link
          to="/shop"
          className="mt-4 text-xs font-medium uppercase tracking-widest text-accent underline-offset-4 hover:underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter(
    (p) => product.related.includes(p.id)
  );

  const handleAdd = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden bg-canvas">
              <img
                data-strk-img-id={`pd-${product.id}-main`}
                data-strk-img={`[pd-${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-canvas ring-1 transition-all ${
                    selectedImage === idx
                      ? 'ring-accent'
                      : 'ring-transparent hover:ring-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`pd-${product.id}-thumb-${idx}`}
                    data-strk-img={`[pd-${product.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              {product.category}
            </p>
            <h1
              id={`pd-${product.id}-name`}
              className="mt-2 font-serif text-3xl uppercase tracking-widest text-base md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="mt-5 font-sans text-2xl font-light text-base">
              ${product.price}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Metal
              </span>
              <div className="mt-3 flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
                      variant === v
                        ? 'border-base bg-base text-canvas'
                        : 'border-border bg-surface text-muted hover:border-base'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-muted hover:text-base"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-base">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-muted hover:text-base"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-accent py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted">
                    {product.materialsCare}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted">
                    {product.shippingReturns}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-border bg-canvas py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <h2 className="mb-8 font-serif text-2xl text-base md:mb-12 md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
