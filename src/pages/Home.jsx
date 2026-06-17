import Hero from '@/components/home/Hero'
import ProductGrid from '@/components/home/ProductGrid'
import Capabilities from '@/components/home/Capabilities'
import About from '@/components/home/About'
import Testimonials from '@/components/home/Testimonials'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Capabilities />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
