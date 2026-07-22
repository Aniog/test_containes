import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { useCart } from '@/store/useCart'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Bestsellers() {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 4) // Show first 4 products for the grid
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">Curated Favorites</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Most loved by our community</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6 block">
                    <img 
                      data-strk-img-id={`bestseller-img-${product.id}`}
                      data-strk-img={product.imageQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-700 absolute inset-0 z-10 group-hover:opacity-0"
                    />
                    <img 
                      data-strk-img-id={`bestseller-hover-${product.id}`}
                      data-strk-img={product.hoverImageQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} worn`}
                      className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                
                {/* Quick Add Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({ ...product, variant: product.variants[0] });
                    }}
                    className="w-full rounded-none uppercase tracking-widest text-xs h-12 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-sm"
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>

              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg tracking-wide uppercase mb-2">
                    <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm font-light mb-3">{product.material}</p>
                </div>
                <p className="font-medium tracking-wide">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background tracking-[0.2em] uppercase px-12 py-6">
            <Link to="/shop">View All Bestsellers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
