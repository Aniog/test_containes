import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShieldCheck, ClipboardCheck, Truck, Users, Award,
  ArrowRight, CheckCircle 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import TrustBar from '../components/TrustBar';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements.',
      features: ['Product specification matching', 'Supplier shortlisting', 'Initial capability screening'],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site audits and background checks to confirm legitimacy, production capacity, and compliance before you commit.',
      features: ['Business license verification', 'Production capacity assessment', 'Compliance documentation review'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment and in-process inspections to ensure products meet agreed specifications before goods leave the factory.',
      features: ['Pre-shipment inspection', 'During production checks', 'Sample approval coordination'],
    },
    {
      icon: Truck,
      title: 'Production Follow-up',
      description: 'Monitor order progress, manage timelines, and address issues as they arise to keep production on schedule.',
      features: ['Production timeline tracking', 'Issue escalation', 'Regular progress reporting'],
    },
    {
      icon: Users,
      title: 'Order Coordination',
      description: 'Handle communication, documentation, and logistics coordination between you and your suppliers.',
      features: ['PO and contract management', 'Payment milestone coordination', 'Documentation handling'],
    },
    {
      icon: Award,
      title: 'Shipping Management',
      description: 'Coordinate freight, customs documentation, and delivery schedules to ensure smooth transit to your destination.',
      features: ['Freight booking support', 'Export documentation', 'Delivery timeline coordination'],
    },
  ];

  const problems = [
    'Difficulty finding factories that can meet your quality and volume requirements',
    'Uncertainty about whether a supplier is legitimate or has the claimed capabilities',
    'Quality issues discovered only after goods arrive at your warehouse',
    'Production delays with no visibility or accountability from the factory',
    'Language and cultural barriers complicating negotiations and specifications',
    'Complex logistics and documentation requirements for international shipping',
  ];

  const caseStudies = [
    {
      client: 'Home Goods Retailer, USA',
      product: 'Kitchenware Collection',
      result: 'Reduced defect rate from 8% to under 1% through structured QC process',
      metric: '87% defect reduction',
    },
    {
      client: 'E-commerce Brand, Germany',
      product: 'Consumer Electronics Accessories',
      result: 'Successfully onboarded 3 new verified suppliers within 6 weeks',
      metric: '3 suppliers qualified',
    },
    {
      client: 'Wholesale Distributor, Australia',
      product: 'Outdoor Furniture',
      result: 'Consolidated 4 separate orders into single consolidated shipment',
      metric: '22% logistics savings',
    },
  ];

  const faqs = [
    {
      q: 'How do you find suppliers for my product?',
      a: 'We use a combination of our existing supplier network, industry databases, and targeted outreach based on your specifications. We screen for production capability, export experience, and quality systems before presenting options.',
    },
    {
      q: 'Do you charge a commission on orders?',
      a: 'Our fees are transparent and agreed upfront. We offer project-based sourcing fees and ongoing management retainers. We do not take hidden commissions from suppliers.',
    },
    {
      q: 'Can you work with suppliers I already have?',
      a: 'Yes. We can audit and manage existing supplier relationships, implement quality controls, or help you diversify your supply base.',
    },
    {
      q: 'What if I am not ready to place an order yet?',
      a: 'Many clients begin with a supplier search or factory audit to evaluate options before committing to production. We can scope work to match your current stage.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-widest mb-6">
            EST. 2014 • YIWU, CHINA
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            We help overseas companies find reliable Chinese suppliers, verify factories, 
            inspect quality, and coordinate production and shipping with clear communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors text-base"
            >
              Get a Free Sourcing Quote <ArrowRight size={18} />
            </Link>
            <Link 
              to="/how-it-works" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 font-semibold rounded-xl hover:bg-white transition-colors text-base"
            >
              See How It Works
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-6">No obligation. Typical response within 24 hours.</p>
        </div>
      </section>

      <TrustBar />

      {/* Problems We Solve */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading 
          eyebrow="COMMON CHALLENGES" 
          title="Problems We Help Buyers Solve" 
          description="Sourcing from China involves more than finding a factory. These are the issues we address for our clients."
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex gap-3 bg-white border border-slate-200 rounded-xl p-5">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">{problem}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="WHAT WE DO" 
            title="Our Services" 
            description="End-to-end support from supplier identification through delivery coordination."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
              View all services in detail <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading 
          eyebrow="OUR APPROACH" 
          title="How We Work With You" 
          description="A structured process designed to reduce risk and improve outcomes at each stage."
        />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 mt-8">
          {[
            { num: '01', title: 'Discovery Call', desc: 'We discuss your product requirements, target pricing, quality expectations, and timeline.' },
            { num: '02', title: 'Supplier Search', desc: 'We identify and screen potential manufacturers based on your specifications and volume needs.' },
            { num: '03', title: 'Verification & Samples', desc: 'We audit shortlisted factories and coordinate sample production for your approval.' },
            { num: '04', title: 'Order Management', desc: 'We manage production follow-up, quality inspections, and documentation throughout the order.' },
            { num: '05', title: 'Shipping Coordination', desc: 'We assist with freight booking, export documentation, and delivery timeline management.' },
            { num: '06', title: 'Ongoing Support', desc: 'We provide post-delivery feedback collection and support for repeat or follow-on orders.' },
          ].map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="font-mono text-2xl font-semibold text-slate-300 w-12 flex-shrink-0">{step.num}</div>
              <div>
                <div className="font-semibold text-lg mb-1">{step.title}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/how-it-works" className="text-sm font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
            Read the full process <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="INDUSTRIES & PRODUCTS" 
            title="Products We Source" 
            description="We work across a wide range of product categories for B2B and retail clients."
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Consumer Electronics & Accessories', 'Home & Kitchen Products', 'Fashion & Apparel',
              'Beauty & Personal Care', 'Industrial Components', 'Automotive Parts & Accessories',
              'Toys & Games', 'Sports & Outdoor Equipment', 'Furniture & Home Decor',
              'Packaging Materials', 'Hardware & Tools', 'Pet Products',
            ].map((product, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-700">
                {product}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-sm font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
              Browse detailed product categories <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeading 
          eyebrow="WHY BUYERS WORK WITH US" 
          title="What Sets Us Apart" 
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'On-the-ground presence', desc: 'Our team is based in Yiwu with regular factory visits across Zhejiang, Guangdong, and Jiangsu provinces.' },
            { title: 'Transparent process', desc: 'You receive documented findings, photos, and clear recommendations. No hidden supplier commissions.' },
            { title: 'Practical communication', desc: 'We provide direct, actionable updates without jargon. English-speaking project managers assigned to each client.' },
          ].map((point, idx) => (
            <div key={idx} className="border-l-4 border-slate-900 pl-5">
              <div className="font-semibold text-lg mb-2">{point.title}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="RESULTS" 
            title="Recent Client Outcomes" 
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-7 bg-slate-50">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">{cs.client}</div>
                <div className="font-semibold text-lg mb-4">{cs.product}</div>
                <div className="text-sm text-slate-600 mb-4 leading-relaxed">{cs.result}</div>
                <div className="text-emerald-700 font-semibold text-sm">{cs.metric}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="text-sm font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
              Read full case studies <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeading 
          eyebrow="QUESTIONS" 
          title="Frequently Asked Questions" 
        />
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white">
              <div className="font-semibold text-slate-900 mb-2">{faq.q}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/contact" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Still have questions? Contact us →
          </Link>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-emerald-400 text-sm font-semibold tracking-widest mb-3">NEXT STEP</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Ready to start sourcing?</h2>
            <p className="text-slate-400 mt-3">Tell us about your project. We will respond within one business day.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
