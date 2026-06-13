import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/home/HeroSection'
import ProductsSection from './components/home/ProductsSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-navy">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
