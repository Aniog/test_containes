import { useMemo } from 'react'
import HomeBestsellers from '@/components/home/HomeBestsellers'
import HomeCategoryTiles from '@/components/home/HomeCategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import HomeJournal from '@/components/home/HomeJournal'
import HomeNewsletter from '@/components/home/HomeNewsletter'
import HomeStorySection from '@/components/home/HomeStorySection'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeTrustBar from '@/components/home/HomeTrustBar'
import HomeUGCRow from '@/components/home/HomeUGCRow'
import { useCart } from '@/context/CartContext'
import {
  categoryTiles,
  journalNotes,
  products,
  testimonials,
  toneOptions,
  trustPoints,
  ugcMoments,
} from '@/data/store'
import { useStrkImages } from '@/hooks/useStrkImages'

const Home = () => {
  const { addItem, openCart } = useCart()
  const containerRef = useStrkImages([])

  const featuredProducts = useMemo(() => products.slice(0, 5), [])

  const handleAddToCart = (product) => {
    addItem(product, { quantity: 1, variant: toneOptions[0] })
    openCart()
  }

  return (
    <div ref={containerRef} className="bg-velmora-pearl">
      <HomeHero />
      <HomeTrustBar points={trustPoints} />
      <HomeBestsellers products={featuredProducts} onAddToCart={handleAddToCart} />
      <HomeUGCRow moments={ugcMoments} />
      <HomeCategoryTiles categories={categoryTiles} />
      <HomeStorySection />
      <HomeTestimonials testimonials={testimonials} />
      <HomeJournal notes={journalNotes} />
      <HomeNewsletter />
    </div>
  )
}

export default Home
