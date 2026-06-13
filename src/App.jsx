import React from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Award, Users, Clock } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeProduct, setActiveProduct] = React.useState(null);

  const products = [
    {
      id: 1,
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capabilities.",
      specs: ["Max folding length: 4000mm", "Material thickness: 0.5-6mm", "Folding angle: 0-180°"],
      category: "Industrial"
    },
    {
      id: 2,
      name: "Double Folder",
      description: "Compact yet powerful solution for medium-scale sheet metal operations.",
      specs: ["Max folding length: 2500mm", "Material thickness: 0.5-4mm", "Folding angle: 0-150°"],
      category: "Professional"
    },
    {
      id: 3,
      name: "Sheet Metal Folder",
      description: "Versatile folding system designed for diverse metalworking applications.",
      specs: ["Max folding length: 3000mm", "Material thickness: 0.5-5mm", "Folding angle: 0-160°"],
      category: "Standard"
    },
    {
      id: 4,
      name: "Sheet Metal Folding Machine",
      description: "Advanced CNC-controlled folding with exceptional accuracy and repeatability.",
      specs: ["Max folding length: 6000mm", "Material thickness: 0.5-8mm", "Folding angle: 0-180°"],
      category: "Premium"
    },
    {
      id: 5,
      name: "Metal Folder",
      description: "Reliable and efficient folding solution for everyday metal fabrication needs.",
      specs: ["Max folding length: 2000mm", "Material thickness: 0.5-3mm", "Folding angle: 0-140°"],
      category: "Standard"
    },
    {
      id: 6,
      name: "Metal Folder Machine",
      description: "Heavy-duty construction meets precision engineering for demanding environments.",
      specs: ["Max folding length: 5000mm", "Material thickness: 0.5-7mm", "Folding angle: 0-180°"],
      category: "Industrial"
    },
    {
      id: 7,
      name: "Metal Folding Machine",
      description: "State-of-the-art technology delivering superior folding performance.",
      specs: ["Max folding length: 3500mm", "Material thickness: 0.5-5mm", "Folding angle: 0-170°"],
      category: "Professional"
    }
  ];

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "35+" },
    { icon: Users, label: "Global Clients", value: "2,500+" },
    { icon: Clock, label: "Machines Delivered", value: "12,000+" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="text-2xl font-semibold tracking-tight">ARTITECT MACHINERY</div>
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

          {/* Mobile Navigation */}
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
      <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium mb-6">
              EST. 1991
            </div>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
              Precision.<br />Reliability.<br />Excellence.
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mb-10">
              World-class sheet metal folding machinery engineered for professionals who demand perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="group px-8 py-4 bg-gray-900 text-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
              >
                Explore Products
                <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">OUR RANGE</div>
            <h2 className="text-5xl font-semibold tracking-tight">Industrial Folding Solutions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Each machine is crafted with precision engineering and built to exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
                className="group p-8 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all cursor-pointer bg-white"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full inline-block mb-4">
                      {product.category}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight pr-8">{product.name}</h3>
                  </div>
                  <ArrowRight className={`text-gray-400 group-hover:text-gray-900 transition-all ${activeProduct === product.id ? 'rotate-45' : ''}`} size={20} />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                {activeProduct === product.id && (
                  <div className="pt-6 border-t border-gray-200 space-y-2">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        {spec}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">OUR LEGACY</div>
              <h2 className="text-5xl font-semibold tracking-tight leading-none mb-8">
                Engineering excellence since 1991.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                For over three decades, ARTITECT MACHINERY has been at the forefront of sheet metal fabrication technology. Our commitment to innovation and quality has made us a trusted partner for manufacturers worldwide.
              </p>
              <p>
                Every machine we produce embodies our dedication to precision, durability, and operational excellence. From small workshops to large industrial facilities, our equipment delivers consistent, reliable performance.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200 grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-semibold tracking-tight mb-2">ISO 9001</div>
              <div className="text-gray-600">Certified Quality Management</div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tight mb-2">50+</div>
              <div className="text-gray-600">Countries Served Globally</div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tight mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-gray-500 tracking-[3px] mb-3">GET IN TOUCH</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Ready to elevate your production?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto">
            Our team of specialists is ready to help you find the perfect folding solution for your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="flex gap-4">
              <Phone className="mt-1 text-gray-400" size={20} />
              <div>
                <div className="font-medium mb-1">Call Us</div>
                <div className="text-gray-600">+1 (800) 555-0123</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 text-gray-400" size={20} />
              <div>
                <div className="font-medium mb-1">Email Us</div>
                <div className="text-gray-600">sales@artitect.com</div>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 text-gray-400" size={20} />
              <div>
                <div className="font-medium mb-1">Visit Us</div>
                <div className="text-gray-600">Detroit, Michigan, USA</div>
              </div>
            </div>
          </div>

          <button className="px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© 2026 ARTITECT MACHINERY. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App
