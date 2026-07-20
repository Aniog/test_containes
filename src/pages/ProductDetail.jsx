import { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import StarRating from '@/components/ui/StarRating.jsx';
import QuantityStepper from '@/components/ui/QuantityStepper.jsx';
import Accordion from '@/components/ui/Accordion.jsx';
import ProductCard from '@/components/ProductCard.jsx';

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(productId), [productId]);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [productId, selectedImage]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center md:px-8">
        <h1 className="font-serif text-3xl text-foreground">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-accent underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);
  const titleId = `detail-${product.id}-title`;
  const descId = `detail-${product.id}-desc`;

  const handleAdd = () => {
    addToCart(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-brand text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                data-strk-img-id={`detail-${product.id}-main-${selectedImage}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholder}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {[...Array(product.images)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square w-20 overflow-hidden bg-cream md:w-24 ${selectedImage === i ? 'ring-1 ring-foreground' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img
                    data-strk-img-id={`detail-${product.id}-thumb-${i}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={placeholder}
                    alt={`${product.name} view ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-brand text-accent">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-3xl uppercase tracking-brand text-foreground md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={descId} className="sr-only">
              {product.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-foreground">
              ${product.price}
            </p>

            <p className="mt-6 leading-relaxed text-muted">
              {product.description}
            </p>

            {product.variants.length > 1 && (
              <div className="mt-8">
                <span className="text-xs uppercase tracking-brand text-foreground">
                  Metal
                </span>
                <div className="mt-3 flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`rounded-full border px-5 py-2 text-xs uppercase tracking-brand transition-colors ${variant === v ? 'border-foreground bg-foreground text-background' : 'border-subtle text-muted hover:border-foreground hover:text-foreground'}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <span className="text-xs uppercase tracking-brand text-foreground">
                Quantity
              </span>
              <div className="mt-3">
                <QuantityStepper quantity={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 text-xs font-medium uppercase tracking-brand text-white transition-colors ${added ? 'bg-foreground' : 'bg-accent hover:bg-accent-hover'}`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="border border-subtle px-4 text-muted hover:border-foreground hover:text-foreground transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 border-y border-subtle py-5 text-center text-xs text-muted">
              <div className="flex flex-col items-center gap-2">
                <Truck size={18} className="text-accent" />
                Free Shipping
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw size={18} className="text-accent" />
                30-Day Returns
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                Hypoallergenic
              </div>
            </div>

            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <strong>Materials:</strong> {product.materials}
                </p>
                <p>
                  <strong>Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-subtle bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl text-foreground md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {related.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
