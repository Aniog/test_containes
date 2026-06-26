import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import StockImage from '@/components/shared/StockImage'
import FaqList from '@/components/shared/FaqList'
import InquiryForm from '@/components/shared/InquiryForm'
import { caseStudies, faqs } from '@/data/content'

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="How overseas buyers work with SSourcing China"
        description="Selected projects from the last 12 months. Numbers shown are representative and shared with the buyer's permission."
        image={{
          imgId: 'cases-hero-bg-6d4c1b',
          query: '[cases-hero-title]',
        }}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page space-y-12 md:space-y-16">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-brand-line rounded-xl overflow-hidden"
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <StockImage
                  imgId={`case-detail-${cs.id}-img-${idx}`}
                  query={`[case-detail-${cs.id}-title]`}
                  ratio="4x3"
                  width={900}
                  alt=""
                  className="w-full h-full"
                  rounded="rounded-none"
                />
              </div>
              <div className={`lg:col-span-6 p-6 md:p-10 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  <span>{cs.industry}</span>
                  <span className="text-brand-muted font-normal">&middot;</span>
                  <span className="text-brand-muted font-normal normal-case tracking-normal">
                    {cs.region}
                  </span>
                </div>
                <h3
                  id={`case-detail-${cs.id}-title`}
                  className="mt-3 text-2xl md:text-3xl font-bold text-brand-ink leading-tight"
                >
                  {cs.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
                  {cs.summary}
                </p>

                <dl className="mt-6 grid grid-cols-3 gap-4">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="border-l-2 border-brand-accent pl-3"
                    >
                      <dt className="text-[11px] uppercase tracking-wider text-brand-muted">
                        {r.label}
                      </dt>
                      <dd className="mt-1 text-xl md:text-2xl font-bold text-brand-ink">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <blockquote className="mt-6 bg-brand-mist border-l-4 border-brand-accent px-5 py-4 rounded-r-md">
                  <p className="text-sm md:text-base text-brand-text italic leading-relaxed">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-brand-muted">
                    — {cs.contact}
                  </footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-mist">
        <div className="container-page">
          <SectionHeader
            eyebrow="Common Questions"
            title="What buyers ask before starting a project"
          />
          <div className="mt-10 max-w-4xl">
            <FaqList items={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Start a Project"
                title="Tell us about your sourcing project"
                description="Whether it is a single product or a multi-category rollout, we will reply with a clear next step."
              />
            </div>
            <div className="lg:col-span-7">
              <InquiryForm source="case-studies" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}