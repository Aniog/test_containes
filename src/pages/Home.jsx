import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks to confirm supplier legitimacy.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Regular updates and oversight throughout the manufacturing process.' },
    { title: 'Logistics Coordination', desc: 'Manage shipping arrangements and documentation with freight partners.' },
  ];

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We review your product specifications, target price, and quality standards.' },
    { step: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 verified suppliers based on your criteria.' },
    { step: '03', title: 'Quotation & Samples', desc: 'Suppliers provide quotes and samples for your evaluation.' },
    { step: '04', title: 'Order Management', desc: 'We oversee production, conduct inspections, and coordinate delivery.' },
  ];

  const products = [
    'Consumer Electronics', 'Home Appliances', 'Furniture & Home Decor', 'Industrial Machinery',
    'Textiles & Apparel', 'Automotive Parts', 'Packaging Materials', 'Building Supplies'
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% On-Time Delivery' },
    { icon: CheckCircle, label: '2,000+ Suppliers Verified' },
    { icon: Clock, label: '12 Years Experience' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 22% while improving product quality ratings.', category: 'Home Goods' },
    { client: 'US Industrial Distributor', result: 'Established reliable supply chain for 15 product categories in 6 months.', category: 'Industrial' },
    { client: 'Australian E-commerce Brand', result: 'Cut lead times from 90 to 45 days through supplier optimization.', category: 'Consumer Electronics' },
  ];

  const faqs = [
    { q: 'What is the minimum order quantity for sourcing?', a: 'MOQs vary by product category and supplier. We work with you to find options that match your volume requirements.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist is typically delivered within 5-7 business days. Full order cycle depends on product complexity.' },
    { q: 'Do you charge for factory verification visits?', a: 'Verification visits are included in our service packages. Travel costs within the region are covered.' },
    { q: 'What happens if quality issues are found during inspection?', a: 'We document issues and work with the supplier to address them before shipment. You approve final quality before release.' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Connect with verified Chinese manufacturers. Manage quality, production, and logistics with a dedicated sourcing partner.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-4">
                <point.icon className="w-8 h-8 text-slate-400" />
                <span className="font-medium text-slate-700">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Our Services</h2>
          <p className="text-slate-600 max-w-xl mx-auto">End-to-end support for sourcing from China, from supplier discovery to delivery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services"><Button variant="outline">View All Services</Button></Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Sourcing Process</h2>
            <p className="text-slate-600">A structured approach to finding and managing suppliers.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-semibold text-slate-300 mb-4">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works"><Button variant="outline">Learn More</Button></Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Products We Source</h2>
          <p className="text-slate-600">Categories we regularly source for clients worldwide.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-5 text-center text-sm font-medium hover:bg-slate-50 transition-colors">
              {product}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products"><Button variant="outline">Browse Categories</Button></Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Problems We Solve</h2>
            <p className="text-slate-400">Common challenges in China sourcing that we address daily.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-3 bg-slate-800 rounded-lg p-5">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Case Studies</h2>
          <p className="text-slate-600">Results from recent client engagements.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-6">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">{study.category}</div>
              <h3 className="font-semibold mb-3">{study.client}</h3>
              <p className="text-sm text-slate-600">{study.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies"><Button variant="outline">View All Case Studies</Button></Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact"><Button>Ask Your Question</Button></Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
        <p className="text-slate-600 mb-8">Tell us about your requirements and receive a customized sourcing plan within 48 hours.</p>
        <Link to="/contact">
          <Button size="lg">Get a Free Sourcing Quote</Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;