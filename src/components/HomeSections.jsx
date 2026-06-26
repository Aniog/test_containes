import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, CheckCircle, Shield, Award, Clock, Star } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
              scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}>
              A
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                ARTITECT
              </span>
              <span className={`block text-xs font-medium tracking-widest uppercase ${
                scrolled ? 'text-slate-500' : 'text-white/80'
              }`}>
                MACHINERY
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Quote
            </a>
          </nav>

          <button
            className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-700 font-medium py-2 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-blue-600 text-white text-center px-5 py-3 rounded-lg font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Industry Leading Since 1995</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Precision Sheet Metal
            <span className="block text-blue-400">Folding Solutions</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            ARTITECT MACHINERY delivers high-performance double folding machines, 
            sheet metal folders, and metal folding equipment built for accuracy, 
            durability, and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Quote
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Machines Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding system for complex sheet metal operations. Ideal for heavy-duty industrial applications with automated controls.',
    features: ['Dual-axis precision', 'Automated controls', 'Heavy-duty frame'],
    imgId: 'product-double-folding-x1y2z3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient bending and folding of various metal sheets. Compact design with maximum output capability.',
    features: ['Compact footprint', 'Quick setup', 'Multi-material'],
    imgId: 'product-double-folder-a4b5c6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder designed for consistent, accurate bends across a wide range of material thicknesses.',
    features: ['Precision bending', 'Wide capacity', 'Easy operation'],
    imgId: 'product-sheet-metal-folder-d7e8f9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with CNC capabilities for repeatable, high-quality sheet metal fabrication in production environments.',
    features: ['CNC controlled', 'High repeatability', 'Production ready'],
    imgId: 'product-sheet-metal-folding-g1h2i3',
    titleId: 'product-sheet-metal-folding-title',
    descId: 'product-sheet-metal-folding-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder engineered for demanding workshop environments. Delivers clean, precise folds on steel, aluminum, and more.',
    features: ['Heavy construction', 'Clean folds', 'Multi-metal'],
    imgId: 'product-metal-folder-j4k5l6',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Complete metal folding solution with advanced safety features and intuitive controls for operators of all skill levels.',
    features: ['Safety certified', 'Intuitive UI', 'Full training'],
    imgId: 'product-metal-folding-m7n8o9',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 id={product.titleId} className="text-xl font-bold text-slate-900 mb-3">
          {product.title}
        </h3>
        <p id={product.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <ul className="space-y-2 mb-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
        >
          Request Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 id="products-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Industrial Folding Machines
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our comprehensive range of sheet metal folding equipment, 
            engineered for precision and built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every machine undergoes rigorous testing and quality control before delivery, ensuring reliable performance.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'ISO 9001 certified manufacturing with CE marking for European compliance and global standards.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Streamlined production and logistics network ensures your equipment arrives on schedule, every time.',
  },
  {
    icon: Star,
    title: 'Expert Support',
    description: 'Dedicated technical support team available 24/7 for installation, training, and maintenance assistance.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Engineering Excellence Since 1995
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology 
              for over 25 years. Our commitment to innovation, precision engineering, and 
              customer satisfaction has made us a trusted partner for manufacturers worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From small workshops to large-scale industrial operations, our machines deliver 
              consistent, accurate results that help businesses increase productivity and 
              maintain competitive advantage in demanding markets.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-5">
                <div className="text-3xl font-bold text-blue-600 mb-1">99.8%</div>
                <div className="text-slate-600 text-sm">Precision Accuracy</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-slate-600 text-sm">Technical Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden"
              data-strk-bg-id="about-bg-p1q2r3"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-blue-100 text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    product: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '', product: '' });
    } catch (err) {
      setError(err.message || 'Failed to send message');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Get Your Custom Quote
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Ready to upgrade your sheet metal operations? Contact our team for 
              personalized recommendations, pricing, and technical specifications.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                  <p className="text-slate-400">Mon-Fri: 8AM - 6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-slate-400">sales@artitectmachinery.com</p>
                  <p className="text-slate-400">support@artitectmachinery.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Headquarters</h3>
                  <p className="text-slate-400">1234 Industrial Parkway</p>
                  <p className="text-slate-400">Detroit, MI 48201, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Product Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 bg-white"
                >
                  <option value="">Select a product</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center font-medium" role="status">
                  Thank you! We will contact you shortly.
                </p>
              )}
              {status === 'error' && error && (
                <p className="text-red-500 text-center font-medium" role="alert">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg text-white">
                A
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">ARTITECT</span>
                <span className="block text-xs font-medium tracking-widest uppercase text-slate-500">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading manufacturer of precision sheet metal folding machines 
              and industrial bending equipment since 1995.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Double Folder</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folding Machine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Metal Folder</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Metal Folding Machine</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request Quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#contact" className="hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spare Parts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty Info</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Header, Hero, Products, About, Contact, Footer };
