import PageHeader from "@/components/sections/PageHeader";
import InquirySection from "@/components/sections/InquirySection";
import FAQSection from "@/components/sections/FAQSection";

export default function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote — no obligation"
        description="Tell us about your product and we'll send back an honest assessment within one business day. Most replies come from a senior sourcing specialist, not a sales rep."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <InquirySection withHeader={false} />
      <FAQSection />
    </div>
  );
}
