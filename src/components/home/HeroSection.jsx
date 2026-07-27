import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Truck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm font-medium text-amber-700">Trusted by 200+ buyers across 35 countries</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            China Sourcing Agent for{" "}
            <span className="text-amber-600">Global Buyers</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8"
          >
            We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-semibold text-base hover:bg-slate-900 hover:text-white transition-colors"
            >
              How It Works
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-amber-600" />
              Verified Suppliers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              Quality Control
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-amber-600" />
              Shipping Coordination
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
