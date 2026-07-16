import { useEffect, useMemo, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ChevronDown, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductRow from "@/components/product/ProductRow";
import StarRating from "@/components/product/StarRating";
import { placeholderSvg, products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/components/cart/CartContext";
import strkImgConfig from "@/strk-img-config.json";

const tones = ["Gold", "Silver"];

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId) || products[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 4);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("Description");
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const gallery = useMemo(
    () => [
      { label: "Studio detail", id: `${product.id}-gallery-studio-2e91` },
      { label: "Worn close-up", id: `${product.id}-gallery-worn-79cb` },
      { label: "Gift styling", id: `${product.id}-gallery-gift-c4a8` },
    ],
    [product.id],
  );

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id, selectedImage]);

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="velmora-container grid gap-10 pb-16 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-24">
        <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-2xl border bg-velmora-parchment transition ${
                  selectedImage === index ? "border-velmora-gold" : "border-velmora-linen"
                }`}
                aria-label={`Show ${image.label}`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="aspect-square h-20 w-20 object-cover"
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={`[detail-product-desc] [detail-product-title] [detail-product-material]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholderSvg}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.5rem] bg-velmora-parchment shadow-soft md:order-2">
            <img
              alt={`${product.name} large gallery`}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={gallery[selectedImage].id}
              data-strk-img={`[detail-product-desc] [detail-product-title] [detail-product-material]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={placeholderSvg}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-nav text-velmora-bronze underline-offset-4 hover:underline">
            Back to shop
          </Link>
          <h1 id="detail-product-title" className="mt-5 font-serifDisplay text-5xl uppercase leading-none tracking-product text-velmora-espresso md:text-7xl">
            {product.name}
          </h1>
          <p id="detail-product-material" className="mt-4 text-xs font-bold uppercase tracking-nav text-velmora-bronze">
            {product.material}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-velmora-linen py-5">
            <p className="text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id="detail-product-desc" className="mt-6 text-base leading-8 text-velmora-cocoa">
            {product.description}
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-nav text-velmora-bronze">Tone</p>
              <div className="flex gap-3">
                {tones.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                      tone === option
                        ? "border-velmora-espresso bg-velmora-espresso text-velmora-ivory"
                        : "border-velmora-linen bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-nav text-velmora-bronze">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-ivory">
                <button type="button" className="p-4" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-bold">{quantity}</span>
                <button type="button" className="p-4" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button type="button" className="premium-button w-full" onClick={() => addToCart(product, quantity, tone)}>
              Add to Cart
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-velmora-linen bg-velmora-parchment p-4 text-sm text-velmora-cocoa">
              <Truck className="mb-2 h-5 w-5 text-velmora-gold" />
              Free worldwide shipping
            </div>
            <div className="rounded-2xl border border-velmora-linen bg-velmora-parchment p-4 text-sm text-velmora-cocoa">
              <ShieldCheck className="mb-2 h-5 w-5 text-velmora-gold" />
              Hypoallergenic finish
            </div>
          </div>

          <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
            {[
              ["Description", product.description],
              ["Materials & Care", product.care],
              ["Shipping & Returns", product.shipping],
            ].map(([title, copy]) => (
              <div key={title}>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === title ? "" : title)}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-nav text-velmora-espresso"
                >
                  {title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === title ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openAccordion === title ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="text-sm leading-7 text-velmora-cocoa">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductRow products={related} subtitle="Pieces with the same warm polish and gift-ready ease." />
    </main>
  );
}
