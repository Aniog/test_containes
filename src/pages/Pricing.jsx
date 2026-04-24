import PricingPlans from '../components/pricing/PricingPlans';
import AboutSection from '../components/pricing/AboutSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Pricing() {
  return (
    <>
      {/* Page header */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
            Pricing & About
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Transparent plans for every stage of growth, and the story behind the team building Arcis.
          </p>
        </div>
      </section>

      <PricingPlans />
      <AboutSection />

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Start building today
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            No credit card required. Your first site is always free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/product#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-700 transition-all text-sm"
            >
              Talk to sales
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-700 font-medium px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all text-sm"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
