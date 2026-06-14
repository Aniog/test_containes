import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap, Users, Award, Wrench } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Engineered with precision using high-grade materials for lasting durability and performance.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Efficient Performance',
      description: 'Optimized mechanisms deliver faster cycle times without compromising accuracy.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Easy Maintenance',
      description: 'Designed for simple maintenance with accessible components and clear documentation.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Dedicated technical team available to assist with installation, training, and service.',
    },
  ];

  const products = [
    {
      name: 'Double Folding Machine',
      description: 'High-precision double-acting folding machine for complex sheet metal fabrication.',
      specs: ['Max thickness: 3mm mild steel', 'Bending length: 1250-3200mm', 'Motor power: 2.2kW'],
    },
    {
      name: 'Sheet Metal Folder',
      description: 'Heavy-duty folder designed for continuous industrial production.',
      specs: ['Max thickness: 2.5mm steel', 'Working width: 1000-2500mm', 'Hydraulic operation'],
    },
    {
      name: 'Metal Folding Machine',
      description: 'Versatile folding solution for various metalworking applications.',
      specs: ['Max thickness: 4mm steel', 'Bending angle: 0-135°', 'NC control system'],
    },
    {
      name: 'Double Folder',
      description: 'Advanced double folder with enhanced clamping and folding capabilities.',
      specs: ['Max thickness: 3mm stainless', 'Precision: ±0.5mm', 'Touch screen control'],
    },
  ];

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Machines Delivered' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '40+', label: 'Countries Served' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">Premium Industrial Equipment</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Precision Engineering for
                <span className="text-accent block">Sheet Metal Fabrication</span>
              </h1>
              
              <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                ARTITECT MACHINERY delivers high-performance double folding machines and sheet metal folders engineered for accuracy, reliability, and industrial-grade productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark transition-colors shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Request Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm text-white/70">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm text-white/70">Global Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm text-white/70">2-Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Machine Illustration */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Machine Base */}
                    <rect x="50" y="200" width="300" height="40" rx="4" fill="#2A4A73" />
                    <rect x="60" y="210" width="280" height="20" rx="2" fill="#1E3A5F" />
                    
                    {/* Machine Body */}
                    <rect x="80" y="100" width="240" height="100" rx="8" fill="#2A4A73" />
                    <rect x="90" y="110" width="220" height="80" rx="4" fill="#1E3A5F" />
                    
                    {/* Control Panel */}
                    <rect x="280" y="130" width="40" height="60" rx="4" fill="#C9A962" />
                    <circle cx="300" cy="150" r="6" fill="#1E3A5F" />
                    <circle cx="300" cy="170" r="6" fill="#1E3A5F" />
                    
                    {/* Folding Beam */}
                    <rect x="100" y="80" width="200" height="20" rx="4" fill="#C9A962" />
                    <rect x="120" y="60" width="160" height="20" rx="4" fill="#A88A4A" />
                    
                    {/* Sheet Metal */}
                    <rect x="130" y="140" width="140" height="3" fill="#D4D4D4" />
                    <rect x="130" y="150" width="140" height="3" fill="#D4D4D4" />
                    <rect x="130" y="160" width="140" height="3" fill="#D4D4D4" />
                    
                    {/* Accent Lines */}
                    <line x1="100" y1="240" x2="100" y2="260" stroke="#C9A962" strokeWidth="3" />
                    <line x1="300" y1="240" x2="300" y2="260" stroke="#C9A962" strokeWidth="3" />
                    
                    {/* Labels */}
                    <text x="200" y="280" textAnchor="middle" fill="#C9A962" fontSize="12" fontFamily="Inter">PRECISION FOLDING MACHINE</text>
                  </svg>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Premium Grade</p>
                      <p className="text-xs text-neutral-500">ISO 9001 Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-neutral-50 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
              Built for Industrial Excellence
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Our machines are engineered with precision and built to withstand the demands of continuous industrial production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-sans font-semibold text-lg text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Products
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
                Precision Folding Solutions
              </h2>
              <p className="text-neutral-500 mt-4 max-w-xl">
                From compact folders to heavy-duty folding machines, we offer a complete range of sheet metal fabrication equipment.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 200 150" className="w-32 h-auto opacity-60">
                    <rect x="20" y="100" width="160" height="20" rx="2" fill="#1E3A5F" />
                    <rect x="40" y="50" width="120" height="50" rx="4" fill="#2A4A73" />
                    <rect x="50" y="40" width="100" height="10" rx="2" fill="#C9A962" />
                  </svg>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary font-semibold text-sm bg-white px-4 py-2 rounded-lg shadow">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-sans font-semibold text-lg text-neutral-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-1">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-xs text-neutral-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Production?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a customized quote for your sheet metal fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark transition-colors shadow-lg"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;