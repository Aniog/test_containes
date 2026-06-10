import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Search, Shield, Truck, ClipboardCheck, Package, ArrowRight, Star, Users, Factory } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Find verified manufacturers and suppliers matching your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business credentials, production capacity, and compliance with industry standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory to your warehouse, including customs clearance and documentation.',
  },
];

const problems = [
  { title: 'Unreliable suppliers', description: 'We verify every factory before you commit.' },
  { title: 'Quality issues', description: 'Professional QC inspections at every stage.' },
  { title: 'Communication barriers', description: 'Native English-speaking sourcing experts.' },
  { title: 'Hidden costs', description: 'Transparent pricing with no surprises.' },
  { title: 'Shipping delays', description: 'Experienced logistics coordination.' },
  { title: 'Time zone challenges', description: 'We work while you sleep.' },
];

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Clients Served' },
  { icon: Factory, stat: '1,200+', label: 'Verified Factories' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
  { icon: Package, stat: '50+', label: 'Product Categories' },
];

const processSteps = [
  { step: '01', title: 'Submit Inquiry', description: 'Share your product requirements, quantity, and budget.' },
  { step: '02', title: 'Supplier Matching', description: 'We find and verify suitable manufacturers.' },
  { step: '03', title: 'Factory Audit', description: 'On-site verification of factory capabilities.' },
  { step: '04', title: 'Sample & QC', description: 'Sample review and quality control setup.' },
  { step: '05', title: 'Production Monitor', description: 'Regular updates during manufacturing.' },
  { step: '06', title: 'Shipping & Delivery', description: 'Logistics coordination to your destination.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                China Sourcing Agent for <span className="text-blue-600">Global Buyers</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                We help overseas businesses source products from China with confidence. From supplier verification and quality control to shipping coordination, we manage the entire sourcing process so you can focus on growing your business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
              <div className="mt-10 flex items-center gap-8">
                {trustPoints.slice(0, 3).map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{item.stat}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
                <img
                  alt="China sourcing agent factory verification"
                  className="w-full h-full object-cover"
                  data-strk-img-id="hero-sourcing-img-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Factory Verified</div>
                    <div className="text-xs text-slate-500">ISO 9001 Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{item.stat}</div>
                <div className="text-sm text-slate-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">End-to-End Sourcing Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              From finding the right supplier to delivering products to your doorstep, we handle every step of the sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Common Sourcing Challenges We Solve</h2>
            <p className="mt-4 text-lg text-slate-600">
              Overseas buyers face many challenges when sourcing from China. Here's how we help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">✕</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{problem.title}</h3>
                  <p className="mt-1 text-slate-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How Our Sourcing Process Works</h2>
            <p className="mt-4 text-lg text-slate-600">
              A simple, transparent process designed to minimize risk and maximize results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-slate-100 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative bg-white rounded-xl p-6 border border-slate-200 h-full">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation sourcing quote. Tell us what you need, and we'll find the right suppliers for you.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'What types of products can you source?',
                a: 'We source a wide range of products including electronics, textiles, home goods, machinery, and more. If you have a specific product in mind, contact us and we\'ll let you know if we can help.',
              },
              {
                q: 'How do you verify suppliers?',
                a: 'We conduct on-site factory audits, verify business licenses, check production capacity, and assess quality control systems. We also check for any past compliance issues.',
              },
              {
                q: 'What are your fees?',
                a: 'Our fees depend on the scope of work. Typically, we charge a percentage of the order value for sourcing and QC services. Contact us for a detailed quote based on your needs.',
              },
              {
                q: 'How long does the sourcing process take?',
                a: 'Supplier matching usually takes 3-5 business days. Factory verification adds 2-3 days. The full process from inquiry to production typically takes 2-4 weeks depending on product complexity.',
              },
              {
                q: 'Do you handle shipping and customs?',
                a: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs clearance, and documentation. We can ship by sea, air, or express courier depending on your needs.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
