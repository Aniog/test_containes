import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare, ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import FAQ from '@/components/shared/FAQ'
import { FAQS } from '@/content/site'
import { SITE } from '@/lib/seo'

const Hero = () => (
  <section className="bg-white border-b border-slate-200">
    <div className="container-content py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="kicker">Contact</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
          Tell us what you want to source.
        </h1>
        <p className="mt-5 text-lg md:text-xl text-primary-600 leading-relaxed">
          A sourcing manager — not a chatbot — reads every inquiry and replies within one business day. We will share a sourcing plan, a list of candidate factories, and a transparent fee structure.
        </p>
      </div>
    </div>
  </section>
)

const ContactInfo = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <div ref={ref} className="space-y-6">
      <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
        <img
          data-strk-img-id="contact-office-img-5a1b9d"
          data-strk-img="[contact-office-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Office building in Shanghai where our team is based"
          className="w-full h-full object-cover"
        />
      </div>
      <p id="contact-office-title" className="sr-only">SSourcing China office in Shanghai</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card h-full">
          <Mail className="w-5 h-5 text-accent mb-3" />
          <p className="text-xs uppercase tracking-wider text-primary-500 mb-1">Email</p>
          <a href={`mailto:${SITE.email}`} className="text-base md:text-lg font-semibold text-primary hover:text-accent break-all">
            {SITE.email}
          </a>
          <p className="text-xs text-primary-500 mt-2">Replies within one business day.</p>
        </div>
        <div className="card h-full">
          <MessageSquare className="w-5 h-5 text-accent mb-3" />
          <p className="text-xs uppercase tracking-wider text-primary-500 mb-1">WhatsApp / WeChat</p>
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-base md:text-lg font-semibold text-primary hover:text-accent">
            {SITE.phone}
          </a>
          <p className="text-xs text-primary-500 mt-2">Mon–Fri, 9:00–18:00 CST.</p>
        </div>
        <div className="card h-full">
          <MapPin className="w-5 h-5 text-accent mb-3" />
          <p className="text-xs uppercase tracking-wider text-primary-500 mb-1">Office</p>
          <p className="text-sm md:text-base text-primary-700 leading-relaxed">
            {SITE.address}
          </p>
        </div>
        <div className="card h-full">
          <Clock className="w-5 h-5 text-accent mb-3" />
          <p className="text-xs uppercase tracking-wider text-primary-500 mb-1">Hours</p>
          <p className="text-sm md:text-base text-primary-700 leading-relaxed">
            {SITE.hours}
          </p>
        </div>
      </div>

      <div className="card flex items-start gap-3">
        <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-primary mb-1">Languages</p>
          <p className="text-sm text-primary-600 leading-relaxed">
            Our team works in English and Mandarin Chinese. We have supported clients in 17 countries, including the US, UK, Germany, France, Australia, Canada, Brazil, and Japan.
          </p>
        </div>
      </div>
    </div>
  )
}

const Contact = () => (
  <>
    <Hero />

    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7">
          <SectionHeader
            kicker="Inquiry form"
            title="Send a sourcing inquiry"
            description="Required fields are marked with an asterisk. The more specific you can be, the more useful our first reply will be."
          />
          <InquiryForm sourcePage="contact" />
        </div>
        <div className="lg:col-span-5">
          <SectionHeader
            kicker="Direct contact"
            title="Other ways to reach us"
            description="Use the form for sourcing inquiries, or contact us directly with a quick question."
          />
          <ContactInfo />
        </div>
      </div>
    </Section>

    <Section soft>
      <SectionHeader
        kicker="FAQ"
        title="Common questions before the first call"
        description="If you have a question that is not answered here, send it through the form and we will reply directly."
      />
      <FAQ items={FAQS.slice(0, 6)} />
    </Section>

    <Section>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight max-w-2xl mx-auto">
          Already know what you want? Send the brief and we will get back to you.
        </h2>
        <p className="mt-4 text-base text-primary-600 max-w-xl mx-auto">
          We will reply within one business day with a sourcing plan, candidate factories, and a fee structure.
        </p>
        <Link to="#inquiry" className="btn-primary mt-7">
          Get a Free Sourcing Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  </>
)

export default Contact
