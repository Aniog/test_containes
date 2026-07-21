import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { products, categories, testimonials, ugcItems } from '@/data/products'

const Home = () => {
  const { addItem, setDrawer } = useCart()
  const bestsellers = products.filter(p => p.badge === 'Bestseller' || p.rating >= 4.8).slice(0, 5)

  return (
    <div>
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#f5f5f5]">
        <div className="absolute inset-0">
          <img
            alt="Velmora hero"
            className="h-full w-full object-cover"
            src="https://placehold.co/1600x900/f5f5f5/1a1a1a?text=Velmora+Jewelry"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90">
              Demi-fine jewelry designed for quiet luxury. Warm gold, timeless silhouettes, and everyday elegance.
            </p>
            <div className="mt-8">
              <Link to="/shop">
                <Button variant="accent" size="lg" className="rounded-full">
                  Shop the Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#f0f0f0] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wide text-[#1a1a1a]/80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-[#c9a96e]">·</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-[#c9a96e]">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-[#c9a96e]">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1a1a1a]">Bestsellers</h2>
            <p className="mt-2 text-sm text-[#1a1a1a]/70">Our most-loved pieces, chosen by you.</p>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center text-sm text-[#c9a96e] hover:underline">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="group relative rounded-xl border border-[#f0f0f0] bg-white p-3 transition hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f5f5f5]">
                <img
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={`https://placehold.co/600x600/f5f5f5/1a1a1a?text=${encodeURIComponent(product.name)}`}
                />
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#c9a96e] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/40 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="accent"
                    size="sm"
                    className="w-full rounded-full"
                    onClick={() => {
                      addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })
                      setDrawer(true)
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-[#1a1a1a]/60 uppercase tracking-wider">{product.category}</p>
                <h3 className="mt-1 text-sm font-medium text-[#1a1a1a]">{product.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-[#c9a96e]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                  <span className="text-xs text-[#1a1a1a]/60">({product.reviewCount})</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#1a1a1a]">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link to="/shop">
            <Button variant="accentOutline" className="w-full rounded-full">View all</Button>
          </Link>
        </div>
      </section>

      <section className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1a1a1a] text-center">As Seen On You</h2>
          <p className="mt-2 text-sm text-[#1a1a1a]/70 text-center">Tag @velmora to be featured.</p>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcItems.map(item => (
              <div key={item.id} className="relative h-[420px] w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-[#e4e8ef]">
                <img
                  alt={item.title}
                  className="h-full w-full object-cover"
                  src={`https://placehold.co/520x840/f5f5f5/1a1a1a?text=${encodeURIComponent(item.title)}`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="font-serif text-white text-sm tracking-wide">{item.title}</p>
                  <p className="text-xs text-white/80">{item.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1a1a1a] text-center">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map(cat => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative h-64 overflow-hidden rounded-2xl">
              <img
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={`https://placehold.co/800x600/f5f5f5/1a1a1a?text=${encodeURIComponent(cat.name)}`}
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-xl tracking-widest">{cat.name}</h3>
                <p className="mt-1 text-xs text-white/80">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#f0f0f0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5f5f5]">
            <img
              alt="Velmora brand story"
              className="h-full w-full object-cover"
              src="https://placehold.co/800x1000/f5f5f5/1a1a1a?text=Our+Story"
            />
          </div>
          <div className="md:pl-8">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1a1a1a]">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/80">
              Velmora was born from a simple belief: fine jewelry should feel attainable, personal, and timeless. We design each piece in California, using 18K gold-plated materials and hypoallergenic finishes so you can wear them every day.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/80">
              From our family-owned workshop to your jewelry box, we prioritize quality, sustainability, and quiet luxury in every detail.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center text-sm text-[#c9a96e] hover:underline">
              Read our story <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-[#1a1a1a] text-center">What Our Customers Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="rounded-xl border border-[#f0f0f0] bg-white p-6">
              <div className="flex items-center gap-1 text-[#c9a96e]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/80">“{t.text}”</p>
              <p className="mt-3 text-xs font-medium text-[#1a1a1a]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-white">Join for 10% off your first order</h2>
          <p className="mt-2 text-sm text-white/70">Be the first to know about new drops, stories, and offers.</p>
          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!') }}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="h-11 w-full max-w-sm rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
            />
            <Button variant="accent" className="w-full sm:w-auto rounded-full">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
