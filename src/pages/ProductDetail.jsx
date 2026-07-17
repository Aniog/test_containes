import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProducts } from '@/api/products'
import { useCart } from '@/api/cart'
import { Star, ChevronDown, Minus, Plus, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const { addItem } = useCart()

  useEffect(() => {
    fetchProducts().then(({ data }) => {
      const found = data.find(p => String(p.id) === id)
      setProduct(found)
      setRelated(data.filter(p => String(p.id) !== id).slice(0, 4))
    })
    window.scrollTo(0, 0)
  }, [id])

  if (!product) return <div className="pt-48 text-center min-h-screen">Loading...</div>

  const tabs = [
    { id: 'description', label: 'Description', content: product.data.description },
    { id: 'materials', label: 'Materials & Care', content: product.data.material || "18K Gold Plated over high-quality recycled brass. Avoid contact with perfumes, lotions, and water to maintain the luster of your gold demi-fine jewelry." },
    { id: 'shipping', label: 'Shipping & Returns', content: "Complimentary worldwide shipping on all orders over $100. Returns accepted within 30 days of delivery for a full refund or exchange." }
  ]

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-[3/4] bg-muted relative">
            <img
              data-strk-img-id={`pdp-main-${id}`}
              data-strk-img={`[pdp-title] jewelry gold close up editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              className="w-full h-full object-cover"
              alt={product.data.name}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(idx => (
              <div key={idx} className="aspect-square bg-muted relative overflow-hidden group">
                <img
                  data-strk-img-id={`pdp-thumb-${id}-${idx}`}
                  data-strk-img={`[pdp-title] jewelry detail angle ${idx}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={`${product.data.name} detail ${idx}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <nav className="mb-8 flex gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.data.category}</span>
          </nav>

          <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-[0.2em]">{product.data.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-serif text-foreground/90">${product.data.price}</span>
            <div className="flex items-center gap-1 border-l border-border pl-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
              <span className="text-[9px] uppercase tracking-widest opacity-60 ml-1">12 Reviews</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-12 font-light max-w-lg">
            {product.data.description}
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 block">Finish</span>
              <div className="flex gap-4">
                <button className="border border-foreground px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-medium bg-foreground text-background">Gold</button>
                <button className="border border-border px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-medium hover:border-foreground transition-colors">Silver</button>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 block">Quantity</span>
              <div className="flex items-center border border-border w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-muted"><Minus className="w-4 h-4" /></button>
                <span className="px-6 text-sm font-light min-w-[3rem] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => addItem(product, quantity)}
            className="w-full bg-foreground text-background py-5 uppercase tracking-[0.3em] text-[11px] font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-3 mb-16"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>

          {/* Accordions */}
          <div className="border-t border-border">
            {tabs.map((tab) => (
              <div key={tab.id} className="border-b border-border">
                <button 
                  onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                  className="w-full py-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-semibold text-left group"
                >
                  {tab.label}
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeTab === tab.id ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-sm text-muted-foreground leading-relaxed font-light">
                        {tab.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <section>
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-serif">You May Also Like</h2>
          <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-8 opacity-60 hover:opacity-100">View Shop</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {related.map((prod) => (
            <div key={prod.id} className="group">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
                <Link to={`/product/${prod.id}`}>
                  <img
                    data-strk-img-id={`rel-${prod.id}`}
                    data-strk-img={`[rel-${prod.id}-title] jewelry gold`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={prod.data.name}
                  />
                </Link>
              </div>
              <Link to={`/product/${prod.id}`}>
                <h3 id={`rel-${prod.id}-title`} className="text-[10px] uppercase tracking-widest font-medium mb-1 truncate">{prod.data.name}</h3>
                <p className="font-serif text-lg opacity-80">${prod.data.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
