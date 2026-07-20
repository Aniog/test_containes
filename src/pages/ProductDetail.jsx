import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, ChevronRight, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  getProductById,
  getRelatedProducts,
  MATERIALS,
} from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Accordion } from "@/components/ui/accordion";
import { ProductCard } from "@/components/product/ProductCard";
import { Stars } from "@/components/shared/Stars";
import { cn, formatPrice } from "@/lib/utils";

const FALLBACK_BY_PRODUCT = {
  "vivid-aura-jewels": {
    1: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=1000&q=90&fit=max&fm=jpg",
  },
  "majestic-flora-nectar": {
    1: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=90&fit=max&fm=jpg",
  },
  "golden-sphere-huggies": {
    1: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1000&q=90&fit=max&fm=jpg",
  },
  "amber-lace-earrings": {
    1: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1000&q=90&fit=max&fm=jpg",
  },
  "royal-heirloom-set": {
    1: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=1000&q=90&fit=max&fm=jpg",
  },
  "celeste-pearl-drops": {
    1: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?w=1000&q=90&fit=max&fm=jpg",
  },
  "lumiere-chain-necklace": {
    1: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=90&fit=max&fm=jpg",
  },
  "siren-twisted-huggies": {
    1: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1000&q=90&fit=max&fm=jpg",
    2: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1000&q=90&fit=max&fm=jpg",
  },
};

function useProduct(id) {
  return useMemo(() => getProductById(id), [id]);
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useProduct(id);
  const { add } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0]?.id || "gold");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      return ImageHelper.loadImages(strkImgConfig, galleryRef.current);
    }
  }, [id, activeImage]);

  useEffect(() => {
    setActiveImage(0);
    setQty(1);
    setVariant(product?.variants?.[0]?.id || "gold");
  }, [id, product?.variants]);

  if (!product) {
    return (
      <div className="bg-bone min-h-screen pt-32 pb-20 px-6 text-center">
        <h1 className="font-serif text-3xl text-ink mb-4">Piece not found</h1>
        <p className="text-muted mb-8">This piece is no longer available.</p>
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="inline-block bg-ink text-bone px-8 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold-deep"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const fallbacks = FALLBACK_BY_PRODUCT[product.id] || {};
  const material = MATERIALS.find((m) => m.id === product.material);

  const onAdd = () => {
    add(product.id, variant, qty);
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div className="bg-bone min-h-screen pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[10px] uppercase tracking-wider2 text-muted mb-8"
        >
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div ref={galleryRef} className="flex flex-col md:flex-row gap-4 md:gap-5">
            {/* Thumbnails (desktop) */}
            <div className="hidden md:flex flex-col gap-3 w-20">
              {[1, 2].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setActiveImage(n - 1)}
                  className={cn(
                    "aspect-square bg-ivory overflow-hidden border transition-colors",
                    activeImage === n - 1 ? "border-ink" : "border-hairline hover:border-ink"
                  )}
                  aria-label={`View image ${n}`}
                >
                  <img
                    data-strk-img-id={`prod-${product.id}-${n}`}
                    src={fallbacks[n]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`prod-${product.id}-${activeImage + 1}`}
                src={fallbacks[activeImage + 1]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Mobile dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-1">
              {[1, 2].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setActiveImage(n - 1)}
                  aria-label={`View image ${n}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    activeImage === n - 1 ? "bg-ink" : "bg-hairline"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
                  {product.new ? "New Arrival" : product.bestSeller ? "Bestseller" : "Velmora Atelier"}
                </p>
                <h1 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  <Stars value={product.rating} size="lg" />
                  <span className="text-xs text-muted uppercase tracking-wider2">
                    {product.reviewCount} reviews
                  </span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Add to wishlist"
                className="text-muted hover:text-gold-deep p-2"
              >
                <Heart className="w-5 h-5" strokeWidth={1.25} />
              </button>
            </div>

            <p className="mt-6 text-2xl text-ink font-light">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-ink/80 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-wider3 text-muted mb-3">
                Finish
              </p>
              <div className="flex flex-wrap gap-3">
                {product.variants?.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariant(v.id)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] uppercase tracking-wider2 border transition-colors",
                      variant === v.id
                        ? "border-ink bg-ink text-bone"
                        : "border-hairline text-ink hover:border-ink"
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-12 flex items-center justify-center text-ink hover:text-gold-deep"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm text-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-12 flex items-center justify-center text-ink hover:text-gold-deep"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                className="flex-1 bg-ink text-bone py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold-deep transition-colors"
              >
                Add to Bag
              </button>
            </div>

            {/* Trust mini-row */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider2 text-muted">
              <li className="inline-flex items-center gap-2">
                <Truck className="w-3.5 h-3.5" strokeWidth={1.25} /> Free shipping over $75
              </li>
              <li className="inline-flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.25} /> 30-day returns
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.25} /> Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion
                items={[
                  {
                    id: "description",
                    title: "Description",
                    content: (
                      <p className="text-ink/80 leading-relaxed">{product.description}</p>
                    ),
                  },
                  {
                    id: "materials",
                    title: "Materials & Care",
                    content: (
                      <div className="space-y-3 text-ink/80 leading-relaxed">
                        <p>
                          <span className="text-[10px] uppercase tracking-wider2 text-ink font-medium block mb-1">
                            Materials
                          </span>
                          {product.materials}
                        </p>
                        <p>
                          <span className="text-[10px] uppercase tracking-wider2 text-ink font-medium block mb-1">
                            Care
                          </span>
                          {product.care}
                        </p>
                        {material && (
                          <p>
                            <span className="text-[10px] uppercase tracking-wider2 text-ink font-medium block mb-1">
                              Finish
                            </span>
                            {material.label}
                          </p>
                        )}
                      </div>
                    ),
                  },
                  {
                    id: "shipping",
                    title: "Shipping & Returns",
                    content: (
                      <p className="text-ink/80 leading-relaxed">{product.shipping}</p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Related */}
        <RelatedProducts productId={product.id} />
      </div>
    </div>
  );
}

function RelatedProducts({ productId }) {
  const related = getRelatedProducts(productId, 4);
  return (
    <section className="mt-24 md:mt-32">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
          More you'll love
        </p>
        <h2 className="font-serif text-ink text-3xl md:text-4xl font-light leading-tight">
          You may also like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
