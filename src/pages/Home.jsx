import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProductsStrip from "@/components/sections/ProductsStrip";
import ProblemsWeSolve from "@/components/sections/ProblemsWeSolve";
import TrustPoints from "@/components/sections/TrustPoints";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import InquiryForm from "@/components/ui/InquiryForm";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <ProductsStrip />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <Faq limit={6} />

      {/* Inquiry form */}
      <section className="section section-muted">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Start a project"
                title="Tell us what you are looking for"
                description="The more detail you can share — spec, target price, destination port, timeline — the more useful our first reply will be."
              />
              <ul className="mt-8 space-y-3 text-sm text-brand-ink">
                {[
                  "Acknowledged within one business day",
                  "A short-list of 3–5 qualified factories",
                  "Sample quotes and our recommendation",
                  "No fee for the initial conversation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
