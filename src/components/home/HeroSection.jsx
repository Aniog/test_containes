import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useImageLoader } from "@/hooks/useImageLoader";

export function HeroSection() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/70" />
      </div>

      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-800 mb-4">
              China Sourcing Agent for Global Buyers
            </span>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Reliable Suppliers, Verified Factories, On-Time Delivery
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
            >
              SSourcing China helps overseas buyers source from China with confidence. We find suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                No upfront sourcing fees
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                English-speaking team
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                Based in Shenzhen
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                data-strk-img-id="hero-img-ssourcing"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing agent factory visit"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 border border-slate-100 hidden md:block">
              <p className="text-3xl font-bold text-blue-800">3,200+</p>
              <p className="text-sm text-slate-600">Orders managed</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
