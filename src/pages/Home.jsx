import React from "react"
import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import ContactSection from "@/components/landing/ContactSection"
import Footer from "@/components/landing/Footer"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
