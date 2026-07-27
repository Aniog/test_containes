import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import useStrkImages from "@/hooks/useStrkImages"

const Hero = () => {
  const ref = useStrkImages([])

  return (
    <section
      ref={ref}
      className="relative bg-[#0B2545] text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9d3f1a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 hero-gradient" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center py-20 md:py-28">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              Shanghai-based sourcing partner since 2013
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>

            <p
              id="hero-subtitle"
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              We help overseas importers find reliable Chinese suppliers,
              verify factories, inspect quality, follow production and
              coordinate shipping. End-to-end, with written reports at
              every step.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/contact" variant="primary" size="xl">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as={Link} to="/how-it-works" variant="outlineWhite" size="xl">
                See How It Works
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">12+</div>
                <div className="text-xs text-white/65 mt-1">Years on the ground</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">1,800+</div>
                <div className="text-xs text-white/65 mt-1">Vetted suppliers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">47</div>
                <div className="text-xs text-white/65 mt-1">Countries we ship to</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
                data-strk-bg-id="hero-card-bg-7b4e2c"
                data-strk-bg="[hero-card-title] [hero-card-quote]"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
                style={{ minHeight: "440px" }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B2545]/95 via-[#0B2545]/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end text-white">
                <div className="flex items-center gap-1.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                  ))}
                  <span className="text-xs text-white/80 ml-1.5">5.0 from buyers worldwide</span>
                </div>
                <p
                  id="hero-card-quote"
                  className="text-base md:text-lg font-medium leading-snug"
                >
                  "The most detailed inspection reports I've ever seen from a
                  sourcing agent. They caught issues our previous agent missed."
                </p>
                <div id="hero-card-title" className="mt-3 text-sm text-white/75">
                  Megan W. — Founder, US DTC cookware brand
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                <div className="text-sm font-semibold mt-2">Verified factories</div>
                <div className="text-xs text-white/65 mt-0.5">On-site checks</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                <Users className="w-5 h-5 text-[#C9A227]" />
                <div className="text-sm font-semibold mt-2">Bilingual team</div>
                <div className="text-xs text-white/65 mt-0.5">EN, ES, FR support</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
