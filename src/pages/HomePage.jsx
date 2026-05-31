import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getFeaturedInventions } from "@/data/inventions";
import InventionCard from "@/components/museum/InventionCard";

const stats = [
  { value: "7", label: "Impossible Inventions" },
  { value: "4", label: "Centuries Covered" },
  { value: "∞", label: "Imagination Required" },
  { value: "0", label: "Working Prototypes" },
];

const HomePage = () => {
  const containerRef = useRef(null);
  const featured = getFeaturedInventions();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080c18]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-main-6d34fa"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c18]/70 via-[#080c18]/50 to-[#080c18]" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#4ade80]" />
            <span className="text-[#4ade80] text-sm tracking-widest uppercase font-medium">
              Welcome to the Museum
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Inventions That{" "}
            <span className="text-[#4ade80]">Never Were</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Step inside the world's only museum dedicated to fictional inventions —
            gravity umbrellas, weather generators, memory printers, and more.
            These devices never existed. But they should have.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/museum"
              className="inline-flex items-center gap-2 bg-[#4ade80] text-[#080c18] font-bold px-8 py-4 rounded-xl hover:bg-[#86efac] transition-colors text-lg tracking-wide"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Enter the Museum
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-[#4ade80]/50 text-[#4ade80] font-semibold px-8 py-4 rounded-xl hover:bg-[#4ade80]/10 transition-colors text-lg"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0f1629] border-y border-slate-700/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl font-bold text-[#4ade80] mb-1"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Inventions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#4ade80] text-sm tracking-widest uppercase font-medium">
              Featured Exhibits
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              The Signature Collection
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our most celebrated exhibits — each one a testament to the boundless
              ambition of inventors who refused to be constrained by the laws of physics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((invention, i) => (
              <InventionCard
                key={invention.id}
                invention={invention}
                large={i === 0}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/museum"
              className="inline-flex items-center gap-2 border border-[#4ade80]/50 text-[#4ade80] font-semibold px-8 py-4 rounded-xl hover:bg-[#4ade80]/10 transition-colors"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              View All Exhibits
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-[#0f1629] border-y border-slate-700/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-[#4ade80]/30 mb-6" style={{ fontFamily: "Georgia, serif" }}>"</div>
          <blockquote
            className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The difference between a mad inventor and a visionary is merely
            a century of hindsight.
          </blockquote>
          <cite className="text-slate-400 text-sm tracking-widest uppercase not-italic">
            — Fictum Museum Founding Charter, 2031
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Ready to Explore the Impossible?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Seven exhibits await. Each one a window into a world that almost was.
          </p>
          <Link
            to="/museum"
            className="inline-flex items-center gap-2 bg-[#4ade80] text-[#080c18] font-bold px-10 py-4 rounded-xl hover:bg-[#86efac] transition-colors text-lg"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Enter the Museum
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
