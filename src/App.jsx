import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capability",
      features: ["Dual-head folding system", "Up to 4mm thickness", "2000mm working length", "CNC control system"],
      specs: "Capacity: 4mm | Length: 2000mm | Power: 7.5kW"
    },
    {
      name: "Double Folder",
      description: "Compact yet powerful solution for versatile sheet metal folding operations",
      features: ["Space-efficient design", "Quick tool change", "Digital angle display", "Safety guards included"],
      specs: "Capacity: 3mm | Length: 1600mm | Power: 5.5kW"
    },
    {
      name: "Sheet Metal Folder",
      description: "Professional-grade folder designed for precision and reliability in every fold",
      features: ["Manual & motorized options", "Adjustable back gauge", "Segmented tooling", "Heavy-duty frame"],
      specs: "Capacity: 2.5mm | Length: 2500mm | Power: 4kW"
    },
    {
      name: "Sheet Metal Folding Machine",
      description: "Advanced folding technology with automated controls for consistent results",
      features: ["Touchscreen interface", "Programmable sequences", "Automatic crowning", "Remote diagnostics"],
      specs: "Capacity: 3.5mm | Length: 3000mm | Power: 11kW"
    },
    {
      name: "Metal Folder",
      description: "Robust and dependable metal folding solution for demanding applications",
      features: ["All-steel construction", "Foot pedal operation", "Angle scale included", "Easy maintenance"],
      specs: "Capacity: 2mm | Length: 1200mm | Power: Manual"
    },
    {
      name: "Metal Folder Machine",
      description: "Industrial metal folder with enhanced features for professional workshops",
      features: ["Hydraulic clamping", "Variable speed control", "Workpiece support arms", "Emergency stop system"],
      specs: "Capacity: 4mm | Length: 2200mm | Power: 7.5kW"
    },
    {
      name: "Metal Folding Machine",
      description: "State-of-the-art folding machine delivering precision and efficiency",
      features: ["Servo-driven system", "Multi-axis control", "Cloud connectivity", "Production analytics"],
      specs: "Capacity: 5mm | Length: 4000mm | Power: 15kW"
    }
  ];

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "35+" },
    { icon: Users, label: "Satisfied Clients", value: "2,500+" },
    { icon: Clock, label: "Machines Delivered", value: "8,000+" },
    { icon: Shield, label: "Quality Guarantee", value: "5 Years" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight">ARTITECT</div>
                <div className="text-[10px] text-gray-500 -mt-1">MACHINERY</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col gap-4 text-sm font-medium">
                <button onClick={() => scrollToSection('products')} className="text-left py-2">Products</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2">Contact</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 px-6 py-3 bg-gray-900 text-white rounded-full text-center"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center pt-16">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            EST. 1991 • PRECISION ENGINEERING
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            Precision Metal<br />Folding Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Industry-leading double folding machines and sheet metal folders 
            engineered for performance, reliability, and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Explore Products <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                <div className="text-4xl font-bold tracking-tight mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">OUR RANGE</div>
            <h2 className="text-5xl font-bold tracking-tight">Industrial Folding Machines</h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Discover our complete lineup of precision-engineered folding solutions
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeProduct === index 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* Active Product Display */}
          <div className="bg-gray-50 rounded-3xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="uppercase tracking-[2px] text-xs font-semibold text-gray-500 mb-3">
                  PROFESSIONAL SERIES
                </div>
                <h3 className="text-4xl font-bold tracking-tight mb-4">
                  {products[activeProduct].name}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {products[activeProduct].description}
                </p>
                
                <div className="mb-8">
                  <div className="text-sm font-semibold mb-3 text-gray-500">KEY FEATURES</div>
                  <ul className="space-y-2.5">
                    {products[activeProduct].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">TECHNICAL SPECIFICATIONS</div>
                  <div className="font-mono text-sm text-gray-700">{products[activeProduct].specs}</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 border-4 border-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-400 rounded-full" />
                    </div>
                    <div className="font-semibold text-gray-700">Precision Engineering</div>
                    <div className="text-sm text-gray-500 mt-1">Built to Last</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium tracking-[3px] text-gray-400 mb-4">OUR LEGACY</div>
              <h2 className="text-5xl font-bold tracking-tight leading-none mb-6">
                Engineering Excellence<br />Since 1991
              </h2>
            </div>
            <div className="text-lg text-gray-300 space-y-6">
              <p>
                For over three decades, ARTITECT MACHINERY has been at the forefront of 
                industrial folding technology. Our machines are trusted by fabricators, 
                manufacturers, and workshops worldwide.
              </p>
              <p>
                Every machine we build reflects our commitment to precision, durability, 
                and innovation. From our flagship double folding machines to compact 
                metal folders, we deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">THE ARTITECT DIFFERENCE</div>
            <h2 className="text-4xl font-bold tracking-tight">Built for Professionals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Precision Craftsmanship", desc: "Every component machined to exacting tolerances for consistent, accurate folds." },
              { title: "Built to Last", desc: "Heavy-duty construction using premium materials ensures decades of reliable service." },
              { title: "Global Support", desc: "Comprehensive training, spare parts, and technical assistance wherever you are." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-2xl">
                <div className="text-2xl font-bold mb-4 tracking-tight">{item.title}</div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-4">GET IN TOUCH</div>
          <h2 className="text-5xl font-bold tracking-tight mb-6">Ready to Transform Your Production?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Speak with our specialists about the perfect folding solution for your workshop.
          </p>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 text-left max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <div className="font-semibold mb-1">Call Us</div>
                  <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <a href="mailto:sales@artitectmachinery.com" className="text-gray-600 hover:text-gray-900">sales@artitectmachinery.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <div className="font-semibold mb-1">Visit Our Facility</div>
                  <div className="text-gray-600">1240 Industrial Parkway, Detroit, MI 48201</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => alert('Thank you! Our sales team will contact you within 24 hours.')}
              className="mt-10 w-full py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
