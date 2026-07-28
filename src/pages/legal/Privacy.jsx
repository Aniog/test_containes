import { useEffect, useRef } from "react";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Privacy() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="PRIVACY POLICY"
        title="How we handle your information"
        subtitle="This page explains what data we collect when you contact SSourcing China, why we need it, and how long we keep it. We keep things simple and practical."
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2>1. Information we collect</h2>
          <p>
            When you submit an inquiry or contact us, we collect the information
            you provide directly: your name, company, email, country, and the
            details of your project. We also collect basic technical information
            when you visit this website (such as page views and approximate
            country) through standard analytics tools.
          </p>

          <h2>2. How we use your information</h2>
          <p>
            We use the information you submit to respond to your inquiry, prepare
            a sourcing shortlist, and follow up about your project. We do not
            sell or rent your data to third parties. We do not use it for
            unrelated marketing.
          </p>

          <h2>3. Sharing with suppliers</h2>
          <p>
            When you ask us to source on your behalf, we share only the
            information that is necessary for a factory to provide a quotation
            or sample: typically your product specifications, target quantity,
            and destination country. We do not share your contact details with
            third-party marketing services.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We keep inquiry data for as long as we are actively working on your
            project, plus a reasonable period afterwards in case you return. You
            can ask us to delete your data at any time.
          </p>

          <h2>5. Your rights</h2>
          <p>
            You can request a copy of the data we hold about you, ask us to
            correct it, or ask us to delete it. To make a request, email
            info@ssourcing-china.com.
          </p>

          <h2>6. Cookies</h2>
          <p>
            This website uses only the cookies that are strictly necessary for
            the site to function, plus optional analytics cookies that help us
            understand which pages are useful. You can disable analytics in your
            browser settings.
          </p>

          <h2>7. Updates to this policy</h2>
          <p>
            We may update this policy from time to time. The "last updated" date
            at the bottom of the page reflects the most recent change. Material
            changes will be communicated to active clients by email.
          </p>

          <p className="text-sm text-slate-500 mt-12">Last updated: July 2026</p>
        </div>
      </section>

      <InquiryForm />
    </div>
  );
}
