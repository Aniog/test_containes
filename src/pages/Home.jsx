import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'

// Dummy Data matching seed requirements
const bestsellers = [
  {
    id: 'vivid-aura',
    name: 'VIVID AURA JEWELS',
    price: 42,
    image1: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'majestic-flora',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    image1: 'https://images.unsplash.com/photo-1599643478524-fb66f724391e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'golden-sphere',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    image1: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amber-lace',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    image1: 'https://images.unsplash.com/photo-1630019852942-f89202cb16bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'royal-heirloom',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    image1: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export function Home() {
  const { addItem } = useCart()
  const navigate = useNavigate()

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20 pb-16 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Woman wearing fine gold jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mt-16 md:mt-0">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 font-light leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto opacity-90">
            Demi-fine 18k gold jewelry. Designed for the modern romantic, for gifting and self-purchase.
          </p>
          <Link 
            to="/products" 
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs tracking-widest uppercase font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/products" className="group flex items-center text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
            Shop All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map(product => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <Link to={`/products/${product.id}`} className="block relative aspect-[4/5] bg-secondary rounded overflow-hidden mb-4 hover-trigger">
                <img 
                  src={product.image1} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                <img 
                  src={product.image2} 
                  alt={`${product.name} worn`} 
                  className="absolute inset-0 w-full h-full object-cover hover-target"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full py-3 bg-background/95 text-foreground font-medium uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <Link to={`/products/${product.id}`} className="block mt-auto text-center">
                <h3 className="font-serif text-sm tracking-widest leading-tight mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-muted-foreground text-sm">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Row */}
      <section className="py-12 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/products?category=earrings" className="group relative aspect-square overflow-hidden bg-secondary">
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Earrings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background/90 px-8 py-3 font-serif text-xl tracking-widest text-foreground">EARRINGS</span>
            </div>
          </Link>
          <Link to="/products?category=necklaces" className="group relative aspect-square overflow-hidden bg-secondary">
            <img src="https://images.unsplash.com/photo-1599643478524-fb66f724391e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Necklaces" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background/90 px-8 py-3 font-serif text-xl tracking-widest text-foreground">NECKLACES</span>
            </div>
          </Link>
          <Link to="/products?category=huggies" className="group relative aspect-square overflow-hidden bg-secondary">
            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Huggies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background/90 px-8 py-3 font-serif text-xl tracking-widest text-foreground">HUGGIES</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 bg-secondary/30 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded">
              <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Jewelry making process" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-md mx-auto md:mx-0">
              <h2 className="font-serif text-4xl mb-6">Designed for the Modern Romantic</h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed mb-8">
                <p>
                  At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. Our pieces are crafted to be worn, loved, and lived in every single day.
                </p>
                <p>
                  Working with master jewelers, we combine rich 18k gold vermeil with mindful design to create pieces that feel like vintage heirlooms but speak to modern sensibilities.
                </p>
              </div>
              <Link to="/about" className="inline-block border-b border-foreground pb-1 font-medium uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl mb-16">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { quote: "The quality is unmatched for the price point. The Golden Sphere Huggies haven't left my ears since they arrived.", name: "Eleanor C." },
            { quote: "Stunning, editorial packaging and the jewelry itself feels so substantial. My new go-to for gifting.", name: "Sarah M." },
            { quote: "It’s giving quiet luxury. I get compliments on my Vivid Aura ear cuff every time I wear it out.", name: "Jessica T." }
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center max-w-sm mx-auto">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-xl leading-relaxed mb-6 italic text-foreground/90">"{t.quote}"</p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary text-center px-6 border-t border-border">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl mb-4">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-8 font-light">Subscribe to receive 10% off your first order, styling inspiration, and early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors text-center sm:text-left rounded-none"
            />
            <button type="button" className="px-8 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
