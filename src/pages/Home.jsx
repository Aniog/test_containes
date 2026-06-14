import React from 'react';
import { ArrowRight, CheckCircle2, Settings, Shield, Wrench } from 'lucide-react';

const Home = () => {
  const products = [
    {
      title: 'Double Folding Machine',
      description: 'High-precision dual-axis folding for complex sheet metal bends.',
      imageId: 'double-folding-machine',
    },
    {
      title: 'Sheet Metal Folder',
      description: 'Versatile folder engineered for consistent, repeatable results.',
      imageId: 'sheet-metal-folder',
    },
    {
      title: 'Metal Folding Machine',
      description: 'Heavy-duty construction for industrial-grade metal folding.',
      imageId: 'metal-folding-machine',
    },
  ];

  const features = [
    {
      icon: Settings,
      title: 'Precision Engineering',
      description: 'CNC-controlled motion ensures micron-level accuracy on every fold.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Reinforced steel frames and premium components for maximum uptime.',
    },
    {
      icon: Wrench,
      title: 'Full Service Support',
      description: 'Installation, training, and ongoing maintenance from our expert team.',
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Precision Sheet Metal Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ARTITECT MACHINERY
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Advanced double folding machines, sheet metal folders, and metal folding systems
              engineered for manufacturers who demand accuracy, durability, and repeatability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <feature.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Our Product Range
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From compact folder machines to heavy-duty double folding systems, we build
              equipment that fits your production line.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                key={product.title}
                href="/products"
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    alt={product.title}
                    data-strk-img-id={`home-${product.imageId}`}
                    data-strk-img={`[${product.title}] [sheet metal folding machine] [metal folder]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Engineered for manufacturers who refuse to compromise
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every ARTITECT MACHINERY system is developed around real production challenges.
                Our double folding machines deliver the repeatability and speed that modern
                fabrication shops require.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Double folder configurations for complex bends',
                  'Sheet metal folder systems with quick-change tooling',
                  'Metal folding machines built for 24/7 operation',
                  'Full integration support with existing production lines',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
                <img
                  alt="ARTITECT MACHINERY production line"
                  data-strk-img-id="home-hero-machine"
                  data-strk-img="[ARTITECT MACHINERY] [double folding machine] [sheet metal folder]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
