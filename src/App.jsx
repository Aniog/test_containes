import Layout from '@/components/home/Layout'
import HeroSection from '@/components/home/HeroSection'
import ProductsSection from '@/components/home/ProductsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ContactSection from '@/components/home/ContactSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <ContactSection />
    </Layout>
  )
}

export default App
