import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { useCart } from '../context/CartContext'

// Dummy Data
const allProducts = [
  {
    id: 'vivid-aura',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'Earrings',
    image1: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'majestic-flora',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'Necklaces',
    image1: 'https://images.unsplash.com/photo-1599643478524-fb66f724391e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'golden-sphere',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'Huggies',
    image1: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amber-lace',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'Earrings',
    image1: 'https://images.unsplash.com/photo-1630019852942-f89202cb16bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'royal-heirloom',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'Sets',
    image1: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'celestial-drop',
    name: 'CELESTIAL DROP EARRINGS',
    price: 48,
    category: 'Earrings',
    image1: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export function Collection() {
  const { addItem } = useCart()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory)

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <main className="w-full pt-32 pb-24 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All Jewelry</h1>
        <p className="text-muted-foreground font-light max-w-2xl mx-auto">
          Explore our complete collection of demi-fine 18k gold jewelry, designed to be treasured for a lifetime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="mb-10">
              <h3 className="font-medium uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Category</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`hover:text-foreground transition-colors ${activeCategory === cat ? 'text-foreground font-medium' : ''}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Material</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><button className="hover:text-foreground transition-colors">18k Gold Vermeil</button></li>
                <li><button className="hover:text-foreground transition-colors">Sterling Silver</button></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-y border-border py-4 mb-8">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <div className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium">
            Sort <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8 border-b border-border pb-4 text-sm text-muted-foreground">
            <span>Showing {filteredProducts.length} products</span>
            <button className="flex items-center gap-2 hover:text-foreground transition-colors uppercase tracking-widest font-medium">
              Sort by <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map(product => (
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

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <button className="px-8 py-3 border border-foreground font-medium uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
