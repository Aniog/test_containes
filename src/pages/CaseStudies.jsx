import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign, CheckCircle, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/home/InquiryForm'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getCategoryLabel = (category) => {
  const labels = {
    'electronics': 'Electronics',
    'home-garden': 'Home & Garden',
    'apparel-textiles': 'Apparel & Textiles',
    'packaging': 'Packaging',
    'machinery': 'Machinery',
    'automotive': 'Automotive',
    'health-beauty': 'Health & Beauty',
  }
  return labels[category] || category
}

export default function CaseStudiesPage() {
  const containerRef = useRef(null)
  const [studies, setStudies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStudies() {
      try {
        const { data: response, error } = await client
          .from('CaseStudy')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false })

        if (error) throw error
        const list = response?.data?.list ?? []
        setStudies(list)
      } catch (err) {
        console.error('Failed to fetch case studies:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStudies()
  }, [])

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [loading])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Case Studies</span>
            <h1 id="case-studies-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Real Sourcing Success Stories
            </h1>
            <p id="case-studies-page-subtitle" className="text-lg text-slate-300 leading-relaxed">
              See how we have helped buyers around the world source from China successfully — with real challenges, real solutions, and real results.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      {loading ? (
        <section className="section-padding bg-white">
          <div className="container-custom text-center py-12">
            <p className="text-slate-500">Loading case studies...</p>
          </div>
        </section>
      ) : studies.length === 0 ? (
        <section className="section-padding bg-white">
          <div className="container-custom text-center py-12">
            <p className="text-slate-500">No case studies published yet. Check back soon!</p>
          </div>
        </section>
      ) : (
        studies.map((study, index) => {
          const fields = study.data || {}
          const studyId = study.id
          return (
            <section key={studyId} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  <div>
                    <div
                      className="aspect-video rounded-lg bg-slate-100 mb-6"
                      data-strk-bg-id="case-bg-item"
                      data-strk-bg="[case-studies-page-title] [case-studies-page-subtitle]"
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="800"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
                      {getCategoryLabel(fields.category)}
                    </span>
                    <h2 id={`case-title-${studyId}`} className="heading-2 mt-1 mb-4">{fields.title}</h2>
                    <p id={`case-summary-${studyId}`} className="body-text mb-6">{fields.summary || fields.solution}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Challenge</h4>
                        <p className="text-slate-600 text-sm">{fields.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm">{fields.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {fields.cost_reduction && (
                        <div className="text-center bg-slate-50 rounded-lg p-3">
                          <TrendingUp className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-slate-900">{fields.cost_reduction}</div>
                          <div className="text-xs text-slate-500">Cost Reduction</div>
                        </div>
                      )}
                      {fields.time_to_production && (
                        <div className="text-center bg-slate-50 rounded-lg p-3">
                          <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-slate-900">{fields.time_to_production}</div>
                          <div className="text-xs text-slate-500">Time to Production</div>
                        </div>
                      )}
                      {fields.order_value && (
                        <div className="text-center bg-slate-50 rounded-lg p-3">
                          <DollarSign className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-slate-900">{fields.order_value}</div>
                          <div className="text-xs text-slate-500">Order Value</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })
      )}

      {/* CTA */}
      <section className="section-padding bg-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will create a plan tailored to your requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <InquiryForm />
    </div>
  )
}
