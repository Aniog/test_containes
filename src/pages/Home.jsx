import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Problems from "@/components/sections/Problems";
import Trust from "@/components/sections/Trust";
import CaseStudies from "@/components/sections/CaseStudies";
import FAQ from "@/components/sections/FAQ";
import InquiryForm from "@/components/sections/InquiryForm";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies limit={3} />
      <FAQ />
      <CTABanner />
      <InquiryForm />
    </>
  );
}
