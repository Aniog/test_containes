import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Minus, Plus, Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { getProduct, getRelated } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';
import { formatPrice, cn } from '@/lib/utils';
import ProductGallery from '@/components/product/ProductGallery';
import ProductCard from '@/components/product/ProductCard';
import Accordion from '@/components/ui/Accordion';

function StarRating({ value, count, large = false }) {
  return (
    <div className={cn('flex items-center gap-2 text-mink', large ? 'text-sm' : 'text-xs')}>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              large ? 'h-4 w-4' : 'h-3 w-3',
              i < Math.round(value) ? 'fill-gold text-gold' : 'text-sand'
            )}
            strokeWidth={0}
          />
        ))}
      </div>
      {typeof count === 'number' && (
        <span>
          {value.toFixed(1)} · {count} reviews
        </span>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} · Velmora`;
    }
  }, [product]);

  const [variant, setVariant] = useState(product?.defaultVariant || 'gold');
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { push } = useToast();

  const related = useMemo(() => (product ? getRelated(product, 4) : []), [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAdd = () => {
    addItem(product.id, variant, qty);
    push({ title: `${product.name} added to bag` });
  };

  const accordions = [
    {
      title: 'Description',
      content: <p>{product.longDescription}</p>,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso">
              Materials
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {product.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso">
              Care
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {product.care.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>
            Free worldwide shipping on all orders over $80. Most orders ship
            within 1–2 business days from our New York studio.
          </p>
          <p>
            We accept returns within 30 days of delivery, in original
            condition. Final sale on engraved and made-to-order pieces.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-bone pb-24">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-8xl px-5 pt-28 sm:px-8 lg:px-12"
      >
        <ol className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-mink">
          <li>
            <Link to="/" className="hover:text-espresso">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/shop" className="hover:text-espresso">Shop</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-espresso">{product.name}</li>
        </ol>
      </nav>

      <div className="mx-auto mt-8 grid max-w-8xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery product={product} activeVariant={variant} />
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
              {product.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-[0.18em] text-espresso sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xl font-medium tabular-nums text-espresso">
                {formatPrice(product.price)}
              </span>
              <StarRating value={product.rating} count={product.reviewCount} />
            </div>
            <p className="mt-6 text-base leading-relaxed text-mink">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
                  Tone · <span className="text-mink">{product.variants.find((v) => v.id === variant)?.label}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVariant(v.id)}
                      className={cn(
                        'border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.24em] transition-colors duration-300',
                        variant === v.id
                          ? 'border-espresso bg-espresso text-bone'
                          : 'border-sand text-espresso hover:border-espresso'
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
                Quantity
              </div>
              <div className="mt-3 inline-flex items-center border border-sand">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="p-3 text-mink hover:text-espresso"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <span className="min-w-10 text-center text-sm font-medium tabular-nums text-espresso">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="p-3 text-mink hover:text-espresso"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="mt-8 block w-full bg-espresso py-4 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-bone transition-colors duration-300 hover:bg-gold-deep"
            >
              Add to Bag · {formatPrice(product.price * qty)}
            </button>

            {/* Reassurance row */}
            <ul className="mt-6 grid grid-cols-1 gap-2 text-[11px] text-mink sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.25} />
                Free shipping
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.25} />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.25} />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between border-b border-sand pb-6">
            <h2 className="font-serif text-3xl font-light tracking-tight text-espresso sm:text-4xl">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso hover:text-gold-deep"
            >
              View all
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
