import { Link } from 'react-router-dom';
import HomeHero from '../components/home/HomeHero';
import HowItWorks from '../components/home/HowItWorks';
import ServiceHighlights from '../components/home/ServiceHighlights';
import SocialProof from '../components/home/SocialProof';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <ServiceHighlights />
      <SocialProof />

      {/* CTA Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Ready to build smarter?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Join thousands of businesses using Arcis AI to grow their online presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-700 transition-all text-sm"
            >
              View pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-gray-700 font-medium px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all text-sm"
            >
              Explore features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
