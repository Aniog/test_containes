import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  getProductById,
  getRelatedProducts,
  products,
} from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shop/ProductCard";
import ProductImage from "@/components/ui/ProductImage";
import StarRating from "@/components/ui/StarRating";
import { ChevronDown, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
];

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] tracking-widest2 uppercase text-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn(
            "text-ash transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-editorial",
          open ? "max-h-[1000px] pb-5" : "max-h-0"
        )}
      >
        <div className="text-sm text-ash leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(product, 4);
  const { addItem, openCart } = useCart();
  const [active, setActive] = useState(0);
  const [variant, setVariant] = useState("gold");
  const [qty, setQty] = useState(1);
  const galleryRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [id, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  // Build gallery: main + 2 alt framings (close-up, on model)
  const galleryImages = useMemo(() => {
    if (!product) return [];
    return [product, product, product].map((p, i) => ({
      id: `${p.id}-gallery-${i}`,
      imgId: `${p.imgId}-g${i + 1}`,
      query: `[${p.descId}] [${p.nameId}] ${
        i === 0 ? "product hero close-up gold jewelry" : i === 1 ? "worn on model editorial portrait warm" : "lifestyle flat lay linen warm"
      }`,
      alt: `${p.name} — view ${i + 1}`,
    }));
  }, [product]);

  if (!product) {
    return (
      <div className="bg-cream py-32 text-center">
        <h1 className="font-serif text-3xl text-espresso">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const onAdd = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        imgId: product.imgId,
        category: product.category,
      },
      { quantity: qty, variant }
    );
    openCart();
  };

  return (
    <div className="bg-cream pt-10 md:pt-16 pb-20" ref={galleryRef}>
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 mb-6">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] tracking-widest2 uppercase text-ash"
        >
          <Link to="/" className="hover:text-espresso">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="hidden lg:flex gap-4">
            <div className="flex flex-col gap-3 w-20 flex-shrink-0">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative aspect-square w-full overflow-hidden border-2 transition",
                    active === i ? "border-espresso" : "border-transparent"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <ProductImage
                    product={product}
                    imgIdSuffix={`-gallery-thumb-${i}`}
                    ratio="1x1"
                    width="160"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 relative aspect-[4/5] bg-sand overflow-hidden">
              <ProductImage
                product={product}
                imgIdSuffix={`-gallery-main-${active}`}
                ratio="4x5"
                width="900"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-ivory text-espresso text-[10px] tracking-widest2 uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Mobile: scrollable gallery */}
          <div className="lg:hidden flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                className="relative flex-shrink-0 w-[85%] aspect-[4/5] bg-sand overflow-hidden snap-center"
              >
                <ProductImage
                  product={product}
                  imgIdSuffix={`-gallery-mob-${i}`}
                  ratio="4x5"
                  width="700"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Velmora Fine Jewelry</p>
          <h1
            id={product.nameId}
            className="font-serif uppercase tracking-luxe text-3xl sm:text-4xl md:text-5xl text-espresso mt-3 leading-tight"
          >
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <p className="font-serif text-2xl text-espresso">
              ${product.price}
            </p>
            <span className="text-ash">·</span>
            <div className="flex items-center gap-2">
              <StarRating value={Math.round(product.rating || 5)} size={14} />
              <span className="text-xs text-ash">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p
            id={product.descId}
            className="mt-6 text-base text-ash leading-relaxed"
          >
            {product.shortDescription}
          </p>

          <div className="mt-9">
            <p className="text-[11px] tracking-widest2 uppercase text-espresso mb-3">
              Finish
            </p>
            <div className="flex flex-wrap gap-2.5">
              {variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.id)}
                  className={cn(
                    "px-5 py-2.5 text-[11px] tracking-widest2 uppercase border transition",
                    variant === v.id
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-line text-espresso hover:border-espresso"
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[11px] tracking-widest2 uppercase text-espresso mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-11 text-espresso hover:bg-sand transition"
                aria-label="Decrease"
              >
                −
              </button>
              <span className="w-10 h-11 inline-flex items-center justify-center text-sm text-espresso">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-11 text-espresso hover:bg-sand transition"
                aria-label="Increase"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onAdd}
              className="btn-primary flex-1"
            >
              Add to Cart · ${product.price * qty}
            </button>
            <button
              type="button"
              className="btn-outline sm:w-14 sm:px-0"
              aria-label="Save to wishlist"
            >
              <Heart size={16} strokeWidth={1.5} />
            </button>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] tracking-wide text-ash">
            <li className="flex items-center gap-2">
              <Truck size={14} strokeWidth={1.5} className="text-gold-deep" />
              Free shipping over $80
            </li>
            <li className="flex items-center gap-2">
              <RotateCcw size={14} strokeWidth={1.5} className="text-gold-deep" />
              30-day returns
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={14} strokeWidth={1.5} className="text-gold-deep" />
              Hypoallergenic
            </li>
          </ul>

          <div className="mt-10 border-t border-line">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3">{product.materials}</p>
              <p className="text-ash">{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section
        ref={relatedRef}
        className="mt-24 md:mt-32"
        aria-labelledby="related-title"
      >
        <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <p className="eyebrow">You May Also Love</p>
            <h2
              id="related-title"
              className="font-serif text-3xl md:text-4xl text-espresso mt-3"
            >
              Pair It With
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
