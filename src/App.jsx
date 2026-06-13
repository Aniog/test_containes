import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Award, Users, Clock } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capability",
      specs: ["Max folding length: 4000mm", "Material thickness: 0.5-3mm", "Folding angle: 0-180°", "Production rate: 1200 pcs/hour"],
      image: "double-folding-machine"
    },
    {
      name: "Double Folder",
      description: "Compact design with exceptional accuracy for medium-scale operations",
      specs: ["Max folding length: 3000mm", "Material thickness: 0.5-2.5mm", "Folding angle: 0-150°", "Production rate: 900 pcs/hour"],
      image: "double-folder"
    },
    {
      name: "Sheet Metal Folder",
      description: "Versatile solution for diverse sheet metal applications",
      specs: ["Max folding length: 2500mm", "Material thickness: 0.4-2mm", "Folding angle: 0-135°", "Production rate: 750 pcs/hour"],
      image: "sheet-metal-folder"
    },
    {
      name: "Sheet Metal Folding Machine",
      description: "Advanced CNC control for complex folding operations",
      specs: ["Max folding length: 5000mm", "Material thickness: 0.5-4mm", "Folding angle: 0-180°", "Production rate: 1500 pcs/hour"],
      image: "sheet-metal-folding-machine"
    },
    {
      name: "Metal Folder",
      description: "Reliable performance for standard metal folding requirements",
      specs: ["Max folding length: 2000mm", "Material thickness: 0.3-1.5mm", "Folding angle: 0-120°", "Production rate: 600 pcs/hour"],
      image: "metal-folder"
    },
    {
      name: "Metal Folder Machine",
      description: "Heavy-duty construction for demanding industrial environments",
      specs: ["Max folding length: 3500mm", "Material thickness: 0.5-3.5mm", "Folding angle: 0-160°", "Production rate: 1000 pcs/hour"],
      image: "metal-folder-machine"
    },
    {
      name: "Metal Folding Machine",
      description: "Premium quality with intelligent automation features",
      specs: ["Max folding length: 4500mm", "Material thickness: 0.5-3mm", "Folding angle: 0-180°", "Production rate: 1300 pcs/hour"],
      image: "metal-folding-machine"
    }
  ];

  const features = [
    { icon: Award, title: "Precision Engineering", description: "Industry-leading accuracy with tolerances of ±0.1mm" },
    { icon: Users, title: "Expert Support", description: "Dedicated technical team available 24/7" },
    { icon: Clock, title: "Fast Delivery", description: "Standard models ship within 2-4 weeks" }
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
              <h1 className="text-2xl font-semibold tracking-tight">ARTITECT MACHINERY</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-gray-600 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-gray-600 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Get Quote
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left py-2 text-sm font-medium">Products</button>
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-sm font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-sm font-medium">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center pt-16">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600">Est. 1987 • Industry Leader</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
            Precision in<br />Every Fold
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            World-class sheet metal folding machinery engineered for excellence, 
            trusted by manufacturers across 40+ countries.
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
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-gray-200 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-16 gap-y-4 text-sm text-gray-500">
          <span>ISO 9001:2015 Certified</span>
          <span>CE Marked</span>
          <span>10-Year Warranty</span>
          <span>Global Service Network</span>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-500 tracking-widest">OUR RANGE</span>
            <h3 className="text-5xl font-semibold tracking-tight mt-3 mb-4">Industrial Folding Solutions</h3>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Each machine is crafted with meticulous attention to detail, 
              delivering unmatched performance and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Product List */}
            <div className="lg:col-span-5">
              <div className="space-y-1">
                {products.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`w-full text-left px-6 py-5 rounded-2xl transition-all ${
                      activeProduct === index 
                        ? 'bg-gray-900 text-white' 
                        : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="font-medium text-lg">{product.name}</div>
                    <div className={`text-sm mt-1 ${activeProduct === index ? 'text-gray-400' : 'text-gray-500'}`}>
                      {product.description.split('.')[0]}.
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-10 lg:p-12">
              <div>
                <h4 className="text-4xl font-semibold tracking-tight mb-4">
                  {products[activeProduct].name}
                </h4>
                <p className="text-lg text-gray-600 mb-10">
                  {products[activeProduct].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {products[activeProduct].specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-8 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                >
                  Request Pricing <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-400 tracking-widest">THE ARTITECT DIFFERENCE</span>
            <h3 className="text-5xl font-semibold tracking-tight mt-3">Built for Excellence</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium text-gray-500 tracking-widest">GET IN TOUCH</span>
          <h3 className="text-5xl font-semibold tracking-tight mt-3 mb-6">Let's Build Something Great</h3>
          <p className="text-xl text-gray-600 mb-12">
            Our engineering team is ready to help you find the perfect folding solution for your needs.
          </p>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 text-left">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <Phone className="text-gray-400 mt-1" size={20} />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a href="tel:+18005551234" className="text-gray-600 hover:text-gray-900">+1 (800) 555-1234</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-gray-400 mt-1" size={20} />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:sales@artitect.com" className="text-gray-600 hover:text-gray-900">sales@artitect.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 mt-1" size={20} />
                <div>
                  <div className="font-medium mb-1">Headquarters</div>
                  <span className="text-gray-600">Detroit, Michigan, USA</span>
                </div>
              </div>
            </div>

            <button className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© 2026 ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Warranty</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
