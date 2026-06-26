import React, { useState } from 'react';
import { Menu, X, ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const products = [
    {
      id: 1,
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capability",
      specs: ["Up to 4mm thickness", "3200mm working length", "CNC controlled"]
    },
    {
      id: 2,
      name: "Double Folder",
      description: "Versatile folding solution for medium to large sheet metal applications",
      specs: ["Up to 3mm thickness", "2500mm working length", "Manual & semi-auto modes"]
    },
    {
      id: 3,
      name: "Sheet Metal Folder",
      description: "Professional-grade folder designed for precision and reliability",
      specs: ["Up to 2.5mm thickness", "2000mm working length", "Adjustable angle stops"]
    },
    {
      id: 4,
      name: "Sheet Metal Folding Machine",
      description: "Heavy-duty folding machine built for demanding industrial environments",
      specs: ["Up to 5mm thickness", "4000mm working length", "Hydraulic operation"]
    },
    {
      id: 5,
      name: "Metal Folder",
      description: "Compact yet powerful solution for workshops and fabrication shops",
      specs: ["Up to 2mm thickness", "1500mm working length", "Easy setup & operation"]
    },
    {
      id: 6,
      name: "Metal Folder Machine",
      description: "Advanced folding technology with digital controls and precision guides",
      specs: ["Up to 3.5mm thickness", "3000mm working length", "Digital angle display"]
    },
    {
      id: 7,
      name: "Metal Folding Machine",
      description: "Industrial folding system engineered for maximum productivity",
      specs: ["Up to 6mm thickness", "5000mm working length", "Full CNC automation"]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Precision Engineering",
      description: "Every machine is crafted with meticulous attention to detail for consistent, accurate results."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our technical team provides comprehensive training and ongoing support for all customers."
    },
    {
      icon: Clock,
      title: "Reliable Performance",
      description: "Built with premium components to ensure years of dependable operation with minimal maintenance."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All machines include advanced safety features meeting international industrial standards."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="text-2xl font-semibold tracking-tight">ARTITECT MACHINERY</div>
            </div>

            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('features')} className="hover:text-gray-600 transition-colors">Features</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="text-left py-2">Products</button>
              <button onClick={() => scrollToSection('features')} className="text-left py-2">Features</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-900 text-white text-xs tracking-[3px] mb-8">
            EST. 1987
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Precision Metal<br />Folding Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            World-class folding machinery engineered for manufacturers who demand excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('products')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-black transition-colors text-sm font-medium"
            >
              Explore Products <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[3px] text-gray-500 mb-3">OUR RANGE</div>
          <h2 className="text-5xl font-semibold tracking-tight">Industrial Folding Machines</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Each machine is designed with the precision and durability your operation demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group border border-gray-200 rounded-2xl p-8 hover:border-gray-900 transition-all duration-300 flex flex-col">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="text-xs tracking-[2px] text-gray-500 mb-3">KEY SPECIFICATIONS</div>
                <ul className="space-y-2 text-sm">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-gray-900 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[3px] text-gray-500 mb-3">WHY CHOOSE US</div>
            <h2 className="text-5xl font-semibold tracking-tight">Built for Excellence</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white mb-6 shadow-sm">
                  <feature.icon size={24} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="text-xs tracking-[3px] text-gray-500 mb-3">OUR HERITAGE</div>
        <h2 className="text-5xl font-semibold tracking-tight mb-8">Craftsmanship Since 1987</h2>
        <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
          <p>
            For nearly four decades, ARTITECT MACHINERY has been at the forefront of metal forming technology.
            Our commitment to precision engineering and customer satisfaction has made us a trusted partner
            for manufacturers worldwide.
          </p>
          <p>
            Every machine we produce reflects our dedication to quality, innovation, and the belief that
            exceptional tools create exceptional results.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[3px] text-gray-400 mb-3">GET IN TOUCH</div>
            <h2 className="text-5xl font-semibold tracking-tight mb-4">Let's Build Together</h2>
            <p className="text-gray-400 text-lg">Tell us about your project and we'll help you find the perfect solution.</p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thank You</h3>
              <p className="text-gray-400">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-500 resize-y"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div>Precision Engineering Since 1987</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
