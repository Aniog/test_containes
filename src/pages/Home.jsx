import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeProcess from "@/components/home/HomeProcess";
import HomeProducts from "@/components/home/HomeProducts";
import HomeProblems from "@/components/home/HomeProblems";
import HomeTrust from "@/components/home/HomeTrust";
import HomeCaseStudies from "@/components/home/HomeCaseStudies";
import HomeFaq from "@/components/home/HomeFaq";
import InquiryForm from "@/components/site/InquiryForm";
import SectionHeader from "@/components/site/SectionHeader";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <div>
      <div ref={heroRef}>
        <HomeHero />
      </div>
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <HomeFaq />

      <section id="inquiry" className="bg-white border-t border-border-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Inquiry"
                title="Get a free sourcing quote"
                description="Tell us what you want to source. A senior sourcing manager will review your brief and reply within one business day."
                align="left"
              />
              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  Initial supplier shortlist with 3 – 5 vetted factories
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  Standardized quotes (unit cost, MOQ, lead time, terms)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  Clear sourcing plan with milestones and fees
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  NDA available on request
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
