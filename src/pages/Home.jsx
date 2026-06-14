import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Search,
  Factory,
  ShieldCheck,
  Ship,
  ClipboardCheck,
  PackageSearch,
  HeadphonesIcon,
  CheckCircle2,
  ArrowRight,
  Star,
  Globe,
  Users,
  TrendingUp,
  FileCheck2,
  Truck,
  Warehouse,
  ClipboardList,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';
import { createInquiry } from '@/api/inquiries';
import { useToast } from '@/components/ui/toast';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers that match your product specs, budget, and quality requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, capacity, compliance, and real production capability.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your standards.',
  },
  {
    icon: PackageSearch,
    title: 'Production Monitoring',
    description: 'Regular progress updates and on-ground follow-up to keep your production on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'A single point of contact who understands your business and speaks your language.',
  },
];

const problems = [
  {
    icon: ShieldCheck,
    title: 'Unreliable suppliers',
    description: 'We verify every factory so you avoid middlemen and trading companies with no real production capacity.',
  },
  {
    icon: FileCheck2,
    title: 'Quality issues',
    description: 'Our QC inspections catch defects before they leave the factory, reducing returns and chargebacks.',
  },
  {
    icon: TrendingUp,
    title: 'Rising costs',
    description: 'We negotiate pricing and optimize logistics to protect your margins without sacrificing quality.',
  },
  {
    icon: Truck,
    title: 'Shipping delays',
    description: 'We coordinate production timelines and freight schedules to keep your inventory on track.',
  },
];

const trustPoints = [
  { icon: Users, label: 'Buyers served', value: '500+' },
  { icon: Globe, label: 'Countries', value: '40+' },
  { icon: Factory, label: 'Verified factories', value: '2,000+' },
  { icon: Star, label: 'Client satisfaction', value: '98%' },
];

const processSteps = [
  { step: '01', title: 'Share your requirements', description: 'Tell us what you need: product specs, target price, order volume, and timeline.' },
  { step: '02', title: 'We source & verify', description: 'We find matching suppliers, audit factories, and share transparent reports.' },
  { step: '03', title: 'Samples & negotiation', description: 'We coordinate samples, negotiate terms, and align on quality standards.' },
  { step: '04', title: 'Production & QC', description: 'We monitor production and conduct inspections at key milestones.' },
  { step: '05', title: 'Shipping & delivery', description: 'We handle logistics, documentation, and final delivery to your door.' },
];

const faqs = [
  {
    question: 'What types of products can you source?',
    answer: 'We source a wide range of consumer and industrial goods including electronics, home goods, textiles, machinery parts, and more. If you have a specific product in mind, contact us for a feasibility assessment.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, review business licenses, check production capacity, and assess quality management systems. We also verify references and track records.',
  },
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'MOQ varies by product and supplier. We work with manufacturers across different scales and can often negotiate flexible MOQs based on your needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier matching typically takes 3-5 business days. Full verification and sample coordination can take 1-3 weeks depending on product complexity.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and last-mile delivery arrangements.',
  },
];

const Home = () => {
  const { toastSuccess } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    message: '',
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);
  const [openFaq, setOpenFaq] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      await createInquiry(formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', country: '', product_category: '', message: '' });
      toastSuccess('Inquiry submitted successfully! We will get back to you within 24 hours.');
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.3),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 text-xs font-medium text-blue-200 mb-6">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Trusted by 500+ global buyers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                    Get a Free Sourcing Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-600 text-slate-200 hover:bg-slate-800">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Inquiry form card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900">
              <h2 className="text-xl font-semibold mb-1">Get a Free Sourcing Quote</h2>
              <p className="text-sm text-slate-500 mb-6">Tell us what you need. We reply within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full name *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                    <Input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Your country" />
                  </div>
                </div>

                <div>
                  <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">Product category</label>
                  <Input id="product_category" name="product_category" value={formData.product_category} onChange={handleChange} placeholder="e.g. electronics, home goods" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Tell us about your sourcing needs *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Product specs, target price, order volume, timeline..." />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
                )}

                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </Button>

                {status === 'success' && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                    Thank you! We received your inquiry and will get back to you within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                <div className="text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600">
              From finding the right factory to delivering goods to your warehouse, we manage the full sourcing cycle so you can focus on growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Sourcing Problems We Solve</h2>
            <p className="text-lg text-slate-600">
              Many buyers face the same challenges when sourcing from China. Here is how we help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <problem.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">A Clear, Low-Risk Process</h2>
            <p className="text-lg text-slate-600">
              We keep you informed at every step so there are no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="relative bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                See Full Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products we source preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Products We Source</h2>
            <p className="text-lg text-slate-600">
              We work across multiple industries and product categories. Here are some of the most common.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Electronics & Components', 'Home & Garden', 'Textiles & Apparel', 'Industrial & Hardware'].map((category) => (
              <div key={category} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <PackageSearch className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{category}</h3>
                <p className="text-sm text-slate-600 mb-4">Verified suppliers, strict QC, and competitive pricing.</p>
                <Link to="/products" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-lg text-slate-600">
              Real results for real buyers. See how we helped companies source better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Reducing electronics sourcing costs by 18%', industry: 'Electronics' },
              { title: 'From sample to 40HQ container in 6 weeks', industry: 'Home Goods' },
              { title: 'Eliminating quality issues with pre-shipment inspection', industry: 'Textiles' },
            ].map((study) => (
              <div key={study.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">{study.industry}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-3">{study.title}</h3>
                <Link to="/case-studies" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  Read case study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-slate-200 rounded-lg">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Smarter from China?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need. We will find the right suppliers, verify them, and manage quality and shipping — so you get reliable products on time.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
