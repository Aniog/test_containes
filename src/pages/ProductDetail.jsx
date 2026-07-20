import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { seedProducts } from '@/components/home/Bestsellers'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-base/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between group"
      >
        <span className="text-xs uppercase tracking-widest font-medium group-hover:text-accent transition-colors">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 opacity-40" /> : <ChevronDown className="w-4 h-4 opacity-40" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-xs leading-loose text-base/60 uppercase tracking-wider">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = seedProducts.find(p => p.id === parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const [selectedFinish, setSelectedFinish] = useState('gold')
  const addToCart = useCartStore(state => state.addToCart)
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
    window.scrollTo(0, 0)
  }, [id])

  if (!product) return <div>Product Not Found</div>

  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[3/4] overflow-hidden bg-background">
              <img 
                data-strk-img-id={`detail-main-${product.id}`}
                data-strk-img={`[product-detail-title] [product-detail-cat] gold jewelry portrait luxury`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-[3/4] overflow-hidden bg-background opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <img 
                       data-strk-img-id={`detail-thumb-${product.id}-${i}`}
                       data-strk-img={`[product-detail-title] jewelry alternate view ${i}`}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="300"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                       className="w-full h-full object-cover"
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-10 lg:sticky lg:top-32 h-fit">
            <div className="space-y-4 text-center lg:text-left">
              <p id="product-detail-cat" className="text-[10px] uppercase tracking-[0.4em] opacity-40">{product.category}</p>
              <h1 id="product-detail-title" className="text-4xl md:text-5xl font-serif tracking-tight uppercase">{product.name}</h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                 <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                 </div>
                 <span className="text-[10px] uppercase tracking-widest opacity-40">(24 Reviews)</span>
              </div>
              <p className="text-xl font-serif italic">${product.price}</p>
            </div>

            <p className="text-sm text-base/70 leading-relaxed uppercase tracking-widest-extra text-center lg:text-left">
              {product.description} A timeless addition to any jewelry collection, designed for everyday luxury and resilience.
            </p>

            <div className="space-y-6">
               <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60 block text-center lg:text-left">Select Finish</span>
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                     {['gold', 'silver'].map(finish => (
                       <button
                         key={finish}
                         onClick={() => setSelectedFinish(finish)}
                         className={cn(
                           "flex-1 max-w-[120px] py-3 text-[10px] uppercase tracking-widest font-medium transition-all duration-300",
                           selectedFinish === finish ? "bg-base text-white" : "border border-base/10 hover:border-base"
                         )}
                       >
                         {finish} Tone
                       </button>
                     ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest font-semibold opacity-60 block text-center lg:text-left">Quantity</span>
                  <div className="flex items-center justify-center lg:justify-start space-x-6">
                     <div className="flex items-center border border-base/10 px-4 py-3 space-x-8">
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:text-accent"><Minus className="w-4 h-4" /></button>
                        <span className="text-xs font-sans font-medium w-4 text-center">{quantity}</span>
                        <button onClick={() => setQuantity(q => q + 1)} className="hover:text-accent"><Plus className="w-4 h-4" /></button>
                     </div>
                  </div>
               </div>

               <button 
                  onClick={() => addToCart(product, quantity)}
                  className="w-full bg-base text-white py-6 text-xs uppercase tracking-[0.3em] font-medium hover:bg-zinc-800 transition-all duration-500 transform active:scale-[0.98]"
               >
                  Add to Cart
               </button>
            </div>

            <div className="pt-8">
               <Accordion title="Description" content="Handcrafted with a thick layer of 18K gold over high-quality sterling silver. Each piece is designed to withstand the test of time, offering the look and feel of solid gold at an accessible price point." />
               <Accordion title="Materials & Care" content="Velmora uses 18K Gold Vermeil and premium plating. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place when not wearing. Use a soft lint-free cloth to maintain shine." />
               <Accordion title="Shipping & Returns" content="Complimentary global express shipping on all orders. We offer a 30-day return policy for unused jewelry in original packaging. 12-month quality guarantee on all plating." />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32 pt-24 border-t border-base/5">
           <h2 className="text-3xl font-serif text-center mb-16">You May Also Like</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-background">
                     <img 
                        data-strk-img-id={`related-${p.id}`}
                        data-strk-img={`[related-title-${p.id}] gold jewelry portrait`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                     />
                  </div>
                  <div className="text-center space-y-1">
                     <h3 id={`related-title-${p.id}`} className="text-[10px] uppercase tracking-widest font-serif font-semibold">{p.name}</h3>
                     <p className="text-[10px] text-base/40 uppercase tracking-widest">${p.price}</p>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
