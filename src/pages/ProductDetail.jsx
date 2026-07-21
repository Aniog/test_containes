import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ChevronRight, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import ResolvedImage from "@/components/ResolvedImage";
import StarRating from "@/components/StarRating";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const { addToCart } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    setVariant(product.variants[0]);
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  // Gallery images are loaded by ResolvedImage components; no extra scan needed.

  if (!product) {
    return (
      <main className="pt-32 pb-20 text-center bg-parchment min-h-screen">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link
          to="/shop"
          className="inline-block bg-bronze text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-bronze-hover transition-colors"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  const related = getRelatedProducts(product.slug);

  const handleAdd = () => {
    addToCart(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          {product.materialsCare.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          {product.shippingReturns.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <main className="pt-20 md:pt-24 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-warm-gray mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-bronze transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-bronze transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-cream overflow-hidden relative">
              <span id={`pd-title-${product.id}`} className="sr-only">
                {product.name}
              </span>
              <span id={`pd-desc-${product.id}`} className="sr-only">
                {product.category} {product.material}
              </span>
              <ResolvedImage
                imgId={`pd-main-${product.id}-${activeImage}`}
                query={`[pd-desc-${product.id}] [pd-title-${product.id}]`}
                ratio="4x5"
                width="900"
                alt={product.name}
                className="w-full h-full"
              />
            </div>
            {product.images > 1 && (
              <div className="flex gap-3">
                {[...Array(product.images)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "w-20 h-24 md:w-24 md:h-28 bg-cream overflow-hidden border-2 transition-colors",
                      activeImage === idx ? "border-bronze" : "border-transparent"
                    )}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <ResolvedImage
                      imgId={`pd-thumb-${product.id}-${idx}`}
                      query={`[pd-desc-${product.id}] [pd-title-${product.id}]`}
                      ratio="3x4"
                      width="300"
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-warm-gray mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-widest-xl text-charcoal mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <p className="font-sans text-2xl text-charcoal">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-warm-gray">
                <StarRating rating={product.rating} size={14} />
                <span>({product.reviewCount})</span>
              </div>
            </div>
            <p className="font-sans text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-5 py-2.5 text-xs uppercase tracking-widest border transition-colors",
                      variant === v
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-soft-taupe text-charcoal hover:border-bronze"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-soft-taupe">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={cn(
                "w-full py-4 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2",
                added
                  ? "bg-deep-olive text-white"
                  : "bg-bronze text-white hover:bg-bronze-hover"
              )}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 py-6 border-t border-soft-taupe">
              <div className="flex items-start gap-3">
                <Truck size={18} className="text-bronze mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal">Free Shipping</p>
                  <p className="text-xs text-warm-gray mt-1">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw size={18} className="text-bronze mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal">30-Day Returns</p>
                  <p className="text-xs text-warm-gray mt-1">Hassle-free exchanges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-bronze mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal">Hypoallergenic</p>
                  <p className="text-xs text-warm-gray mt-1">Gentle on skin</p>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-4 border-t border-soft-taupe">
              {accordionItems.map((item, idx) => (
                <details key={idx} className="group border-b border-soft-taupe">
                  <summary className="flex items-center justify-between py-4 cursor-pointer list-none font-sans text-xs uppercase tracking-widest text-charcoal hover:text-bronze transition-colors">
                    {item.title}
                    <Plus
                      size={14}
                      className="transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <div className="pb-5 text-sm text-warm-gray leading-relaxed">
                    {item.content}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl md:text-4xl">You May Also Like</h2>
              <Link
                to="/shop"
                className="font-sans text-xs uppercase tracking-widest text-warm-gray hover:text-bronze transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
