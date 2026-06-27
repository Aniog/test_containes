import * as React from "react"
import { ProductCard } from "../components/ProductCard"
import { products } from "../data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../strk-img-config.json"

export default function Shop() {
  const containerRef = React.useRef(null)
  
  React.useEffect(() => {
    // Schedule ImageHelper after React has committed the DOM
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      {/* Page Header */}
      <div className="bg-surface-dim py-16 px-4 text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">Shop All</h1>
        <p className="text-ink-light max-w-xl mx-auto">
          Discover our full collection of demi-fine jewelry. Pieces designed to be treasured everyday.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="mb-8">
              <h3 className="uppercase tracking-widest text-sm font-medium mb-4 pb-2 border-b border-border">Categories</h3>
              <ul className="space-y-3 text-sm text-ink-light">
                <li><button className="hover:text-ink font-medium text-ink">All Jewelry</button></li>
                <li><button className="hover:text-ink">Earrings</button></li>
                <li><button className="hover:text-ink">Necklaces</button></li>
                <li><button className="hover:text-ink">Huggies</button></li>
                <li><button className="hover:text-ink">Sets</button></li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="uppercase tracking-widest text-sm font-medium mb-4 pb-2 border-b border-border">Material</h3>
              <ul className="space-y-3 text-sm text-ink-light">
                <li>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="accent-brand" />
                    <span className="group-hover:text-ink">18K Gold Plated Brass</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="accent-brand" />
                    <span className="group-hover:text-ink">18K Gold Plated Silver</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="text-sm text-ink-light">{products.length} Products</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-ink-light uppercase tracking-widest text-[10px]">Sort By</span>
              <select className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer uppercase tracking-widest text-[10px] font-medium outline-none">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">
            {products.map((product) => (
              <a href={`/product/${product.id}`} key={product.id} className="block">
                <ProductCard 
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  isNew={product.isNew}
                  imageId1={`shop-prod-${product.id}-img1`}
                  imageId2={`shop-prod-${product.id}-img2`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
