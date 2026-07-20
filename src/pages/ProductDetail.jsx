import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Heart, Minus, Plus, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import ImageGallery from "@/components/product/ImageGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import { tones } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [tone, setTone] = useState(product?.tone || "gold");
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (product) {
      setTone(product.tone || "gold");
      setQty(1);
    }
  }, [id, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-32 text-center">
        <h1 className="font-serif text-4xl mb-3">Piece not found</h1>
        <p className="text-espresso/60 mb-8">
          We couldn't find that piece. It may have sold out — explore the rest of the collection.
        </p>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const onAdd = () => {
    addItem(product, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const accordionSections = [
    {
      title: "Description",
      content: (
        <>
          <p>{product.description}</p>
          <ul className="mt-4 space-y-2">
            {product.details.map((d) => (
              <li key={d} className="flex gap-2.5">
                <span className="mt-2 w-1 h-1 bg-brass rounded-full flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
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
  ];

  return (
    <div ref={containerRef} className="bg-ivory text-espresso">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-6 text-xs uppercase tracking-[0.22em] text-espresso/55 flex items-center gap-1.5">
        <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" strokeWidth={1.4} />
        <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" strokeWidth={1.4} />
        <span id={`product-${product.id}-name`} className="text-espresso/85 truncate max-w-[200px]">
          {product.name}
        </span>
      </div>

      <section className="max-w-8xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Gallery */}
          <div>
            <ImageGallery product={product} />
          </div>

          {/* Info */}
          <div className="md:pt-2 lg:pt-4">
            {product.badge && (
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-brass mb-3">
                {product.badge}
              </p>
            )}
            <h1
              id={`product-${product.id}-tagline`}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            >
              {product.name}
            </h1>
            <p className="mt-3 text-sm md:text-base text-espresso/65 font-serif italic">
              {product.tagline}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-xl md:text-2xl font-serif">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-espresso/50">
                or 4 payments of {formatPrice(product.price / 4)}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.floor(product.rating)
                        ? "fill-brass text-brass"
                        : "text-espresso/20"
                    )}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-xs text-espresso/60">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 text-sm md:text-[0.95rem] text-espresso/75 leading-relaxed max-w-prose">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-espresso/70">
                  Tone
                </span>
                <span className="text-xs text-espresso/55">
                  {tones.find((t) => t.id === tone)?.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={cn(
                      "px-5 py-2.5 text-xs uppercase tracking-[0.22em] border transition-all duration-300",
                      tone === t.id
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-espresso/30 text-espresso/80 hover:border-espresso"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7 flex items-center gap-5">
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-espresso/70">
                Quantity
              </span>
              <div className="inline-flex items-center border border-espresso/30">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-sand/40 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-sand/40 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart + wishlist */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onAdd}
                className={cn(
                  "btn-primary flex-1 transition-all",
                  justAdded && "bg-brass border-brass"
                )}
              >
                {justAdded ? "Added to Bag" : "Add to Bag"}
              </button>
              <button
                type="button"
                onClick={() => setFav((v) => !v)}
                aria-label="Save to wishlist"
                className={cn(
                  "w-14 h-14 flex items-center justify-center border transition-colors",
                  fav
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-espresso/30 text-espresso hover:border-espresso"
                )}
              >
                <Heart
                  className={cn("w-5 h-5", fav && "fill-current")}
                  strokeWidth={1.4}
                />
              </button>
            </div>

            {/* Trust strip */}
            <ul className="mt-7 grid grid-cols-3 gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-espresso/70 border-t border-sand pt-6">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-espresso/60" strokeWidth={1.4} />
                Free Ship $80+
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5 text-espresso/60" strokeWidth={1.4} />
                30-Day Returns
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-espresso/60" strokeWidth={1.4} />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion sections={accordionSections} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentId={product.id} />
    </div>
  );
}
