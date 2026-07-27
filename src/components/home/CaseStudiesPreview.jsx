import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function CaseStudiesPreview() {
  const [studies, setStudies] = useState([])

  useEffect(() => {
    client
      .from('CaseStudy')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(3)
      .then(({ data: response, error }) => {
        if (error) {
          console.error('Failed to load case studies', error)
          return
        }
        const list = response?.data?.list ?? []
        setStudies(list)
      })
  }, [])

  return (
    <section className="section-padding bg-surface">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Case Studies
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Real Results for Real Clients
            </h2>
          </div>
          <Link to="/case-studies" className="btn-outline gap-2">
            View All Cases
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => {
            const d = study.data || {}
            return (
              <div
                key={study.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">{d.industry}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {d.client_country}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    {d.client_name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {d.challenge?.slice(0, 140)}...
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
                    <span className="font-medium">Products:</span> {d.products_sourced}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
