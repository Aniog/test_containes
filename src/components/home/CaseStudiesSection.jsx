import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    badge: 'Electronics',
    title: 'Consumer Electronics Sourcing for US Retailer',
    challenge: 'A US-based retailer needed a reliable manufacturer for Bluetooth speakers with strict quality requirements and a tight timeline.',
    solution: 'We identified 3 qualified factories in Shenzhen, conducted on-site audits, arranged samples, and managed production with weekly quality checks.',
    result: 'Delivered 10,000 units on time with a 98.5% pass rate on pre-shipment inspection.',
  },
  {
    badge: 'Apparel',
    title: 'Custom Garment Production for European Brand',
    challenge: 'A European fashion brand wanted to manufacture a new clothing line in China but had no experience with Chinese suppliers.',
    solution: 'We sourced fabric suppliers, found a garment factory with export experience, managed sampling rounds, and coordinated quality inspections.',
    result: 'Successfully launched the collection with 3 production runs and zero quality disputes.',
  },
  {
    badge: 'Industrial',
    title: 'Machinery Parts Sourcing for Australian Distributor',
    challenge: 'An Australian company needed custom CNC-machined parts with tight tolerances and consistent quality across large orders.',
    solution: 'We verified factory capabilities, reviewed their quality management system, and set up a detailed inspection protocol for each batch.',
    result: 'Ongoing partnership with 15+ orders completed, maintaining consistent quality and competitive pricing.',
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real examples of how we've helped overseas buyers source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 mb-3">
                  {study.badge}
                </Badge>
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">{study.title}</h3>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Our Solution</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wider">Result</p>
                  </div>
                  <p className="text-sm text-green-800 leading-relaxed">{study.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
