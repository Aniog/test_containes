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
      id: 1,
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capability.",
      specs: ["Max sheet width: 4000mm", "Folding angle: 0-180°", "Material thickness: 0.5-6mm"]
    },
    {
      id: 2,
      name: "Double Folder",
      description: "Compact and efficient solution for medium-scale metal fabrication needs.",
      specs: ["Max sheet width: 3000mm", "Folding angle: 0-150°", "Material thickness: 0.5-4mm"]
    },
    {
      id: 3,
      name: "Sheet Metal Folder",
      description: "Versatile folding system designed for diverse sheet metal applications.",
      specs: ["Max sheet width: 2500mm", "Folding angle: 0-160°", "Material thickness: 0.5-3mm"]
    },
    {
      id: 4,
      name: "Sheet Metal Folding Machine",
      description: "Heavy-duty construction with advanced control systems for precision work.",
      specs: ["Max sheet width: 5000mm", "Folding angle: 0-180°", "Material thickness: 1-8mm"]
    },
    {
      id: 5,
      name: "Metal Folder",
      description: "Reliable and cost-effective solution for general metal folding operations.",
      specs: ["Max sheet width: 2000mm", "Folding angle: 0-140°", "Material thickness: 0.5-2.5mm"]
    },
    {
      id: 6,
      name: "Metal Folder Machine",
      description: "Professional-grade equipment with enhanced safety features and controls.",
      specs: ["Max sheet width: 3500mm", "Folding angle: 0-170°", "Material thickness: 0.8-5mm"]
    },
    {
      id: 7,
      name: "Metal Folding Machine",
      description: "State-of-the-art folding technology for demanding industrial applications.",
      specs: ["Max sheet width: 6000mm", "Folding angle: 0-180°", "Material thickness: 1-10mm"]
    }
  ];

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "35+" },
    { icon: Users, label: "Satisfied Clients", value: "1200+" },
    { icon: Clock, label: "Projects Completed", value: "8500+" }
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
              <div className="text-2xl font-bold tracking-tight">ARTITECT MACHINERY</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <button onClick={() => scrollToSection('products')} className="hover:text-gray-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
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
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium mb-6">
              EST. 1991
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              Precision Metal<br />Folding Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mb-10">
              Industry-leading machinery engineered for excellence. 
              Trusted by manufacturers worldwide for over three decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
              >
                Explore Products
                <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-all text-sm font-medium"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">OUR RANGE</div>
          <h2 className="text-5xl font-bold tracking-tight">Industrial Folding Equipment</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Each machine is crafted with precision engineering and built to deliver 
            exceptional performance for decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="space-y-2">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                      {spec}
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
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">OUR LEGACY</div>
              <h2 className="text-5xl font-bold tracking-tight leading-none mb-6">
                Engineering Excellence Since 1991
              </h2>
            </div>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                ARTITECT MACHINERY has been at the forefront of industrial metal fabrication 
                equipment for over three decades. Our commitment to innovation and quality has 
                made us a trusted partner for manufacturers across the globe.
              </p>
              <p>
                Every machine we produce embodies our dedication to precision, durability, and 
                operational excellence. We understand that your success depends on equipment 
                you can rely on day after day.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl">
              <div className="text-4xl font-bold mb-2">ISO 9001</div>
              <div className="text-gray-600">Certified Quality Management</div>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-600">Countries Served Worldwide</div>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-600">Technical Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">GET IN TOUCH</div>
          <h2 className="text-5xl font-bold tracking-tight">Let's Build Together</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team of specialists is ready to help you find the perfect solution.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} />
                <span className="font-medium">Phone</span>
              </div>
              <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900">+1 (555) 123-4567</a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} />
                <span className="font-medium">Email</span>
              </div>
              <a href="mailto:info@artitectmachinery.com" className="text-gray-600 hover:text-gray-900">info@artitectmachinery.com</a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} />
                <span className="font-medium">Headquarters</span>
              </div>
              <div className="text-gray-600">
                1240 Industrial Parkway<br />
                Detroit, MI 48201, USA
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors resize-y"
              />
              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {formSubmitted ? "Thank you! We'll be in touch." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
            <div>Precision Engineering • Built to Last</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
