import Layout from './Layout'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import Products from './components/Products'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <StatsBanner />
      <Products />
      <Features />
      <Contact />
    </Layout>
  )
}

export default App
