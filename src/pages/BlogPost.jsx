import { Link, useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import CTASection from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { BLOG_POSTS } from '@/data/content'

const ARTICLE_BODY = {
  'how-to-verify-a-china-supplier': [
    'Before placing an order with any Chinese supplier, verification is the single most important step. Online directories list thousands of factories, but not all are real manufacturers, and not all can deliver to your quality standard.',
    'Start with the business license. A legitimate Chinese manufacturer holds a business license issued by the local Administration for Market Regulation. The license shows the registered company name, legal representative, registered capital, and business scope. If a supplier cannot provide it, treat that as a red flag.',
    'Next, confirm the export qualification. A trading company can export without owning a factory, which is fine if you understand what you are buying. But if you believe you are paying factory-direct prices, you should confirm the supplier actually manufactures the product rather than reselling it.',
    'An on-site factory audit goes further. An auditor visits the facility, photographs the production lines, checks equipment and capacity, reviews quality records, and assesses management. This is the most reliable way to confirm a supplier is real and capable before you commit a deposit.',
    'Finally, cross-check references. Ask for existing overseas customers and, where possible, verify them. A supplier with a track record of exporting to regulated markets is generally a lower risk than one with no export history.',
  ],
  'understanding-aql-quality-inspection': [
    'AQL, or Acceptable Quality Limit, is the statistical sampling standard used in pre-shipment inspection. It defines how many units an inspector should check, and how many defects are acceptable, for a given batch size.',
    'The most common reference is ISO 2859-1. Buyers typically choose an AQL level such as 2.5 for major defects and 4.0 for minor defects. This means that for a given sample size, a batch is accepted if the number of major defects found does not exceed the acceptance number.',
    'Sampling is random. The inspector selects units from different cartons across the batch so the sample represents the whole order, not just the top layer. Inspecting only the boxes on top is a common mistake that hides problems deeper in the shipment.',
    'A pre-shipment inspection under AQL gives you a clear pass or fail result before goods leave China. If the batch fails, you can require the factory to rework or replace defective units before shipping, which is far cheaper than dealing with defects after delivery.',
    'AQL is not a guarantee of zero defects. It is a risk-management tool. Combined with an approved golden sample and clear spec sheet, it gives you a defensible, objective basis for accepting or rejecting a shipment.',
  ],
  'fcl-vs-lcl-shipping-from-china': [
    'When shipping from China by sea, your two main options are Full Container Load (FCL) and Less than Container Load (LCL). The right choice depends on your cargo volume and how urgently you need the goods.',
    'FCL means you book an entire container, usually 20-foot or 40-foot. It is cost-effective once your cargo fills most of a container, and it is faster because the container is sealed at the factory and opened only at destination. FCL also reduces handling damage because the goods are not consolidated with other shipments.',
    'LCL means your goods share a container with other shippers. It makes sense for smaller volumes that do not fill a container. The trade-off is that LCL is slower, involves more handling, and is priced per cubic meter, which can become expensive as volume grows.',
    'A practical rule of thumb: if your cargo is more than about 10 to 13 cubic meters, FCL is usually cheaper and faster. Below that, LCL is often the better fit.',
    'When you source from multiple suppliers, consolidation changes the math. A sourcing agent can receive goods from several factories in one warehouse, repack them, and load a single FCL container. This often cuts total shipping cost and simplifies customs paperwork at destination.',
  ],
  'how-to-negotiate-moq-with-factories': [
    'Minimum order quantity (MOQ) is one of the first obstacles new buyers face. Factories set MOQ based on raw material minimums, machine setup costs, and production efficiency. Understanding why a factory sets an MOQ helps you negotiate it.',
    'Start by asking why the MOQ is set at its current level. If the limit comes from raw material minimums, there may be little room. If it comes from setup cost, you may be able to pay a slightly higher unit price for a smaller quantity.',
    'Offer to share risk. A factory is more likely to accept a lower MOQ if you commit to a follow-up order. Framing the first order as a trial for a longer-term relationship reduces the perceived risk for the supplier.',
    'Consider a trial order at a higher unit price. Many factories will accept a smaller quantity if you accept a price premium. This lets you test quality and the supplier before committing to a full production run.',
    'Finally, work with a sourcing agent who can match you to factories accustomed to smaller starting orders. Some suppliers specialize in smaller buyers and flexible MOQs, especially in trading-company-heavy hubs like Yiwu.',
  ],
  'preventing-production-delays-china': [
    'Production delays are one of the most common and costly problems when sourcing from China. Factories often miss deadlines silently, and buyers only discover the delay when the goods fail to arrive on time.',
    'The most effective prevention is milestone-based production follow-up. Instead of waiting for the delivery date, you track the order at defined milestones: raw material readiness, production start, mid-production, completion, and packing.',
    'At each milestone, request photo or video evidence. A factory that reports "production is on schedule" should be able to show current progress on the line. Photos also reveal quality issues early, while there is still time to fix them.',
    'Build buffer into your timeline. Chinese public holidays, such as Chinese New Year, can shut factories for weeks. Raw material shortages and peak-season capacity constraints also cause delays. Planning around these known risks prevents surprises.',
    'When a delay is detected early, you have options: expedite the remaining production, split the shipment, or adjust your downstream logistics. The earlier you know, the cheaper the fix. This is the core value of active production follow-up.',
  ],
  'china-manufacturing-hubs-guide': [
    'China is not one manufacturing market. Different regions specialize in different product categories, and routing your inquiry to the right hub improves quality, price, and lead time.',
    'Shenzhen and Dongguan in Guangdong are the center of consumer electronics, accessories, and smart gadgets. The supply chain for electronic components is dense here, which supports fast prototyping and flexible production.',
    'Guangzhou and Foshan are strong in apparel, furniture, and home goods. Guangzhou is also a major trade-fair city, making it a useful meeting point for buyers.',
    'Yiwu in Zhejiang is famous for small commodities, toys, and daily-use items. It is a trading hub more than a factory hub, ideal for buyers who need variety and smaller quantities across many SKUs.',
    'Ningbo and Shaoxing specialize in textiles, hardware, and home appliances. Yongkang and Wenzhou are known for hardware, tools, and fittings. Quanzhou and Xiamen in Fujian are strong in footwear, bags, and sporting goods.',
    'Matching your product to the right region is one of the simplest ways to improve sourcing outcomes. A sourcing agent with a presence in these hubs can shortlist factories that actually make your product, rather than trading companies reselling it.',
  ],
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Article not found
          </h1>
          <p className="mt-4 text-slate-600">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link to="/blog" className="btn-primary mt-6">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </Section>
    )
  }

  const body = ARTICLE_BODY[post.slug] || []
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              alt={post.title}
              data-strk-img-id={`${post.imgId}-hero`}
              data-strk-img={`[${post.descId}] [${post.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
          <span id={post.titleId} className="sr-only">
            {post.title}
          </span>
          <span id={post.descId} className="sr-only">
            {post.excerpt}
          </span>

          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            {body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 font-semibold text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900">Related articles</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <Link key={p.id} to={`/blog/${p.slug}`} className="card group overflow-hidden">
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  alt={p.title}
                  data-strk-img-id={`${p.imgId}-related`}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="brand">{p.category}</Badge>
                <h3 id={p.titleId} className="mt-3 font-bold text-slate-900">
                  {p.title}
                </h3>
                <p id={p.descId} className="mt-2 text-sm text-slate-600">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
