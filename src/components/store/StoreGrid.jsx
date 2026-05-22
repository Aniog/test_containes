import { useEffect, useState, useRef } from 'react'
import { DataClient } from '@strikingly/sdk'
import { ImageHelper } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Plus, Minus, X, ChevronDown } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const CATEGORIES = ['All', 'Classic', 'Specialty', 'Vegetarian', 'Vegan', 'Sides', 'Drinks', 'Desserts']

const categoryColors = {
  Classic: 'default',
  Specialty: 'secondary',
  Vegetarian: 'success',
  Vegan: 'success',
  Sides: 'outline',
  Drinks: 'outline',
  Desserts: 'secondary',
}

export default function StoreGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const { data: response } = await client
        .from('PizzaMenuItem')
        .select('*')
        .eq('is_available', true)
        .order('category', { ascending: true })
      setItems(response?.data?.list ?? [])
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    if (items.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [items, activeCategory])

  const filtered = activeCategory === 'All'
    ? items
    : items.filter(i => i.data.category === activeCategory)

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id)
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const updateQty = (id, delta) => {
    setCart(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, qty: c.qty + delta } : c)
      return updated.filter(c => c.qty > 0)
    })
  }

  const cartTotal = cart.reduce((sum, c) => sum + c.data.price * c.qty, 0)
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">Our Menu</h1>
        <p className="text-stone-500">Fresh, handcrafted, and ready to order.</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === cat
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-stone-700 border-stone-300 hover:border-red-400 hover:text-red-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cart button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setCartOpen(o => !o)}
          className="relative flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${cartOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Cart panel */}
      {cartOpen && (
        <div className="mb-8 bg-white rounded-2xl border border-stone-200 shadow-md p-6">
          <h2 className="font-bold text-stone-900 text-lg mb-4">Your Order</h2>
          {cart.length === 0 ? (
            <p className="text-stone-400 text-sm">Your cart is empty. Add some pizzas!</p>
          ) : (
            <>
              <ul className="divide-y divide-stone-100 mb-4">
                {cart.map(c => (
                  <li key={c.id} className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-stone-900 text-sm">{c.data.name}</p>
                      <p className="text-stone-400 text-xs">${c.data.price?.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(c.id, -1)} className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100">
                        <Minus className="w-3 h-3 text-stone-600" />
                      </button>
                      <span className="w-6 text-center font-semibold text-stone-900 text-sm">{c.qty}</span>
                      <button onClick={() => updateQty(c.id, 1)} className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100">
                        <Plus className="w-3 h-3 text-stone-600" />
                      </button>
                      <button onClick={() => updateQty(c.id, -c.qty)} className="ml-2 text-stone-400 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                <span className="font-bold text-stone-900">Total</span>
                <span className="text-2xl font-bold text-amber-500">${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4">Checkout</Button>
            </>
          )}
        </div>
      )}

      {/* Items grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-stone-100 animate-pulse h-72" />
          ))}
        </div>
      ) : (
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(item => {
            const f = item.data
            const inCart = cart.find(c => c.id === item.id)
            return (
              <div key={item.id} className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  <img
                    alt={f.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`store-pizza-${item.id}`}
                    data-strk-img={`[store-desc-${item.id}] [store-name-${item.id}] pizza food`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <Badge className="absolute top-2 left-2" variant={categoryColors[f.category] || 'default'}>
                    {f.category}
                  </Badge>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 id={`store-name-${item.id}`} className="font-bold text-stone-900 text-base mb-1">{f.name}</h3>
                  <p id={`store-desc-${item.id}`} className="text-stone-500 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">{f.description}</p>
                  {f.allergens?.length > 0 && (
                    <p className="text-xs text-stone-400 mb-3">Contains: {f.allergens.join(', ')}</p>
                  )}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-amber-500">${f.price?.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      {inCart ? `Add (${inCart.qty})` : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center py-16 text-stone-400">
          <p className="text-lg">No items in this category right now.</p>
        </div>
      )}
    </div>
  )
}
