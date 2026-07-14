import { useRef } from "react"
import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import ContactForm from "@/components/landing/ContactForm"
import Footer from "@/components/landing/Footer"

export default function Home() {
  const contactRef = useRef(null)

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={scrollToContact} />
      <HeroSection onContactClick={scrollToContact} />
      <FeaturesSection />
      <ContactForm sectionRef={contactRef} />
      <Footer />
    </div>
  )
}
