import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-sm font-medium text-brand-800 mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ buyers in 40+ countries
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              China Sourcing Agent for{" "}
              <span className="text-brand-800">Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all
              from our offices in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-800 px-6 py-3.5 text-base font-semibold text-white hover:bg-blue-900 transition-colors shadow-sm"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
                No upfront fees
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-green-600" />
                Response within 24h
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-600" />
                Verified suppliers only
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                data-strk-img-id="hero-factory-01"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory manufacturing"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500">Projects completed</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-800" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">100%</p>
                  <p className="text-xs text-slate-500">Supplier verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
