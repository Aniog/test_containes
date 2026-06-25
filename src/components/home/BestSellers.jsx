import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { useCart } from "../../contexts/CartContext";

export default function BestSellers() {
  const { addToCart } = useCart();
  const bestsellers = PRODUCTS.slice(0, 4); // Display 4 products

  return (
    <section className="py-20 lg:py-32 bg-[#FAF9F5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-5xl text-[#2D2A26] mb-4">
              Bestsellers
            </h2>
            <p className="font-sans text-[#8B857D] font-light">Our most loved everyday essentials.</p>
          </div>
          <Link 
            to="/shop" 
            className="hidden md:inline-block border-b border-[#2D2A26] pb-1 font-sans text-xs tracking-widest uppercase hover:text-[#A68D47] hover:border-[#A68D47] transition-colors"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-[#E5E0D8] mb-6 overflow-hidden">
                <img
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  alt={product.name}
                  data-strk-img-id={`best-${product.imgId}-1`}
                  data-strk-img={`[product-${product.id}-name] jewelry isolated`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                 <img
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  alt={`${product.name} worn`}
                  data-strk-img-id={`best-${product.imgId}-2`}
                  data-strk-img={`[product-${product.id}-name] jewelry worn on model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="w-full bg-[#FAF9F5]/95 backdrop-blur text-[#2D2A26] py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#2D2A26] hover:text-[#FAF9F5] transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              
              <Link to={`/product/${product.id}`} className="block text-center">
                <h3 id={`product-${product.id}-name`} className="font-serif text-lg tracking-wide mb-2 text-[#2D2A26]">{product.name}</h3>
                <p className="font-sans text-[#8B857D] text-sm">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/shop" 
            className="inline-block border border-[#2D2A26] py-3 px-8 font-sans text-xs tracking-widest uppercase hover:bg-[#2D2A26] hover:text-[#FAF9F5] transition-colors"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
