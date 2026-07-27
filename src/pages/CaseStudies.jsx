import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Package, TrendingUp, Target } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function CaseStudies() {
  const [studies, setStudies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .from('CaseStudy')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .then(({ data: response, error }) => {
        if (error) {
          console.error('Failed to load case studies', error)
        } else {
          setStudies(response?.data?.list ?? [])
        }
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Case Studies</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Real Results for Real Clients
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              See how we have helped businesses across industries source better, save money, and reduce risk in China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {loading ? (
            <div className="py-12 text-center text-slate-500">Loading case studies...</div>
          ) : studies.length === 0 ? (
            <div className="py-12 text-center text-slate-500">No case studies published yet.</div>
          ) : (
            <div className="flex flex-col gap-12">
              {studies.map((study) => {
                const d = study.data || {}
                return (
                  <div
                    key={study.id}
                    className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
                  >
                    <div className="grid">
                      <div className="p-6 md:p-8">
                        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                          <span className="rounded bg-primary/10 px-2.5 py-1 font-medium text-primary">
                            {d.industry}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {d.client_country}
                          </span>
                          <span className="flex items-center gap-1">
                            <Package className="h-3.5 w-3.5" />
                            {d.order_value}
                          </span>
                        </div>

                        <h2 id={`case-detail-industry-${study.id}`} className="text-2xl font-bold md:text-3xl">
                          {d.client_name}
                        </h2>

                        <div className="mt-5 grid gap-5 md:grid-cols-3">
                          <div>
                            <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                              <Target className="h-3.5 w-3.5" />
                              Challenge
                            </div>
                            <p id={`case-detail-desc-${study.id}`} className="text-sm leading-relaxed text-slate-600">
                              {d.challenge}
                            </p>
                          </div>
                          <div>
                            <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                              <TrendingUp className="h-3.5 w-3.5" />
                              Solution
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600">
                              {d.solution}
                            </p>
                          </div>
                          <div>
                            <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                              <Package className="h-3.5 w-3.5" />
                              Results
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600">
                              {d.results}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
                          <span className="font-medium">Products sourced:</span> {d.products_sourced}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="container-main py-16 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Want Results Like These?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Every case study started with a single conversation. Tell us about your product and we will outline a plan.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="btn-primary gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
