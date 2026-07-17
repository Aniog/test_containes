import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '../context/CartContext'

// Dummy Data matching seed requirements
const productData = {
  id: 'vivid-aura',
  name: 'VIVID AURA JEWELS',
  price: 42,
  description: 'An ethereal ear cuff featuring brilliant crystal accents set in 18k gold vermeil. Designed to hug the ear beautifully without the need for a piercing. Sold as a single cuff.',
  material: '18k Gold Vermeil on Sterling Silver base',
  rating: 4.8,
  reviews: 124,
  images: [
    'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ]
}

export function ProductDetail() {
  const { id } = useParams() // Would use this to fetch real data
  const { addItem } = useCart()
  
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTone, setActiveTone] = useState('Gold')
  const [activeAccordion, setActiveAccordion] = useState('description')

  const handleAddToCart = () => {
    addItem(productData, quantity, activeTone)
  }

  return (
    <main className="w-full pt-32 pb-24 px-6 container mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-xs tracking-widest uppercase text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/products" className="hover:text-foreground transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-foreground">{productData.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-[600px]">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-20 no-scrollbar">
            {productData.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={cn(
                  "flex-shrink-0 w-20 h-24 rounded overflow-hidden transition-opacity",
                  activeImage === i ? "opacity-100 ring-1 ring-foreground/20 ring-offset-2" : "opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 rounded overflow-hidden bg-secondary">
            <img 
              src={productData.images[activeImage]} 
              alt={productData.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="font-serif text-3xl tracking-widest leading-tight mb-4">{productData.name}</h1>
          <p className="text-xl font-medium mb-6">${productData.price}</p>
          
          <div className="flex items-center gap-4 border-b border-border pb-6 mb-8">
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={cn("w-4 h-4", i < Math.floor(productData.rating) ? "fill-current" : "")} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{productData.reviews} Reviews</span>
          </div>

          <p className="text-muted-foreground font-light leading-relaxed mb-8">
            {productData.description}
          </p>

          <div className="space-y-6 mb-10">
            {/* Tone Selector */}
            <div>
              <span className="block text-sm uppercase tracking-widest font-medium mb-3">Tone: {activeTone}</span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setActiveTone('Gold')}
                  className={cn(
                    "px-6 py-2 border rounded-full text-sm font-medium transition-colors",
                    activeTone === 'Gold' ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-foreground"
                  )}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setActiveTone('Silver')}
                  className={cn(
                    "px-6 py-2 border rounded-full text-sm font-medium transition-colors",
                    activeTone === 'Silver' ? "border-foreground text-foreground" : "border-border text-muted-foreground hover:border-foreground"
                  )}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="block text-sm uppercase tracking-widest font-medium mb-3">Quantity</span>
              <div className="inline-flex items-center border border-border rounded">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors mb-12"
          >
            Add to Cart - ${(productData.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              { id: 'description', title: 'Description', content: productData.description },
              { id: 'materials', title: 'Materials & Care', content: 'Crafted from 18k gold vermeil (a thick layer of 18k solid gold on sterling silver). To maintain its shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch.' },
              { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for peace of mind.' }
            ].map(item => (
              <div key={item.id} className="border-b border-border">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                  className="w-full py-4 flex justify-between items-center text-sm font-medium uppercase tracking-widest"
                >
                  {item.title}
                  <Plus className={cn("w-4 h-4 transition-transform duration-300", activeAccordion === item.id && "rotate-45")} />
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    activeAccordion === item.id ? "max-h-40 pb-4" : "max-h-0"
                  )}
                >
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32">
        <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { id: 'majestic-flora', name: 'MAJESTIC FLORA NECTAR', price: 68, image: 'https://images.unsplash.com/photo-1599643478524-fb66f724391e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { id: 'amber-lace', name: 'AMBER LACE EARRINGS', price: 54, image: 'https://images.unsplash.com/photo-1630019852942-f89202cb16bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
          ].map(product => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <Link to={`/products/${product.id}`} className="block relative aspect-[4/5] bg-secondary rounded overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </Link>
              <Link to={`/products/${product.id}`} className="block text-center">
                <h3 className="font-serif text-sm tracking-widest leading-tight mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-muted-foreground text-sm">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
