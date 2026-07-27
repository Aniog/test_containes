import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { icon: Users, title: 'Supplier Verification', desc: 'Factory audits, legal checks, and capability assessments.' },
    { icon: Award, title: 'Quality Inspection', desc: 'Pre-shipment, in-process, and final quality control.' },
    { icon: Clock, title: 'Production Monitoring', desc: 'Real-time updates on manufacturing progress.' },
    { icon: CheckCircle, title: 'Shipping Coordination', desc: 'Logistics planning and documentation support.' }
  ];

  const problems = [
    'Difficulty finding reliable suppliers',
    'Quality issues with received products',
    'Communication barriers with factories',
    'Unclear production timelines',
    'Complex shipping and customs processes'
  ];

  const trustPoints = [
    '8+ years in China sourcing',
    '500+ verified suppliers',
    '200+ successful projects',
    'Offices in Shanghai & Ningbo'
  ];

  const caseStudies = [
    { client: 'European Retail Chain', product: 'Home Textiles', result: '35% cost reduction', metric: '3 suppliers qualified' },
    { client: 'US Electronics Brand', product: 'PCB Components', result: 'Zero defects', metric: '12 inspections completed' },
    { client: 'Australian Importer', product: 'Furniture Hardware', result: 'On-time delivery', metric: '6 containers shipped' }
  ];

  const faqs = [
    { q: 'What is the minimum order quantity you handle?', a: 'We work with buyers of all sizes. MOQs vary by supplier and product category.' },
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits, review business licenses, and assess production capabilities.' },
    { q: 'What industries do you specialize in?', a: 'We source across consumer goods, electronics, textiles, furniture, and industrial components.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full project timelines vary.' }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">China Sourcing Agent for Global Buyers</h1>
            <p className="text-xl text-slate-300 mb-8">Connect with verified Chinese suppliers. Manage quality. Coordinate logistics. All handled by experienced sourcing professionals.</p>
            <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 inline-flex">
              Get a Free Sourcing Quote <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">End-to-end support for your China sourcing needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="card">
                <service.icon className="text-blue-800 mb-4" size={32} />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">The Sourcing Process</h2>
              <p className="text-slate-600 mb-6">A structured approach to finding and working with Chinese suppliers.</p>
              <ol className="space-y-4">
                {['Requirement Analysis', 'Supplier Identification', 'Verification & Audit', 'Sample Coordination', 'Production Oversight', 'Quality Inspection', 'Logistics Support'].map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="font-mono text-blue-800 font-semibold w-8">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
              <Link to="/how-it-works" className="btn-secondary mt-6 inline-flex">Learn More</Link>
            </div>
            <div className="card bg-white">
              <h3 className="font-semibold mb-4">Problems We Solve</h3>
              <ul className="space-y-3">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle mx-auto">Categories we regularly source for international clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {['Consumer Electronics', 'Home & Garden', 'Textiles & Apparel', 'Furniture & Fixtures', 'Industrial Components', 'Packaging Materials'].map((cat, idx) => (
              <div key={idx} className="card text-center">
                <p className="font-semibold">{cat}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn-secondary">Browse Categories</Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Buyers Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="card text-center">
                <div className="trust-badge mx-auto mb-3"><CheckCircle size={16} /> Verified</div>
                <p className="font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle mx-auto">Recent projects with measurable outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="case-card">
                <div className="p-6">
                  <p className="text-sm text-slate-500 mb-1">{study.client}</p>
                  <h3 className="font-semibold text-lg mb-4">{study.product}</h3>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="case-metric">{study.result}</div>
                      <div className="case-label">Outcome</div>
                    </div>
                    <div>
                      <div className="case-metric text-lg">{study.metric}</div>
                      <div className="case-label">Details</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="btn-secondary">View All Cases</Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <details key={idx} className="card">
                <summary className="faq-question cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400">+</span>
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="inquiry">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="section-title">Get a Free Sourcing Quote</h2>
            <p className="text-slate-600">Tell us about your sourcing needs. We'll respond within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="card text-center py-12">
              <CheckCircle className="mx-auto text-emerald-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Thank you for your inquiry.</h3>
              <p className="text-slate-600">Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
                </div>
                <div>
                  <label className="form-label">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
                </div>
              </div>
              <div>
                <label className="form-label">Product Category</label>
                <input type="text" name="product" value={formData.product} onChange={handleChange} required className="form-input" placeholder="e.g., Electronics, Textiles, Furniture" />
              </div>
              <div>
                <label className="form-label">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="form-textarea" placeholder="Describe your sourcing requirements, target quantities, timeline, and any specific needs." />
              </div>
              <button type="submit" className="btn-primary w-full">Submit Inquiry</button>
              <p className="text-xs text-center text-slate-500">Your information is kept confidential and used only to respond to your inquiry.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;