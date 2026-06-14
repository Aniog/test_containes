import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, ArrowRight, Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe } from 'lucide-react'
import { format, parseISO } from 'date-fns'

const posts = [
  {
    id: 1,
    title: 'How to verify a Chinese supplier before placing an order',
    excerpt: 'A practical checklist for checking business licenses, factory capacity, and quality systems.',
    date: '2026-05-28',
    readTime: '6 min read',
    category: 'Supplier Verification',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Pre-shipment inspection checklist for importers',
    excerpt: 'Key checks to perform before goods leave the factory to reduce defects and returns.',
    date: '2026-05-15',
    readTime: '5 min read',
    category: 'Quality Control',
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: 'Understanding Incoterms for China shipments',
    excerpt: 'A plain-language guide to EXW, FOB, CIF, and DDP for overseas buyers.',
    date: '2026-04-22',
    readTime: '7 min read',
    category: 'Shipping',
    icon: Truck,
  },
  {
    id: 4,
    title: 'How to write a clear sourcing brief',
    excerpt: 'The information suppliers need to give you accurate quotes and realistic lead times.',
    date: '2026-04-10',
    readTime: '4 min read',
    category: 'Sourcing Strategy',
    icon: Search,
  },
  {
    id: 5,
    title: 'Factory audit vs. inspection: what is the difference?',
    excerpt: 'When to schedule an audit and when an inspection is the right choice.',
    date: '2026-03-18',
    readTime: '5 min read',
    category: 'Quality Control',
    icon: Factory,
  },
  {
    id: 6,
    title: 'Building long-term supplier relationships in China',
    excerpt: 'Practical tips for communication, contracts, and trust-building with manufacturers.',
    date: '2026-03-02',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    icon: Globe,
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Insights for smarter sourcing</h1>
            <p className="mt-4 text-lg text-slate-600">Practical guides, checklists, and updates to help you source from China with confidence.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                      <post.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle className="mt-3">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get sourcing help <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Need help with a specific sourcing challenge?</h2>
              <p className="mt-4 text-slate-600">Our team can help you apply these insights to your own products and suppliers.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Supplier search</div>
                    <div className="text-sm text-slate-600">We find and qualify manufacturers for your category.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Quality assurance</div>
                    <div className="text-sm text-slate-600">We design inspection plans around your risk profile.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Logistics support</div>
                    <div className="text-sm text-slate-600">We coordinate shipping and documentation end to end.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-slate-900">Stay updated</div>
                <Separator />
                <p className="text-sm text-slate-600">Subscribe to receive new articles and sourcing guides by email.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
