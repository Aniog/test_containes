import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const seedProducts = [
  { id: '1', name: 'VIVID AURA JEWELS', slug: 'vivid-aura-jewels', price: 42, category: 'earrings', imageId: 'pd-aura-cuff-1', descId: 'pd-aura-desc', description: 'A delicate ear cuff encrusted with shimmering crystals, designed to add a bright spark to your ear stack without the need for a piercing.' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', slug: 'majestic-flora-nectar', price: 68, category: 'necklaces', imageId: 'pd-flora-neck-2', descId: 'pd-flora-desc', description: 'A vintage-inspired floral necklace featuring brilliant multi-colored crystals on a classic 18k gold vermeil chain. Perfect for layering.' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', slug: 'golden-sphere-huggies', price: 38, category: 'huggies', imageId: 'pd-sphere-hug-3', descId: 'pd-sphere-desc', description: 'Chunky, lightweight gold dome huggies that make a bold everyday statement. Secured with a comfortable click closure.' },
  { id: '4', name: 'AMBER LACE EARRINGS', slug: 'amber-lace-earrings', price: 54, category: 'earrings', imageId: 'pd-amber-ear-4', descId: 'pd-amber-desc', description: 'Intricate gold filigree drop earrings that catch the light beautifully. Lightweight enough to wear from day to night.' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', slug: 'royal-heirloom-set', price: 95, category: 'necklaces', imageId: 'pd-royal-set-5', descId: 'pd-royal-desc', description: 'An elegant matching set featuring our best-selling pendant necklace and coordinated studs. Comes perfectly packaged for gifting.' }
]

export default function Product() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const { addItem, openCart } = useCartStore()

  const product = seedProducts.find(p => p.slug === slug) || seedProducts[0]

  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('gold')
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    } catch (e) {
      console.log('Image setup skipped', e)
    }
  }, [slug])

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      variant,
      quantity,
      image: null
    })
    openCart()
  }

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name)
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="flex font-light text-sm text-secondary-foreground mb-8 gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/collections/${product.category}`} className="hover:text-primary transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-32">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 shrink-0 style-hide-scrollbar">
              {[1, 2, 3].map(i => (
                <button key={i} className={`aspect-[3/4] w-20 bg-secondary shrink-0 overflow-hidden ${i === 1 ? 'border border-primary ring-1 ring-primary' : ''}`}>
                  <img 
                    data-strk-img-id={`${product.imageId}-thumb-${i}`}
                    data-strk-img={`[pd-desc] [pd-title] thumbnail ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            <div className="flex-1 aspect-[3/4] bg-secondary relative">
              <img 
                data-strk-img-id={`${product.imageId}-main`}
                data-strk-img={`[pd-desc] [pd-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col md:py-8">
            <h1 id="pd-title" className="font-serif text-3xl md:text-4xl uppercase tracking-widest leading-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill={j < 5 ? "currentColor" : "none"} className={j < 5 ? "" : "text-border"} />)}
                <span className="text-sm text-secondary-foreground ml-2 font-light">(12)</span>
              </div>
            </div>

            <p id="pd-desc" className="text-secondary-foreground font-light mb-8 max-w-md leading-relaxed text-sm">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="font-medium">Metal Finish</span>
                <span className="text-secondary-foreground capitalize">{variant}</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-12 h-8 rounded-full bg-[#D4AF37] border-2 transition-all ${variant === 'gold' ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-transparent'}`}
                  title="18k Gold Plated"
                  aria-label="Select Gold"
                />
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-12 h-8 rounded-full bg-[#E8E8E8] border-2 transition-all ${variant === 'silver' ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-transparent'}`}
                  title="Sterling Silver"
                  aria-label="Select Silver"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-border">
                <button 
                  className="px-4 py-3 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button 
                  className="px-4 py-3 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </button>
            </div>

            <p className="text-xs text-secondary-foreground flex items-center gap-2 mb-12">
              <Star size={14} className="text-primary" /> Free US Shipping over $100
            </p>

            {/* Accordions */}
            <div className="border-t">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: 'Crafted in 18k gold vermeil—a thick layer of solid 18k gold over sterling silver. To maintain your pieces, gently wipe with a soft cloth and avoid contact with water, perfumes, and lotions.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'We offer free worldwide shipping on orders over $150. If you are not completely satisfied, we accept returns within 30 days of purchase for unworn pieces.' }
              ].map(section => (
                <div key={section.id} className="border-b">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full py-5 flex justify-between items-center text-left hover:text-primary transition-colors"
                  >
                    <span className="font-serif text-lg">{section.title}</span>
                    {openAccordion === section.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === section.id ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                    <p className="text-sm font-light text-secondary-foreground leading-relaxed max-w-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section>
          <h2 id="related-title" className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {seedProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => (
              <div key={p.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                  <img 
                    data-strk-img-id={`${p.imageId}-related`}
                    data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <p id={`related-title-${p.id}`} className="font-serif text-sm tracking-wider uppercase mb-1">
                    <Link to={`/products/${p.slug}`} className="hover:text-primary transition-colors">
                      {p.name}
                    </Link>
                  </p>
                  <p id={`related-desc-${p.id}`} className="hidden">{p.category}</p>
                  <p className="text-secondary-foreground text-sm font-light">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Utility style snippet for hiding scrollbar */}
      <style>{`
        .style-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .style-hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
