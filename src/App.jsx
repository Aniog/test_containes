import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
    </Layout>
  )
}

export default App
