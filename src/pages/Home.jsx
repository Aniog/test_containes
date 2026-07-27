import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessSteps from "@/components/home/ProcessSteps";
import ProductsGrid from "@/components/home/ProductsGrid";
import ProblemsSolved from "@/components/home/ProblemsSolved";
import TrustPoints from "@/components/home/TrustPoints";
import CaseStudies from "@/components/home/CaseStudies";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import InquiryForm from "@/components/shared/InquiryForm";
import SectionHeader from "@/components/shared/SectionHeader";

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <ProcessSteps />
      <ProductsGrid />
      <ProblemsSolved />
      <TrustPoints />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <FAQ />
      <section
        id="inquiry"
        className="relative overflow-hidden bg-muted"
      >
        <div className="container-x grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Request a quote"
              title="Tell us what you need. We reply within 1 business day."
              titleId="home-inquiry-title"
              description="No commitment. Your inquiry goes directly to a senior sourcing agent based in our Shanghai office — not a CRM form. We sign an NDA on request."
              descriptionId="home-inquiry-desc"
            />
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                Shortlist of 3–5 verified Chinese factories in 48 hours.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                Itemized price, MOQ, lead time and sample cost.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                Optional NDA before we review your product details.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
