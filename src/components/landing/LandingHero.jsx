import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

const Navbar = ({ onContactClick }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <span className="font-semibold text-slate-900 text-lg">Spark</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Features</a>
        <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
        <Link to="/contacts" className="text-sm text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" />
          View contacts
        </Link>
      </div>
      <Button onClick={onContactClick} size="sm">Get in touch</Button>
    </div>
  </nav>
)

const HeroSection = ({ containerRef, onContactClick }) => (
  <section
    ref={containerRef}
    className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white"
  >
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
        Now in beta
      </span>
      <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
        Build something <span className="text-indigo-600">remarkable</span> together
      </h1>
      <p id="hero-subtitle" className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
        We help teams move faster, collaborate smarter, and ship products their customers love. Ready to get started?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" onClick={onContactClick}>
          Get early access
        </Button>
        <Button size="lg" variant="outline">
          Learn more
        </Button>
      </div>
    </div>

    <div className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      <img
        alt="Product dashboard preview"
        data-strk-img-id="hero-product-img-a1b2c3"
        data-strk-img="[hero-subtitle] [hero-title]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1200"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-auto"
      />
    </div>
  </section>
)

export default function LandingHero({ onContactClick }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <Navbar onContactClick={onContactClick} />
      <HeroSection containerRef={containerRef} onContactClick={onContactClick} />
    </>
  )
}
