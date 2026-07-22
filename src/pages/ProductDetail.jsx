import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Heart, Minus, Plus, Star, Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";
import ProductCard from "@/components/product/ProductCard";

const TONE_OPTIONS = [
  { id: "gold", label: "Gold", swatch: "#B68B5A" },
  { id: "silver", label: "Silver", swatch: "#C8C2BA" },
  { id: "rose", label: "Rose Gold", swatch: "#C99A85" },
];

const SECTIONS = [
  { id: "description", label: "Description" },
  { id: "materials", label: "Materials & Care" },
  { id: "shipping", label: "Shipping & Returns" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const galleryRef = useRef(null);

  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  useEffect(() => {
    setActiveImage(0);
    setTone("gold");
    setQuantity(1);
    setOpenSection("description");
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-32 container-x text-center">
        <h1 className="font-serif text-h2 mb-3">Piece not found</h1>
        <p className="text-body text-muted mb-6">
          That piece may have sold out or moved. Browse the rest of the collection.
        </p>
        <button onClick={() => navigate("/shop")} className="btn-primary">
          Back to Shop
        </button>
      </div>
    );
  }

  const gallery = [
    {
      id: product.imgId,
      query: `[${product.descId}] [${product.titleId}] ${product.query}`,
      ratio: "1x1",
    },
    {
      id: product.imgId2,
      query: `[${product.descId}] [${product.titleId}] ${product.query2}`,
      ratio: "1x1",
    },
    {
      id: `${product.imgId}-detail`,
      query: `[${product.descId}] [${product.titleId}] close up detail of fine jewelry craftsmanship warm light editorial`,
      ratio: "1x1",
    },
    {
      id: `${product.imgId}-model`,
      query: `[${product.descId}] [${product.titleId}] model wearing fine gold jewelry editorial portrait soft warm light`,
      ratio: "1x1",
    },
  ];

  const related = getRelatedProducts(product.id, 4);

  const handleAdd = () => {
    addItem(product, { quantity, tone });
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-ivory">
        <div className="container-x py-4">
          <nav className="flex items-center gap-1.5 text-eyebrow uppercase text-muted" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <section className="bg-ivory pb-20 md:pb-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div
              ref={galleryRef}
              className="grid grid-cols-12 gap-4 md:gap-5"
            >
              {/* Thumbnails (desktop vertical) */}
              <div className="hidden md:flex md:flex-col md:col-span-2 gap-3">
                {gallery.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "aspect-square overflow-hidden bg-blush border transition-colors",
                      activeImage === i ? "border-ink" : "border-hairline hover:border-ink/50"
                    )}
                  >
                    <StrkImage
                      imgId={img.id}
                      query={img.query}
                      ratio="1x1"
                      width={300}
                      alt={`${product.name} thumbnail ${i + 1}`}

                    />
                  </button>
                ))}
              </div>

              {/* Active image */}
              <div className="col-span-12 md:col-span-10">
                <div className="aspect-square overflow-hidden bg-blush">
                  <StrkImage
                    imgId={gallery[activeImage].id}
                    query={gallery[activeImage].query}
                    ratio="1x1"
                    width={1200}
                    alt={product.name}

                    eager
                  />
                </div>
                {/* Mobile thumbnails (horizontal) */}
                <div className="md:hidden flex gap-3 mt-4 overflow-x-auto no-scrollbar">
                  {gallery.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                      className={cn(
                        "w-20 h-20 flex-shrink-0 overflow-hidden bg-blush border",
                        activeImage === i ? "border-ink" : "border-hairline"
                      )}
                    >
                      <StrkImage
                        imgId={img.id}
                        query={img.query}
                        ratio="1x1"
                        width={200}
                        alt={`${product.name} thumbnail ${i + 1}`}

                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">{product.eyebrow}</p>
              <h1
                id={product.titleId}
                className="product-name text-[15px] sm:text-base font-medium"
              >
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <p className="font-serif text-2xl text-ink tabular-nums">
                  {formatPrice(product.price)}
                </p>
                <span className="text-small text-muted">·</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-3.5 h-3.5",
                          i < Math.floor(product.rating)
                            ? "fill-champagne text-champagne"
                            : "text-hairline"
                        )}
                        strokeWidth={1.2}
                      />
                    ))}
                  </div>
                  <span className="text-small text-muted">
                    {product.rating} · {product.reviews} reviews
                  </span>
                </div>
              </div>

              <p
                id={product.descId}
                className="mt-6 text-body text-espresso leading-relaxed"
              >
                {product.description}
              </p>

              {/* Tone selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-eyebrow uppercase text-ink font-medium">
                    Tone
                  </span>
                  <span className="text-eyebrow uppercase text-muted">
                    {TONE_OPTIONS.find((t) => t.id === tone)?.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {TONE_OPTIONS.map((opt) => {
                    const supported = product.tone.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={!supported}
                        onClick={() => setTone(opt.id)}
                        className={cn(
                          "inline-flex items-center gap-2.5 pl-2 pr-4 py-2 border transition-colors",
                          tone === opt.id
                            ? "border-ink bg-bone"
                            : "border-hairline hover:border-ink",
                          !supported && "opacity-40 cursor-not-allowed hover:border-hairline"
                        )}
                        aria-pressed={tone === opt.id}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-ink/20"
                          style={{ background: opt.swatch }}
                          aria-hidden="true"
                        />
                        <span className="text-small text-ink">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <span className="text-eyebrow uppercase text-ink font-medium block mb-3">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="p-3 hover:text-champagne-deep transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-5 text-small tabular-nums">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="p-3 hover:text-champagne-deep transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add */}
              <div className="mt-8 flex gap-3">
                <button onClick={handleAdd} className="btn-primary flex-1">
                  Add to Bag
                </button>
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="w-14 h-14 grid place-items-center border border-hairline text-ink hover:border-ink hover:text-champagne-deep transition-colors"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Reassurance */}
              <ul className="mt-6 space-y-2.5">
                {[
                  { icon: Truck, label: "Free worldwide shipping over $80" },
                  { icon: RefreshCw, label: "30-day returns on unworn pieces" },
                  { icon: Sparkles, label: "18K gold plated · Hypoallergenic" },
                  { icon: ShieldCheck, label: "1-year quality guarantee" },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <li key={row.label} className="flex items-center gap-3 text-small text-espresso">
                      <Icon className="w-4 h-4 text-champagne" strokeWidth={1.5} />
                      {row.label}
                    </li>
                  );
                })}
              </ul>

              {/* Accordions */}
              <div className="mt-10 border-t border-hairline">
                {SECTIONS.map((section) => {
                  const open = openSection === section.id;
                  return (
                    <div key={section.id} className="border-b border-hairline">
                      <button
                        type="button"
                        onClick={() => setOpenSection(open ? null : section.id)}
                        className="w-full flex items-center justify-between py-5 text-left"
                        aria-expanded={open}
                      >
                        <span className="text-eyebrow uppercase text-ink font-medium">
                          {section.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-ink transition-transform duration-300",
                            open && "rotate-180"
                          )}
                          strokeWidth={1.5}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-[max-height,opacity] duration-300 ease-editorial",
                          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="pb-5 text-body text-espresso leading-relaxed">
                          {section.id === "description" && product.description}
                          {section.id === "materials" && product.materials}
                          {section.id === "shipping" && product.shipping}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-bone py-20 md:py-28 border-t border-hairline">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <p className="eyebrow mb-3">You May Also Like</p>
              <h2 className="font-serif text-h2 md:text-[40px] leading-[1.05]">
                <em className="italic font-normal text-champagne-deep">Paired</em>{" "}
                with {product.name.split(" ")[0]}
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-eyebrow uppercase text-ink border-b border-ink hover:text-champagne-deep hover:border-champagne-deep pb-1"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
