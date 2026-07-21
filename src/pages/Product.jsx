import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Heart,
  Truck,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import RatingStars from "@/components/product/RatingStars";
import ProductCard from "@/components/product/ProductCard";
import Accordion from "@/components/ui/Accordion";
import { useCart } from "@/context/CartContext";
import {
  getProductById,
  getRelatedProducts,
  formatPrice,
} from "@/data/products";
import { cn } from "@/lib/utils";

const PROMISES = [
  { icon: Truck, label: "Free worldwide shipping over $80" },
  { icon: RefreshCw, label: "30-day easy returns" },
  { icon: Sparkles, label: "18K gold plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

const TONE_STYLES = {
  Gold: { swatch: "linear-gradient(135deg, #D4B27C 0%, #B08A4A 60%, #8A5E2B 100%)" },
  Silver: { swatch: "linear-gradient(135deg, #E8E5DF 0%, #C6C2BC 60%, #8E8B85 100%)" },
};

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const galleryRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    if (!galleryRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
  }, [id]);

  useEffect(() => {
    if (!relatedRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState((product?.variants && product.variants[0]) || "Gold");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-mocha mb-4">
          404 · Not Found
        </p>
        <h1 className="font-serif text-3xl mb-6">This piece is no longer available.</h1>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const accordionItems = useMemo(
    () => [
      {
        title: "Description",
        content: (
          <>
            <p>{product.description}</p>
            {product.details?.length ? (
              <ul className="space-y-1.5 pt-1">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 inline-block h-px w-3 bg-gold flex-shrink-0"
                      aria-hidden
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
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
    ],
    [product]
  );

  const handleAdd = () => {
    addToCart(product.id, { variant, qty, open: true });
  };

  const mono = product.name?.[0] || "V";
  const galleryImages = product.images;

  return (
    <>
      <main
        ref={galleryRef}
        className="bg-ivory pt-24 sm:pt-28 pb-16 sm:pb-20"
      >
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] uppercase tracking-[0.24em] text-mocha flex items-center flex-wrap gap-1.5"
          >
            <Link to="/" className="hover:text-espresso">Home</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-espresso">Shop</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-espresso capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <span className="text-espresso">{product.name}</span>
          </nav>
        </div>

        <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12 mt-6 sm:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
                {/* Thumbnails (vertical on desktop) */}
                <div className="order-2 md:order-1 md:col-span-2 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
                  {galleryImages.map((img, i) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                      className={cn(
                        "flex-shrink-0 w-20 h-20 md:w-full md:h-auto md:aspect-square overflow-hidden border transition-colors",
                        activeImage === i
                          ? "border-espresso"
                          : "border-espresso/15 hover:border-espresso/40"
                      )}
                    >
                      <StrkImage
                        id={img.id}
                        query={`[${img.queryRef}]`}
                        ratio={img.ratio}
                        width={200}
                        monogram={mono}
                        withShine={false}
                      />
                    </button>
                  ))}
                </div>

                {/* Main image */}
                <div className="order-1 md:order-2 md:col-span-10">
                  <div className="bg-sand-100 overflow-hidden" style={{ backgroundColor: "#F2EBE0" }}>
                    <StrkImage
                      id={galleryImages[activeImage].id}
                      query={`[${galleryImages[activeImage].queryRef}]`}
                      ratio={galleryImages[activeImage].ratio}
                      width={galleryImages[activeImage].width}
                      monogram={mono}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                {product.badge && (
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold mb-3">
                    {product.badge}
                  </p>
                )}
                <h1
                  id={`${product.id}-name`}
                  className="product-title text-2xl sm:text-[28px] text-espresso"
                >
                  {product.name}
                </h1>
                <p
                  id={`${product.id}-tagline`}
                  className="mt-2 text-sm sm:text-base text-mocha"
                >
                  {product.tagline}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <RatingStars value={product.rating} size={14} />
                  <span className="text-xs text-mocha tabular-nums">
                    {product.rating.toFixed(1)} · {product.reviews} reviews
                  </span>
                </div>

                <div className="hairline my-6" />

                <p className="text-2xl font-serif text-espresso tabular-nums">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-1 text-xs text-mocha">
                  Or 4 interest-free payments of {formatPrice(product.price / 4)}.
                </p>

                <div className="mt-7">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-mocha mb-3">
                    Finish: <span className="text-espresso">{variant}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => {
                      const style = TONE_STYLES[v] || TONE_STYLES.Gold;
                      const isActive = v === variant;
                      return (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setVariant(v)}
                          className={cn(
                            "inline-flex items-center gap-2.5 px-4 h-11 border transition-colors rounded-sm",
                            isActive
                              ? "border-espresso bg-ivory"
                              : "border-espresso/20 hover:border-espresso/50"
                          )}
                          aria-pressed={isActive}
                        >
                          <span
                            className="h-5 w-5 rounded-full border border-espresso/20"
                            style={{ background: style.swatch }}
                            aria-hidden
                          />
                          <span className="text-sm text-espresso">{v}</span>
                          {isActive && (
                            <Check className="h-3.5 w-3.5 text-espresso" strokeWidth={2} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-mocha mb-3">
                    Quantity
                  </p>
                  <div className="inline-flex items-center border border-espresso/20 h-11">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="h-full w-11 inline-flex items-center justify-center hover:bg-espresso/5"
                    >
                      <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                    <span className="w-10 text-center text-sm tabular-nums">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="h-full w-11 inline-flex items-center justify-center hover:bg-espresso/5"
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="btn btn-primary flex-1"
                  >
                    Add to Cart · {formatPrice(product.price * qty)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWishlisted((v) => !v)}
                    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    aria-pressed={wishlisted}
                    className="btn btn-outline h-[52px] w-[52px] !p-0 flex-shrink-0"
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 transition-colors",
                        wishlisted && "fill-espresso text-espresso"
                      )}
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-2.5 text-[11px] uppercase tracking-[0.18em] text-espresso/75">
                  {PROMISES.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2 border border-espresso/10 px-3 py-2.5"
                    >
                      <Icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Accordion items={accordionItems} defaultOpen={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related products */}
      <section
        ref={relatedRef}
        className="py-20 sm:py-24 border-t border-espresso/10 bg-ivory"
      >
        <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <div>
              <p className="eyebrow mb-3">You may also love</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso">
                You may also like
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-[0.28em] text-espresso link-underline"
            >
              Shop all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
