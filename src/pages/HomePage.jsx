import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { categoryTiles, journalEntries, products, testimonials, ugcMoments } from '../data/products'
import HomeHero from '../components/home/HomeHero'
import TrustBar from '../components/home/TrustBar'
import UgcStrip from '../components/home/UgcStrip'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import Testimonials from '../components/home/Testimonials'
import NewsletterBlock from '../components/home/NewsletterBlock'
import JournalPreview from '../components/home/JournalPreview'
import ProductCard from '../components/products/ProductCard'
import SectionHeading from '../components/ui/SectionHeading'

const HomePage = ({ onAddToCart }) => {
  const containerRef = useRef(null)
  const bestsellers = products.slice(0, 5)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory text-noir">
      <HomeHero />
      <TrustBar />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces our community wears on repeat"
            description="Five elevated essentials designed to feel giftable, wearable, and quietly special."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <UgcStrip items={ugcMoments} />
      <CategoryTiles categories={categoryTiles} />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <JournalPreview entries={journalEntries} />
      <NewsletterBlock />
    </div>
  )
}

export default HomePage
