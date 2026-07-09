import { useMemo, useRef } from 'react'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import ProductGrid from '@/components/product/ProductGrid'
import HeroSection from '@/components/home/HeroSection'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import { journalPosts, products } from '@/data/storefront'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function HomePage() {
  const containerRef = useRef(null)
  const bestsellers = useMemo(() => products.slice(0, 5), [])

  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-velmora-ivory">
      <HeroSection />
      <AnnouncementBar />

      <main className="velmora-shell space-y-16 py-12 md:space-y-24 md:py-16">
        <ProductGrid
          products={bestsellers}
          priority
          subtitle="Bestsellers"
          title="An elevated jewelry wardrobe, thoughtfully priced."
        />
        <UgcStrip />
        <CategoryTiles />
        <StorySection />
        <TestimonialsSection />

        <section id="journal" className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="velmora-kicker">Journal</p>
              <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">A softer take on styling and care.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-velmora-cocoa/75">
              Notes on gifting, storage, and styling that support a long-lasting glow and a more intentional wardrobe.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {journalPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-[1.8rem] border border-velmora-sand/60 bg-velmora-cream p-6 shadow-velmora"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-velmora-cocoa/55">Editorial Note</p>
                <h3 className="font-display text-4xl text-velmora-ink">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-velmora-cocoa/75">{post.excerpt}</p>
                <button
                  type="button"
                  className="mt-6 rounded-full border border-velmora-sand px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink transition hover:border-velmora-bronze hover:bg-velmora-bronze/10"
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        <NewsletterSection />
      </main>
    </div>
  )
}
