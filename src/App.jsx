import React, { useState } from 'react';
import { Menu, X, ChevronDown, Award, Users, Clock, Shield } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capability.",
      specs: ["Max sheet width: 3200mm", "Thickness range: 0.5-3.0mm", "Folding angle: 0-180°", "Production rate: 15 folds/min"],
      image: "double-folding-machine"
    },
    {
      id: 2,
      name: "Double Folder",
      description: "Compact and efficient solution for medium-scale metal fabrication operations.",
      specs: ["Max sheet width: 2500mm", "Thickness range: 0.4-2.5mm", "Folding angle: 0-150°", "Production rate: 12 folds/min"],
      image: "double-folder"
    },
    {
      id: 3,
      name: "Sheet Metal Folder",
      description: "Versatile folding system designed for diverse sheet metal applications.",
      specs: ["Max sheet width: 4000mm", "Thickness range: 0.3-4.0mm", "Folding angle: 0-180°", "Production rate: 10 folds/min"],
      image: "sheet-metal-folder"
    },
    {
      id: 4,
      name: "Sheet Metal Folding Machine",
      description: "Advanced CNC-controlled folding with exceptional accuracy and repeatability.",
      specs: ["Max sheet width: 6000mm", "Thickness range: 0.5-6.0mm", "Folding angle: 0-180°", "Production rate: 8 folds/min"],
      image: "sheet-metal-folding-machine"
    },
    {
      id: 5,
      name: "Metal Folder",
      description: "Robust and reliable folding equipment for heavy-duty industrial use.",
      specs: ["Max sheet width: 2000mm", "Thickness range: 0.5-2.0mm", "Folding angle: 0-135°", "Production rate: 20 folds/min"],
      image: "metal-folder"
    },
    {
      id: 6,
      name: "Metal Folder Machine",
      description: "Semi-automatic folding solution combining precision with operational simplicity.",
      specs: ["Max sheet width: 3000mm", "Thickness range: 0.4-3.5mm", "Folding angle: 0-160°", "Production rate: 18 folds/min"],
      image: "metal-folder-machine"
    },
    {
      id: 7,
      name: "Metal Folding Machine",
      description: "Premium-grade folding system engineered for maximum durability and performance.",
      specs: ["Max sheet width: 5000mm", "Thickness range: 0.5-5.0mm", "Folding angle: 0-180°", "Production rate: 9 folds/min"],
      image: "metal-folding-machine"
    }
  ];

  const features = [
    { icon: Award, title: "Precision Engineering", description: "Industry-leading accuracy with tolerances as tight as ±0.1mm" },
    { icon: Users, title: "Expert Support", description: "Dedicated technical team available 24/7 for installation and maintenance" },
    { icon: Clock, title: "Fast Turnaround", description: "Quick delivery and setup with minimal production downtime" },
    { icon: Shield, title: "Quality Guaranteed", description: "Comprehensive warranty and lifetime technical support included" }
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
            <div className="flex items-center">
              <div className="text-2xl font-bold tracking-tight">ARTITECT MACHINERY</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('features')} className="hover:text-gray-600 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
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
              <div className="flex flex-col gap-4 text-sm font-medium">
                <button onClick={() => scrollToSection('products')} className="text-left py-2">Products</button>
                <button onClick={() => scrollToSection('features')} className="text-left py-2">Why Us</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2">Contact</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 px-6 py-3 bg-black text-white rounded-full text-center"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium mb-6">
            EST. 1987 • PRECISION METAL FABRICATION
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            Engineering Excellence<br />in Metal Folding
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Premium industrial folding machinery trusted by manufacturers worldwide for precision, reliability, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Explore Products <ChevronDown size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Speak with an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-gray-200 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-4 text-sm text-gray-500 font-medium tracking-wider">
            <div>ISO 9001 CERTIFIED</div>
            <div>50+ COUNTRIES</div>
            <div>10,000+ MACHINES INSTALLED</div>
            <div>35+ YEARS EXPERIENCE</div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium tracking-[3px] text-gray-500 mb-3">OUR PRODUCT LINE</div>
          <h2 className="text-5xl font-bold tracking-tight">Industrial Folding Solutions</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Each machine is meticulously crafted to meet the demanding requirements of modern metal fabrication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
            >
              <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 tracking-wider">INDUSTRIAL GRADE</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                {activeProduct === product.id && (
                  <div className="pt-6 border-t border-gray-100 space-y-3">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-6 flex items-center text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
                  {activeProduct === product.id ? 'Hide specifications' : 'View specifications'}
                  <ChevronDown className={`ml-1 transition-transform ${activeProduct === product.id ? 'rotate-180' : ''}`} size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-[3px] text-gray-500 mb-3">THE ARTITECT DIFFERENCE</div>
            <h2 className="text-5xl font-bold tracking-tight">Built for Professionals</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium tracking-[3px] text-gray-500 mb-3">HOW IT WORKS</div>
          <h2 className="text-5xl font-bold tracking-tight">From Consultation to Production</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Consultation", desc: "Discuss your production requirements with our specialists" },
            { step: "02", title: "Customization", desc: "Configure your machine with the exact specifications needed" },
            { step: "03", title: "Installation", desc: "Professional on-site setup and comprehensive operator training" },
            { step: "04", title: "Support", desc: "Ongoing maintenance and technical assistance for years to come" }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-gray-100 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium tracking-[3px] text-gray-400 mb-3">GET IN TOUCH</div>
          <h2 className="text-5xl font-bold tracking-tight mb-6">Ready to Transform Your Production?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Our team of engineers is ready to help you find the perfect folding solution for your operation.
          </p>

          <form className="max-w-xl mx-auto space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
            <input 
              type="text" 
              placeholder="Company Name" 
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
            />
            <textarea 
              placeholder="Tell us about your project requirements..." 
              rows={5}
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-y"
            />
            <button 
              type="submit"
              className="w-full mt-4 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>

          <div className="mt-16 pt-12 border-t border-white/10 text-sm text-gray-400">
            <p>ARTITECT MACHINERY CO., LTD.</p>
            <p className="mt-1">Industrial Park, Manufacturing District • +1 (800) 555-0123 • sales@artitectmachinery.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
