import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Services from './components/home/Services'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}

export default App
