import './App.css'
import Navbar from './components/chair/Navbar'
import Hero from './components/chair/Hero'
import Features from './components/chair/Features'
import Products from './components/chair/Products'
import Testimonials from './components/chair/Testimonials'
import Banner from './components/chair/Banner'
import Contact from './components/chair/Contact'
import Footer from './components/chair/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Banner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
