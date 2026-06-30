import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import ServicesSection from './components/home/ServicesSection'
import AboutSection from './components/home/AboutSection'
import WorksSection from './components/home/WorksSection'
import ContactSection from './components/home/ContactSection'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
