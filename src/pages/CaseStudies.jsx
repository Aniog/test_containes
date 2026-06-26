import PageHeader from "@/components/sections/PageHeader";
import CaseStudies from "@/components/sections/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Sourcing projects we've delivered for global buyers"
        description="Anonymized projects across electronics, home goods, apparel, furniture and promotional categories. Specific buyer names are available on request under NDA."
      />
      <CaseStudies withCta={false} />
      <CTABanner />
    </>
  );
}
