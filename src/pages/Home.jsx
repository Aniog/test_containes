import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import WhyUs from '@/components/sections/WhyUs'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#0E1B2C]">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}