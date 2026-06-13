import Layout from './Layout.jsx'
import HomeHero from './components/home/HomeHero.jsx'
import ProductsSection from './components/home/ProductsSection.jsx'
import AboutSection from './components/home/AboutSection.jsx'
import ContactSection from './components/home/ContactSection.jsx'

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
