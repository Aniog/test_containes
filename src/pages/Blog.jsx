import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to verify a Chinese supplier before placing an order',
    category: 'Supplier Verification',
    date: '2026-07-10',
    readTime: '6 min read',
    excerpt: 'A practical checklist for checking business registration, factory capacity, quality systems, and communication reliability.',
  },
  {
    title: 'What to expect from a pre-shipment inspection',
    category: 'Quality Control',
    date: '2026-06-28',
    readTime: '5 min read',
    excerpt: 'An overview of pre-shipment inspection steps, common findings, and how to use the report to make better decisions.',
  },
  {
    title: 'Shipping terms explained: FOB, CIF, and DDP',
    category: 'Logistics',
    date: '2026-06-15',
    readTime: '7 min read',
    excerpt: 'A clear comparison of common shipping terms and what they mean for cost, risk, and delivery responsibility.',
  },
  {
    title: 'How to write a sourcing brief that gets better results',
    category: 'Sourcing Strategy',
    date: '2026-05-30',
    readTime: '4 min read',
    excerpt: 'Tips for defining product specs, target price, quantity, and timeline so suppliers and agents can respond accurately.',
  },
  {
    title: 'Common quality issues in electronics manufacturing',
    category: 'Quality Control',
    date: '2026-05-12',
    readTime: '6 min read',
    excerpt: 'Typical defects, testing gaps, and inspection points to watch during electronics production and pre-shipment checks.',
  },
  {
    title: 'When to use a sourcing agent vs direct factory contact',
    category: 'Sourcing Strategy',
    date: '2026-04-22',
    readTime: '5 min read',
    excerpt: 'A balanced look at the trade-offs between direct sourcing and working with an on-ground agent.',
  },
]

const Blog = () => {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="mb-3">Blog</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Practical sourcing insights</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Guides and updates on supplier verification, quality control, shipping, and sourcing strategy.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-base">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{post.readTime}</span>
                    <Button variant="ghost" size="sm">Read more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Need help with a specific sourcing challenge?</h2>
              <p className="mt-3 text-slate-600">
                Tell us your situation. We will suggest a practical next step and, if useful, a short consultation.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Topics we cover</CardTitle>
                  <CardDescription>Practical guidance based on on-ground experience.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>Supplier verification and factory audits</li>
                    <li>Inspection planning and reporting</li>
                    <li>Shipping terms and logistics options</li>
                    <li>Cost negotiation and contract basics</li>
                    <li>Risk management for overseas sourcing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
