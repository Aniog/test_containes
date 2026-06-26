import Layout from './Layout.jsx'
import HeroSection from './components/home/HeroSection.jsx'
import ProductsSection from './components/home/ProductsSection.jsx'
import FeaturesSection from './components/home/FeaturesSection.jsx'
import AboutSection from './components/home/AboutSection.jsx'
import ContactSection from './components/home/ContactSection.jsx'

function App() {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default App
