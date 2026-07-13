import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Truck, Search } from 'lucide-react';

const features = [
  { icon: Search, text: 'Supplier Verification' },
  { icon: Shield, text: 'Quality Control' },
  { icon: Truck, text: 'Shipping Coordination' },
];

const Hero = () => {
  return (
    <section className="relative bg-primary-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent
              <span className="block text-accent mt-2">for Global Buyers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <feature.icon className="w-5 h-5 text-accent-light" />
                  <span className="text-white font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80 text-sm">Verified Suppliers</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-white/80 text-sm">Quality Pass Rate</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-white/80 text-sm">Countries Served</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">10+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
                Free Consultation
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
