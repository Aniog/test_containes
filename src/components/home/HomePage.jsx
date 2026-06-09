import ApplicationSection from './ApplicationSection'
import ContactSection from './ContactSection'
import HeroSection from './HeroSection'
import ProductGrid from './ProductGrid'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import StatsSection from './StatsSection'

const HomePage = () => (
  <div className="min-h-screen bg-slate-950 text-white">
    <SiteHeader />
    <main>
      <HeroSection />
      <StatsSection />
      <ProductGrid />
      <ApplicationSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
)

export default HomePage
