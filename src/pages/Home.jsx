import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'

export default function Home() {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 5)

  return (
    <main>
      <Hero />
      <TrustBar />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">Bestsellers</h2>
            <p className="mt-2 text-sm text-brand-muted">The pieces our community wears most.</p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-ink hover:text-brand-gold">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative overflow-hidden rounded-md bg-brand-surface"
            >
              <div className="aspect-[3x4] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs uppercase tracking-widest text-brand-ink">{product.name}</p>
                <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand-ink/90 px-4 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs uppercase tracking-widest text-white">Add to Cart</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link to="/shop">
            <Button variant="outline" className="mt-2">View all</Button>
          </Link>
        </div>
      </section>

      <UgcRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Velmora jewelry hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-xl animate-slide-up">
          <h1 className="font-serif text-4xl text-white md:text-6xl">Crafted to be Treasured</h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Demi-fine jewelry for the modern collector. Warm, editorial, and made to last.
          </p>
          <Link to="/shop">
            <Button className="mt-8 bg-white text-brand-ink hover:bg-white/90" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ]

  return (
    <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-white/80">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-brand-goldLight" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function UgcRow() {
  const reels = [
    { id: 1, title: 'Morning edit', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
    { id: 2, title: 'Gift edit', image: 'https://images.unsplash.com/photo-1599643478518-a86e2dc477b4?w=400&q=80' },
    { id: 3, title: 'Date night', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80' },
    { id: 4, title: 'Office edit', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80' },
    { id: 5, title: 'Weekend edit', image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=400&q=80' },
  ]

  return (
    <section className="border-y border-brand-line bg-brand-warm">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-brand-ink">As seen on</h2>
        <p className="mt-1 text-sm text-brand-muted">Real moments, real style.</p>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-72 w-44 flex-shrink-0 overflow-hidden rounded-md"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-3 left-3 font-serif text-sm text-white">{reel.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryTiles() {
  const categories = [
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a86e2dc477b4?w=800&q=80' },
    { name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">Shop by category</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/shop?category=${cat.name}`}
            className="group relative h-72 overflow-hidden rounded-md"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <span className="absolute inset-0 flex items-center justify-center font-serif text-xl text-white">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="aspect-[4x5] overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">Our Story</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Velmora was born from a belief that fine jewelry should feel effortless. We design
            demi-fine pieces in warm 18K gold plating, using responsibly sourced materials and
            thoughtful silhouettes meant to be worn daily.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-ink hover:text-brand-gold">
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: 'Sophia R.', text: 'The Golden Sphere Huggies are my new everyday staple. So light and beautiful.' },
    { name: 'Emma L.', text: 'Packaging felt so luxurious. The Royal Heirloom Set was a perfect gift.' },
    { name: 'Olivia M.', text: 'Finally jewelry that feels premium without the markup. Obsessed.' },
  ]

  return (
    <section className="bg-brand-warm">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">Kind words</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-md border border-brand-line bg-brand-surface p-6">
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-brand-muted">{review.text}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-ink">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-md bg-brand-ink px-8 py-12 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">Join for 10% off your first order</h2>
          <p className="mt-3 text-sm text-white/70">
            Be the first to know about new releases, stories, and exclusive offers.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Email address"
              className="h-12 flex-1 rounded-md border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-goldLight"
            />
            <Button className="h-12 bg-brand-goldLight text-brand-ink hover:bg-brand-goldLight/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}