import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import ImageContainer from "@/components/shared/ImageContainer"
import StrkBg from "@/components/shared/StrkBg"

const points = [
  "Verified manufacturers only",
  "On-ground quality inspections",
  "End-to-end shipping support",
]

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <ImageContainer>
      <section className="relative overflow-hidden">
        <StrkBg
          bgId="hero-bg-ssourcing-001"
          query="[hero-subtitle] [hero-title]"
          ratio="16x9"
          width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <h1
              id="hero-title"
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-200 leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate("/contact")}>
                Get a Free Sourcing Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900" onClick={() => navigate("/services")}>
                Explore Services
              </Button>
            </div>
            <ul className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle className="h-5 w-5 text-teal-light" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ImageContainer>
  )
}
