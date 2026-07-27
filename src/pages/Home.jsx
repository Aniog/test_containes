import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', product: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-semibold text-lg">SS</span>
            </div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-slate-600 hover:text-slate-900">Services</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900">How It Works</Link>
            <Link to="/products" className="text-slate-600 hover:text-slate-900">Products</Link>
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6">
            Trusted by 200+ importers worldwide
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Find reliable suppliers, verify factories, inspect quality, and coordinate shipping with a dedicated sourcing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
              See How It Works
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-400">
            <div>ISO 9001 Certified</div>
            <div>12+ Years Experience</div>
            <div>98% On-Time Delivery</div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-slate-900 mb-1">200+</div>
              <div className="text-sm text-slate-600">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900 mb-1">1,800+</div>
              <div className="text-sm text-slate-600">Factories Verified</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900 mb-1">4,200+</div>
              <div className="text-sm text-slate-600">Orders Managed</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-slate-900 mb-1">35</div>
              <div className="text-sm text-slate-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-slate-500 tracking-widest mb-3">COMMON CHALLENGES</div>
            <h2 className="text-3xl font-semibold text-slate-900">Problems We Solve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Unreliable Suppliers", desc: "Many factories promise quality but deliver inconsistent results. We verify capabilities before you commit." },
              { title: "Quality Issues", desc: "Defective products, wrong specifications, and poor packaging lead to costly returns and damaged reputation." },
              { title: "Communication Barriers", desc: "Language gaps and time zone differences slow down production updates and create misunderstandings." },
              { title: "Hidden Costs", desc: "Unexpected fees, currency fluctuations, and unclear pricing structures erode your margins." },
              { title: "Logistics Complexity", desc: "Navigating shipping documentation, customs, and freight forwarders is time-consuming and error-prone." },
              { title: "IP & Compliance Risks", desc: "Without proper oversight, your designs and brand can be compromised by unauthorized production." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-sm font-medium text-slate-500 tracking-widest mb-3">WHAT WE OFFER</div>
              <h2 className="text-3xl font-semibold text-slate-900">Our Services</h2>
            </div>
            <Link to="/services" className="mt-4 md:mt-0 text-sm font-medium text-slate-900 flex items-center hover:gap-2 transition-all">
              View all services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Supplier Sourcing", desc: "Identify and shortlist qualified manufacturers matching your product requirements and volume needs." },
              { icon: Award, title: "Factory Verification", desc: "On-site audits covering production capacity, quality systems, financial stability, and compliance." },
              { icon: CheckCircle, title: "Quality Inspection", desc: "Pre-shipment, during-production, and pre-production inspections with detailed reporting." },
              { icon: Clock, title: "Production Monitoring", desc: "Weekly progress updates, milestone tracking, and proactive issue resolution throughout manufacturing." },
              { icon: Shield, title: "Compliance Support", desc: "Product testing coordination, certification guidance, and documentation for import requirements." },
              { icon: Award, title: "Logistics Coordination", desc: "Freight booking, customs documentation, and door-to-door delivery management." }
            ].map((service, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:border-slate-300 transition-colors group">
                <service.icon className="w-8 h-8 text-slate-700 mb-5" />
                <h3 className="font-semibold text-lg mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">OUR APPROACH</div>
            <h2 className="text-3xl font-semibold">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Brief", desc: "Share your product specs, target price, and timeline." },
              { step: "02", title: "Sourcing", desc: "We identify and screen 3-5 qualified suppliers." },
              { step: "03", title: "Verification", desc: "Factory audits and sample evaluation before selection." },
              { step: "04", title: "Production", desc: "Order placement with ongoing QC and progress tracking." },
              { step: "05", title: "Delivery", desc: "Final inspection, shipping coordination, and handover." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-semibold text-white/10 mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-white/20" />}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center text-sm font-medium text-white hover:text-slate-300">
              Learn more about our process <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-sm font-medium text-slate-500 tracking-widest mb-3">CATEGORIES</div>
              <h2 className="text-3xl font-semibold text-slate-900">Products We Source</h2>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 text-sm font-medium text-slate-900 flex items-center hover:gap-2 transition-all">
              Browse all categories <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Electronics & Components", "Home & Kitchen", "Apparel & Textiles", "Industrial Equipment", "Consumer Goods", "Packaging Materials"].map((cat, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl text-center hover:bg-slate-50 transition-colors">
                <div className="text-sm font-medium text-slate-900">{cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-sm font-medium text-slate-500 tracking-widest mb-3">RESULTS</div>
              <h2 className="text-3xl font-semibold text-slate-900">Case Studies</h2>
            </div>
            <Link to="/case-studies" className="mt-4 md:mt-0 text-sm font-medium text-slate-900 flex items-center hover:gap-2 transition-all">
              View all case studies <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { client: "European Retail Chain", result: "35% cost reduction", detail: "Consolidated 12 suppliers into 3 verified partners with improved lead times." },
              { client: "US Hardware Brand", result: "Zero defects in 18 months", detail: "Implemented inline QC checkpoints reducing returns from 8% to under 0.5%." },
              { client: "Australian Importer", result: "6-week faster delivery", detail: "Streamlined production monitoring and freight coordination for seasonal products." }
            ].map((study, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-emerald-600 font-semibold text-sm mb-4">{study.result}</div>
                <div className="font-semibold text-lg mb-2 text-slate-900">{study.client}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{study.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-slate-500 tracking-widest mb-3">QUESTIONS</div>
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is the minimum order quantity you can handle?", a: "We work with clients across various order sizes. MOQs vary by product category and supplier. We help negotiate reasonable terms based on your volume requirements." },
              { q: "How do you verify factory legitimacy?", a: "Our verification includes business license checks, on-site visits, production capacity assessment, quality system review, and reference checks with existing clients." },
              { q: "What are your service fees?", a: "Our fees are transparent and based on project scope. We provide a detailed quotation after understanding your requirements. There are no hidden charges." },
              { q: "How long does the sourcing process take?", a: "Initial supplier identification typically takes 1-2 weeks. Full verification and sample approval adds 2-4 weeks depending on product complexity and travel requirements." }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-xl p-6">
                <summary className="font-medium text-slate-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="text-sm font-medium text-slate-900">Still have questions? Contact us →</Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">NEXT STEP</div>
            <h2 className="text-3xl font-semibold mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-slate-400">Tell us about your project and we'll respond within 24 hours.</p>
          </div>
          {submitted ? (
            <div className="bg-emerald-900/30 border border-emerald-700 rounded-xl p-12 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-xl font-medium">Thank you. We'll be in touch shortly.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="bg-white/5 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40" />
                <input type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required className="bg-white/5 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required className="bg-white/5 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40" />
                <input type="text" name="product" placeholder="Product Category" value={formData.product} onChange={handleChange} required className="bg-white/5 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40" />
              </div>
              <textarea name="message" placeholder="Tell us about your sourcing requirements..." value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/40 resize-y" />
              <button type="submit" className="w-full py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
                Submit Inquiry
              </button>
              <p className="text-center text-xs text-slate-500">Your information is kept confidential. We respond within one business day.</p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white text-xs font-semibold">SS</span>
              </div>
              <span>SSourcing China</span>
            </div>
            <div className="flex gap-8">
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/how-it-works" className="hover:text-white">Process</Link>
              <Link to="/products" className="hover:text-white">Products</Link>
              <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs">© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;