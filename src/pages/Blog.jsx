import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const posts = [
    {
      id: "post-1",
      title: "How to Avoid Scams on Alibaba: A Buyer's Guide",
      excerpt: "Learn how to distinguish between legitimate factories and trading companies, and the red flags to watch out for when sourcing from China.",
      author: "David Chen",
      date: "Oct 12, 2026",
      category: "Sourcing Tips",
      imgId: "blog-scam-1a"
    },
    {
      id: "post-2",
      title: "Understanding AQL (Acceptable Quality Limit) in Inspections",
      excerpt: "Pre-shipment inspections rely on AQL standard sampling. Here is a simplified breakdown of how it works and what level you should choose.",
      author: "Sarah Lin",
      date: "Sep 28, 2026",
      category: "Quality Control",
      imgId: "blog-aql-2b"
    },
    {
      id: "post-3",
      title: "FOB vs. EXW vs. DDP: Which Incoterm should you use?",
      excerpt: "Shipping terminology can be confusing. We compare the most common Incoterms to help you decide which is best for your margins.",
      author: "David Chen",
      date: "Sep 15, 2026",
      category: "Shipping & Logistics",
      imgId: "blog-incoterm-3c"
    },
    {
      id: "post-4",
      title: "The Canton Fair vs. Yiwu Market: Where to go?",
      excerpt: "Planning a trip to China? Depending on your product category, you might want to choose one over the other. Here is our comparison.",
      author: "Michael Wang",
      date: "Aug 30, 2026",
      category: "Market Guides",
      imgId: "blog-market-4d"
    },
    {
      id: "post-5",
      title: "Why You Need a Contract in Chinese, Not Just English",
      excerpt: "A Proforma Invoice in English holds very little legal weight in a Chinese court. Here's why bilingual contracts are essential.",
      author: "Sarah Lin",
      date: "Aug 10, 2026",
      category: "Legal & Compliance",
      imgId: "blog-legal-5e"
    },
    {
      id: "post-6",
      title: "Navigating Chinese New Year (CNY) Delays",
      excerpt: "CNY essentially shuts down manufacturing for a month. Here is your timeline for placing orders to avoid running out of stock.",
      author: "David Chen",
      date: "Jul 22, 2026",
      category: "Production Planning",
      imgId: "blog-cny-6f"
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Blog</h1>
          <p className="text-xl text-slate-300">
            Practical advice, industry news, and guides on doing business in China successfully.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-md flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-slate-200">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[post-title-${post.id}] ${post.category}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-xs tracking-wider text-slate-500 mb-3 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <CardTitle id={`post-title-${post.id}`} className="text-xl leading-tight">
                    <Link to="#" className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-slate-600">
                    {post.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-0 border-t border-slate-50 mt-4 pt-4">
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group" asChild>
                    <Link to="#">
                      Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-600 mb-8">
            Join thousands of global buyers who receive our monthly newsletter on China manufacturing updates and strategies.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 h-12 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button type="submit" size="lg" className="h-12 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}