import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertTriangle, XCircle, Shield, Clock, DollarSign, BarChart3 } from 'lucide-react';

const problems = [
  {
    icon: XCircle,
    title: 'Unreliable Suppliers',
    description: 'Many suppliers on Alibaba and trade platforms are not verified. We audit factories in person so you know who you are really dealing with.',
  },
  {
    icon: AlertTriangle,
    title: 'Quality Inconsistency',
    description: 'Products arriving below specification is a common risk. Our QC inspections catch defects before shipment, not after.',
  },
  {
    icon: Shield,
    title: 'Fraud & Scams',
    description: 'Fake factories, ghost companies, and payment scams are real. We verify legal registration and physical operations.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Without on-the-ground follow-up, suppliers may prioritize other buyers. We visit and track your production in person.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees in shipping, customs, and compliance eat margins. We provide transparent pricing upfront.',
  },
  {
    icon: BarChart3,
    title: 'Communication Gaps',
    description: 'Language barriers, time zone differences, and cultural misunderstandings cause costly errors. We bridge the gap.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here is how we help you avoid them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-2">
                  <problem.icon className="w-5 h-5 text-red-600" />
                </div>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}