import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";
import ProductAccordions from "@/components/product/ProductAccordions";
import ProductCard from "@/components/product/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const ref = useRef(null);

  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImg(0);
    setVariant("Gold");
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [id, activeImg]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-3xl text-ink">Product not found.</p>
        <Button as={Link} to="/shop" variant="outline" className="mt-6">
          Back to Shop
        </Button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 pb-2">
        <nav className="text-[11px] uppercase tracking-widest2 text-sand">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 md:max-h-[600px] md:overflow-y-auto no-scrollbar">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-cream border transition-colors",
                    activeImg === i ? "border-gold" : "border-transparent"
                  )}
                >
                  <img
                    alt={`${product.name} ${i + 1}`}
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4x5] bg-cream overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`${product.images[activeImg].imgId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:pl-4">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              {product.type}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest3 text-ink leading-tight"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} size={15} />
              <span className="text-xs text-sand">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>
            <p className="font-serif text-2xl text-ink mt-5">
              {formatPrice(product.price)}
            </p>
            <p
              id={product.descId}
              className="mt-5 text-ink/75 leading-relaxed"
            >
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-sand mb-3">
                Tone — {variant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest2 border transition-colors",
                      variant === v
                        ? "border-gold bg-gold text-ivory"
                        : "border-ink/25 text-ink hover:border-gold hover:text-gold"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-widest2 text-sand mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink/25">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-ink hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 text-ink hover:text-gold"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <Button
                onClick={() => addItem(product, { variant, quantity })}
                className="w-full"
                size="lg"
              >
                Add to Bag — {formatPrice(product.price * quantity)}
              </Button>
            </div>

            <p className="mt-4 text-xs text-sand">
              Free worldwide shipping · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream mt-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
