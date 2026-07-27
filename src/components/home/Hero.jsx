import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-primary-700">Global Buyers</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed">
              We help you find verified suppliers, ensure product quality, and manage seamless shipping from China. Your trusted partner for reliable manufacturing solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="btn-accent text-lg px-8 py-4 group"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="btn-secondary text-lg px-8 py-4"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span className="text-sm text-neutral-600">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span className="text-sm text-neutral-600">QC Inspections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span className="text-sm text-neutral-600">Shipping Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in delay-200">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Factory production line"
                data-strk-img-id="hero-factory-abc123"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="16x10"
                data-strk-img-width="800"
                className="w-full h-80 md:h-96 object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect fill='%23e2e8f0' width='800' height='500'/%3E%3Crect fill='%23cbd5e1' x='50' y='200' width='700' height='200' rx='8'/%3E%3Crect fill='%2394a3b8' x='100' y='100' width='150' height='100' rx='4'/%3E%3Crect fill='%2394a3b8' x='300' y='100' width='150' height='100' rx='4'/%3E%3Crect fill='%2394a3b8' x='500' y='100' width='150' height='100' rx='4'/%3E%3Ccircle fill='%2364748b' cx='700' cy='150' r='40'/%3E%3Crect fill='%23f1f5f9' x='70' y='250' width='660' height='140' rx='4'/%3E%3C/svg%3E"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 animate-slide-in delay-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">200+</p>
                  <p className="text-sm text-neutral-500">Verified Factories</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 animate-slide-in delay-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">99%</p>
                  <p className="text-sm text-neutral-500">Quality Pass Rate</p>
                </div>
              </div>
            </div>

            <div className="absolute right-8 -bottom-4 bg-white rounded-xl shadow-xl p-4 animate-slide-in delay-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">50+</p>
                  <p className="text-sm text-neutral-500">Countries Shipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
