import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { productsDb } from '../../data/products';

export function Bestsellers() {
  const { addItem } = useCartStore();
  const seedProducts = productsDb.slice(0, 5);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-wide">
          Bestsellers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {seedProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[desc-${product.id}] [title-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Second image on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                   <img
                    data-strk-img-id={`bestseller-${product.id}-hover`}
                    data-strk-img={`woman modeling [desc-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} worn`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        imageId: product.imageId,
                        desc: product.desc
                      });
                    }}
                    className="w-full bg-primary/95 text-primary-foreground py-3 uppercase tracking-widest text-xs font-medium hover:bg-primary transition-colors editorial-shadow backdrop-blur-sm"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="flex flex-col flex-1">
                <h3 id={`title-${product.id}`} className="font-serif text-lg tracking-wider uppercase mb-1">
                  {product.name}
                </h3>
                <p id={`desc-${product.id}`} className="sr-only">
                  {product.desc}
                </p>
                <span className="font-medium text-primary">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}