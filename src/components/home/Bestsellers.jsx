import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-velmora-gold text-xs tracking-widest uppercase mb-2">
              Curated for You
            </p>
            <h2 className="section-heading">Bestsellers</h2>
          </div>
          <Link
            to="/collection"
            className="text-sm text-velmora-dark hover:text-velmora-gold transition-colors uppercase tracking-wider hidden md:inline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-velmora-dark/5 mb-3">
                  <img
                    src={
                      hoveredId === product.id && product.images[1]
                        ? product.images[1]
                        : product.images[0]
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </Link>

              <div className="px-0.5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name leading-relaxed">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star
                    size={12}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                  <span className="text-xs text-velmora-muted">
                    {product.rating}
                  </span>
                </div>
                <p className="text-sm font-medium text-velmora-dark mt-1">
                  ${product.price}
                </p>

                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      variant: "Gold",
                      image: product.images[0],
                      quantity: 1,
                    })
                  }
                  className="mt-3 w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-2.5 border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-dark transition-all duration-200"
                >
                  <ShoppingBag size={14} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/collection"
            className="text-sm text-velmora-dark hover:text-velmora-gold transition-colors uppercase tracking-wider"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}