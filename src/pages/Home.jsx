import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import UgcSection from '@/components/home/UgcSection.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import StorySection from '@/components/home/StorySection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'
import strkImgConfig from '@/strk-img-config.json'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcSection />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <section id="journal" className="mx-auto max-w-7xl px-6 py-6 md:px-8">
        <div className="rounded-[2rem] border border-stone-200 bg-white px-6 py-8 text-stone-900 shadow-[0_18px_50px_rgba(28,25,23,0.05)] md:px-8">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Journal</p>
          <h2 className="mt-4 font-display text-4xl text-stone-900 md:text-5xl">
            Rituals, styling notes, and gift inspiration.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-600 md:text-base">
            A future editorial destination for jewelry care, gifting stories, and ways to style each piece with a relaxed sense of polish.
          </p>
        </div>
      </section>
      <NewsletterSection />
    </div>
  )
}

export default Home
