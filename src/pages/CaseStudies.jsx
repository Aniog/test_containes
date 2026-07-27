import { useEffect } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import ImageContainer from "@/components/shared/ImageContainer"

export default function CaseStudies() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Case Studies | SSourcing China"
  }, [])

  return (
    <ImageContainer>
      <div className="bg-white">
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Case Studies
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Real results from real sourcing projects.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="How we help buyers win"
              description="Each case shows how our process solves a specific sourcing problem."
              centered
            />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="case-electronics-001"
                    data-strk-img="[case-electronics-retailer-result] [case-electronics-retailer-title] [case-electronics-retailer-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Electronics Retailer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Electronics</Badge>
                    <CardDescription>Germany</CardDescription>
                  </div>
                  <CardTitle id="case-electronics-retailer-title">Electronics Retailer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Challenge:</span> High defect rates and inconsistent packaging from existing suppliers.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Solution:</span> Implemented weekly in-process inspections and AQL pre-shipment checks.
                  </p>
                  <p id="case-electronics-retailer-result" className="text-slate-800 text-sm font-medium border-l-4 border-brand pl-3">
                    Result: Reduced defect rate from 8% to under 1% within two production cycles.
                  </p>
                  <span id="case-electronics-retailer-category" className="hidden">Electronics</span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="case-homegoods-001"
                    data-strk-img="[case-home-goods-brand-result] [case-home-goods-brand-title] [case-home-goods-brand-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Home Goods Brand"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Home Goods</Badge>
                    <CardDescription>United States</CardDescription>
                  </div>
                  <CardTitle id="case-home-goods-brand-title">Home Goods Brand</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Challenge:</span> Needed new suppliers quickly after a factory closure.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Solution:</span> Shortlisted and audited four alternative factories within 10 days.
                  </p>
                  <p id="case-home-goods-brand-result" className="text-slate-800 text-sm font-medium border-l-4 border-brand pl-3">
                    Result: Sourced 4 qualified suppliers and cut average lead time by 18 days.
                  </p>
                  <span id="case-home-goods-brand-category" className="hidden">Home Goods</span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="case-industrial-001"
                    data-strk-img="[case-industrial-distributor-result] [case-industrial-distributor-title] [case-industrial-distributor-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Industrial Distributor"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Industrial Hardware</Badge>
                    <CardDescription>Australia</CardDescription>
                  </div>
                  <CardTitle id="case-industrial-distributor-title">Industrial Distributor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Challenge:</span> First-time import of a large industrial parts order from China.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Solution:</span> Verified certifications, managed samples, and coordinated a 40-foot container shipment.
                  </p>
                  <p id="case-industrial-distributor-result" className="text-slate-800 text-sm font-medium border-l-4 border-brand pl-3">
                    Result: Smooth customs clearance and on-time delivery to Melbourne warehouse.
                  </p>
                  <span id="case-industrial-distributor-category" className="hidden">Industrial Hardware</span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="case-promo-001"
                    data-strk-img="[case-promotional-products-company-result] [case-promotional-products-company-title] [case-promotional-products-company-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Promotional Products Company"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Promotional</Badge>
                    <CardDescription>United Kingdom</CardDescription>
                  </div>
                  <CardTitle id="case-promotional-products-company-title">Promotional Products Company</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Challenge:</span> Complex branded merchandise with tight event deadlines.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <span className="font-semibold text-slate-900">Solution:</span> Consolidated multiple SKUs from three suppliers and monitored production daily.
                  </p>
                  <p id="case-promotional-products-company-result" className="text-slate-800 text-sm font-medium border-l-4 border-brand pl-3">
                    Result: Delivered all items two weeks before the client&apos;s trade show.
                  </p>
                  <span id="case-promotional-products-company-category" className="hidden">Promotional</span>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => navigate("/contact")}>
                Start a Similar Project
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ImageContainer>
  )
}
