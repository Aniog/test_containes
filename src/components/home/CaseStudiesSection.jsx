import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const cases = [
  {
    client: 'Consumer Electronics Brand (EU)',
    category: 'Electronics',
    result: 'Reduced defect rate from 8% to under 1.5% through inline and pre-shipment inspections.',
    tags: ['Quality Inspection', 'Supplier Switch'],
  },
  {
    client: 'Home Goods Retailer (USA)',
    category: 'Home & Garden',
    result: 'Sourced 3 new manufacturers and cut average production lead time by 18 days.',
    tags: ['Supplier Sourcing', 'Production Monitoring'],
  },
  {
    client: 'Industrial Parts Distributor (Australia)',
    category: 'Machinery',
    result: 'Verified 12 factories and consolidated shipping to save 22% on freight costs.',
    tags: ['Factory Verification', 'Shipping'],
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="cases-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            Client Results
          </h2>
          <p id="cases-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real outcomes from businesses that partnered with our China sourcing team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.client} className="border-slate-100 transition hover:shadow-md">
              <CardHeader>
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg">{item.client}</CardTitle>
                <CardDescription className="text-sm text-slate-500">{item.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{item.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link to="/case-studies">
              Read Full Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
