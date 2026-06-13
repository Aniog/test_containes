import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import ProductsSection from '@/components/products/ProductsSection'
import Features from '@/components/home/Features'
import Stats from '@/components/home/Stats'
import WhyUs from '@/components/home/WhyUs'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <Stats />
        <Features />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
