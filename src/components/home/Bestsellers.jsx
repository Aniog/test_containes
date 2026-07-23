import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Bestsellers</h2>
          <p className="section-subtitle mx-auto mt-3">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-velmora-surface-elevated overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={`bs-${product.id}`}
                    data-strk-img={`[bs-name-${product.id}] [bs-desc-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-velmora-bg/60 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredId === product.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="bg-velmora-gold text-velmora-bg font-sans text-xs uppercase tracking-widest px-5 py-2.5 flex items-center gap-2 transition-all duration-200 hover:bg-velmora-gold-hover"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>
                  </div>

                  {product.isNew && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="new">New</Badge>
                    </div>
                  )}
                </div>
              </Link>

              <div className="text-center">
                <h3
                  id={`bs-name-${product.id}`}
                  className="product-name"
                >
                  {product.name}
                </h3>
                <p
                  id={`bs-desc-${product.id}`}
                  className="product-price mt-1"
                >
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}