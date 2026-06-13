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
      description: "Precision-engineered for high-volume production with dual folding capability",
      features: ["Dual station operation", "Up to 4mm thickness", "Automatic material feed"]
    },
    {
      name: "Double Folder",
      description: "Compact yet powerful solution for versatile sheet metal folding operations",
      features: ["Space-efficient design", "Quick setup time", "Multiple fold angles"]
    },
    {
      name: "Sheet Metal Folder",
      description: "Industry-standard equipment for professional sheet metal fabrication",
      features: ["Heavy-duty construction", "Precision alignment", "Extended working length"]
    },
    {
      name: "Sheet Metal Folding Machine",
      description: "Advanced CNC-controlled folding for complex geometries and tight tolerances",
      features: ["CNC precision control", "Programmable sequences", "Touchscreen interface"]
    },
    {
      name: "Metal Folder",
      description: "Robust and reliable folding solution for various metalworking applications",
      features: ["All-metal construction", "Adjustable pressure", "Safety interlocks"]
    },
    {
      name: "Metal Folder Machine",
      description: "High-performance machinery designed for continuous industrial operation",
      features: ["24/7 operation ready", "Minimal maintenance", "Energy efficient"]
    },
    {
      name: "Metal Folding Machine",
      description: "State-of-the-art folding technology for superior finish quality",
      features: ["Superior surface finish", "Reduced material waste", "Integrated safety systems"]
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
    }, 3000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-semibold tracking-tight text-gray-900">ARTITECT</span>
              <span className="text-2xl font-light tracking-[3px] text-gray-600 ml-1">MACHINERY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-gray-900 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
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
                <button onClick={() => scrollToSection('products')} className="text-left py-2 text-gray-600">Products</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-600">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-600">Contact</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
            Precision Engineering Since 1991
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-6">
            Industrial Folding<br />Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            World-class sheet metal folding machinery engineered for precision, 
            durability, and unmatched performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
              Explore Products <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <stat.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="text-3xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-sm uppercase tracking-[2px] text-gray-500 mb-3">Our Solutions</div>
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900">Premium Folding Machinery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Each machine is crafted with meticulous attention to detail, 
            delivering exceptional results for demanding industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-400 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-8 w-full py-3 border border-gray-300 rounded-full text-sm font-medium group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all"
              >
                Request Information
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm uppercase tracking-[2px] text-gray-500 mb-3">Our Legacy</div>
              <h2 className="text-5xl font-semibold tracking-tight text-gray-900 leading-none mb-6">
                Engineering<br />Excellence
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over three decades, ARTITECT MACHINERY has been at the forefront of 
                industrial folding technology. Our commitment to innovation and quality 
                has made us the trusted partner for manufacturers worldwide.
              </p>
              <p>
                Every machine we produce embodies our dedication to precision engineering, 
                rigorous testing, and continuous improvement. We don't just build machines—we 
                craft solutions that drive productivity and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-[2px] text-gray-500 mb-3">Get In Touch</div>
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900">Let's Build Together</h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with our team to discuss your specific requirements and discover 
            the perfect solution for your operation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-900">Phone</span>
              </div>
              <p className="text-gray-600 pl-8">+1 (800) 555-0123</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-900">Email</span>
              </div>
              <p className="text-gray-600 pl-8">sales@artitectmachinery.com</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-900">Headquarters</span>
              </div>
              <p className="text-gray-600 pl-8">1240 Industrial Parkway<br />Detroit, MI 48201</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <div className="text-green-600 text-lg font-medium mb-2">Thank you for reaching out.</div>
                <p className="text-green-700">Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-400"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  required
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-400 resize-y"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div>Precision. Performance. Reliability.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
