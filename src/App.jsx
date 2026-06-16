import "./App.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Products from "@/components/sections/Products"
import WhyUs from "@/components/sections/WhyUs"
import Industries from "@/components/sections/Industries"
import Process from "@/components/sections/Process"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Industries />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
