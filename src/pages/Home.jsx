import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion } from '@/components/ui/accordion';
import { CheckCircle2, ShieldCheck, Factory, Ship, Search, ClipboardCheck, Package, Globe, ArrowRight, Star } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

const trustPoints = [
  { icon: ShieldCheck, title: 'Verified Factories', desc: 'Every supplier is audited on-site before we recommend them.' },
  { icon: ClipboardCheck, title: 'Independent QC', desc: 'Random inspections and pre-shipment checks to protect your quality standards.' },
  { icon: Ship, title: 'End-to-End Logistics', desc: 'From factory to your warehouse, we manage freight, docs, and timelines.' },
  { icon: Globe, title: 'Global Buyers Only', desc: 'We work exclusively with overseas buyers, so we understand your market.' },
];

const problems = [
  { title: 'Unreliable suppliers', desc: 'We verify every factory and negotiate contracts that protect your interests.' },
  { title: 'Quality issues', desc: 'Our QC team inspects at key production stages and before shipment.' },
  { title: 'Hidden costs', desc: 'We provide transparent quotes with no surprise fees.' },
  { title: 'Communication gaps', desc: 'Bilingual project managers keep you updated in real time.' },
];

const faqItems = [
  { title: 'How do you verify suppliers?', content: 'We conduct on-site audits, check business licenses, review production capacity, and visit the factory floor. We also request references from other international buyers.' },
  { title: 'What does quality inspection include?', content: 'Inspections cover raw materials, in-process checks, pre-shipment verification, and container loading supervision. We follow internationally recognized standards (AQL).' },
  { title: 'How long does the sourcing process take?', content: 'Typical timelines are 2-4 weeks for supplier identification, 1-2 weeks for samples, and 2-6 weeks for production, depending on product complexity.' },
  { title: 'Do you handle shipping and customs?', content: 'Yes. We coordinate freight forwarding, prepare shipping documents, and can arrange customs clearance support for most major markets.' },
  { title: 'What are your fees?', content: 'We charge a success-based sourcing fee (typically 3-8% of order value) plus optional QC and logistics fees. All costs are transparent and agreed upfront.' },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">Trusted by 200+ global buyers</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get a Free Sourcing Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9/5</span>
                  <span>from 80+ reviews</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-slate-300" />
                <div className="hidden sm:flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>500+ successful shipments</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden shadow-xl">
                <img
                  alt="China factory and quality inspection"
                  className="w-full h-full object-cover"
                  data-strk-img-id="home-hero-img-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Factory Verified</p>
                    <p className="text-xs text-slate-500">ISO 9001 certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why buyers choose SSourcing China</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine local expertise with international standards to give you confidence at every step.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <Card key={item.title} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common sourcing problems we solve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Overseas buyers face the same challenges time and again. Here is how we help.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((item) => (
              <div key={item.title} className="flex gap-4 bg-white p-6 rounded-lg border border-slate-200">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">✕</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our core services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From the first supplier search to final delivery, we cover the full sourcing cycle.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and vet manufacturers that match your product specs, volume needs, and budget.' },
              { icon: Factory, title: 'Factory Verification', desc: 'On-site audits, capability assessments, and legal due diligence before you commit.' },
              { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-production, in-line, and pre-shipment inspections with detailed reports.' },
              { icon: Package, title: 'Order Follow-Up', desc: 'We track production schedules, manage changes, and keep you informed.' },
              { icon: Ship, title: 'Shipping Coordination', desc: 'Freight forwarding, customs docs, and logistics from port to your door.' },
              { icon: Globe, title: 'Sourcing Consulting', desc: 'Market insights, cost optimization, and negotiation support for long-term partnerships.' },
            ].map((service) => (
              <Card key={service.title} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View all services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent case studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Real results for real buyers. See how we have helped companies source better from China.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Electronics distributor cuts costs by 18%', category: 'Electronics', result: '18% cost reduction' },
              { title: 'Home goods brand passes 3rd-party audit', category: 'Home & Garden', result: 'Zero defects' },
              { title: 'Auto parts buyer reduces lead time by 22%', category: 'Automotive', result: '22% faster delivery' },
            ].map((cs) => (
              <Card key={cs.title} className="border-slate-200">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{cs.category}</Badge>
                  <CardTitle className="text-lg leading-snug">{cs.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">How we helped this buyer find the right factory, set up QC, and ship on time.</p>
                  <p className="text-sm font-semibold text-slate-900">Result: {cs.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                Read more case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
            <p className="text-slate-600">Quick answers to common questions about working with a China sourcing agent.</p>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to source from China?</h2>
              <p className="text-slate-600 mb-6">
                Tell us what you need. We will get back to you within 1 business day with a clear plan and transparent pricing.
              </p>
              <ul className="space-y-3">
                {['No obligation, no hidden fees', 'Dedicated sourcing specialist', 'Factory audit included in quote', 'QC reports in English'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
