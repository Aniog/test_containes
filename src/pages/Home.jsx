import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Factory, BoxSelect, Ship, Users, Handshake, TrendingUp, HelpCircle } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <span className="inline-flex rounded-full bg-blue-50/50 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/20">
                    Trusted by 500+ global buyers
                  </span>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl" id="hero-title">
                  China Sourcing Agent for Global Buyers
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600" id="hero-subtitle">
                  We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping in China. Save time, reduce costs, and mitigate risks.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/contact"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get a Free Sourcing Quote
                  </Link>
                  <Link to="/how-it-works" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 hover:text-blue-600">
                    See How It Works <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl relative">
              <div className="bg-blue-500 absolute inset-0 -translate-x-4 -translate-y-4 rounded-3xl -z-10" />
              <img
                data-strk-img-id="hero-img-china-sourcing"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China Sourcing Specialists at Work"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Points / Logos */}
      <div className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <h2 className="text-center text-lg font-semibold leading-8 text-slate-900 mb-8" id="trust-title">Why Global Businesses Choose Us</h2>
           <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center gap-y-10 justify-items-center">
              {[
                { label: "10+ Years Experience", icon: TrendingUp },
                { label: "Strict Factory Audits", icon: ShieldCheck },
                { label: "On-Site Quality Control", icon: CheckCircle2 },
                { label: "End-to-End Logistics", icon: Ship }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <item.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Full Service Sourcing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" id="services-title">Everything you need to source from China</p>
            <p className="mt-6 text-lg leading-8 text-slate-600" id="services-subtitle">
              We act as your local office in China, handling every step of the sourcing process so you can focus on growing your business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                { titleId: "svc-source-title", descId: "svc-source-desc", title: "Find & Evaluate Suppliers", description: "We source from our pre-vetted database and public markets, presenting you with the most capable and well-priced manufacturers, not just traders.", icon: Search },
                { titleId: "svc-sample-title", descId: "svc-sample-desc", title: "Sample Consolidation", description: "We collect samples from multiple factories, check them against your specs, and send them to you in one package to save high international shipping costs.", icon: BoxSelect },
                { titleId: "svc-audit-title", descId: "svc-audit-desc", title: "Factory Audits", description: "Our team visits factories on-site to verify their real production capacity, quality management systems, and business licenses before you place any orders.", icon: Factory },
                { titleId: "svc-prod-title", descId: "svc-prod-desc", title: "Production Follow-up", description: "We keep constant communication with the factory during production, resolving issues early and ensuring your timeline is met.", icon: Users },
                { titleId: "svc-qc-title", descId: "svc-qc-desc", title: "Quality Inspection (QC)", description: "We perform AQL standard inspections (Pre-production, During Production, Pre-shipment) and provide detailed photo/video reports.", icon: ShieldCheck },
                { titleId: "svc-ship-title", descId: "svc-ship-desc", title: "Logistics Coordination", description: "From arranging containers to customs clearance, we work with reliable freight forwarders to deliver goods to your warehouse smoothly.", icon: Ship },
              ].map((service, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900" id={service.titleId}>
                    <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto" id={service.descId}>{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 flex justify-center">
             <Link to="/services" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 flex items-center gap-1">
                View all services in detail <ArrowRight className="h-4 w-4" />
             </Link>
          </div>
        </div>
      </div>

      {/* Problems We Solve */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="problems-title">Overcome common China sourcing challenges</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300" id="problems-subtitle">
              Sourcing overseas comes with inherent risks. Our team is on the ground to mitigate these problems before they affect your bottom line.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
             <div className="bg-slate-800 p-8 rounded-2xl ring-1 ring-white/10">
                <dt className="font-semibold text-white mb-2">Scams & Fake Factories</dt>
                <dd>We physically verify suppliers to ensure they are real manufacturers, not trading companies posing as factories.</dd>
             </div>
             <div className="bg-slate-800 p-8 rounded-2xl ring-1 ring-white/10">
                <dt className="font-semibold text-white mb-2">Language & Cultural Barriers</dt>
                <dd>Our bilingual team negotiates effectively, ensuring your precise specifications are understood without translation errors.</dd>
             </div>
             <div className="bg-slate-800 p-8 rounded-2xl ring-1 ring-white/10">
                <dt className="font-semibold text-white mb-2">Quality Fade</dt>
                <dd>Factories often lower quality over time. We conduct inspections before every shipment to ensure standards remain consistent.</dd>
             </div>
          </dl>
        </div>
      </div>

      {/* Products We Source Snippet */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl" id="products-snippet-title">Products We Source</h2>
            <p className="mt-4 text-lg text-slate-600" id="products-snippet-desc">We have extensive networks across major industrial clusters in China.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "electronics", title: "Consumer Electronics", desc: "Smart home devices, audio, wearables, and accessories." },
              { id: "home-garden", title: "Home & Garden", desc: "Furniture, kitchenware, decor, and outdoor equipment." },
              { id: "apparel", title: "Apparel & Textiles", desc: "Clothing, fabrics, bags, and fashion accessories." }
            ].map(cat => (
              <div key={cat.id} className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 mb-6">
                  <img
                    data-strk-img-id={`prod-cat-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] [cat-desc-${cat.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900" id={`cat-title-${cat.id}`}>{cat.title}</h3>
                <p className="mt-2 text-sm text-slate-600" id={`cat-desc-${cat.id}`}>{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">
              See All Product Categories
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to streamline your China sourcing?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Tell us about your sourcing needs, and we'll get back to you with a customized plan within 24 hours. No obligations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-100 flex items-center gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;