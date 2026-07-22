import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { StarRating } from "@/components/ui/StarRating";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function RelatedProducts({ products }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  if (!products || products.length === 0) return null;

  return (
    <section
      ref={containerRef}
      className="border-t border-taupe py-16 md:py-20 bg-cream-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-taupe aspect-[3/4] mb-4">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src={SVG_PLACEHOLDER}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-charcoal/90">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-[10px] uppercase tracking-widest text-ivory hover:text-gold-light transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Quick Add
                    </button>
                  </div>
                </div>
              </Link>
              <p
                id={`related-${product.titleId}`}
                className="font-cormorant text-sm uppercase tracking-widest text-charcoal"
              >
                {product.name}
              </p>
              <p
                id={`related-${product.descId}`}
                className="font-manrope text-xs text-warm-gray mt-0.5 line-clamp-1"
              >
                {product.shortDescription}
              </p>
              <div className="flex items-center justify-between mt-2">
                <StarRating rating={product.rating} />
                <span className="font-manrope text-sm font-medium text-charcoal">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
