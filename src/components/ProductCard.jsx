import * as React from "react"
import { Star } from "lucide-react"
import { useCart } from "../lib/CartContext"

export function ProductCard({ id, name, price, image1, image2, imageId1, imageId2, isNew }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id, name, price }, 1, "Gold")
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-surface-dim overflow-hidden mb-4">
        {isNew && (
          <div className="absolute top-3 left-3 bg-brand text-white text-[10px] uppercase tracking-wider px-2 py-1 z-20">
            Waitlist
          </div>
        )}
        <div className="absolute inset-0 w-full h-full">
          <img 
            data-strk-img-id={imageId1}
            data-strk-img={`[product-${id}-name] elegant warm gold jewelry neutral default`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
        </div>
        <div className="absolute inset-0 w-full h-full opactiy-0 group-hover:opacity-100 transition-opacity duration-500 z-10 hidden group-hover:block">
          <img 
            data-strk-img-id={imageId2}
            data-strk-img={`[product-${id}-name] worn by model elegant close up default`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${name} on model`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-white text-ink text-sm font-medium py-3 shadow-md hover:bg-brand hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 id={`product-${id}-name`} className="font-serif uppercase tracking-widest text-sm text-ink">{name}</h3>
        <p className="text-sm text-ink-light">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
