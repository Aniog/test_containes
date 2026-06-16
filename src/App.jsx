import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Award, Users, Clock } from 'lucide-react';

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
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capability.",
      features: ["Dual station operation", "Up to 4mm thickness", "Automatic material feed"]
    },
    {
      name: "Double Folder",
      description: "Compact yet powerful folding solution for medium-scale operations.",
      features: ["Space-efficient design", "Quick setup time", "Consistent fold accuracy"]
    },
    {
      name: "Sheet Metal Folder",
      description: "Professional-grade folder for precise sheet metal bending operations.",
      features: ["Heavy-duty construction", "Adjustable bend angles", "Safety interlocks"]
    },
    {
      name: "Sheet Metal Folding Machine",
      description: "Advanced CNC-controlled folding for complex geometries and tight tolerances.",
      features: ["CNC precision control", "Multi-axis operation", "Programmable sequences"]
    },
    {
      name: "Metal Folder",
      description: "Versatile folding equipment suitable for various metal types and thicknesses.",
      features: ["Multi-material compatible", "Easy angle adjustment", "Low maintenance"]
    },
    {
      name: "Metal Folder Machine",
      description: "Industrial-strength folder designed for continuous operation environments.",
      features: ["24/7 operation ready", "Robust steel frame", "Minimal downtime"]
    },
    {
      name: "Metal Folding Machine",
      description: "State-of-the-art folding technology for superior finish quality.",
      features: ["Premium surface finish", "Digital angle display", "Remote diagnostics"]
    }
  ];

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "35+" },
    { icon: Users, label: "Global Clients", value: "500+" },
    { icon: Clock, label: "Machines Delivered", value: "2,500+" }
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
    }, 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">ARTITECT MACHINERY</span>
            </div>

            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Request Quote
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="text-left py-2">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="mt-2 px-6 py-3 bg-gray-900 text-white rounded">Request Quote</button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium mb-6">
            EST. 1991
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
            Precision Metal<br />Folding Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Industry-leading machinery engineered for accuracy, durability, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 bg-gray-900 text-white font-medium rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Explore Products <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-gray-300 font-medium rounded hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="text-3xl font-semibold">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">OUR RANGE</div>
          <h2 className="text-4xl font-semibold tracking-tight">Industrial Folding Equipment</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Each machine is built to the highest standards of engineering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group border border-gray-200 rounded-xl p-8 hover:border-gray-400 transition-all hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-700 transition-colors">{product.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">OUR LEGACY</div>
              <h2 className="text-4xl font-semibold tracking-tight mb-6">Crafting Excellence Since 1991</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over three decades, ARTITECT MACHINERY has been at the forefront of industrial metal forming technology. Our commitment to precision engineering and customer satisfaction has made us a trusted partner for manufacturers worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every machine we produce reflects our dedication to quality, innovation, and the pursuit of manufacturing excellence.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="font-semibold mb-2">German Engineering Standards</div>
                <div className="text-gray-600 text-sm">All equipment manufactured to DIN and ISO specifications</div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="font-semibold mb-2">Global Service Network</div>
                <div className="text-gray-600 text-sm">Technical support available in 40+ countries</div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="font-semibold mb-2">5-Year Warranty</div>
                <div className="text-gray-600 text-sm">Comprehensive coverage on all machinery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">GET IN TOUCH</div>
          <h2 className="text-4xl font-semibold tracking-tight">Let's Discuss Your Requirements</h2>
          <p className="mt-4 text-lg text-gray-600">Our team is ready to help you find the perfect solution.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="font-medium">Phone</span>
              </div>
              <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900">+1 (555) 123-4567</a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="font-medium">Email</span>
              </div>
              <a href="mailto:sales@artitectmachinery.com" className="text-gray-600 hover:text-gray-900">sales@artitectmachinery.com</a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="font-medium">Headquarters</span>
              </div>
              <div className="text-gray-600">1247 Industrial Parkway<br />Stuttgart, Germany 70173</div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors" 
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
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors" 
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors" 
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors resize-y" 
                />
              </div>
              <button 
                type="submit" 
                disabled={formSubmitted}
                className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {formSubmitted ? 'Thank you! We will contact you shortly.' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div>Precision Engineering Since 1991</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
