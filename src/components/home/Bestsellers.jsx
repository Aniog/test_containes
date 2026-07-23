import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Bestsellers() {
  const { dispatch } = useCart();
  const [hovered, setHovered] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#1C1917] font-medium">
            Bestsellers
          </h2>
          <p className="text-[#6B6358] mt-3 text-sm tracking-[0.08em] uppercase">
            Most loved by our community
          </p>
          <div className="w-12 h-px bg-[#B8943C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-[#E5DED5] overflow-hidden rounded-sm">
                  <img
                    src={
                      hovered === product.id && product.images[1]
                        ? product.images[1]
                        : product.images[0]
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </Link>

              {/* Quick add */}
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0],
                    },
                  })
                }
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-[#B8943C] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>

              <div className="mt-3 space-y-1">
                <h3 className="font-['Cormorant_Garamond'] text-xs tracking-[0.15em] uppercase text-[#1C1917] font-medium truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#B8943C] fill-[#B8943C]" />
                  <span className="text-xs text-[#6B6358]">{product.rating}</span>
                </div>
                <p className="text-[#B8943C] font-medium text-sm">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}