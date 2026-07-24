import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronDown, Minus, Plus, Truck, RotateCcw, Shield, Heart, ArrowRight, ArrowLeft } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { ProductArt } from "@/components/decor/JewelryArt";
import ProductCard from "@/components/product/ProductCard";
import StarRating from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatCurrency, cn } from "@/lib/utils";

const TONE_LABEL = {
  gold: "18K Gold",
  silver: "Sterling Silver",
};

const ACCORDION = [
  {
    id: "description",
    title: "Description",
    render: (p) => p.description,
  },
  {
    id: "materials",
    title: "Materials & Care",
    render: (p) => (
      <>
        <p className="mb-3">{p.materials}</p>
        <p>{p.care}</p>
      </>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    render: (p) => <p>{p.shipping}</p>,
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [tone, setTone] = useState(product?.tone?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [activeImage, setActiveImage] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  useEffect(() => {
    if (!product) return;
    setTone(product.tone?.[0] || "gold");
    setQuantity(1);
    setActiveImage(0);
  }, [product]);

  const related = useMemo(
    () => (product ? getRelatedProducts(product.id, 4) : []),
    [product]
  );

  if (!product) {
    return (
      <div className="bg-bone min-h-[60vh] flex flex-col items-center justify-center pt-24 px-5 text-center">
        <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold">404</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-sm text-cocoa max-w-md">
          The piece you were looking for has moved or sold out. Browse the rest of the edit.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide-3 font-medium text-ink hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          Back to shop
        </Link>
      </div>
    );
  }

  const galleryKeys = [
    product.imageKey,
    product.imageKeyHover || product.imageKey,
    product.imageKey,
    product.imageKeyHover || product.imageKey,
  ];

  const handleAdd = () => {
    addItem(product.id, { quantity, tone });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addItem(product.id, { quantity, tone });
    navigate("/shop");
  };

  return (
    <div className="bg-bone pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12 py-4 text-[11px] uppercase tracking-wide-2 text-cocoa flex items-center gap-2">
        <Link to="/" className="hover:text-ink transition-colors">Home</Link>
        <span className="text-cocoa/40">/</span>
        <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
        <span className="text-cocoa/40">/</span>
        <span className="text-ink line-clamp-1">{product.name}</span>
      </div>

      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-3">
              {/* Thumbnails (desktop) */}
              <div className="hidden md:flex md:col-span-1 flex-col gap-3">
                {galleryKeys.map((key, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "aspect-square overflow-hidden bg-cream-dark border transition-colors",
                      activeImage === i ? "border-ink" : "border-transparent hover:border-hairline"
                    )}
                    aria-label={`View image ${i + 1}`}
                  >
                    <ProductArt imageKey={key} />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="col-span-12 md:col-span-11">
                <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
                  <ProductArt imageKey={galleryKeys[activeImage]} />
                </div>
                {/* Mobile thumbnail strip */}
                <div className="md:hidden mt-3 flex gap-2">
                  {galleryKeys.map((key, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "w-16 aspect-square overflow-hidden bg-cream-dark border transition-colors flex-shrink-0",
                        activeImage === i ? "border-ink" : "border-transparent"
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <ProductArt imageKey={key} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 md:pt-2">
            <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold">
              {product.isBestseller ? "Bestseller · " : ""}{product.category}
            </p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-[44px] leading-[1.05] text-ink uppercase tracking-wide-2">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <span className="text-[11px] uppercase tracking-wide-2 text-cocoa">
                · {product.rating.toFixed(1)}
              </span>
            </div>

            <p className="mt-6 font-serif text-2xl text-ink">
              {formatCurrency(product.price)}
            </p>

            <p className="mt-6 text-[15px] font-light leading-relaxed text-cocoa">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.tone && product.tone.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-wide-3 font-medium text-ink">
                    Finish: <span className="text-cocoa font-light ml-1">{TONE_LABEL[tone]}</span>
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tone.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={cn(
                        "px-5 py-2.5 text-[10px] uppercase tracking-wide-3 font-medium border transition-colors",
                        tone === t
                          ? "bg-ink text-bone border-ink"
                          : "bg-transparent text-ink border-hairline hover:border-ink"
                      )}
                    >
                      {TONE_LABEL[t]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-wide-3 font-medium text-ink">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:bg-cream-dark transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm text-ink">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:bg-cream-dark transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 space-y-3">
              <Button
                onClick={handleAdd}
                size="lg"
                className="w-full"
                variant={justAdded ? "outline" : "primary"}
              >
                {justAdded ? "Added to Cart" : "Add to Cart"}
              </Button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-wide-3 font-medium text-ink underline-offset-4 hover:underline transition-colors"
              >
                Buy it now
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <ul className="mt-8 grid grid-cols-3 gap-2 pt-8 border-t border-hairline">
              {[
                { icon: Truck, label: "Free shipping" },
                { icon: RotateCcw, label: "30-day returns" },
                { icon: Shield, label: "Hypoallergenic" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center text-center gap-2 py-3">
                  <Icon className="w-4 h-4 text-gold" strokeWidth={1.4} />
                  <span className="text-[10px] uppercase tracking-wide-2 text-cocoa">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          {ACCORDION.map((item) => {
            const isOpen = openAccordion === item.id;
            return (
              <div key={item.id} className="border-t border-hairline last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl text-ink">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-ink transition-transform duration-500 ease-elegant",
                      isOpen && "rotate-180"
                    )}
                    strokeWidth={1.4}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-elegant",
                    isOpen ? "max-h-[800px] pb-6" : "max-h-0"
                  )}
                >
                  <div className="text-[15px] font-light leading-relaxed text-cocoa max-w-2xl">
                    {item.render(product)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Related */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-ink">
              You may also love
            </h2>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-wide-3 font-medium text-ink hover:text-gold transition-colors"
            >
              View all
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
