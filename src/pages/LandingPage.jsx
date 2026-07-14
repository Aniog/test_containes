import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import ContactForm from '@/components/landing/ContactForm'
import Footer from '@/components/landing/Footer'

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Hero />
    <Features />
    <ContactForm />
    <Footer />
  </div>
)

export default LandingPage
