import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="w-fit">Now accepting new clients</Badge>
            <div className="space-y-4">
              <h1 id="hero-title" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Build something <span className="text-indigo-600">remarkable</span> together
              </h1>
              <p id="hero-subtitle" className="text-lg text-gray-600 leading-relaxed">
                We help businesses grow with thoughtful design, smart strategy, and technology that works. Let's start a conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={scrollToContact}>
                Get in touch
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                Learn more <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Happy clients</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">12yr</p>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="Team collaboration"
                data-strk-img-id="hero-main-img-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">✓</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Project delivered</p>
                <p className="text-xs text-gray-500">On time, every time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
