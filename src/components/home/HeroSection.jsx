import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        data-strk-bg-id="hero-bg-3a8f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            China Sourcing Agent{" "}
            <span className="text-secondary">for Global Buyers</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
            We help overseas businesses find reliable suppliers, verify
            factories, inspect product quality, follow production, and coordinate
            shipping from China.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-dark transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white/30 text-white text-base font-medium hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Verified Suppliers</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4 text-secondary" />
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
