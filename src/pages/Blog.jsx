import { useEffect } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { blogPosts } from '@/data/siteData'
import { format, parseISO } from 'date-fns'

const pageTitle = 'Sourcing Blog | SSourcing China'

export default function Blog() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Practical Sourcing Insights"
          description="Guides, checklists, and market tips for buyers importing from China."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] bg-slate-100 md:aspect-auto">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-6">
                  <Badge className="mb-3 w-fit">{post.category}</Badge>
                  <p className="text-xs text-slate-500">
                    {format(parseISO(post.date), 'MMMM d, yyyy')}
                  </p>
                  <h2 id={post.titleId} className="mt-2 text-xl font-semibold text-slate-900">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="mt-3 text-slate-600">
                    {post.excerpt}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
