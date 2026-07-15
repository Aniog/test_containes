import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import HeroSection from "@/components/home/HeroSection"
import TrustBar from "@/components/home/TrustBar"
import Bestsellers from "@/components/home/Bestsellers"
import UGCReel from "@/components/home/UGCReel"
import CategoryTiles from "@/components/home/CategoryTiles"
import BrandStory from "@/components/home/BrandStory"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"
import useReveal from "@/hooks/useReveal"

function SectionWrapper({ children, className = "" }) {
  const [ref, revealed] = useReveal({ threshold: 0.1 })
  return (
    <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <HeroSection />
      <SectionWrapper><TrustBar /></SectionWrapper>
      <SectionWrapper><Bestsellers /></SectionWrapper>
      <SectionWrapper><UGCReel /></SectionWrapper>
      <SectionWrapper><CategoryTiles /></SectionWrapper>
      <SectionWrapper><BrandStory /></SectionWrapper>
      <SectionWrapper><Testimonials /></SectionWrapper>
      <SectionWrapper><Newsletter /></SectionWrapper>
    </>
  )
}