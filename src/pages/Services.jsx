import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Factory, ShieldCheck, Ship, ClipboardCheck, PackageCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify manufacturers that match your product requirements, quality expectations, and budget. We share factory profiles, certifications, and references so you can make informed decisions.',
    details: ['Product category matching', 'Supplier shortlists with profiles', 'Price and capability benchmarking', 'Communication support in Mandarin and English'],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'Before you commit, we verify that a factory is legitimate, properly registered, and capable of delivering your order consistently.',
    details: ['Business license and registration checks', 'Production line and capacity review', 'Quality management system assessment', 'On-site audit reports with photos'],
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'We inspect goods at key production stages to reduce defects, returns, and delays. Reports include photos, measurements, and pass/fail results.',
    details: ['Pre-production inspections', 'During-production inspections', 'Pre-shipment inspections', 'Container loading supervision'],
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'We help manage freight, documentation, and customs requirements so your shipment moves smoothly from factory to destination.',
    details: ['Freight forwarding coordination', 'Documentation review', 'Customs support', 'Shipment tracking and updates'],
    icon: Ship,
  },
  {
    title: 'Production Follow-Up',
    description: 'We monitor production schedules, communicate with factories, and alert you to delays or issues so you can plan accordingly.',
    details: ['Schedule tracking', 'Progress updates', 'Issue escalation', 'Delivery coordination'],
    icon: ClipboardCheck,
  },
  {
    title: 'Product Sourcing Projects',
    description: 'For new product development or custom items, we can help source materials, samples, and pilot production runs.',
    details: ['Material sourcing', 'Sample coordination', 'Pilot production support', 'Cost optimization review'],
    icon: PackageCheck,
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Services</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Practical sourcing support from supplier search to delivery. Each service is designed to reduce risk and give you visibility into your order.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon className="h-6 w-6 text-slate-900" />
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Need a custom sourcing plan?</h2>
            <p className="mt-2 text-slate-300">Tell us your product, quantity, and destination. We will prepare a practical quote and timeline.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
