import './App.css'
import Navbar from './components/dental/Navbar'
import HeroSection from './components/dental/HeroSection'
import KnowledgeSection from './components/dental/KnowledgeSection'
import CareGuideSection from './components/dental/CareGuideSection'
import TestimonialsSection from './components/dental/TestimonialsSection'
import FAQSection from './components/dental/FAQSection'
import ContactSection from './components/dental/ContactSection'
import Footer from './components/dental/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <KnowledgeSection />
      <CareGuideSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App

