import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { ImageHelper } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function HomeFeatured() {
  const [items, setItems] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    async function load() {
      const { data: response } = await client
        .from('PizzaMenuItem')
        .select('*')
        .eq('is_featured', true)
        .limit(3)
      setItems(response?.data?.list ?? [])
    }
    load()
  }, [])

  useEffect(() => {
    if (items.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [items])

  if (items.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Our Signature Pizzas</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Handpicked favourites from our kitchen — each one a masterpiece.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(item => {
            const f = item.data
            return (
              <div key={item.id} className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  <span id={`feat-img-name-${item.id}`} className="sr-only">{f.name}</span>
                  <img
                    alt={f.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`feat-pizza-${item.id}`}
                    data-strk-img={`[feat-img-desc-${item.id}] [feat-img-name-${item.id}] pizza`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <Badge className="absolute top-3 left-3" variant="secondary">{f.category}</Badge>
                </div>
                <div className="p-5">
                  <h3 id={`feat-card-name-${item.id}`} className="font-bold text-stone-900 text-xl mb-1">{f.name}</h3>
                  <p id={`feat-img-desc-${item.id}`} className="text-stone-500 text-sm mb-4 line-clamp-2">{f.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-500">${f.price?.toFixed(2)}</span>
                    <Link to="/store">
                      <Button size="sm">Order Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/store">
            <Button variant="outline" size="lg">View Full Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
