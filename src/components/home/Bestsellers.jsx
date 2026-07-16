import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { getBestsellers } from "../../data/products";
import { useCart } from "../../context/CartContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Bestsellers() {
  const products = getBestsellers();
  const { addItem } = useCart();
  const [sectionRef, visible] = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-velmora-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${visible ? "visible" : ""}`}>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-text-secondary mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children ${visible ? "visible" : ""}`}>
          {products.map((product) => (
            <div key={product.id} className="stagger-item">
              <ProductCard
                product={product}
                onAddToCart={(variant) => addItem(product, variant)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-velmora-gold text-velmora-gold px-8 py-3 font-sans text-xs uppercase tracking-widest hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart("gold");
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-muted overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Second image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}

        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        <button
          onClick={handleAdd}
          className="absolute bottom-3 left-3 right-3 bg-velmora-card/95 backdrop-blur-sm text-velmora-text py-2.5 font-sans text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
        >
          {added ? (
            <span className="flex items-center justify-center gap-1.5">
              <ShoppingBag className="w-3 h-3" /> Added
            </span>
          ) : (
            "Quick Add"
          )}
        </button>

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-sans uppercase tracking-widest px-2 py-1">
            New
          </span>
        )}
      </div>

      <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-text truncate">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
        <span className="font-sans text-xs text-velmora-text-secondary">
          {product.rating}
        </span>
      </div>
      <p className="font-sans text-sm font-medium text-velmora-text mt-1">
        ${product.price}
      </p>
    </Link>
  );
}