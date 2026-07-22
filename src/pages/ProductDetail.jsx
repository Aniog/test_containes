import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Plus, Minus, ChevronRight, Heart, Truck, RotateCcw, Shield } from "lucide-react";
import { findProduct, relatedFor } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import ProductCard from "@/components/product/ProductCard";
import Accordion from "@/components/ui/Accordion";
import Stars from "@/components/ui/Stars";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = findProduct(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setVariant(product?.variants?.[0]);
    setQty(1);
  }, [product?.id]);

  if (!product) return <NotFound />;

  const related = relatedFor(product, 4);
  const productIdAttr = product.id;

  const onAdd = () => {
    addItem(product, variant, qty);
  };

  const accordionItems = [
    {
      title: "Description",
      content: (
        <div>
          <p>{product.description}</p>
          {product.details?.length > 0 && (
            <ul className="mt-4 space-y-2 text-[14px]">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-accent mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ),
    },
    {
      title: "Materials & Care",
      content: <p>{product.materials}</p>,
    },
    {
      title: "Shipping & Returns",
      content: <p>{product.shipping}</p>,
    },
  ];

  return (
    <main className="bg-cream min-h-screen pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-editorial pt-4">
        <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-widest-2 text-taupe">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <li><ChevronRight className="w-3 h-3" strokeWidth={1.4} /></li>
            <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
            <li><ChevronRight className="w-3 h-3" strokeWidth={1.4} /></li>
            <li className="text-ink truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Product */}
      <section className="container-editorial pt-6 md:pt-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">{product.subtitle}</p>
              <h1
                id={`${productIdAttr}-name`}
                className="font-sans uppercase tracking-wider-2 text-ink text-2xl md:text-[28px] font-medium leading-[1.15]"
              >
                {product.name}
              </h1>
              <p
                id={`${productIdAttr}-subtitle`}
                className="sr-only"
              >
                {product.subtitle}
              </p>

              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <Stars value={product.rating} />
                <span className="text-[12px] text-taupe">
                  {product.rating} · {product.reviews} reviews
                </span>
              </div>

              <p className="mt-6 font-sans text-[26px] text-ink font-light tabular-nums">
                {formatPrice(product.price)}
              </p>

              <p className="mt-6 text-[15px] leading-[1.85] text-ink-muted font-sans font-light max-w-prose">
                {product.description}
              </p>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-widest-2 text-ink font-medium mb-3">
                    Finish: <span className="text-ink-muted">{variant?.label}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVariant(v)}
                        className={cn(
                          "pill",
                          variant?.id === v.id && "pill-active"
                        )}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full mr-2 inline-block"
                          style={{ background: v.tone }}
                          aria-hidden="true"
                        />
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-widest-2 text-ink font-medium mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 inline-flex items-center justify-center text-ink hover:bg-sand"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                  <span className="w-12 text-center text-[14px] tabular-nums text-ink">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-11 h-11 inline-flex items-center justify-center text-ink hover:bg-sand"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onAdd}
                  className="flex-1 btn-primary"
                >
                  Add to Bag · {formatPrice(product.price * qty)}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-hairline text-ink hover:border-ink transition-colors"
                  aria-label="Save to wishlist"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.4} />
                </button>
              </div>

              {/* Reassurance */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] uppercase tracking-wider-2 text-ink-muted">
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-accent" strokeWidth={1.4} />
                  Free over $75
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-accent" strokeWidth={1.4} />
                  30-day returns
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-accent" strokeWidth={1.4} />
                  Hypoallergenic
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory border-t border-hairline">
        <div className="container-editorial py-20 md:py-28">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="eyebrow mb-4">You may also love</p>
              <h2 className="display-2 text-balance">Pieces to pair</h2>
            </div>
            <Link to="/shop" className="btn-ghost hidden md:inline-flex">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
