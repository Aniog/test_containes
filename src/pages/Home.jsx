import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import SourcingProcess from "@/components/home/SourcingProcess";
import ProductsSection from "@/components/home/ProductsSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import TrustSection from "@/components/home/TrustSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import StatsBar from "@/components/sections/StatsBar";
import FAQSection from "@/components/home/FAQSection";
import InquiryForm from "@/components/sections/InquiryForm";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />

      {/* Inquiry CTA section */}
      <section id="inquiry" className="section bg-primary text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-wider font-semibold text-white/70 mb-3">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Tell us what you need. We reply within one business day.
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Share your product, target specifications, quantity, and destination.
                We will send back a shortlist of verified Chinese factories, a transparent
                quote, and a clear next step — no obligation.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-light" /> No upfront fees to discuss your project
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-light" /> Reply from a real sourcing manager
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent-light" /> Your details stay confidential
                </li>
              </ul>
              <div className="mt-6 text-sm text-white/70">
                Prefer email? <Link to="/contact" className="underline text-white">See all contact options</Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
