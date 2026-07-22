import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'

import ProductCard from '@/components/common/ProductCard'
import SectionHeading from '@/components/common/SectionHeading'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcRow from '@/components/home/UgcRow'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const noop = () => {}

const Home = () => {
  const containerRef = useRef(null)
  const bestsellers = products.slice(0, 5)

  useEffect(() => {
    let cleanup = noop

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || noop
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-5 py-16 sm:px-8 md:gap-28 md:py-20 lg:px-10 lg:py-24">
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces women return for first"
            description="Warm gold finishes, refined proportions, and a polished feel that elevates everyday dressing without feeling overdone."
            action={
              <Link
                to="/shop"
                className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-bronze"
              >
                View All Pieces
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 2}
              />
            ))}
          </div>
        </section>

        <UgcRow />
        <CategoryTiles />
        <BrandStory />
        <TestimonialsSection />
        <JournalSection />
        <NewsletterSection />
      </div>
    </main>
  )
}

export default Home
