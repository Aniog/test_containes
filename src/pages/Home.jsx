import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
