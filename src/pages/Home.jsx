import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, ShieldCheck, Gauge, Wrench, Phone, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      desc: 'High-precision dual-action folding for complex bends and consistent angles.',
      imgId: 'product-double-folding-machine-8f2a9c',
      titleId: 'product-double-folding-machine-title',
      descId: 'product-double-folding-machine-desc',
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      desc: 'Compact yet powerful folder designed for medium-duty production runs.',
      imgId: 'product-double-folder-3b1d7e',
      titleId: 'product-double-folder-title',
      descId: 'product-double-folder-desc',
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      desc: 'Versatile folder handling a wide range of sheet thicknesses with ease.',
      imgId: 'product-sheet-metal-folder-5c9a2f',
      titleId: 'product-sheet-metal-folder-title',
      descId: 'product-sheet-metal-folder-desc',
    },
    {
      id: 'sheet-metal-folding-machine',
      title: 'Sheet Metal Folding Machine',
      desc: 'Industrial-grade folding machine built for high-volume manufacturing.',
      imgId: 'product-sheet-metal-folding-machine-1e4b8d',
      titleId: 'product-sheet-metal-folding-machine-title',
      descId: 'product-sheet-metal-folding-machine-desc',
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder',
      desc: 'Reliable metal folder delivering clean bends and smooth finishes.',
      imgId: 'product-metal-folder-7d3c6a',
      titleId: 'product-metal-folder-title',
      descId: 'product-metal-folder-desc',
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      desc: 'Heavy-duty folder machine engineered for demanding production environments.',
      imgId: 'product-metal-folder-machine-9f2e4b',
      titleId: 'product-metal-folder-machine-title',
      descId: 'product-metal-folder-machine-desc',
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      desc: 'Advanced folding machine with programmable controls for repeatable accuracy.',
      imgId: 'product-metal-folding-machine-2a8c5d',
      titleId: 'product-metal-folding-machine-title',
      descId: 'product-metal-folding-machine-desc',
    },
  ];

  const features = [
    {
      icon: Gauge,
      title: 'Precision Engineering',
      desc: 'Every machine is calibrated for micron-level accuracy, ensuring consistent bend quality across every job.',
    },
    {
      icon: ShieldCheck,
      title: 'Built to Last',
      desc: 'Heavy-duty construction with premium components means years of reliable, low-maintenance operation.',
    },
    {
      icon: Wrench,
      title: 'Easy Operation',
      desc: 'Intuitive controls and ergonomic design let your team get up to speed quickly and work efficiently.',
    },
    {
      icon: CheckCircle2,
      title: 'Full Support',
      desc: 'From installation to training and ongoing service, our team is with you every step of the way.',
    },
  ];

  return (
    <div ref={containerRef} className="font-sans text-brand-800 antialiased">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-brand-900"
          data-strk-bg-id="hero-bg-6d34fa"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-brand-700/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-white uppercase">
                Precision Sheet Metal Solutions
              </span>
            </div>

            <h1 id="hero-title" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              ARTITECT<br />
              <span className="text-accent-400">MACHINERY</span>
            </h1>

            <p id="hero-subtitle" className="text-lg sm:text-xl text-brand-200 leading-relaxed mb-10 max-w-2xl">
              Premium double folding machines, sheet metal folders, and metal folding machines engineered for precision, durability, and performance in modern manufacturing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-800 font-semibold rounded hover:bg-brand-50 transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Request Quote
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#products" className="text-white/60 hover:text-white transition-colors" aria-label="Scroll down">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-500 uppercase mb-4">
              Our Products
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
              Precision Folding Machines
            </h2>
            <p className="text-lg text-brand-500 leading-relaxed">
              From compact double folders to heavy-duty metal folding machines, we offer a complete range of sheet metal folding solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-white border border-brand-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="font-display text-xl font-semibold text-brand-900 mb-2">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-brand-500 text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-500 uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
              Engineered for Excellence
            </h2>
            <p className="text-lg text-brand-500 leading-relaxed">
              Every ARTITECT MACHINERY product reflects our commitment to quality, innovation, and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-brand-100 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-800 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-500 uppercase mb-4">
                About Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
                Precision Meets Innovation
              </h2>
              <div className="space-y-4 text-brand-500 leading-relaxed">
                <p>
                  ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over two decades. We specialize in designing and manufacturing high-performance folding machines that meet the demanding needs of modern fabrication shops.
                </p>
                <p>
                  Our product line includes double folding machines, double folders, sheet metal folders, sheet metal folding machines, metal folders, metal folder machines, and metal folding machines — each engineered with precision and built to last.
                </p>
                <p>
                  From small workshops to large-scale industrial operations, our machines deliver consistent accuracy, reliability, and value. We combine advanced engineering with practical design to create equipment that truly works for you.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-brand-100">
                <div>
                  <div className="font-display text-3xl font-bold text-brand-800">20+</div>
                  <div className="text-sm text-brand-500 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-brand-800">500+</div>
                  <div className="text-sm text-brand-500 mt-1">Clients Worldwide</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-brand-800">100%</div>
                  <div className="text-sm text-brand-500 mt-1">Quality Tested</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-100">
                <img
                  alt="ARTITECT MACHINERY manufacturing facility"
                  data-strk-img-id="about-factory-img-4e7c3a"
                  data-strk-img="[about-subtitle] [about-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-800 text-white p-6 rounded-xl shadow-xl">
                <div className="font-display text-2xl font-bold">ISO 9001</div>
                <div className="text-sm text-brand-200">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-500 uppercase mb-4">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-900 mb-6">
                Let's Discuss Your Needs
              </h2>
              <p className="text-lg text-brand-500 leading-relaxed mb-10">
                Whether you need a standard model or a custom solution, our team is ready to help you find the perfect folding machine for your operation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900">Call Us</div>
                    <a href="tel:+1234567890" className="text-brand-500 hover:text-brand-800 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900">Email Us</div>
                    <a href="mailto:info@artitect-machinery.com" className="text-brand-500 hover:text-brand-800 transition-colors">
                      info@artitect-machinery.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900">Visit Us</div>
                    <div className="text-brand-500">Industrial Zone, Manufacturing District</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-brand-100">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-700 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Product Interest
                  </label>
                  <select
                    id="product"
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a product...</option>
                    <option>Double Folding Machine</option>
                    <option>Double Folder</option>
                    <option>Sheet Metal Folder</option>
                    <option>Sheet Metal Folding Machine</option>
                    <option>Metal Folder</option>
                    <option>Metal Folder Machine</option>
                    <option>Metal Folding Machine</option>
                    <option>Other / Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-800 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-800 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
