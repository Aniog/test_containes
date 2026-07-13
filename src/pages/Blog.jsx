import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to verify a Chinese supplier before placing a large order',
    excerpt: 'A practical checklist for checking business licenses, factory capacity, and sample quality before you commit.',
    date: '2026-06-18',
    readTime: '6 min read',
  },
  {
    title: 'Final inspection vs. container loading: what buyers should know',
    excerpt: 'When to use each inspection type, what to look for in a report, and how to avoid common shipping surprises.',
    date: '2026-05-29',
    readTime: '5 min read',
  },
  {
    title: 'Sea freight vs. air freight: choosing the right shipping mode',
    excerpt: 'Compare cost, speed, reliability, and hidden fees so you can choose the best option for your order size and timeline.',
    date: '2026-05-10',
    readTime: '7 min read',
  },
  {
    title: 'Common quality issues in home goods and how to prevent them',
    excerpt: 'Material defects, finish inconsistencies, and packaging failures are common. Here is how inspections and specs help.',
    date: '2026-04-22',
    readTime: '5 min read',
  },
  {
    title: 'Working with a sourcing agent: what to expect and how to prepare',
    excerpt: 'A realistic look at the agent relationship, communication cadence, and information you should share upfront.',
    date: '2026-04-05',
    readTime: '6 min read',
  },
  {
    title: 'Sample approval mistakes that delay production',
    excerpt: 'Avoid vague feedback, missing specs, and late approvals that push back your delivery timeline.',
    date: '2026-03-19',
    readTime: '4 min read',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold text-slate-900">Blog</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Practical guidance on sourcing, supplier verification, quality control, and shipping from China.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{item.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span>{item.readTime}</span>
              </div>
              <Button asChild variant="outline" className="mt-4 w-full gap-2">
                <Link to="/contact">Discuss this topic <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
