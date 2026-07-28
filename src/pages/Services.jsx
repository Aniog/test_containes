import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Search, ShieldCheck, ClipboardCheck, Factory, Ship, PackageOpen } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/sections/PageHero.jsx";
import InquiryForm from "@/components/sections/InquiryForm.jsx";

const Services = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    let frame;
    if (containerRef.current) {
      frame = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six services, one accountable team"
        subtitle="Whether you need a complete sourcing project or just a single quality inspection on a shipment you have already placed, we work to a clear scope and a fixed fee."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondaryCta={{ to: "/how-it-works", label: "See How It Works" }}
      />

      <section ref={containerRef} className="bg-white">
        <div className="container-page section-pad space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600">
                <Search className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 id="detail-sourcing-title" className="mt-5 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                Supplier Sourcing
              </h2>
              <p id="detail-sourcing-body" className="mt-3 text-base text-ink-700 leading-relaxed">
                Shortlist 3–5 qualified factories for your product from our pre-vetted network.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Product-specific factory search across China</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Pre-screening on licenses, capacity and export history</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Side-by-side quotation comparison with cost breakdown</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="svc-detail-sourcing"
                  data-strk-img="[detail-sourcing-body] [detail-sourcing-title] supplier meeting factory showroom product samples"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  alt="Supplier Sourcing"
                  loading="lazy"
                  className="block aspect-[3/2] w-full h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 id="detail-audit-title" className="mt-5 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                Factory Audit & Verification
              </h2>
              <p id="detail-audit-body" className="mt-3 text-base text-ink-700 leading-relaxed">
                On-site audits to confirm the factory is real, capable and compliant.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Business license and legal-entity verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Production capacity, equipment and workforce check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Optional BSCI, SEDEX and ISO 9001 audit coordination</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="svc-detail-audit"
                  data-strk-img="[detail-audit-body] [detail-audit-title] factory audit inspector checklist production line walkthrough"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  alt="Factory Audit & Verification"
                  loading="lazy"
                  className="block aspect-[3/2] w-full h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600">
                <ClipboardCheck className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 id="detail-qc-title" className="mt-5 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                Quality Inspection
              </h2>
              <p id="detail-qc-body" className="mt-3 text-base text-ink-700 leading-relaxed">
                In-line, pre-shipment and container-loading inspections with photo reports.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>DUPRO and PSI inspections against your AQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Same-day written report with annotated photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>On-the-spot rework coordination when defects are found</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="svc-detail-qc"
                  data-strk-img="[detail-qc-body] [detail-qc-title] quality control inspector measuring product AQL pre-shipment"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  alt="Quality Inspection"
                  loading="lazy"
                  className="block aspect-[3/2] w-full h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600">
                <Factory className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 id="detail-production-title" className="mt-5 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                Production Follow-up
              </h2>
              <p id="detail-production-body" className="mt-3 text-base text-ink-700 leading-relaxed">
                Weekly progress updates so you always know where your order stands.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Milestone tracking: sample → PP → mass production → packing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Photo and video updates at each critical step</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Escalation handling for delays, material issues or shortages</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="svc-detail-production"
                  data-strk-img="[detail-production-body] [detail-production-title] production follow-up sewing line worker fabric inspection"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  alt="Production Follow-up"
                  loading="lazy"
                  className="block aspect-[3/2] w-full h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600">
                <Ship className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 id="detail-shipping-title" className="mt-5 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                Shipping & Logistics
              </h2>
              <p id="detail-shipping-body" className="mt-3 text-base text-ink-700 leading-relaxed">
                End-to-end freight coordination from the factory floor to your door.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Sea, air and rail freight with consolidations available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Customs documents, HS codes and export declarations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>DDP / DAP options and Amazon FBA delivery on request</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="svc-detail-shipping"
                  data-strk-img="[detail-shipping-body] [detail-shipping-title] freight forwarder shipping container yard cranes export"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  alt="Shipping & Logistics"
                  loading="lazy"
                  className="block aspect-[3/2] w-full h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600">
                <PackageOpen className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 id="detail-sampling-title" className="mt-5 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                Sampling & Prototyping
              </h2>
              <p id="detail-sampling-body" className="mt-3 text-base text-ink-700 leading-relaxed">
                Get physical samples in your hand before committing to a production order.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Coordinate sample making, revisions and re-shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>International courier (DHL / FedEx / UPS) at cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Sample cost refundable against future bulk orders</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                Ask about this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id="svc-detail-sampling"
                  data-strk-img="[detail-sampling-body] [detail-sampling-title] product samples courier packages prototype shipping box"
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  alt="Sampling & Prototyping"
                  loading="lazy"
                  className="block aspect-[3/2] w-full h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 border-y border-ink-200">
        <div className="container-page section-pad">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Engagement</p>
              <h2 id="engagement-title" className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Pick the services you actually need
              </h2>
              <p id="engagement-sub" className="mt-4 text-base text-ink-700 leading-relaxed">
                We do not lock you into a bundle. Most clients start with sourcing + sampling, then add inspections and shipping as the order matures. The only fixed thing is the project manager you talk to.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Flat project fee — quoted before we start</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Per-man-day inspection rates with travel included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>No markup on factory pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                  <span>Cancel any service between milestones</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
