import { PRODUCTS } from "@/data/products";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

/*
 * Renders the gallery for ALL products at build time so the strk-img Vite
 * plugin can statically iterate over PRODUCTS in this file and pre-populate
 * the image config. Only the gallery for `productId` is visible; the rest are
 * display:none. The visible gallery is fully interactive.
 */
export default function PdpGallery({ productId, activeImage, onSelect }) {
  return (
    <>
      {PRODUCTS.map((product) => {
        const visible = product.id === productId;
        return (
          <div
            key={product.id}
            className={cn(
              visible
                ? "flex flex-col-reverse md:flex-row gap-4 w-full"
                : "hidden",
            )}
            aria-hidden={!visible}
          >
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
              {product.gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => onSelect?.(i)}
                  className={cn(
                    "flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-sand transition-opacity duration-300",
                    activeImage === i
                      ? "outline outline-1 outline-offset-2 outline-champagne"
                      : "opacity-70 hover:opacity-100",
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={`pdp-thumb-p${product.id}-g${g.id}`}
                    data-strk-img={`[pdp-p${product.id}-blurb] [pdp-p${product.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src={IMG_PLACEHOLDER}
                    className="w-full h-full object-cover bg-sand"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 aspect-[3/4] overflow-hidden bg-sand relative">
              {product.gallery.map((g, i) => (
                <img
                  key={g.id}
                  alt={product.name}
                  data-strk-img-id={`pdp-hero-p${product.id}-g${g.id}`}
                  data-strk-img={`[pdp-p${product.id}-blurb] [pdp-p${product.id}-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src={IMG_PLACEHOLDER}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover bg-sand transition-opacity duration-500",
                    activeImage === i ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <button
                type="button"
                aria-label="Save to wishlist"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ivory/90 hover:bg-ivory flex items-center justify-center transition-colors z-10"
              >
                <Heart size={16} strokeWidth={1.5} className="text-ink" />
              </button>
            </div>

            <span id={`pdp-p${product.id}-title`} className="sr-only">
              {product.name}
            </span>
            <span id={`pdp-p${product.id}-blurb`} className="sr-only">
              {product.blurb}
            </span>
          </div>
        );
      })}
    </>
  );
}
