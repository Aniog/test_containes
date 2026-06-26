import Layout from './Layout'
import HomeHero from './components/home/HomeHero'
import ProductsSection from './components/home/ProductsSection'
import AboutSection from './components/home/AboutSection'
import ContactSection from './components/home/ContactSection'

function App() {
  return (
    <Layout>
      <HomeHero />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default App
