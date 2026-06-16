import SiteHeader from '@/components/home/SiteHeader'
import HomeHero from '@/components/home/HomeHero'
import ProductRange from '@/components/home/ProductRange'
import AdvantageSection from '@/components/home/AdvantageSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ContactBanner from '@/components/home/ContactBanner'
import SiteFooter from '@/components/home/SiteFooter'

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-ink">
      <SiteHeader />
      <main>
        <HomeHero />
        <ProductRange />
        <AdvantageSection />
        <IndustriesSection />
        <ContactBanner />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Home
