import React from 'react';
import { Menu, X, ArrowRight, Award, Users, Globe } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const products = [
    {
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capabilities.",
      features: ["Dual-head operation", "Up to 4mm thickness", "2000mm working length"]
    },
    {
      name: "Double Folder",
      description: "Compact yet powerful solution for versatile sheet metal folding applications.",
      features: ["Space-efficient design", "Quick setup", "Manual & CNC options"]
    },
    {
      name: "Sheet Metal Folder",
      description: "Industry-standard folding equipment trusted by fabricators worldwide.",
      features: ["Heavy-duty construction", "Precision bending", "Multiple configurations"]
    },
    {
      name: "Sheet Metal Folding Machine",
      description: "Advanced folding technology for complex geometries and tight tolerances.",
      features: ["CNC control system", "Programmable sequences", "High repeatability"]
    },
    {
      name: "Metal Folder",
      description: "Robust and reliable folding solution for demanding industrial environments.",
      features: ["Industrial-grade build", "Low maintenance", "Long service life"]
    },
    {
      name: "Metal Folder Machine",
      description: "Versatile folding machine designed for a wide range of metal thicknesses.",
      features: ["Adjustable pressure", "Wide material range", "Safety interlocks"]
    },
    {
      name: "Metal Folding Machine",
      description: "State-of-the-art folding equipment delivering exceptional accuracy and speed.",
      features: ["High-speed operation", "Digital angle display", "Automatic crowning"]
    }
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
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-semibold tracking-tight">ARTITECT MACHINERY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-gray-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-gray-600 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Request Quote
              </button>
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
            <div className="md:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('products')} className="text-left py-2 text-sm font-medium">Products</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-sm font-medium">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-sm font-medium">Contact</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full text-center"
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
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium mb-6">
            Precision Engineering Since 1985
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6 leading-none">
            Excellence in<br />Sheet Metal Folding
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Premium folding machinery engineered for precision, durability, and performance. 
            Trusted by fabricators worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Explore Products <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-gray-300 font-medium rounded-full hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-semibold mb-2">40+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-semibold mb-2">5,000+</div>
              <div className="text-gray-600">Machines Installed</div>
            </div>
            <div>
              <div className="text-4xl font-semibold mb-2">60+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">OUR RANGE</div>
            <h2 className="text-5xl font-semibold tracking-tight">Precision Folding Solutions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Each machine is crafted with meticulous attention to detail, delivering unmatched accuracy and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="group p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-300 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 tracking-tight">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <ul className="space-y-2.5 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3.5 border border-gray-900 rounded-full text-sm font-medium group-hover:bg-gray-900 group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">OUR STORY</div>
              <h2 className="text-5xl font-semibold tracking-tight leading-none mb-6">
                Built on<br />Precision.<br />Driven by<br />Excellence.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over four decades, ARTITECT MACHINERY has been at the forefront of sheet metal 
                folding technology. Our commitment to engineering excellence and customer satisfaction 
                has made us a trusted partner for fabricators across the globe.
              </p>
              <p>
                Every machine we produce embodies our dedication to quality, incorporating the latest 
                innovations while maintaining the reliability that our customers depend on.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-gray-900 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-2">ISO Certified</div>
                <div className="text-gray-600 text-sm">Rigorous quality standards ensuring consistent excellence in every machine.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-gray-900 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-2">Expert Support</div>
                <div className="text-gray-600 text-sm">Dedicated technical team providing comprehensive training and ongoing assistance.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-gray-900 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-2">Global Network</div>
                <div className="text-gray-600 text-sm">Service centers and authorized distributors in over 60 countries worldwide.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">GET IN TOUCH</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Ready to Transform Your Production?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Our team of specialists is ready to help you find the perfect folding solution for your needs.
          </p>
          
          <div className="bg-gray-50 rounded-3xl p-10 md:p-16 text-left">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors" 
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors" 
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors" 
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5} 
                  required 
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors resize-none" 
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>© 2026 ARTITECT MACHINERY. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
