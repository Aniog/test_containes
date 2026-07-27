import CtaButton from "@/components/shared/CtaButton";
import { Shield, CheckCircle, Clock, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span className="text-sm font-medium text-teal-700">China-Based Sourcing Agent Since 2014</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CtaButton to="/contact" size="lg">
                Get a Free Sourcing Quote
              </CtaButton>
              <CtaButton to="/how-it-works" variant="secondary" size="lg">
                See How It Works
              </CtaButton>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Verified Suppliers" },
                { icon: CheckCircle, label: "Quality Control" },
                { icon: Clock, label: "On-Time Follow-Up" },
                { icon: Globe, label: "Global Shipping" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-slate-600">
                  <item.icon className="w-4 h-4 text-teal-600" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-main-img"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China sourcing agent team reviewing factory products with overseas buyer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 hidden md:block">
              <p className="text-sm text-slate-500 mb-1">Suppliers in Network</p>
              <p className="text-3xl font-bold text-slate-900">2,400+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
