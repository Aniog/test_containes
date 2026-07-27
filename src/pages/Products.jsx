import PageHeader from "@/components/layout/PageHeader"
import Products from "@/components/sections/Products"
import CTASection from "@/components/sections/CTASection"

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products we source"
        title="Product categories we source with confidence"
        description="We focus on categories where we have audited factory relationships and proven quality control — so you get consistent results."
      />
      <Products />
      <CTASection />
    </>
  )
}
