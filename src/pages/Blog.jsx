import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt:
      'Learn the key documents, on-site checks, and red flags to watch for when validating a new supplier in China.',
    category: 'Factory Verification',
    date: 'July 15, 2026',
    readTime: '6 min read',
    imgId: 'blog-factory-verification-1a2b3c',
  },
  {
    title: 'Understanding AQL Levels for Quality Inspections',
    excerpt:
      'A practical guide to Acceptable Quality Limits and how they affect your pre-shipment inspection results.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    imgId: 'blog-aql-inspection-4d5e6f',
  },
  {
    title: 'Incoterms Explained for First-Time Importers',
    excerpt:
      'FOB, CIF, DDP — what do they mean, and which one should you choose when buying from China?',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    imgId: 'blog-incoterms-7g8h9i',
  },
  {
    title: 'How to Write a Product Specification That Suppliers Understand',
    excerpt:
      'Clear specs reduce miscommunication, samples, and rework. Here is a template and checklist you can use.',
    category: 'Sourcing Tips',
    date: 'June 20, 2026',
    readTime: '5 min read',
    imgId: 'blog-product-specs-1j2k3l',
  },
  {
    title: 'Payment Terms When Sourcing from China',
    excerpt:
      'TT, LC, escrow, and trade assurance — compare the options and protect your cash flow.',
    category: 'Finance',
    date: 'June 12, 2026',
    readTime: '6 min read',
    imgId: 'blog-payment-terms-4m5n6o',
  },
  {
    title: 'What to Expect During a Pre-Shipment Inspection',
    excerpt:
      'A step-by-step look at how PSI works, what inspectors check, and how reports are structured.',
    category: 'Quality Control',
    date: 'June 5, 2026',
    readTime: '4 min read',
    imgId: 'blog-psi-7p8q9r',
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
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Sourcing Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Practical guides, industry updates, and tips for buying from China.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden border-slate-100 transition hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-subtitle] [blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit text-xs">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Calendar className="h-3 w-3" /> {post.date} · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Have a Sourcing Question?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Our team is happy to help. Send us your requirements and we will respond within 24 hours.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
