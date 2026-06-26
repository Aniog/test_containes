import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ProductGrid from '@/components/products/ProductGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-am-bg text-am-text">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProductGrid />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
