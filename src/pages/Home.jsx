import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Products from '@/components/home/Products'
import Capabilities from '@/components/home/Capabilities'
import About from '@/components/home/About'
import Testimonials from '@/components/home/Testimonials'
import Contact from '@/components/home/Contact'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
