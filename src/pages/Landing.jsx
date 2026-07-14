import { useRef } from "react"
import HeroSection from "@/components/landing/HeroSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import ContactForm from "@/components/landing/ContactForm"

const Landing = () => {
  const formRef = useRef(null)

  const scrollToContact = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onScrollToContact={scrollToContact} />
      <FeaturesSection />
      <ContactForm formRef={formRef} />
    </div>
  )
}

export default Landing
