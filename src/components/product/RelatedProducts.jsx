import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function RelatedProducts({ currentId }) {
  const { addItem } = useCart();
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} alternate`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </div>
              </Link>
              <button
                onClick={() => addItem(product, "gold", 1)}
                className="absolute bottom-3 left-3 right-3 bg-foreground/90 backdrop-blur-sm text-ivory text-xs tracking-widest uppercase py-2.5 rounded-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Quick Add
              </button>
              <div className="mt-3">
                <h3 className="font-serif text-sm font-medium text-foreground truncate">
                  <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-xs text-muted">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-foreground mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}