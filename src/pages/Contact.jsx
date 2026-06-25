import { Clock, Mail, MapPin, MessageSquareText } from 'lucide-react'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'

const contactPoints = [
  { icon: MessageSquareText, title: 'Start with a brief', text: 'Send product details, quantity, target market, and sourcing concerns.' },
  { icon: Clock, title: 'Practical response', text: 'We review your inquiry and identify the next sourcing information needed.' },
  { icon: MapPin, title: 'China-based coordination', text: 'Support for supplier communication, factory checks, QC, and shipping handover.' },
  { icon: Mail, title: 'Qualified inquiries', text: 'Clear B2B sourcing requests help us respond with more useful next steps.' },
]

const Contact = () => (
  <ImageLoadPage>
    <PageHero
      alt="China sourcing inquiry form and buyer consultation"
      description="Request a free sourcing quote for supplier search, factory verification, quality inspection, production follow-up, or shipping coordination in China."
      eyebrow="Contact"
      imageId="contact-hero-sourcing-consultation-8392dc"
      title="Get a free sourcing quote"
    />
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8">
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Inquiry details</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Share your sourcing requirements
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Use the form to describe what you need to source, what stage your project is in, and where you need help.
            </p>
          </div>
          <div className="grid gap-4">
            {contactPoints.map((point) => {
              const Icon = point.icon
              return (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm" key={point.title}>
                  <Icon className="h-6 w-6 text-blue-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{point.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  </ImageLoadPage>
)

export default Contact
