import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { SERVICES } from "@/data/site";

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";

const Services = () => {
  return (
    <>
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
              Sourcing, verification, QC, and shipping — done by a team on the ground.
            </h1>
            <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl">
              Use any of our services independently or as a complete package.
              We tailor the scope to your project, with transparent pricing and
              written reports at every stage.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button as={Link} to="/contact#quote" size="lg">
                Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as={Link} to="/how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-line bg-paper-muted shadow-card">
              <img
                alt="Sourcing services overview"
                data-strk-img-id="services-hero-d4e21c"
                data-strk-img="[services-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholder}
                className="w-full h-full object-cover"
              />
            </div>
            <p id="services-hero-title" className="sr-only">
              Sourcing services overview
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-line rounded-lg p-7 hover:border-ink-700 hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-ink-900 text-white shrink-0">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink-900">{s.title}</h2>
                    <p className="mt-2 text-ink-700 leading-relaxed">{s.short}</p>
                    <ul className="mt-4 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-trust shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-soft border-y border-line">
        <div className="container-x py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-ink-700 leading-relaxed max-w-2xl">
              Tell us your goal and we will recommend the right scope. A short
              chat now usually saves several emails later.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Button as={Link} to="/contact#quote" size="lg">
              Get a Free Sourcing Quote
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="lg">
              Talk to a Sourcing Manager
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;