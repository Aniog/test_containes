import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Truck, RefreshCw, Sparkles, ChevronRight } from "lucide-react";
import { products, getProductBySlug, getRelated } from "@/data/products";
import { formatPrice, slugify } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Gallery } from "@/components/product/Gallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { Accordion } from "@/components/product/Accordion";
import { ProductCard } from "@/components/product/ProductCard";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

const tones = [
  { id: "gold", label: "18K Gold", swatch: "linear-gradient(135deg,#F0DCB0,#C4A57A 60%,#8B6A3A)" },
  { id: "silver", label: "Sterling Silver", swatch: "linear-gradient(135deg,#F2F2F0,#C8C8C5 60%,#8E8E8B)" },
  { id: "rose", label: "Rose Gold", swatch: "linear-gradient(135deg,#F0C8B6,#C4907A 60%,#8E5A4D)" },
];

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  const [tone, setTone] = useState(product?.tone || "gold");
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const { addItem } = useCart();

  const related = useMemo(() => (product ? getRelated(product, 4) : []), [product]);

  if (!product) {
    return (
      <main className="bg-canvas pt-32 md:pt-40">
        <div className="container-editorial py-24 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 font-serif text-4xl text-ink">Piece not found</h1>
          <p className="mt-3 text-ink-secondary">
            The piece you are looking for may have moved.
          </p>
          <Link to="/shop" className="mt-8 inline-block btn-primary">
            Browse the Collection
          </Link>
        </div>
      </main>
    );
  }

  const onAdd = () => {
    setAdding(true);
    addItem(product, { tone, quantity });
    setTimeout(() => setAdding(false), 600);
  };

  const onBuyNow = () => {
    addItem(product, { tone, quantity });
    navigate("/cart");
  };

  const accordions = [
    {
      title: "Description",
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <p>
            Each piece is hand-finished in our family atelier and inspected
            before it leaves our studio. Subtle variations are part of the
            charm.
          </p>
        </div>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <p>
            <strong>Base:</strong> Hypoallergenic brass, nickel-free and lead-free.
          </p>
          <p>
            <strong>Plating:</strong> 18K gold over a palladium barrier, 2.5 microns
            thick — built for daily wear.
          </p>
          <p>
            <strong>Care:</strong> Avoid chlorinated water and harsh chemicals.
            Store dry, in the pouch provided. Buff gently with the included
            cloth to restore shine.
          </p>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div className="space-y-3">
          <p>
            <strong>Shipping:</strong> Free worldwide on orders over $75. Standard
            delivery in 3–6 business days. Express options at checkout.
          </p>
          <p>
            <strong>Returns:</strong> 30 days, no questions asked. Items must be
            unworn and in their original packaging. We cover the return label.
          </p>
          <p>
            <strong>Gifting:</strong> Each order arrives in our signature cream
            linen box with a hand-tied ribbon. Gift notes available at
            checkout.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="bg-canvas pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-editorial pb-6">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1 text-[11px] uppercase tracking-wider2 text-ink-muted"
        >
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} strokeWidth={1.4} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.4} />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight size={12} strokeWidth={1.4} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Gallery */}
          <Gallery product={product} />

          {/* Details */}
          <div className="md:sticky md:top-28 md:self-start">
            {product.badge && (
              <p className="eyebrow text-gold">{product.badge}</p>
            )}
            <h1 className="mt-3 product-name text-3xl text-ink md:text-4xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="font-serif text-2xl text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="text-ink-muted">·</span>
              <span className="text-xs text-ink-secondary">or 4 payments of {formatPrice(product.price / 4)}</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <StarRating value={product.rating} />
              <span className="text-xs text-ink-secondary">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-7 max-w-md text-ink-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <VariantSelector
                options={tones}
                value={tone}
                onChange={setTone}
              />
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-wider2 text-ink-secondary">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="grid h-11 w-11 place-items-center text-ink-secondary hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.6} />
                </button>
                <span className="w-12 text-center text-sm text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="grid h-11 w-11 place-items-center text-ink-secondary hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.6} />
                </button>
              </div>
            </div>

            {/* Add / buy */}
            <div className="mt-7 space-y-3">
              <button
                type="button"
                onClick={onAdd}
                className={cn(
                  "w-full btn-primary transition-transform",
                  adding && "scale-[0.99]",
                )}
              >
                <ShoppingBag size={14} strokeWidth={1.6} /> Add to Bag
              </button>
              <button
                type="button"
                onClick={onBuyNow}
                className="w-full btn-outline"
              >
                Buy Now
              </button>
            </div>

            {/* Reassurance */}
            <ul className="mt-8 grid grid-cols-1 gap-2 text-xs text-ink-secondary sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Truck size={14} className="text-gold" strokeWidth={1.4} /> Free shipping
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw size={14} className="text-gold" strokeWidth={1.4} /> 30-day returns
              </li>
              <li className="flex items-center gap-2">
                <Sparkles size={14} className="text-gold" strokeWidth={1.4} /> 18K gold plated
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-canvas-soft">
          <div className="container-editorial py-20 md:py-24">
            <div className="text-center">
              <p className="eyebrow">You may also love</p>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                Pairs beautifully with
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
