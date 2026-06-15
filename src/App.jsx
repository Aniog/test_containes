import './App.css'
import Layout from './Layout.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProductsSection from './components/ProductsSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'

function App() {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default App
