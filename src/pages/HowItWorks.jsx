import PageHeader from "@/components/layout/PageHeader"
import Process from "@/components/sections/Process"
import Problems from "@/components/sections/Problems"
import FAQ from "@/components/sections/FAQ"
import CTASection from "@/components/sections/CTASection"

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A transparent sourcing process, start to finish"
        description="You always know what's happening with your order. Here's the path from your first message to delivered goods."
      />
      <Process />
      <Problems />
      <FAQ limit={4} />
      <CTASection />
    </>
  )
}
