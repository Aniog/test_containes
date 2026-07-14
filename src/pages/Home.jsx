import { useRef } from "react"
import HeroSection from "@/components/landing/HeroSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import ContactSection from "@/components/landing/ContactSection"

const Home = () => {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <HeroSection onContactClick={scrollToContact} />
      <div id="features">
        <FeaturesSection />
      </div>
      <ContactSection sectionRef={contactRef} />
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">Acme</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
