import PageHeader from "@/components/sections/PageHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import FAQ from "@/components/sections/FAQ";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Send us your product brief and we'll reply within 1 business day with clarifying questions, a sourcing plan and a clear service fee."
      />
      <InquiryForm />
      <FAQ />
    </>
  );
}
