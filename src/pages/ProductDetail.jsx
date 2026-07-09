import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Truck } from "lucide-react";
import { useStrkImages } from "@/hooks/useStrkImages";
import { getProductById, PRODUCTS, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { Accordion } from "@/components/ui/Accordion";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { getStrkImageUrl } from "@/lib/images";

export function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => getProductById(id), [id]);
  const { addItem } = useCart();
  const containerRef = useStrkImages([id]);

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const imageIds = useMemo(
    () => [
      `${product.id}-main`,
      ...Array.from({ length: product.images }, (_, i) => `${product.id}-thumb-${i}`),
    ],
    [product]
  );

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0]);
      setQuantity(1);
      setActiveImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-base-800">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:underline">
          Return to shop
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Materials & Care",
      content: (
        <>
          <ul className="mb-3 list-disc space-y-1 pl-5">
            {product.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <p>{product.care}</p>
        </>
      ),
    },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on orders over $75. Standard delivery arrives within 5–7 business days. Need it sooner? Express options are available at checkout. Returns accepted within 30 days of delivery in original condition.",
    },
  ];

  const handleAddToCart = () => {
    addItem(product, { tone: selectedTone, quantity });
  };

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center font-sans text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-base-800"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
              <img
                data-strk-img-id={imageIds[activeImage]}
                data-strk-img={`[${product.id}-name]`}
                data-strk-img-ratio={activeImage === 0 ? "4x5" : "1x1"}
                data-strk-img-width="900"
                src={getStrkImageUrl(imageIds[activeImage])}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {imageIds.map((imgId, i) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative aspect-square overflow-hidden bg-cream-100 transition-all duration-300",
                    activeImage === i
                      ? "ring-1 ring-base-800"
                      : "opacity-80 hover:opacity-100"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${product.id}-name]`}
                    data-strk-img-ratio={i === 0 ? "4x5" : "1x1"}
                    data-strk-img-width="250"
                    src={getStrkImageUrl(imgId)}
                    alt={`${product.name} view ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {product.category}
            </p>
            <h1
              id={`${product.id}-name`}
              className="mt-2 font-serif text-3xl font-medium uppercase tracking-widest text-base-800 md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-5 font-serif text-2xl font-medium text-base-800">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-base-800">
                Metal Tone
              </p>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300",
                      selectedTone === tone
                        ? "border-base-800 bg-base-800 text-cream"
                        : "border-hairline bg-transparent text-base-800 hover:border-base-800"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <QuantityStepper value={quantity} onChange={setQuantity} />
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-muted">
              <Truck size={14} />
              <span>Free shipping on orders over $75</span>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-hairline bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl font-medium text-base-800 md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
