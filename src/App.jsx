import './App.css'
import Navbar from './components/tiger-park/Navbar'
import HeroSection from './components/tiger-park/HeroSection'
import TigersSection from './components/tiger-park/TigersSection'
import AboutSection from './components/tiger-park/AboutSection'
import ActivitiesSection from './components/tiger-park/ActivitiesSection'
import VisitSection from './components/tiger-park/VisitSection'
import Footer from './components/tiger-park/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <TigersSection />
      <AboutSection />
      <ActivitiesSection />
      <VisitSection />
      <Footer />
    </div>
  )
}

export default App
