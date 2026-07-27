import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Truck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ buyers worldwide
            </div>
            <h1 id="hero-title" className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                No upfront fees
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                Factory verified
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Truck className="w-5 h-5 text-success shrink-0" />
                Door-to-door support
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                data-strk-img-id="hero-main-1a2b3c"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing and quality inspection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Verified Suppliers Only</p>
                    <p className="text-xs text-text-muted">Every factory is physically audited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
