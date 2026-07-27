import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const trustPoints = [
  "Verified supplier network",
  "On-the-ground QC team",
  "Transparent pricing",
];

export default function HomeHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h1 className="text-primary mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — all
              with local expertise and transparent reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 text-slate-700 font-medium rounded-md hover:bg-slate-50 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg bg-surface">
              <img
                data-strk-img-id="hero-factory-1a2b3c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Modern manufacturing facility"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-lg shadow-md p-4 md:p-5 max-w-[220px]">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">Years in Business</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">12+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-surface -z-10" />
    </section>
  );
}
