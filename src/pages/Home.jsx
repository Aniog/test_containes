import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, CheckCircle, ClipboardCheck, Factory, Truck, 
  Shield, Users, Award, Clock, TrendingUp 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import CaseStudyCard from '../components/CaseStudyCard';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements.',
      details: ['Product specification matching', 'Supplier database access', 'Initial capability screening'],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits and background checks to confirm legitimacy, production capacity, and business credentials.',
      details: ['Business license verification', 'Production capacity assessment', 'Management system review'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections, in-line production checks, and sample verification to reduce defect risk.',
      details: ['Pre-shipment inspection (PSI)', 'During production inspection', 'Sample approval coordination'],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular progress updates and milestone tracking to keep your orders on schedule.',
      details: ['Weekly production reports', 'Milestone verification', 'Issue escalation management'],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'Freight booking, documentation handling, and logistics oversight from factory to destination port.',
      details: ['Freight quote comparison', 'Export documentation', 'Container loading supervision'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirement Definition',
      description: 'We discuss your product needs, target price range, quality expectations, and timeline.',
      items: ['Product specifications', 'Compliance requirements', 'Volume and packaging needs'],
    },
    {
      number: '02',
      title: 'Supplier Identification',
      description: 'We search our network and conduct initial screening to shortlist 3-5 suitable manufacturers.',
      items: ['Capability matching', 'Preliminary pricing', 'MOQ and lead time review'],
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      description: 'We visit factories, verify credentials, and coordinate samples for your approval.',
      items: ['On-site factory audit', 'Sample production', 'Quality assessment'],
    },
    {
      number: '04',
      title: 'Order Management',
      description: 'Once you place an order, we monitor production, conduct inspections, and manage logistics.',
      items: ['Production tracking', 'Quality inspections', 'Shipping coordination'],
    },
    {
      number: '05',
      title: 'Delivery & Follow-up',
      description: 'We ensure goods reach your destination and provide documentation for customs clearance.',
      items: ['Bill of lading handling', 'Customs documentation', 'Post-delivery support'],
    },
  ];

  const productCategories = [
    'Consumer Electronics & Accessories',
    'Home & Kitchen Products',
    'Apparel, Textiles & Fashion',
    'Industrial Components & Tools',
    'Automotive Parts & Accessories',
    'Toys, Games & Sporting Goods',
    'Beauty, Health & Personal Care',
    'Furniture & Home Furnishings',
    'Packaging Materials & Supplies',
    'Garden, Outdoor & Seasonal',
  ];

  const problems = [
    {
      icon: Users,
      title: 'Unreliable Suppliers',
      description: 'Many buyers lose time and money dealing with factories that overpromise and underdeliver on quality or timelines.',
    },
    {
      icon: Shield,
      title: 'Quality Uncertainty',
      description: 'Without on-site verification, it is difficult to know whether a supplier can consistently meet your specifications.',
    },
    {
      icon: Clock,
      title: 'Communication Barriers',
      description: 'Language differences, time zones, and cultural gaps often lead to misunderstandings and costly mistakes.',
    },
    {
      icon: TrendingUp,
      title: 'Logistics Complexity',
      description: 'Arranging freight, documentation, and customs clearance can be overwhelming without local expertise.',
    },
  ];

  const trustPoints = [
    { number: '12+', label: 'Years in Operation' },
    { number: '850+', label: 'Factories Audited' },
    { number: '40+', label: 'Countries Served' },
    { number: '3,200+', label: 'Orders Managed' },
  ];

  const caseStudies = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Home & Garden',
      productType: 'Stainless Steel Cookware',
      challenge: 'Previous supplier delivered inconsistent wall thickness and finish quality, leading to high return rates.',
      solution: 'We conducted full factory audits, implemented a 3-point inspection protocol, and coordinated pre-production samples.',
      results: ['Defect rate reduced from 8% to under 1%', 'On-time delivery improved to 96%', 'Annual order volume increased 40%'],
    },
    {
      client: 'North American Electronics Brand',
      industry: 'Consumer Electronics',
      productType: 'Bluetooth Speakers & Accessories',
      challenge: 'Needed to qualify new suppliers for a product line expansion within a tight 10-week timeline.',
      solution: 'We shortlisted 4 factories, managed sample iterations, and performed inline production inspections.',
      results: ['4 qualified suppliers delivered in 8 weeks', 'First production batch passed AQL 2.5', 'Client launched on schedule'],
    },
  ];

  const faqs = [
    {
      q: 'How do you find suppliers for specialized or niche products?',
      a: 'We maintain a database of over 800 verified factories across major manufacturing regions in China. For specialized products, we conduct targeted searches through industry networks, trade shows, and supplier referrals, then apply the same verification process.',
    },
    {
      q: 'What does a typical factory audit include?',
      a: 'Our audits cover business registration, production capacity, equipment condition, quality management systems, worker conditions, and export experience. We provide a written report with photos and a risk assessment.',
    },
    {
      q: 'Do you charge a percentage of the order value?',
      a: 'Our fees are project-based or monthly retainer depending on scope. We do not take commissions from suppliers, which keeps our incentives aligned with yours. We provide transparent quotes before any work begins.',
    },
    {
      q: 'Can you help with compliance and certifications?',
      a: 'We can coordinate testing with accredited labs for common standards (CE, FCC, RoHS, REACH, CPSIA, etc.) and help ensure factories understand documentation requirements. Final compliance responsibility remains with the buyer and manufacturer.',
    },
    {
      q: 'What if there is a quality issue after shipment?',
      a: 'We document all inspections thoroughly. If issues arise that should have been caught, we work with the factory on your behalf for remediation. We also advise on contract terms and payment structures that protect buyers.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              We help overseas companies find reliable Chinese manufacturers, verify factories, 
              manage quality control, and coordinate production and shipping — with clear communication and documented processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-base">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-secondary border-white/30 text-white hover:bg-white/10 px-8 py-3 text-base">
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-slate-400 mt-4">No obligation. Typical response within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustPoints.map((point, idx) => (
              <div key={idx}>
                <div className="text-2xl font-semibold text-slate-900">{point.number}</div>
                <div className="text-sm text-slate-600 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="section container">
        <div className="mb-10">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">End-to-end support for buyers who need reliable supply from China without maintaining an office there.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="btn-secondary">View All Services →</Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">A structured process designed to reduce risk and keep you informed at every stage.</p>
          </div>
          <div className="max-w-3xl">
            {processSteps.map((step, idx) => (
              <ProcessStep key={idx} {...step} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/how-it-works" className="btn-secondary">Read Full Process →</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section container">
        <div className="mb-8">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">We work across a wide range of categories. If you do not see your product listed, contact us — we likely have relevant experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {productCategories.map((category, idx) => (
            <div key={idx} className="px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 hover:border-slate-300 transition-colors">
              {category}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/products" className="btn-secondary">Explore Product Categories →</Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Common Challenges We Address</h2>
            <p className="section-subtitle">Sourcing from China involves real risks. We help buyers manage them systematically.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="card flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded flex-shrink-0 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{problem.title}</h3>
                  <p className="text-sm text-slate-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="section container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Why Buyers Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
            <div className="card">
              <Award className="w-8 h-8 text-slate-700 mb-3" />
              <h3 className="font-semibold mb-2">Local Presence</h3>
              <p className="text-sm text-slate-600">Our team is based in Yiwu and Guangzhou with regular travel to major manufacturing regions. We speak the language and understand local business practices.</p>
            </div>
            <div className="card">
              <CheckCircle className="w-8 h-8 text-slate-700 mb-3" />
              <h3 className="font-semibold mb-2">Documented Process</h3>
              <p className="text-sm text-slate-600">Every audit, inspection, and shipment is recorded. You receive written reports with photos, not just verbal assurances.</p>
            </div>
            <div className="card">
              <Users className="w-8 h-8 text-slate-700 mb-3" />
              <h3 className="font-semibold mb-2">Buyer-Aligned</h3>
              <p className="text-sm text-slate-600">We do not earn commissions from factories. Our fees are paid by you, so our priority is protecting your interests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title mb-2">Recent Case Studies</h2>
              <p className="text-slate-600">Examples of how we have helped buyers improve supplier reliability and product quality.</p>
            </div>
            <Link to="/case-studies" className="hidden md:inline btn-secondary">All Case Studies →</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <CaseStudyCard key={idx} {...study} />
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <Link to="/case-studies" className="btn-secondary">All Case Studies →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section container">
        <div className="max-w-3xl">
          <h2 className="section-title mb-8">Frequently Asked Questions</h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-1">
                <details className="group">
                  <summary className="faq-question cursor-pointer list-none">
                    {faq.q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
                  </summary>
                  <div className="faq-answer">{faq.a}</div>
                </details>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Have a different question? <Link to="/contact" className="text-slate-900 underline">Contact us</Link> directly.
          </p>
        </div>
      </section>

      {/* Final CTA / Inquiry Form */}
      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Ready to Start Sourcing?</h2>
              <p className="text-slate-300">Tell us about your project. We will provide a preliminary assessment and quote within one business day.</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 text-slate-700">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;