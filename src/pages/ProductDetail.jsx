import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/store/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { Pill, Accordion, QuantityStepper, StarRating, Eyebrow } from "@/components/ui/Primitives";
import ProductGallery from "@/components/product/ProductGallery";
import ProductCard from "@/components/product/ProductCard";
import Newsletter from "@/components/home/Newsletter";

const tones = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();
  const [variant, setVariant] = useState(tones[0].id);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [justAdded, setJustAdded] = useState(false);

  // Scroll to top when product id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="mx-auto max-w-content px-5 md:px-8 py-32 text-center">
        <p className="serif-display text-3xl text-cocoa">Product not found</p>
        <Link to="/shop" className="mt-6 inline-block btn-outline">Back to shop</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const accordionItems = [
    { id: "description", label: "Description", content: product.description },
    { id: "materials", label: "Materials & Care", content: product.materials },
    { id: "shipping", label: "Shipping & Returns", content: product.shipping },
  ];

  const handleAdd = () => {
    addItem(product, { quantity, variant: tones.find((t) => t.id === variant)?.label });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-ivory-light border-b border-hairline">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12 h-12 flex items-center text-[10px] uppercase tracking-[0.18em] text-muted">
          <Link to="/" className="hover:text-cocoa transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 mx-2" strokeWidth={1.5} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-cocoa transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight className="h-3 w-3 mx-2" strokeWidth={1.5} />
          <span className="text-cocoa truncate">{product.name}</span>
        </div>
      </div>

      <section className="bg-ivory-light pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <ProductGallery product={product} />
            </div>

            {/* Detail */}
            <div className="lg:col-span-5">
              {/* Hidden text refs for strk-img references (sr-only) */}
              <span id={`pdp-${product.id}-brand`} className="sr-only">Velmora</span>
              <span id={`pdp-${product.id}-category`} className="sr-only">{product.category}</span>
              <span id={`pdp-${product.id}-name`} className="sr-only">{product.name}</span>
              <span id={`pdp-${product.id}-desc`} className="sr-only">{product.shortDescription}</span>

              <Eyebrow className="mb-4">{product.category}</Eyebrow>
              <h1 className="serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-cocoa">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-3">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-muted">
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>

              <p className="mt-6 text-lg text-cocoa tabular-nums">
                {formatPrice(product.price)}
              </p>

              <p className="mt-6 text-[15px] text-cocoa-soft leading-relaxed max-w-md">
                {product.shortDescription}
              </p>

              {/* Variants */}
              <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cocoa font-medium">Finish</p>
                  <p className="text-xs text-muted">{tones.find((t) => t.id === variant)?.label}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tones.map((t) => (
                    <Pill
                      key={t.id}
                      active={variant === t.id}
                      onClick={() => setVariant(t.id)}
                      ariaLabel={`Select ${t.label} finish`}
                    >
                      {t.label}
                    </Pill>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-10 grid grid-cols-[auto,1fr] gap-3">
                <QuantityStepper value={quantity} onChange={setQuantity} />
                <button
                  type="button"
                  onClick={handleAdd}
                  className="btn-primary w-full"
                  aria-live="polite"
                >
                  {justAdded ? "Added to Cart ✓" : "Add to Cart"}
                </button>
              </div>

              {/* Wishlist link */}
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cocoa-soft hover:text-claret transition-colors"
              >
                <Heart className="h-3.5 w-3.5" strokeWidth={1.5} />
                Add to wishlist
              </button>

              {/* Trust strip */}
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-hairline">
                <li className="flex items-start gap-3">
                  <Truck className="h-4 w-4 text-claret mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-cocoa font-medium">Free shipping</p>
                    <p className="text-xs text-muted mt-0.5">On orders over $75</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <RotateCcw className="h-4 w-4 text-claret mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-cocoa font-medium">30-day returns</p>
                    <p className="text-xs text-muted mt-0.5">No questions asked</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-claret mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-cocoa font-medium">Hypoallergenic</p>
                    <p className="text-xs text-muted mt-0.5">Sensitive-skin safe</p>
                  </div>
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-12">
                <Accordion
                  items={accordionItems}
                  openId={openAccordion}
                  onToggle={(id) => setOpenAccordion(openAccordion === id ? null : id)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14 flex items-end justify-between">
            <div>
              <p className="editorial-eyebrow mb-3">You may also love</p>
              <h2 className="serif-display text-3xl md:text-4xl text-cocoa">
                Pairs beautifully with
              </h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cocoa hover:text-claret transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} eager={i < 2} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
