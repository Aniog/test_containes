import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-navy-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-medium tracking-wide">
                INDUSTRY-LEADING PRECISION
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Precision{" "}
              <span className="text-gold-400">Sheet Metal</span>{" "}
              Folding Solutions
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Engineered for excellence, our double folding machines deliver unmatched accuracy and durability for your metal fabrication needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded font-semibold text-sm transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-slate-500 hover:border-white text-white px-6 py-3 rounded font-medium text-sm transition-colors"
              >
                Request Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold-400" />
                <span className="text-sm text-slate-400">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-400" />
                <span className="text-sm text-slate-400">25+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-gold-400" />
                <span className="text-sm text-slate-400">Global Support</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-500/10 rounded-2xl blur-2xl" />
              <img
                data-strk-img-id="hero-machine-img"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sheet metal folding machine"
                className="relative rounded-xl shadow-2xl border border-navy-700/50 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
