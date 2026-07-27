import { useEffect } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import ImageContainer from "@/components/shared/ImageContainer"

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | SSourcing China"
  }, [])

  return (
    <ImageContainer>
      <div className="bg-white">
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Sourcing Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Practical guides for buyers sourcing from China.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Latest articles"
              description="Tips, checklists, and market knowledge to help you source smarter."
              centered
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="blog-factory-audit-001"
                    data-strk-img="[blog-factory-audit-checklist-title] [blog-factory-audit-checklist-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Factory Audit Checklist for Buyers in China"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Quality Control</Badge>
                    <span id="blog-factory-audit-checklist-category" className="hidden">Quality Control</span>
                  </div>
                  <CardTitle id="blog-factory-audit-checklist-title" className="text-lg">Factory Audit Checklist for Buyers in China</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">A practical checklist covering licenses, production capacity, quality systems, and references.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    July 15, 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="blog-payment-001"
                    data-strk-img="[blog-avoid-payment-scams-title] [blog-avoid-payment-scams-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="How to Avoid Payment Scams When Sourcing from China"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Risk Management</Badge>
                    <span id="blog-avoid-payment-scams-category" className="hidden">Risk Management</span>
                  </div>
                  <CardTitle id="blog-avoid-payment-scams-title" className="text-lg">How to Avoid Payment Scams When Sourcing from China</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">Red flags to watch for and safe payment practices that protect your deposit.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    July 8, 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="blog-shipping-001"
                    data-strk-img="[blog-incoterms-explained-title] [blog-incoterms-explained-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Incoterms Explained for First-Time Importers"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Shipping</Badge>
                    <span id="blog-incoterms-explained-category" className="hidden">Shipping</span>
                  </div>
                  <CardTitle id="blog-incoterms-explained-title" className="text-lg">Incoterms Explained for First-Time Importers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">FOB, CIF, DDP, EXW — what they mean, who pays for what, and which one to choose.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    June 28, 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="blog-aql-001"
                    data-strk-img="[blog-quality-control-aql-title] [blog-quality-control-aql-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Understanding AQL Sampling for Product Inspections"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Quality Control</Badge>
                    <span id="blog-quality-control-aql-category" className="hidden">Quality Control</span>
                  </div>
                  <CardTitle id="blog-quality-control-aql-title" className="text-lg">Understanding AQL Sampling for Product Inspections</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">How AQL works and how to set the right acceptance level for your product category.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    June 20, 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="blog-negotiation-001"
                    data-strk-img="[blog-negotiate-with-suppliers-title] [blog-negotiate-with-suppliers-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="How to Negotiate Better Terms with Chinese Suppliers"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Sourcing</Badge>
                    <span id="blog-negotiate-with-suppliers-category" className="hidden">Sourcing</span>
                  </div>
                  <CardTitle id="blog-negotiate-with-suppliers-title" className="text-lg">How to Negotiate Better Terms with Chinese Suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">Practical tactics for price, payment terms, lead time, and sample cost discussions.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    June 12, 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id="blog-documents-001"
                    data-strk-img="[blog-customs-documents-title] [blog-customs-documents-category]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Export Documents You Need When Importing from China"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="teal">Shipping</Badge>
                    <span id="blog-customs-documents-category" className="hidden">Shipping</span>
                  </div>
                  <CardTitle id="blog-customs-documents-title" className="text-lg">Export Documents You Need When Importing from China</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">A clear overview of commercial invoices, packing lists, bills of lading, and certificates.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    June 5, 2026
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </ImageContainer>
  )
}
