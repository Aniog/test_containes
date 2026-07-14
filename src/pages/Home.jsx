import { useRef } from "react"
import LandingHero from "@/components/landing/LandingHero"
import FeaturesSection from "@/components/landing/FeaturesSection"
import ContactSection from "@/components/landing/ContactSection"
import Footer from "@/components/landing/Footer"

export default function Home() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <LandingHero onContactClick={scrollToContact} />
      <FeaturesSection />
      <ContactSection formRef={contactRef} />
      <Footer />
    </div>
  )
}
