import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Truck } from "lucide-react";
import QuoteForm from "@/components/shared/QuoteForm";
import StockImage from "@/components/shared/StockImage";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
              <Shield className="w-4 h-4" />
              Trusted by buyers in 30+ countries
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-slate-700 font-semibold hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Supplier verification
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                Quality inspections
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-600" />
                Shipping coordination
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <StockImage
                id="hero-main-img-9f2a4c"
                query="[hero-subtitle] [hero-title]"
                ratio="4x3"
                width="800"
                alt="China sourcing agent factory visit"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 p-5 max-w-xs hidden md:block">
              <p className="text-2xl font-bold text-slate-900">1,200+</p>
              <p className="text-sm text-slate-600">Supplier verifications completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
