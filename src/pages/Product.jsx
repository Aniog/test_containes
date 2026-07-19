import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductByHandle, getRelatedProducts, CATEGORIES } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import ImageGallery from "@/components/ui/ImageGallery";
import Accordion from "@/components/ui/Accordion";
import StarRating from "@/components/ui/StarRating";
import ProductCard from "@/components/ui/ProductCard";

const TONES = [
  { id: "gold", label: "Gold", swatch: "linear-gradient(135deg,#D9C29A 0%,#B08A4A 50%,#8A6A33 100%)" },
  { id: "silver", label: "Silver", swatch: "linear-gradient(135deg,#EAEAEA 0%,#B8B8B8 100%)" },
];

export default function Product() {
  const { handle } = useParams();
  const product = getProductByHandle(handle);
  const { addItem } = useCart();
  const [tone, setTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product],
  );

  if (!product) {
    return (
      <div className="container-7xl py-32 text-center">
        <p className="eyebrow text-muted">◆ Not found</p>
        <h1 className="display-1 text-4xl md:text-5xl mt-3">
          This piece has moved on.
        </h1>
        <p className="text-sm text-muted mt-3">
          Try browsing the collection — there are other things to love.
        </p>
        <Link to="/shop" className="btn-outline mt-8 inline-flex">
          Shop the Collection
        </Link>
      </div>
    );
  }

  const onAdd = () => {
    addItem(
      { ...product, tone },
      {
        quantity,
        variant: { id: tone, label: TONES.find((t) => t.id === tone)?.label || tone },
      },
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const accordionItems = [
    { title: "Description", content: <p className="text-pretty">{product.description}</p> },
    { title: "Materials & Care", content: <p className="text-pretty">{product.materials} <br /><br /> {product.care}</p> },
    { title: "Shipping & Returns", content: <p className="text-pretty">{product.shipping}</p> },
  ];

  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label || product.category;

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-7xl pt-28 md:pt-32">
        <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-eyebrow text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2 text-gold">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink"
          >
            {categoryLabel}
          </Link>
          <span className="mx-2 text-gold">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="container-7xl py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <ImageGallery product={product} />
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow text-muted">◆ {categoryLabel}</p>
            <h1
              id={`product-title-${product.id}`}
              className="product-name text-ink mt-3 text-base md:text-lg"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <p
                id={`product-price-${product.id}`}
                className="font-serif text-3xl text-ink tabular-nums"
              >
                {formatPrice(product.price)}
              </p>
              <StarRating
                value={product.rating}
                count={product.reviewCount}
              />
            </div>

            <p className="text-sm text-ink-soft mt-6 leading-relaxed max-w-md">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="eyebrow text-muted mb-3">Tone</p>
              <div className="flex flex-wrap gap-2">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    aria-pressed={tone === t.id}
                    className={`inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 border rounded-full text-xs uppercase tracking-eyebrow font-medium transition-colors ${
                      tone === t.id
                        ? "border-ink text-ink"
                        : "border-stone text-ink-soft hover:border-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block w-5 h-5 rounded-full border border-stone"
                      style={{ background: t.swatch }}
                    />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-stone">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-12 inline-flex items-center justify-center text-ink hover:bg-stone transition-colors"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-12 inline-flex items-center justify-center text-ink hover:bg-stone transition-colors"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                className="btn-primary flex-1"
              >
                {added ? "Added to Bag" : "Add to Cart"}
              </button>
              <button
                type="button"
                aria-label="Save for later"
                className="w-12 h-12 inline-flex items-center justify-center border border-stone text-ink hover:border-ink transition-colors"
              >
                <Heart className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] uppercase tracking-eyebrow text-ink-soft">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                Free shipping
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-gold" strokeWidth={1.5} />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" strokeWidth={1.5} />
                Hypoallergenic
              </li>
            </ul>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="container-7xl py-20 md:py-28 border-t border-stone">
        <div className="flex items-end justify-between mb-10">
          <h2 className="display-1 text-3xl md:text-4xl text-ink">
            You may also love
          </h2>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-eyebrow text-ink relative after:absolute after:left-0 after:right-0 after:bottom-[-3px] after:h-px after:bg-gold after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out-soft"
          >
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
