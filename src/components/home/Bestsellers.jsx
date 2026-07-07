import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    type: 'ear cuff',
    desc: 'gold ear cuff with crystal accent',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    type: 'necklace',
    desc: 'multicolor floral crystal necklace',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    type: 'huggie earrings',
    desc: 'chunky gold dome huggie earrings',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    type: 'drop earrings',
    desc: 'textured gold filigree drop earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    type: 'gift set',
    desc: 'gift-boxed earring and necklace set',
  }
];

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Our Bestsellers</h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/products/${product.id}`} className="block relative aspect-[3/4] overflow-hidden mb-6 bg-velmora-light">
                {/* Primary Image */}
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  data-strk-img-id={`prod-img-1-${product.id}`}
                  data-strk-img={`[prod-desc-${product.id}] [prod-name-${product.id}] elegant neutral background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                {/* Alternate Image on Hover */}
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  data-strk-img-id={`prod-img-2-${product.id}`}
                  data-strk-img={`[prod-desc-${product.id}] [prod-name-${product.id}] lifestyle worn by model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <Button 
                            className="w-full uppercase tracking-wider font-serif rounded-none bg-white text-primary hover:bg-velmora-gold hover:text-white border-none shadow-sm"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent Link navigation
                                import('@/store/useCart').then(({ addToCart }) => {
                                    addToCart(product, 1, 'gold');
                                });
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>
              </Link>

              <div className="text-center flex flex-col flex-grow">
                <div className="flex justify-center mb-2 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                <Link to={`/products/${product.id}`} className="hover:text-velmora-gold transition-colors block mb-2">
                  <h3 id={`prod-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm">
                    {product.name}
                  </h3>
                </Link>
                <p id={`prod-desc-${product.id}`} className="hidden">{product.desc}</p>
                <p className="text-muted-foreground mt-auto">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;