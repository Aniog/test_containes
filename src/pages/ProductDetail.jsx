import * as React from "react"
import { useParams } from "react-router-dom"
import { Star, Minus, Plus, ChevronDown, Heart } from "lucide-react"
import { Button } from "../components/ui/button"
import { ProductCard } from "../components/ProductCard"
import { products } from "../data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../strk-img-config.json"
import { useCart } from "../lib/CartContext"

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id) || products[0]
  const [quantity, setQuantity] = React.useState(1)
  const [variant, setVariant] = React.useState("Gold")
  const [activeAccordion, setActiveAccordion] = React.useState("description")
  
  const { addItem } = useCart()
  const containerRef = React.useRef(null)
  
  React.useEffect(() => {
    // Schedule ImageHelper after React has committed the DOM
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) return <div>Product not found</div>

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="flex gap-2 text-xs uppercase tracking-widest text-ink-light">
          <a href="/" className="hover:text-ink">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-ink">Shop</a>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/5] bg-surface-dim relative overflow-hidden">
            <img 
              data-strk-img-id={`pdp-${product.id}-main`}
              data-strk-img={`[pdp-name] elegant warm gold jewelry neutral default high resolution detailed`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-surface-dim relative overflow-hidden">
              <img 
                data-strk-img-id={`pdp-${product.id}-secondary`}
                data-strk-img={`[pdp-name] worn by model elegant close up high resolution`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} on model`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] bg-surface-dim relative overflow-hidden">
              <img 
                data-strk-img-id={`pdp-${product.id}-packaging`}
                data-strk-img={`velmora premium jewelry packaging unboxing editorial flat lay`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} packaging`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:pl-8 py-4">
          <h1 id="pdp-name" className="font-serif text-3xl md:text-4xl text-ink mb-4">{product.name}</h1>
          <p className="text-xl text-ink-light mb-6">${product.price.toFixed(2)}</p>
          
          <div className="flex items-center gap-2 mb-8 border-b border-border pb-8">
            <div className="flex text-brand">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm text-ink-light underline cursor-pointer">12 Reviews</span>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm uppercase tracking-widest font-medium">Metal: {variant}</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setVariant("Gold")}
                className={`w-8 h-8 rounded-full bg-[#E5C77B] shadow-sm border-2 ${variant === "Gold" ? "border-ink ring-2 ring-white" : "border-transparent"}`}
                aria-label="Gold"
              ></button>
              <button 
                onClick={() => setVariant("Silver")}
                className={`w-8 h-8 rounded-full bg-[#E1E1E1] shadow-sm border-2 ${variant === "Silver" ? "border-ink ring-2 ring-white" : "border-transparent"}`}
                aria-label="Silver"
              ></button>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex items-center border border-border h-12 w-32 justify-between px-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-ink-light hover:text-ink">
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-ink-light hover:text-ink">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button 
              onClick={() => addItem(product, quantity, variant)}
              className="flex-1 h-12 bg-ink hover:bg-ink-light text-white rounded-none tracking-widest uppercase text-sm"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
            <Button variant="outline" className="h-12 w-12 rounded-none border-border">
              <Heart className="w-5 h-5 text-ink" />
            </Button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border mt-12 divide-y divide-border">
            {/* Description */}
            <div className="py-4">
              <button 
                className="w-full flex justify-between items-center text-left py-2 font-medium tracking-wide"
                onClick={() => setActiveAccordion(activeAccordion === "description" ? "" : "description")}
              >
                <span>Description</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === "description" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === "description" ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <p className="text-ink-light text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-ink-light text-sm leading-relaxed">
                  Every Velmora piece arrives in our signature premium packaging, making it perfectly ready for gifting—whether to a loved one or yourself.
                </p>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="py-4">
              <button 
                className="w-full flex justify-between items-center text-left py-2 font-medium tracking-wide"
                onClick={() => setActiveAccordion(activeAccordion === "materials" ? "" : "materials")}
              >
                <span>Materials & Care</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === "materials" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === "materials" ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <p className="text-ink-light text-sm leading-relaxed mb-4 font-medium text-ink">
                  Material: {product.material}
                </p>
                <p className="text-ink-light text-sm leading-relaxed">
                  To keep your jewelry looking its best, avoid contact with water, perfumes, lotions, and cosmetics. Store in the provided Velmora pouch when not in use. Wipe gently with a soft cloth to restore its shine.
                </p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="py-4">
              <button 
                className="w-full flex justify-between items-center text-left py-2 font-medium tracking-wide"
                onClick={() => setActiveAccordion(activeAccordion === "shipping" ? "" : "shipping")}
              >
                <span>Shipping & Returns</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === "shipping" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === "shipping" ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <ul className="text-ink-light text-sm leading-relaxed space-y-2 list-disc pl-4">
                  <li>Free standard worldwide shipping on all orders over $50.</li>
                  <li>Express shipping available at checkout.</li>
                  <li>30-day return policy for unworn items in original packaging.</li>
                  <li>Earrings cannot be returned for hygiene reasons unless faulty.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-32 border-t border-border pt-24 container mx-auto px-4 md:px-8 max-w-[1600px]">
        <h2 className="font-serif text-3xl text-ink text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => p.id !== id).slice(0, 4).map((p) => (
            <a href={`/product/${p.id}`} key={p.id} className="block">
              <ProductCard 
                id={p.id}
                name={p.name}
                price={p.price}
                isNew={p.isNew}
                imageId1={`pdp-related-${p.id}-img1`}
                imageId2={`pdp-related-${p.id}-img2`}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
