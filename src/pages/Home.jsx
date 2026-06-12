import Navbar from '@/components/home/Navbar'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/home/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
