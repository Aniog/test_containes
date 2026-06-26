import React, { useState } from 'react';
import { Menu, X, Award, Users, Clock, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Precision-engineered for high-volume production with dual folding capability.",
    specs: ["Dual folding heads", "Up to 3mm thickness", "2000mm working width", "CNC control system"]
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Compact yet powerful solution for versatile sheet metal folding operations.",
    specs: ["Space-efficient design", "Manual & auto modes", "1500mm working width", "Quick setup time"]
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Industry-standard folder delivering consistent, high-quality bends every time.",
    specs: ["Heavy-duty construction", "Up to 4mm thickness", "2500mm working width", "Digital angle display"]
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced folding system with programmable sequences for complex operations.",
    specs: ["Multi-step programming", "Up to 6mm thickness", "3000mm working width", "Touchscreen interface"]
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Robust and reliable folder designed for demanding industrial applications.",
    specs: ["All-steel frame", "Up to 2mm thickness", "1200mm working width", "Foot pedal operation"]
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Professional-grade machine combining power with precision engineering.",
    specs: ["Hydraulic clamping", "Up to 5mm thickness", "2200mm working width", "Safety light curtains"]
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "State-of-the-art folding technology for superior metal fabrication results.",
    specs: ["Servo-driven system", "Up to 8mm thickness", "4000mm working width", "Remote diagnostics"]
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-semibold tracking-tight text-[#1a1f2e]">ARTITECT</span>
              <span className="text-2xl font-light tracking-[3px] text-[#c5a26f] ml-1">MACHINERY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('products')} className="nav-link text-sm">Products</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-sm">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-sm">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">Request Quote</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-[#e5e7eb]">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('products')} className="text-left py-2 text-sm">Products</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-sm">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-sm">Contact</button>
                <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm w-full mt-2">Request Quote</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-[90vh] flex items-center bg-[#1a1f2e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm tracking-[2px] mb-6">
              EST. 1987
            </div>
            <h1 className="text-white mb-6 tracking-[-1.5px]">
              Precision Metal<br />Folding Solutions
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-10">
              For over three decades, ARTITECT MACHINERY has delivered world-class 
              sheet metal folding equipment trusted by manufacturers worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('products')} className="btn-primary bg-white text-[#1a1f2e] hover:bg-[#c5a26f] hover:text-white">
                Explore Products
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary border-white text-white hover:bg-white hover:text-[#1a1f2e]">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#e5e7eb] bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 text-[#5a6375]">
            <div className="flex items-center gap-3">
              <Award className="text-[#c5a26f]" size={24} />
              <span className="font-medium">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-[#c5a26f]" size={24} />
              <span className="font-medium">500+ Clients Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#c5a26f]" size={24} />
              <span className="font-medium">35+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c5a26f] text-sm tracking-[3px] font-medium">OUR LEGACY</span>
            <h2 className="mt-4 mb-6">Crafting Excellence in Every Fold</h2>
            <p className="mb-6">
              Since 1987, ARTITECT MACHINERY has been at the forefront of metal fabrication 
              technology. Our commitment to precision engineering and innovative design has 
              made us a trusted partner for manufacturers across industries.
            </p>
            <p>
              Every machine we produce embodies our dedication to quality, reliability, 
              and performance—values that have defined our brand for nearly four decades.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-lg border border-[#e5e7eb]">
              <div className="text-4xl font-semibold text-[#c5a26f] mb-2">98%</div>
              <div className="font-medium mb-1">Customer Satisfaction</div>
              <div className="text-sm text-[#5a6375]">Based on 2025 survey</div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#e5e7eb]">
              <div className="text-4xl font-semibold text-[#c5a26f] mb-2">45</div>
              <div className="font-medium mb-1">Countries Served</div>
              <div className="text-sm text-[#5a6375]">Global distribution network</div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#e5e7eb]">
              <div className="text-4xl font-semibold text-[#c5a26f] mb-2">12</div>
              <div className="font-medium mb-1">Product Lines</div>
              <div className="text-sm text-[#5a6375]">Comprehensive solutions</div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#e5e7eb]">
              <div className="text-4xl font-semibold text-[#c5a26f] mb-2">24/7</div>
              <div className="font-medium mb-1">Technical Support</div>
              <div className="text-sm text-[#5a6375]">Dedicated service team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c5a26f] text-sm tracking-[3px] font-medium">OUR RANGE</span>
            <h2 className="mt-4">Premium Folding Equipment</h2>
            <p className="mt-4 max-w-2xl mx-auto text-[#5a6375]">
              Discover our comprehensive lineup of precision-engineered metal folding 
              machines, each designed to meet the exacting standards of modern manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="product-card p-8">
                <h3 className="mb-4">{product.name}</h3>
                <p className="mb-6">{product.description}</p>
                <ul className="space-y-2.5">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="text-[#c5a26f] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-[#5a6375]">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Request Detailed Specifications <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c5a26f] text-sm tracking-[3px] font-medium">THE ARTITECT DIFFERENCE</span>
          <h2 className="mt-4">Why Leading Manufacturers Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Unmatched Precision", desc: "Our machines deliver tolerances as tight as ±0.1mm, ensuring consistent quality across every production run." },
            { title: "Built to Last", desc: "Constructed with premium-grade materials and components, our equipment is engineered for decades of reliable service." },
            { title: "Expert Support", desc: "Our dedicated technical team provides comprehensive training, installation support, and ongoing maintenance services." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c5a26f]/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#c5a26f]" />
              </div>
              <h3 className="mb-4">{item.title}</h3>
              <p className="text-[#5a6375]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c5a26f] text-sm tracking-[3px] font-medium">GET IN TOUCH</span>
            <h2 className="mt-4">Let's Discuss Your Requirements</h2>
            <p className="mt-4 text-[#5a6375]">
              Our specialists are ready to help you find the perfect folding solution 
              for your manufacturing needs.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg border border-[#e5e7eb]">
            {isSubmitted ? (
              <div className="success-message">
                <Check size={24} />
                <span>Thank you for your inquiry. Our team will contact you within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-input resize-y min-h-[120px]"
                    placeholder="Please describe your requirements..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <span className="text-xl font-semibold tracking-tight text-white">ARTITECT</span>
              <span className="text-xl font-light tracking-[2px] text-[#c5a26f] ml-1">MACHINERY</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </div>
            <div className="text-sm">
              Precision • Quality • Reliability
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
