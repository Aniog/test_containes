import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Truck, 
  Factory, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      description: 'Find reliable manufacturers that meet your specific requirements and budget.',
      icon: Search,
      id: 'service-sourcing'
    },
    {
      title: 'Factory Verification',
      description: 'On-site audits to verify factory legitimacy, capacity, and social compliance.',
      icon: ShieldCheck,
      id: 'service-verification'
    },
    {
      title: 'Quality Inspection',
      description: 'Strict QC at various production stages to ensure your standards are met.',
      icon: CheckCircle2,
      id: 'service-qc'
    },
    {
      title: 'Logistics Coordination',
      description: 'End-to-end shipping solutions from factory floor to your warehouse.',
      icon: Truck,
      id: 'service-logistics'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-9922x"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg leading-8 text-slate-300">
              Your professional partner in China. We help you find reliable suppliers, verify factories, inspect quality, and manage logistics with complete transparency.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Link to="/how-it-works" className="text-sm font-semibold leading-6 text-white">
                Learn how it works <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-4">
            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">500+</p>
              <p className="text-sm leading-6 text-slate-600">Verified Suppliers</p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">10k+</p>
              <p className="text-sm leading-6 text-slate-600">Containers Shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">15+</p>
              <p className="text-sm leading-6 text-slate-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight text-slate-900">98%</p>
              <p className="text-sm leading-6 text-slate-600">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Services</h2>
            <p id="services-subtitle" className="mt-4 text-lg text-slate-600">
              Comprehensive sourcing solutions designed to mitigate risks and maximize your profit margins.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 id={`${service.id}-title`} className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p id={`${service.id}-desc`} className="mt-2 text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="process-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How We Help You Grow</h2>
              <p id="process-subtitle" className="mt-4 text-lg text-slate-600">
                Sourcing from China shouldn't be a gamble. We provide a structured process to ensure quality and reliability at every step.
              </p>
              <div className="mt-10 space-y-8">
                {[
                  { step: '01', title: 'Inquiry & Sourcing', text: 'You send us requirements, we find the top 3-5 matching suppliers.' },
                  { step: '02', title: 'Sampling & Auditing', text: 'We coordinate samples and perform on-site factory audits.' },
                  { step: '03', title: 'Production Follow-up', text: 'We monitor production timelines to ensure on-time delivery.' },
                  { step: '04', title: 'QC & Shipping', text: 'Final quality check before we coordinate sea or air freight.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Reliable sourcing process"
                className="rounded-2xl shadow-2xl"
                data-strk-img-id="process-img-1"
                data-strk-img="[process-subtitle] [process-title] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="cta-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Source Smarter?
            </h2>
            <p id="cta-subtitle" className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Stop worrying about factory scams or poor quality. Get a professional sourcing team on the ground in China today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Get Free Quote Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
