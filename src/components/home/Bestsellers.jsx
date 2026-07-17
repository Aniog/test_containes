import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          id={product.titleId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`gold jewelry worn on model ${product.shortDescription}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes("bestseller") && (
            <span className="bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes("new") && (
            <span className="bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          {added ? "Added!" : "Quick Add"}
        </button>
      </div>

      {/* Info */}
      <div>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <h3 className="product-name text-xs text-obsidian mb-1 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-taupe-light"}
                strokeWidth={1}
              />
            ))}
          </div>
          <span className="font-sans text-[11px] text-taupe">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-obsidian mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.tags.includes("bestseller"));

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-obsidian font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-obsidian hover:text-ivory transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
