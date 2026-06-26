import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PROCESS } from "@/data/site";

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";

const HowItWorks = () => {
  return (
    <>
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x py-14 md:py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 mb-3">
            How It Works
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight max-w-3xl mx-auto">
            A clear process from first inquiry to your destination port
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl mx-auto">
            Each step has a written record and a clear owner on our team. You
            always know what is happening, what is next, and how decisions are
            made.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="relative bg-white border border-line rounded-lg p-7"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-ink-900 text-white text-base font-bold">
                    {p.step}
                  </span>
                  <h2 className="text-xl font-bold text-ink-900">{p.title}</h2>
                </div>
                <p className="text-ink-700 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-soft border-y border-line">
        <div className="container-x py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="What You Receive"
              title="Reports and documents at every stage"
              subtitle="Everything we produce is yours to keep, share internally, or attach to your own records."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              <li>Supplier comparison sheet with capabilities and pricing</li>
              <li>Factory verification report with photos and video</li>
              <li>Sample feedback sheet and approval record</li>
              <li>Inspection reports with defect photos and AQL results</li>
              <li>Production milestone updates and shipping documents</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-line bg-paper-muted shadow-card">
              <img
                alt="Reports and documents"
                data-strk-img-id="howit-reports-2a91cf"
                data-strk-img="[howit-reports-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholder}
                className="w-full h-full object-cover"
              />
            </div>
            <p id="howit-reports-title" className="sr-only">
              Reports and documents
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="container-x py-14 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to start your sourcing project?
          </h2>
          <p className="mt-3 text-ink-100/85 max-w-2xl mx-auto">
            Share your product specs and target quantity. We reply within one
            working day with a shortlist and a written plan.
          </p>
          <div className="mt-7">
            <Button as={Link} to="/contact#quote" size="lg" variant="primary">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;