import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to verify a Chinese supplier before placing an order',
    excerpt: 'A practical checklist for checking business registration, factory capacity, and quality systems.',
    date: '2026-07-15',
    readTime: '6 min read',
    category: 'Supplier Verification',
  },
  {
    title: 'What is a pre-shipment inspection and why it matters',
    excerpt: 'Understanding the key checks that help reduce defects and protect your brand before goods leave the factory.',
    date: '2026-07-02',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Common shipping terms explained for new importers',
    excerpt: 'A plain-language guide to FOB, CIF, EXW, and other terms you will see on quotes and invoices.',
    date: '2026-06-20',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    title: 'How to write effective sourcing requirements',
    excerpt: 'Clear requirements help suppliers quote accurately and reduce misunderstandings later in the process.',
    date: '2026-06-08',
    readTime: '4 min read',
    category: 'Sourcing Strategy',
  },
  {
    title: 'Factory audits vs inspections: what is the difference',
    excerpt: 'When to use a factory audit, when to schedule an inspection, and how they work together.',
    date: '2026-05-25',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Packaging advice for fragile and high-value goods',
    excerpt: 'Practical packaging principles that can reduce breakage and returns during international shipping.',
    date: '2026-05-12',
    readTime: '6 min read',
    category: 'Logistics',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="secondary" className="mb-4">Blog</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Practical guidance for sourcing from China</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Articles on supplier verification, quality control, shipping, and sourcing strategy.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="mt-2">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-4">
                    <span>Read article <ArrowRight className="ml-2 h-3.5 w-3.5" /></span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Need help with a specific sourcing challenge?</h2>
              <p className="mt-3 text-slate-600">
                Tell us your situation and we’ll suggest a practical approach. If it fits our services, we’ll provide a quote.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Practical advice</div>
                    <div className="text-slate-600">No exaggerated claims, just realistic options for your project.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Clear scope and quote</div>
                    <div className="text-slate-600">We define what we will do, what we will not do, and what it costs.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Support at every stage</div>
                    <div className="text-slate-600">From requirements to shipping, we stay involved.</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Get a Free Sourcing Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Blog and sourcing guidance"
                  data-strk-img-id="blog-hero-img-2j3k4l"
                  data-strk-img="[blog-hero-subtitle] [blog-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="blog-hero-title" className="sr-only">Blog and sourcing guidance</p>
              <p id="blog-hero-subtitle" className="sr-only">Practical sourcing articles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
