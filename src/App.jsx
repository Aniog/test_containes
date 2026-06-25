import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Products from '@/components/home/Products'
import Features from '@/components/home/Features'
import Contact from '@/components/home/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
