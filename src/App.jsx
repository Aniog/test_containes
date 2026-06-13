import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProductsSection from './components/ProductsSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F5F5F5]">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
