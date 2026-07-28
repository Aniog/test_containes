import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fetchCaseStudies } from '@/api/caseStudies'

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setLoading(true)
        const data = await fetchCaseStudies()
        setCaseStudies(data)
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to load case studies')
        console.error('Error loading case studies:', err)
      } finally {
        setLoading(false)
      }
    }

    loadCaseStudies()
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              See how we've helped businesses like yours source quality products from China. Real results from real projects.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mr-3" />
              <span className="text-slate-600">Loading case studies...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()} variant="outline">
                Try Again
              </Button>
            </div>
          )}

          {!loading && !error && caseStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 mb-4">No case studies available at the moment.</p>
              <Button asChild>
                <Link to="/contact">Contact us to learn more</Link>
              </Button>
            </div>
          )}

          {!loading && !error && caseStudies.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-slate-100 relative">
                    {study.image_url ? (
                      <img
                        src={study.image_url}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100">
                        <span className="text-slate-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">
                      Client: {study.client}
                    </p>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {study.summary}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Key Results</h4>
                      <p className="text-sm text-emerald-700 font-medium">{study.results}</p>
                    </div>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today to discuss your sourcing needs and see how we can help you achieve similar results.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies