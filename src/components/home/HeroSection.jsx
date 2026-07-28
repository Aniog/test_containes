import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-slate-300">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-orange-400">Global Buyers</span>
            </h1>
            
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping from China.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4 border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500">
                See How It Works
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-slate-700/50">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-300">Verified Suppliers</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-300">Quality Inspected</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-end">
                  <Globe className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-300">Global Shipping</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-factory-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Modern factory in China"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Factory Verified</p>
                    <p className="text-sm text-slate-500">Quality assured</p>
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
