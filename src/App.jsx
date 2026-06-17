import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import Products from '@/components/home/Products'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Products />
      <About />
      <Contact />
    </Layout>
  )
}

export default App
