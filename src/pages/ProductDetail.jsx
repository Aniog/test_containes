import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, ShieldCheck, Truck, RotateCcw, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import ImageGallery from "@/components/product/ImageGallery";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import { productById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productById(id);
  const { addItem, openCart } = useCart();

  const [variantId, setVariantId] = useState(
    product?.variants?.[0]?.id || "gold"
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setQuantity(1);
    setVariantId(product?.variants?.[0]?.id || "gold");
  }, [id, product?.variants]);

  if (!product) {
    return (
      <div className="bg-ivory pt-32 pb-20 min-h-[60vh]">
        <Container>
          <p className="font-serif text-3xl text-ink">Piece not found.</p>
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="mt-6 inline-flex items-center justify-center h-12 px-8 bg-ink text-paper uppercase tracking-ui text-[12px] font-medium hover:bg-ink-soft transition-colors"
          >
            Back to Shop
          </button>
        </Container>
      </div>
    );
  }

  const onAdd = () => {
    addItem(product.id, variantId, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    openCart();
  };

  return (
    <div className="bg-ivory pt-20 md:pt-24">
      <Container>
        {/* Breadcrumb */}
        <nav className="py-5 text-[11px] uppercase tracking-ui text-taupe">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16 md:pb-24">
          {/* Gallery */}
          <div className="md:col-span-7">
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div className="md:col-span-5 md:pt-2">
            {product.tag && (
              <p className="eyebrow !text-gold-deep mb-3">{product.tag}</p>
            )}
            <h1 className="font-serif text-3xl md:text-[40px] font-light uppercase tracking-ui text-ink leading-[1.05]">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <span className="font-serif text-2xl text-ink">
                {formatPrice(product.price)}
              </span>
              <span className="text-[12px] text-taupe">· Free shipping over $80</span>
            </div>
            <div className="mt-3">
              <StarRating
                value={product.rating}
                count={product.reviewCount}
                size={14}
              />
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              {product.shortDescription}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-medium uppercase tracking-ui text-ink">
                  Finish
                </p>
                <p className="text-[12px] text-taupe">
                  {product.variants.find((v) => v.id === variantId)?.label}
                </p>
              </div>
              <div className="flex gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariantId(v.id)}
                    aria-pressed={variantId === v.id}
                    className={cn(
                      "inline-flex items-center gap-2.5 h-11 pl-3 pr-5 border transition-colors",
                      variantId === v.id
                        ? "border-ink bg-ink text-paper"
                        : "border-hairline text-ink hover:border-ink"
                    )}
                  >
                    <span
                      className="inline-block h-5 w-5 rounded-full border border-paper/40"
                      style={{ backgroundColor: v.tone }}
                      aria-hidden
                    />
                    <span className="text-[12px] uppercase tracking-ui font-medium">
                      {v.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-ui text-ink mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-12 w-12 inline-flex items-center justify-center text-ink hover:bg-paper transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.4} />
                </button>
                <span className="w-12 text-center text-[14px] font-medium text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-12 w-12 inline-flex items-center justify-center text-ink hover:bg-paper transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.4} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={onAdd}
              className={cn(
                "mt-6 w-full inline-flex items-center justify-center h-14 px-10 uppercase tracking-ui text-[12px] font-medium transition-colors duration-300",
                added ? "bg-gold text-paper" : "bg-ink text-paper hover:bg-ink-soft"
              )}
            >
              {added ? "Added to Bag" : "Add to Bag"} · {formatPrice(product.price * quantity)}
            </button>

            <button
              type="button"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 h-12 border border-ink text-ink uppercase tracking-ui text-[12px] font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              <Heart size={14} strokeWidth={1.4} />
              Save for Later
            </button>

            {/* Reassurance */}
            <ul className="mt-8 grid grid-cols-1 gap-3">
              <li className="flex items-center gap-3 text-[12px] text-ink-soft">
                <Truck size={16} strokeWidth={1.4} className="text-gold" />
                Free worldwide shipping over $80
              </li>
              <li className="flex items-center gap-3 text-[12px] text-ink-soft">
                <RotateCcw size={16} strokeWidth={1.4} className="text-gold" />
                30-day returns, no questions asked
              </li>
              <li className="flex items-center gap-3 text-[12px] text-ink-soft">
                <ShieldCheck size={16} strokeWidth={1.4} className="text-gold" />
                Hypoallergenic · 18K gold plated · Hand-finished
              </li>
            </ul>

            {/* Accordion */}
            <div className="mt-10">
              <ProductAccordion
                description={product.description}
                materials={product.materials}
                care={product.care}
                shipping={product.shipping}
              />
            </div>
          </div>
        </div>
      </Container>

      <RelatedProducts productId={product.id} />
    </div>
  );
}
