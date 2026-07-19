import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Heart } from "lucide-react";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductGallery from "@/components/product/ProductGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/common/ProductCard";
import NotFound from "./NotFound";

const tones = [
  { id: "gold", label: "Gold Tone", swatch: "bg-gold" },
  { id: "silver", label: "Silver Tone", swatch: "bg-taupe" },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [tone, setTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);

  const related = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product]
  );

  // If no related in the same category, fall back to other pieces
  const fallback = useMemo(
    () => products.filter((p) => p.id !== id).slice(0, 4),
    [id]
  );
  const youMayAlsoLike = related.length > 0 ? related : fallback;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) return <NotFound />;

  const onAdd = () => {
    addItem(product, { quantity, tone });
  };

  return (
    <div className="bg-ivory pt-24 md:pt-32">
      {/* Breadcrumb */}
      <div className="container-x pb-6">
        <nav className="text-[11px] uppercase tracking-wider-2 text-mocha flex items-center gap-2">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-20 pb-16 md:pb-24">
        <ProductGallery product={product} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow mb-3 block">{product.category}</span>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl leading-[1.05] uppercase tracking-wider-2 mb-3"
          >
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  strokeWidth={1.2}
                />
              ))}
            </div>
            <span className="text-sm text-mocha">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>
          <p className="font-serif text-3xl mb-6">${product.price}</p>
          <p
            id={product.descId}
            className="text-espresso/80 leading-relaxed mb-8"
          >
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mb-7">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12px] uppercase tracking-wider-2 font-medium">
                Tone
              </span>
              <span className="text-xs text-mocha">
                {tones.find((t) => t.id === tone)?.label}
              </span>
            </div>
            <div className="flex gap-3">
              {tones.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={`flex items-center gap-2.5 border px-4 py-2.5 text-[12px] uppercase tracking-wider-2 transition-all ${
                    tone === t.id
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-taupe text-espresso hover:border-espresso"
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${t.swatch}`} />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-7">
            <span className="text-[12px] uppercase tracking-wider-2 font-medium block mb-3">
              Quantity
            </span>
            <div className="inline-flex items-center border border-taupe">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="w-11 h-11 grid place-items-center hover:bg-cream transition-colors"
              >
                <ChevronDown className="w-4 h-4" strokeWidth={1.4} />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="w-11 h-11 grid place-items-center hover:bg-cream transition-colors"
              >
                <ChevronUp className="w-4 h-4" strokeWidth={1.4} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={onAdd}
            className="btn-primary w-full"
          >
            Add to Cart · ${(product.price * quantity).toFixed(0)}
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3.5 text-[12px] uppercase tracking-wider-2 text-mocha hover:text-espresso transition-colors"
          >
            <Heart className="w-4 h-4" strokeWidth={1.4} />
            Add to Wishlist
          </button>

          <ProductAccordion product={product} />
        </div>
      </div>

      {/* You may also like */}
      <section className="container-x py-20 md:py-28 border-t border-taupe">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
          You may also <em className="italic">love</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-7">
          {youMayAlsoLike.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
