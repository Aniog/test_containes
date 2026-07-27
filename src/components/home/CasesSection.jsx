import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import SectionHeader from "@/components/shared/SectionHeader"
import { Button } from "@/components/ui/button"
import ImageContainer from "@/components/shared/ImageContainer"


export default function CasesSection() {
  const navigate = useNavigate()

  return (
    <ImageContainer>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Case Studies"
            title="Results for real buyers"
            description="See how we help businesses source more reliably from China."
            centered
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id="case-electronics-001"
                  data-strk-img="[case-electronics-retailer-result] [case-electronics-retailer-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Electronics Retailer"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle id="case-electronics-retailer-title">Electronics Retailer</CardTitle>
                <CardDescription>Germany</CardDescription>
              </CardHeader>
              <CardContent>
                <p id="case-electronics-retailer-result" className="text-slate-600 leading-relaxed">
                  Reduced defect rate from 8% to under 1% through weekly factory inspections and AQL sampling.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id="case-homegoods-001"
                  data-strk-img="[case-home-goods-brand-result] [case-home-goods-brand-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Home Goods Brand"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle id="case-home-goods-brand-title">Home Goods Brand</CardTitle>
                <CardDescription>United States</CardDescription>
              </CardHeader>
              <CardContent>
                <p id="case-home-goods-brand-result" className="text-slate-600 leading-relaxed">
                  Sourced 4 new suppliers in 10 days and cut average lead time by 18 days.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id="case-industrial-001"
                  data-strk-img="[case-industrial-distributor-result] [case-industrial-distributor-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Industrial Distributor"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle id="case-industrial-distributor-title">Industrial Distributor</CardTitle>
                <CardDescription>Australia</CardDescription>
              </CardHeader>
              <CardContent>
                <p id="case-industrial-distributor-result" className="text-slate-600 leading-relaxed">
                  Verified factory certifications and coordinated a 40-foot container shipment to Melbourne.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => navigate("/case-studies")}>Read Case Studies</Button>
          </div>
        </div>
      </section>
    </ImageContainer>
  )
}
