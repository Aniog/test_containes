import PageHeader from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/data/siteData'
import CTASection from '@/components/home/CTASection'
import { format, parseISO } from 'date-fns'

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Sourcing Insights"
        description="Practical guides, tips, and market knowledge for businesses importing from China."
        badge="Blog"
        pageId="blog"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                    <Badge variant="outline">{post.category}</Badge>
                    <span>•</span>
                    <span>{format(parseISO(post.date), 'MMM d, yyyy')}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
