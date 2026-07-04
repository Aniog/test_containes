import React, { useState, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Plus, Minus, Check } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Hairline from "@/components/ui/Hairline.jsx";
import Button from "@/components/ui/Button.jsx";
import StarRating from "@/components/ui/StarRating.jsx";
import Accordion from "@/components/ui/Accordion.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";
import { useCart } from "@/context/CartContext.jsx";
import { getProductById, getRelatedProducts } from "@/data/products.js";
import { formatPrice, cn } from "@/lib/utils.js";
import { toast } from "@/components/ui/sonner";

const VARIANTS = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const gallery = useMemo(
    () => (product ? [product.illustrations.primary, product.illustrations.alt] : []),
    [product]
  );
  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState(VARIANTS[0].id);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const onAdd = () => {
    addItem({
      id: product.id,
      qty,
      variant: variant === "silver" ? "Sterling Silver" : "18K Gold",
    });
    toast.success(`${product.name} added to your bag.`);
  };

  return (
    <>
      {/* Breadcrumb / back */}
      <div className="bg-cream pt-28 sm:pt-32">
        <Container>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-[0.78rem] uppercase tracking-wider2 text-mute hover:text-ink"
          >
            <ChevronLeft size={14} /> Back to shop
          </Link>
        </Container>
      </div>

      <section className="bg-cream pt-8 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative w-full aspect-[4/5] bg-pearl overflow-hidden">
                {gallery[activeImg]}
                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImg((i) => (i - 1 + gallery.length) % gallery.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-cream/80 hover:bg-cream text-ink rounded-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImg((i) => (i + 1) % gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center bg-cream/80 hover:bg-cream text-ink rounded-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {gallery.map((Illo, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImg(i)}
                      className={cn(
                        "w-20 h-24 overflow-hidden border rounded-sm transition-colors",
                        i === activeImg ? "border-ink" : "border-ink/10 hover:border-ink/30"
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <Illo />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:pt-2">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-ink leading-[1.1] uppercase tracking-wider2">
                {product.name}
              </h1>
              <div className="mt-5 flex items-center gap-5">
                <p className="font-serif text-2xl text-ink">
                  {formatPrice(product.price)}
                </p>
                <span className="text-ink/20">|</span>
                <StarRating value={product.rating} count={product.reviews} />
              </div>

              <p className="mt-6 font-sans text-[0.98rem] text-mute leading-relaxed max-w-md">
                {product.shortDescription}
              </p>

              <div className="mt-8">
                <p className="font-sans uppercase tracking-wider2 text-[0.72rem] text-mute mb-3">
                  Finish
                </p>
                <div className="flex flex-wrap gap-2">
                  {VARIANTS.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={cn(
                        "px-5 h-11 rounded-sm border font-sans uppercase tracking-wider2 text-[0.72rem] transition-colors",
                        variant === v.id
                          ? "border-ink bg-ink text-cream"
                          : "border-ink/20 text-ink hover:border-ink"
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="font-sans uppercase tracking-wider2 text-[0.72rem] text-mute mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-ink/20 rounded-sm">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 inline-flex items-center justify-center hover:text-bronze"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-sans text-[0.95rem]">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-11 h-11 inline-flex items-center justify-center hover:text-bronze"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                <Button variant="primary" size="full" onClick={onAdd}>
                  Add to bag — {formatPrice(product.price * qty)}
                </Button>
                <button
                  type="button"
                  className="h-14 px-6 border border-ink/20 rounded-sm font-sans uppercase tracking-wider2 text-[0.78rem] text-ink hover:border-ink"
                >
                  Save
                </button>
              </div>

              <ul className="mt-7 space-y-2 font-sans text-[0.85rem] text-mute">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-bronze" /> Free worldwide shipping over $75
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-bronze" /> 30-day returns on unworn pieces
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-bronze" /> Hypoallergenic & nickel-free
                </li>
              </ul>

              <div className="mt-10">
                <Accordion
                  items={[
                    { title: "Description", content: <p>{product.description}</p> },
                    { title: "Materials & Care", content: <p>{product.materials}<br /><br />{product.care}</p> },
                    { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-rose py-20 sm:py-24">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow">You may also like</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
                Pair it with
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 font-sans uppercase tracking-wider2 text-[0.78rem] text-ink hover:text-bronze"
            >
              Shop all
              <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {getRelatedProducts(product.id, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductPage;
