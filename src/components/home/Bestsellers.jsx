import { Link } from "react-router-dom";

export function Bestsellers({ products }) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="font-serif text-4xl mb-3 text-foreground">Bestsellers</h2>
            <p id="bestsellers-desc" className="text-muted-foreground font-sans tracking-wide">Our most loved pieces, curated for you.</p>
          </div>
          <Link to="/collections/bestsellers" className="hidden md:block text-sm tracking-widest uppercase hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] [bestsellers-desc] [bestsellers-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 text-[10px]"
                />
                
                {/* Secondary image on hover - implementing a simplified version using CSS opacity for now,
                    in a real app this would be a second actual image from data */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <button 
                    className="w-full bg-background/95 backdrop-blur font-sans text-xs tracking-widest uppercase py-3 hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      // In a real implementation, this would trigger the actual Add to Cart
                      console.log("Quick add:", product.id);
                    }}
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 id={`product-title-${product.id}`} className="font-serif uppercase text-sm tracking-wide mb-1 text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/collections/bestsellers" className="inline-block text-sm tracking-widest uppercase hover:text-primary transition-colors border-b border-foreground pb-1">
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
