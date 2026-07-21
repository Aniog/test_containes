import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { Newsletter } from '@/components/layout/Newsletter'
import { TrustBar } from '@/components/layout/TrustBar'
import { HeroSection } from '@/components/home/HeroSection'
import { BestsellersSection } from '@/components/home/BestsellersSection'
import { UgcReelSection } from '@/components/home/UgcReelSection'
import { CategoryTilesSection } from '@/components/home/CategoryTilesSection'
import { BrandStorySection } from '@/components/home/BrandStorySection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar transparent />
      <CartDrawer />
      <main>
        <HeroSection />
        <TrustBar />
        <BestsellersSection />
        <UgcReelSection />
        <CategoryTilesSection />
        <BrandStorySection />
        <TestimonialsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
