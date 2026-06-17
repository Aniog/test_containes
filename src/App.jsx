import React, { useState } from 'react';
import { Menu, X, ChevronRight, Award, Shield, Clock, Users, Phone, Mail, MapPin } from 'lucide-react';
import './App.css';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description: 'Heavy-duty dual-action folding system designed for high-volume production environments requiring precision and power.',
    spec: 'Folds up to 6mm steel • 3200mm working length',
    category: 'Industrial'
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    description: 'Compact yet powerful double folding solution ideal for workshops seeking versatility without sacrificing floor space.',
    spec: 'Folds up to 4mm steel • 2500mm working length',
    category: 'Workshop'
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder engineered for clean, consistent bends across a wide range of materials.',
    spec: 'Folds up to 3mm steel • 2000mm working length',
    category: 'Standard'
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    description: 'Automated sheet metal folding machine with programmable controls for repeatable, high-precision results.',
    spec: 'Folds up to 4mm steel • CNC control system',
    category: 'Automated'
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    description: 'Reliable general-purpose metal folder built for everyday fabrication tasks with exceptional build quality.',
    spec: 'Folds up to 2.5mm steel • 1500mm working length',
    category: 'General'
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    description: 'Robust industrial metal folder machine designed for continuous operation in demanding production settings.',
    spec: 'Folds up to 5mm steel • 3000mm working length',
    category: 'Industrial'
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    description: 'Precision metal folding machine featuring advanced angle control and backgauge systems for complex parts.',
    spec: 'Folds up to 3.5mm steel • ±0.5° angle accuracy',
    category: 'Precision'
  }
];

const benefits = [
  {
    icon: Award,
    title: 'Precision Engineering',
    description: 'Every machine is built to exacting tolerances, ensuring consistent, accurate folds across thousands of cycles.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames and premium components deliver decades of reliable service in harsh shop environments.'
  },
  {
    icon: Clock,
    title: 'Fast Setup & Operation',
    description: 'Intuitive controls and quick-change tooling get you bending faster with minimal training required.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Our technical team provides installation, training, and ongoing service to keep your operation running smoothly.'
  }
];

const specs = [
  { label: 'Frame Construction', value: 'Welded steel, stress-relieved' },
  { label: 'Bending Capacity', value: 'Up to 6mm mild steel (model dependent)' },
  { label: 'Working Lengths', value: '1500mm – 3200mm available' },
  { label: 'Angle Accuracy', value: '±0.5° standard, ±0.2° on precision models' },
  { label: 'Drive System', value: 'Hydraulic or manual (model dependent)' },
  { label: 'Control Options', value: 'Manual, NC, or full CNC' },
  { label: 'Warranty', value: '3 years on frame, 1 year on components' },
  { label: 'Origin', value: 'Engineered and assembled in Europe' }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductQuote = (productName) => {
    setFormData(prev => ({ ...prev, product: productName }));
    scrollToSection('contact');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 800));

    setFormSubmitted(true);
    setIsSubmitting(false);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const navLinks = [
    { label: 'Products', id: 'products' },
    { label: 'Why ARTITECT', id: 'benefits' },
    { label: 'Specifications', id: 'specs' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1C2526]">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="nav-logo"
          >
            ARTITECT MACHINERY
          </button>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#E5E4E0] bg-white">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary w-full mt-2"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Precision Folding.<br />
                Built to Perform.
              </h1>
              <p>
                Professional-grade sheet metal and metal folding machines engineered for fabricators who demand accuracy, durability, and reliability.
              </p>
              <div className="hero-actions">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="btn btn-primary"
                >
                  Explore Machines <ChevronRight size={18} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-secondary"
                >
                  Request a Quote
                </button>
              </div>
              <p className="mt-4 text-sm text-[#4A5568]">
                Trusted by fabricators across Europe and North America
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="card" style={{ padding: '2.5rem' }}>
                <div className="text-sm uppercase tracking-[2px] text-[#B8860B] font-semibold mb-3">SINCE 1987</div>
                <h3 className="text-2xl mb-4">European Engineering.<br />Industrial Strength.</h3>
                <p className="text-[#4A5568] mb-0">
                  Every ARTITECT machine is designed and assembled in our facility in Germany, 
                  using only the highest-grade components for decades of dependable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust Bar */}
      <section className="section bg-white border-b border-[#E5E4E0]">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1C2526]">35+</div>
              <div className="text-sm text-[#4A5568]">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1C2526]">4,200+</div>
              <div className="text-sm text-[#4A5568]">Machines Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1C2526]">48</div>
              <div className="text-sm text-[#4A5568]">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1C2526]">99.2%</div>
              <div className="text-sm text-[#4A5568]">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">Our Folding Machines</h2>
          <p className="section-subtitle">
            From compact workshop folders to heavy-duty production systems, 
            we offer a complete range of precision folding equipment.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="text-center px-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/80 text-xs font-semibold tracking-wider text-[#1C2526] mb-3">
                      {product.category}
                    </div>
                    <div className="text-[#1C2526] font-semibold text-lg">{product.name}</div>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-spec">{product.spec}</div>
                  <button 
                    onClick={() => handleProductQuote(product.name)}
                    className="btn btn-secondary w-full"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ARTITECT */}
      <section id="benefits" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Why Fabricators Choose ARTITECT</h2>
          <p className="section-subtitle">
            We don't just build machines — we build long-term partnerships with the people who use them every day.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-card card">
                  <div className="benefit-icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-[#4A5568] mb-0">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Technical Specifications</h2>
            <p className="section-subtitle">
              Built with the features professional fabricators need and the quality they expect.
            </p>

            <table className="specs-table">
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index}>
                    <th>{spec.label}</th>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-center text-sm text-[#4A5568] mt-6">
              Exact specifications vary by model. Contact us for detailed technical data on any machine.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="section-title">Ready to Find the Right Machine?</h2>
            <p className="section-subtitle mb-0">
              Tell us about your application and our team will recommend the best folding solution for your needs.
            </p>
          </div>

          {formSubmitted ? (
            <div className="form-success max-w-lg mx-auto">
              <h3>Thank You</h3>
              <p className="mb-0 text-[#4A5568]">
                Your inquiry has been received. A member of our team will contact you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="product" className="form-label">Interested In</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select a product (optional)</option>
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Tell Us About Your Project *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="What materials will you be folding? What thickness and length? Any special requirements?"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>

              <p className="text-center text-xs text-[#4A5568] mt-4">
                We typically respond within 24 hours on business days.
              </p>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-16 pt-10 border-t border-[#E5E4E0] max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-3">
                  <Phone className="text-[#B8860B]" size={22} />
                </div>
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+493012345678" className="text-[#4A5568] hover:text-[#B8860B]">+49 30 123 456 78</a>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <Mail className="text-[#B8860B]" size={22} />
                </div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:sales@artitect-machinery.com" className="text-[#4A5568] hover:text-[#B8860B]">sales@artitect-machinery.com</a>
              </div>
              <div>
                <div className="flex justify-center mb-3">
                  <MapPin className="text-[#B8860B]" size={22} />
                </div>
                <div className="font-semibold mb-1">Headquarters</div>
                <div className="text-[#4A5568]">Berlin, Germany</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">ARTITECT MACHINERY</div>
              <div className="mt-2 text-sm">Precision folding equipment since 1987.</div>
            </div>
            <div className="footer-links">
              <button onClick={() => scrollToSection('products')} className="footer-link">Products</button>
              <button onClick={() => scrollToSection('benefits')} className="footer-link">Why Us</button>
              <button onClick={() => scrollToSection('specs')} className="footer-link">Specifications</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved. Engineered in Germany.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
