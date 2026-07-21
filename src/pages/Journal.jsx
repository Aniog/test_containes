import { Link } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { Newsletter } from '@/components/layout/Newsletter'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { useImageLoader } from '@/hooks/useImageLoader'

const posts = [
  {
    id: 1,
    title: 'How to Build a Capsule Jewelry Collection',
    excerpt: 'The five timeless pieces that make every outfit feel finished.',
    category: 'Style Guide',
    query: 'minimal gold jewelry capsule collection flatlay editorial',
  },
  {
    id: 2,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'Why a small, meaningful piece often says more than the grandest gesture.',
    category: 'Gifting',
    query: 'gold jewelry gift box ribbon elegant flatlay',
  },
  {
    id: 3,
    title: 'Caring for Demi-Fine Jewelry',
    excerpt: 'Simple habits to keep your gold-plated pieces shining for years.',
    category: 'Care',
    query: 'gold jewelry care pouch polishing cloth elegant',
  },
]

export default function Journal() {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef} className="min-h-screen bg-cream">
      <Navbar />
      <CartDrawer />

      <main className="pt-16">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">The Journal</p>
          <h1 className="mt-4 font-serif text-4xl tracking-wide text-espresso sm:text-5xl md:text-6xl">
            Stories & Style Notes
          </h1>
        </div>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <Link to="#" className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                  <ResponsiveImage
                    imgId={`journal-${post.id}`}
                    query={post.query}
                    ratio="4x3"
                    width={600}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                  />
                </Link>
                <div className="mt-5 flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold">{post.category}</span>
                  <Link to="#">
                    <h2 className="mt-2 font-serif text-xl tracking-wide text-espresso transition-colors group-hover:text-gold sm:text-2xl">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-taupe">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Newsletter compact />
      </main>
      <Footer />
    </div>
  )
}
