import React, { useState } from 'react';
import { ArrowRight, Award, Users, Clock, Phone, Mail, MapPin } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Double Folding Machine',
    description: 'Precision-engineered for high-volume production with dual folding capability.',
    specs: 'Max thickness: 3mm | Working length: 2500mm | Motor: 5.5kW',
    category: 'Production',
  },
  {
    id: 2,
    name: 'Double Folder',
    description: 'Compact design with exceptional folding accuracy for medium-scale operations.',
    specs: 'Max thickness: 2mm | Working length: 2000mm | Motor: 3kW',
    category: 'Standard',
  },
  {
    id: 3,
    name: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal applications.',
    specs: 'Max thickness: 2.5mm | Working length: 3000mm | Motor: 4kW',
    category: 'Standard',
  },
  {
    id: 4,
    name: 'Sheet Metal Folding Machine',
    description: 'Heavy-duty construction with advanced control systems for industrial use.',
    specs: 'Max thickness: 4mm | Working length: 4000mm | Motor: 7.5kW',
    category: 'Industrial',
  },
  {
    id: 5,
    name: 'Metal Folder',
    description: 'Reliable and efficient folding for general metalworking requirements.',
    specs: 'Max thickness: 1.5mm | Working length: 1500mm | Motor: 2.2kW',
    category: 'Standard',
  },
  {
    id: 6,
    name: 'Metal Folder Machine',
    description: 'Professional-grade machine with enhanced safety features.',
    specs: 'Max thickness: 3mm | Working length: 2500mm | Motor: 5kW',
    category: 'Production',
  },
  {
    id: 7,
    name: 'Metal Folding Machine',
    description: 'State-of-the-art folding technology for precision metal fabrication.',
    specs: 'Max thickness: 3.5mm | Working length: 3500mm | Motor: 6.5kW',
    category: 'Industrial',
  },
];

const ProductCard = ({ product, onSelect }) => (
  <div 
    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
    onClick={() => onSelect(product)}
  >
    <div className="mb-4">
      <span className="inline-block px-3 py-1 text-xs font-medium text-[#4a6fa5] bg-[#4a6fa5]/10 rounded-full">
        {product.category}
      </span>
    </div>
    <h3 className="text-xl font-semibold text-[#1a252f] mb-3 group-hover:text-[#4a6fa5] transition-colors">
      {product.name}
    </h3>
    <p className="text-[#5c6b7a] mb-4 leading-relaxed">
      {product.description}
    </p>
    <div className="pt-4 border-t border-gray-100">
      <p className="text-sm text-[#5c6b7a] mb-4">{product.specs}</p>
      <button className="flex items-center text-[#1a252f] font-medium group-hover:text-[#4a6fa5] transition-colors">
        View Details <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
);

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-2xl w-full p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5c6b7a] hover:text-[#1a252f]"
        >
          ✕
        </button>
        
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#4a6fa5] bg-[#4a6fa5]/10 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h2 className="text-3xl font-semibold text-[#1a252f] mb-4">{product.name}</h2>
        
        <p className="text-lg text-[#5c6b7a] mb-6 leading-relaxed">
          {product.description}
        </p>
        
        <div className="bg-[#f8f7f4] rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-[#1a252f] mb-3">Technical Specifications</h4>
          <p className="text-[#5c6b7a]">{product.specs}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#1a252f] text-white rounded-lg hover:bg-[#4a6fa5] transition-colors font-medium"
          >
            Request Quote
          </a>
          <button 
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-[#1a252f] text-[#1a252f] rounded-lg hover:bg-[#1a252f] hover:text-white transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-semibold text-xl text-[#1a252f]">ARTITECT MACHINERY</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="text-[#5c6b7a] hover:text-[#1a252f] transition-colors">About</button>
            <button onClick={() => scrollToSection('products')} className="text-[#5c6b7a] hover:text-[#1a252f] transition-colors">Products</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#5c6b7a] hover:text-[#1a252f] transition-colors">Contact</button>
          </div>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 bg-[#1a252f] text-white text-sm font-medium rounded-lg hover:bg-[#4a6fa5] transition-colors"
          >
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-[90vh] flex items-center justify-center px-6 bg-[#1a252f] text-white">
        <div className="max-w-4xl text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6">
            Precision Metal Fabrication Equipment
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Engineered for<br />Excellence
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Premium sheet metal folding machines trusted by manufacturers worldwide for precision, reliability, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a252f] font-medium rounded-lg hover:bg-[#f5f3ed] transition-colors"
            >
              Explore Products <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-semibold text-[#1a252f] mb-1">35+</div>
            <div className="text-sm text-[#5c6b7a]">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#1a252f] mb-1">2,500+</div>
            <div className="text-sm text-[#5c6b7a]">Machines Installed</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#1a252f] mb-1">60+</div>
            <div className="text-sm text-[#5c6b7a]">Countries Served</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#1a252f] mb-1">98%</div>
            <div className="text-sm text-[#5c6b7a]">Customer Satisfaction</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-[#4a6fa5] mb-3">OUR LEGACY</div>
          <h2 className="text-4xl font-semibold text-[#1a252f] mb-4">Crafting Precision Since 1991</h2>
          <p className="text-lg text-[#5c6b7a] max-w-2xl mx-auto">
            ARTITECT MACHINERY has been at the forefront of metal fabrication technology, delivering equipment that combines German engineering precision with innovative design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-[#4a6fa5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-[#4a6fa5]" />
            </div>
            <h3 className="font-semibold text-[#1a252f] mb-2">Unmatched Quality</h3>
            <p className="text-[#5c6b7a] text-sm">Every machine undergoes rigorous testing to ensure decades of reliable operation.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-[#4a6fa5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-[#4a6fa5]" />
            </div>
            <h3 className="font-semibold text-[#1a252f] mb-2">Expert Support</h3>
            <p className="text-[#5c6b7a] text-sm">Our dedicated team provides comprehensive training and ongoing technical assistance.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 bg-[#4a6fa5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-[#4a6fa5]" />
            </div>
            <h3 className="font-semibold text-[#1a252f] mb-2">Timeless Durability</h3>
            <p className="text-[#5c6b7a] text-sm">Built with premium components to withstand the demands of continuous production.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-[#4a6fa5] mb-3">OUR RANGE</div>
            <h2 className="text-4xl font-semibold text-[#1a252f] mb-4">Precision Folding Solutions</h2>
            <p className="text-lg text-[#5c6b7a] max-w-2xl mx-auto">
              Discover our comprehensive lineup of sheet metal folding equipment designed for every scale of operation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={setSelectedProduct} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-[#4a6fa5] mb-3">GET IN TOUCH</div>
          <h2 className="text-4xl font-semibold text-[#1a252f] mb-4">Let's Build Something Great</h2>
          <p className="text-lg text-[#5c6b7a]">Our team is ready to help you find the perfect folding solution.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-[#4a6fa5] mt-1" />
              <div>
                <div className="font-medium text-[#1a252f]">Phone</div>
                <div className="text-[#5c6b7a]">+1 (800) 555-0123</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-[#4a6fa5] mt-1" />
              <div>
                <div className="font-medium text-[#1a252f]">Email</div>
                <div className="text-[#5c6b7a]">sales@artitectmachinery.com</div>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-[#4a6fa5] mt-1" />
              <div>
                <div className="font-medium text-[#1a252f]">Headquarters</div>
                <div className="text-[#5c6b7a]">1240 Industrial Parkway<br />Detroit, MI 48201, USA</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4a6fa5] text-[#1a252f]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4a6fa5] text-[#1a252f]"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4a6fa5] text-[#1a252f]"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4a6fa5] text-[#1a252f] resize-y"
            />
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-4 bg-[#1a252f] text-white font-medium rounded-lg hover:bg-[#4a6fa5] transition-colors disabled:opacity-70"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="text-center text-green-600">Thank you! We'll be in touch shortly.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </div>
      </footer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Home;