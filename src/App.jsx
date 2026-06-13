import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/products/ProductsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-text font-body">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
