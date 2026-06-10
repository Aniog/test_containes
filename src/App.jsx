import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Precision-engineered for consistent, high-speed double folding operations on sheet metal.',
    features: ['Dual synchronized folding beams', 'Adjustable folding angles', 'Heavy-duty construction'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solution for a wide range of sheet metal thicknesses and materials.',
    features: ['Multiple bending modes', 'Easy angle adjustment', 'Compact footprint'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Industrial-grade machine delivering repeatable accuracy for production environments.',
    features: ['CNC-controlled folding', 'Touchscreen interface', 'Production-ready throughput'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust folder built for durability and precision in demanding workshop conditions.',
    features: ['Reinforced frame', 'Precision backgauge', 'Low maintenance design'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete folding system combining power, control, and operator-friendly design.',
    features: ['Integrated safety systems', 'Quick-change tooling', 'Ergonomic controls'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Specialized double-folder configuration for complex multi-angle bend sequences.',
    features: ['Sequential folding capability', 'Programmable sequences', 'High repeatability'],
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">
                ARTITECT MACHINERY
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Products</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors">
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block text-base font-medium text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#about" className="block text-base font-medium text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block text-base font-medium text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-0">
        <div className="grid lg:grid-cols-2 min-h-screen">
          <div className="flex items-center order-2 lg:order-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                  Precision Sheet Metal Machinery
                </p>
                <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Engineered for Precision Folding
                </h1>
                <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
                  ARTITECT MACHINERY delivers industrial-grade double folding machines, sheet metal folders, and metal folding solutions built for accuracy, durability, and operator confidence.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="#products" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                    Explore Products
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-medium px-6 py-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                    Contact Sales
                  </a>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">25+</p>
                    <p className="text-sm text-slate-500 mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">500+</p>
                    <p className="text-sm text-slate-500 mt-1">Machines Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">40+</p>
                    <p className="text-sm text-slate-500 mt-1">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 h-64 sm:h-80 lg:h-auto">
            <div
              className="absolute inset-0"
              data-strk-bg-id="hero-bg-8f2a9c"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1600"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-900/20" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Our Products
            </p>
            <h2 id="products-title" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Sheet Metal Folding Solutions
            </h2>
            <p id="products-subtitle" className="mt-4 text-lg text-slate-600">
              From double folding machines to precision metal folders, our product line covers every sheet metal folding requirement with industry-leading accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
                    <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 id={`product-${product.id}-title`} className="text-lg font-bold text-slate-900 mb-2">
                    {product.title}
                  </h3>
                  <p id={`product-${product.id}-desc`} className="text-slate-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                About Us
              </p>
              <h2 id="about-title" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Precision Engineering Since Day One
              </h2>
              <p id="about-text" className="mt-6 text-slate-600 leading-relaxed">
                ARTITECT MACHINERY was founded with a singular focus: to build sheet metal folding machines that combine industrial strength with intuitive operation. Our double folding machines, sheet metal folders, and metal folding systems are trusted by manufacturers across 40+ countries.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Every machine we produce reflects our commitment to precision, durability, and user-friendly design. From compact workshop folders to high-volume production systems, we engineer solutions that help our customers fold better, faster, and with complete confidence.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">ISO 9001</p>
                  <p className="text-sm text-slate-500 mt-1">Certified Quality</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-2xl font-bold text-slate-900">24/7</p>
                  <p className="text-sm text-slate-500 mt-1">Global Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-lg"
                data-strk-bg-id="about-bg-9b2d3e"
                data-strk-bg="[about-title] [about-text]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Contact Us
              </p>
              <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Let's Discuss Your Folding Needs
              </h2>
              <p id="contact-text" className="mt-4 text-slate-600 leading-relaxed">
                Whether you need a single double folding machine or a complete production line, our team is ready to help you find the right solution.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600 mt-0.5">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <p className="text-sm text-slate-600 mt-0.5">sales@artitect-machinery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Location</p>
                    <p className="text-sm text-slate-600 mt-0.5">Industrial Park, Building 7<br />Detroit, MI 48201</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your inquiry. Our team will contact you shortly.') }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                    <input
                      id="company"
                      type="text"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="product-interest" className="block text-sm font-medium text-slate-700 mb-1.5">Product Interest</label>
                  <select
                    id="product-interest"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors"
                  >
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send Inquiry
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">AM</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                ARTITECT MACHINERY
              </span>
            </div>
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#products" className="text-sm text-slate-400 hover:text-white transition-colors">Products</a>
              <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
