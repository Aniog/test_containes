import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>
      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Trusted by 500+ Global Buyers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for{' '}
              <span className="text-blue-400">Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                See How It Works
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold">2,000+</div>
                  <div className="text-sm text-slate-400">Orders Completed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-slate-400">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-factory-8f2a9c"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Modern factory production line in China"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Quality Verified</div>
                    <div className="text-sm text-slate-500">Factory audit passed</div>
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
