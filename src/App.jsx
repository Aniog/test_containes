import { useEffect, useMemo, useRef, useState } from 'react'
import { DataClient, ImageHelper } from '@strikingly/sdk'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Menu,
  ShieldCheck,
  X,
} from 'lucide-react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import './App.css'
import {
  STRK_PROJECT_ANON_KEY,
  STRK_PROJECT_URL,
} from './config.jsx'
import strkImgConfig from './strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Products We Source', to: '/products-we-source' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const serviceOptions = [
  { value: 'supplier-sourcing', label: 'Supplier sourcing' },
  { value: 'supplier-verification', label: 'Supplier verification' },
  { value: 'factory-audit', label: 'Factory audit' },
  { value: 'quality-inspection', label: 'Quality inspection' },
  { value: 'production-follow-up', label: 'Production follow-up' },
  { value: 'shipping-coordination', label: 'Shipping coordination' },
]

const services = [
  {
    title: 'Supplier sourcing',
    summary:
      'Identify suitable suppliers based on product type, quantity expectations, target pricing, and practical capability fit.',
    points: [
      'Supplier shortlists prepared for buyer review',
      'Quotation comparison and communication support',
      'Useful for new products or supplier replacement',
    ],
  },
  {
    title: 'Supplier verification',
    summary:
      'Check whether a supplier is real, responsive, and aligned with your business before you place orders or deposits.',
    points: [
      'Basic business and registration review',
      'Initial credibility and communication screening',
      'Practical fit review against buyer requirements',
    ],
  },
  {
    title: 'Factory audit',
    summary:
      'Review factory conditions, operational setup, and process readiness when you need on-the-ground confirmation in China.',
    points: [
      'On-site factory observations and risk notes',
      'Useful before first orders or supplier changes',
      'Clear reporting in practical English',
    ],
  },
  {
    title: 'Quality inspection',
    summary:
      'Inspect goods before shipment to catch issues while corrective action is still possible and before cargo departs.',
    points: [
      'Pre-shipment inspection coordination',
      'Defect findings with images and comments',
      'Clear release or hold guidance before dispatch',
    ],
  },
  {
    title: 'Production follow-up',
    summary:
      'Track milestones, sample approval loops, and order progress so delays or quality concerns are seen early.',
    points: [
      'Progress updates during production',
      'Issue escalation before problems grow',
      'Better visibility for overseas buyers',
    ],
  },
  {
    title: 'Shipping coordination',
    summary:
      'Coordinate shipment readiness with suppliers and forwarders so packing, handover, and dispatch move more smoothly.',
    points: [
      'Shipment readiness checks before release',
      'Coordination with factory and logistics parties',
      'Support for practical handover timing',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Share your product brief',
    description:
      'You send product details, quantity expectations, target market, timing, and the sourcing services you need.',
  },
  {
    step: '02',
    title: 'Search and initial screening',
    description:
      'Potential suppliers are identified and screened for basic fit, responsiveness, and practical suitability.',
  },
  {
    step: '03',
    title: 'Verify and compare',
    description:
      'We help verify supplier basics and compare quotations, strengths, and risks before decisions move forward.',
  },
  {
    step: '04',
    title: 'Samples and order alignment',
    description:
      'Sampling, feedback loops, and key commercial expectations are kept aligned before production starts.',
  },
  {
    step: '05',
    title: 'Production follow-up',
    description:
      'Progress is tracked during production so issues, timing concerns, or changes are surfaced early.',
  },
  {
    step: '06',
    title: 'Inspection and shipping handover',
    description:
      'Quality inspection and shipment readiness are coordinated before cargo release and logistics handover.',
  },
]

const productCategories = [
  {
    title: 'Home, kitchen & living',
    description:
      'Practical household and kitchen products for importers, retail programs, and e-commerce brands.',
    examples: ['Kitchen tools', 'Storage products', 'Tabletop accessories'],
  },
  {
    title: 'Packaging & private label support',
    description:
      'Retail packaging, inserts, labels, and presentation details that need reliable execution.',
    examples: ['Gift boxes', 'Printed labels', 'Retail packaging'],
  },
  {
    title: 'Textiles & soft goods',
    description:
      'Textile products and sewn goods where workmanship and consistency matter.',
    examples: ['Tote bags', 'Travel accessories', 'Fabric organizers'],
  },
  {
    title: 'Hardware & utility items',
    description:
      'Selected hardware and functional products requiring structured supplier evaluation and inspection.',
    examples: ['Metal parts', 'Assembly items', 'Utility hardware'],
  },
  {
    title: 'Consumer accessories',
    description:
      'Selected non-complex consumer goods for brands, distributors, and wholesalers.',
    examples: ['Desk accessories', 'Travel gadgets', 'Retail add-ons'],
  },
  {
    title: 'Seasonal & promotional goods',
    description:
      'Project-based sourcing for campaigns, events, retail seasons, and branded merchandise.',
    examples: ['Event giveaways', 'Seasonal décor', 'Campaign merchandise'],
  },
]

const problemsWeSolve = [
  'You have too many supplier options but do not know which ones are reliable.',
  'You want factory checks before placing a first order or changing suppliers.',
  'You need someone in China to follow quality and production instead of relying only on email updates.',
  'You want clearer communication between your team, the supplier, and the forwarder.',
  'You want inspection before shipment to reduce expensive surprises after arrival.',
  'You prefer one practical sourcing partner instead of managing several separate service providers.',
]

const trustPoints = [
  {
    title: 'China-based execution',
    description:
      'Local support for supplier communication, factory checks, inspections, and shipment readiness.',
  },
  {
    title: 'Clear B2B communication',
    description:
      'Updates focused on timelines, issues, actions, and the next business decision.',
  },
  {
    title: 'Structured supplier evaluation',
    description:
      'Shortlists, verification steps, and comparisons that help buyers move with more clarity.',
  },
  {
    title: 'Quality before shipment',
    description:
      'Inspection and production visibility that help reduce preventable downstream problems.',
  },
]

const caseStudies = [
  {
    title: 'UK homeware importer stabilised a new supplier base',
    sector: 'Home & kitchen products',
    challenge:
      'The buyer needed alternatives to an inconsistent supplier and wanted better packaging control before shipment.',
    action:
      'SSourcing China prepared a shortlist, verified promising factories, aligned sample feedback, and arranged pre-shipment inspection.',
    outcome:
      'The client moved to a better-fit supplier with clearer communication and stronger control before dispatch.',
  },
  {
    title: 'Canadian accessories brand launched a custom product line',
    sector: 'Consumer accessories',
    challenge:
      'The brand needed support managing sampling, supplier coordination, and production follow-up for a new China-made line.',
    action:
      'We coordinated sample revisions, tracked production milestones, and checked final packing readiness before shipment.',
    outcome:
      'The launch moved forward with fewer communication gaps and better visibility on production status.',
  },
  {
    title: 'German distributor improved inspection control before shipping',
    sector: 'Utility hardware',
    challenge:
      'The buyer needed independent checks before containers were released because quality consistency had started to vary.',
    action:
      'We reviewed factory conditions, coordinated inspection focus points, and aligned shipment handover with the forwarder.',
    outcome:
      'The buyer gained a more controlled release process and better issue visibility before goods left China.',
  },
]

const blogPosts = [
  {
    title: 'How to shortlist Chinese suppliers without wasting weeks',
    excerpt:
      'A practical framework for filtering suppliers by product fit, communication quality, and commercial readiness.',
    category: 'Supplier sourcing',
  },
  {
    title: 'What a factory verification should tell an overseas buyer',
    excerpt:
      'What to review beyond the business license when you are evaluating a potential supplier in China.',
    category: 'Supplier verification',
  },
  {
    title: 'When to schedule quality inspection before shipment',
    excerpt:
      'Why inspection timing matters and how to coordinate it around production completion and dispatch planning.',
    category: 'Quality control',
  },
  {
    title: 'Common communication gaps between buyers and China suppliers',
    excerpt:
      'Where misunderstandings usually happen and how structured follow-up keeps expectations aligned.',
    category: 'Production follow-up',
  },
]

const faqs = [
  {
    question: 'Do you work with small and mid-sized buyers?',
    answer:
      'Yes. We support importers, e-commerce brands, wholesalers, and established businesses that need practical sourcing help in China.',
  },
  {
    question: 'Can you help if we already have a supplier?',
    answer:
      'Yes. We can verify an existing supplier, inspect quality, follow production, or coordinate shipping without replacing your current factory.',
  },
  {
    question: 'What information should we send for a quote?',
    answer:
      'Share the product type, specifications, expected volume, target market, required services, timeline, and any quality or packaging concerns.',
  },
  {
    question: 'Do you guarantee the lowest price?',
    answer:
      'No. The goal is practical supplier fit, clearer risk visibility, and more reliable execution rather than unrealistic price promises.',
  },
  {
    question: 'Can you inspect goods before shipment?',
    answer:
      'Yes. Pre-shipment inspection and shipment readiness checks are part of our service scope when needed.',
  },
]

const visualHighlights = [
  {
    title: 'Factory verification',
    description: 'Practical on-site checks before you commit to a supplier.',
    imgId: 'visual-factory-1zs82a',
    titleId: 'visual-factory-title',
    descId: 'visual-factory-desc',
  },
  {
    title: 'Quality inspection',
    description: 'Product checks before shipment leaves the factory.',
    imgId: 'visual-qc-4mk91c',
    titleId: 'visual-qc-title',
    descId: 'visual-qc-desc',
  },
  {
    title: 'Shipping coordination',
    description: 'Clearer handover between supplier, inspection, and freight.',
    imgId: 'visual-shipping-7ba52q',
    titleId: 'visual-shipping-title',
    descId: 'visual-shipping-desc',
  },
]

const initialFormValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  order_volume: '',
  target_price: '',
  timeline: '',
  requirements: '',
  service_interest: ['supplier-sourcing'],
}

const navItemClass = ({ isActive }) =>
  `text-sm font-medium transition ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}`

const getEntityFields = (entity) => entity?.data ?? {}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry right now.'
}

function PageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (!description) {
      return
    }

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

function SectionHeading({ kicker, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
    </div>
  )
}

function StatsStrip() {
  const items = [
    { value: 'Supplier search', label: 'Screening and shortlist support' },
    { value: 'Factory checks', label: 'Verification and audit follow-up' },
    { value: 'Quality control', label: 'Inspection before shipment' },
    { value: 'Shipping handover', label: 'Production and logistics coordination' },
  ]

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.value} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServiceGrid({ compact = false }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{service.summary}</p>
          <ul className="mt-6 space-y-3">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
      {compact ? (
        <Link
          to="/contact#inquiry-form"
          className="flex min-h-full flex-col justify-between rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm md:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Start a project
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              Need supplier sourcing, verification, quality inspection, or shipping support?
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Send your product brief and we will suggest a practical next step for your sourcing inquiry.
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ) : null}
    </div>
  )
}

function ProcessGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {processSteps.map((step) => (
        <article
          key={step.step}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Step {step.step}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
        </article>
      ))}
    </div>
  )
}

function ProductGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {productCategories.map((category) => (
        <article
          key={category.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{category.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.examples.map((example) => (
              <span
                key={example}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {example}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

function ProblemList() {
  return (
    <div className="grid gap-4">
      {problemsWeSolve.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
          <p className="text-base leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  )
}

function TrustGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {trustPoints.map((point) => (
        <article
          key={point.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <ShieldCheck className="h-8 w-8 text-teal-600" />
          <h3 className="mt-4 text-xl font-semibold text-slate-900">{point.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
        </article>
      ))}
    </div>
  )
}

function CaseStudyGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {caseStudies.map((study) => (
        <article
          key={study.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {study.sector}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{study.title}</h3>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-900">Challenge</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{study.challenge}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Action</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{study.action}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Outcome</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{study.outcome}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {blogPosts.map((post) => (
        <article
          key={post.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {post.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

function FaqList() {
  return (
    <div className="space-y-4">
      {faqs.map((item) => (
        <details
          key={item.question}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
            {item.question}
          </summary>
          <p className="mt-4 text-base leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

function VisualHighlights() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {visualHighlights.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <img
            alt={item.title}
            className="h-56 w-full object-cover"
            data-strk-img-id={item.imgId}
            data-strk-img={`[${item.descId}] [${item.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="p-6">
            <h3 id={item.titleId} className="text-xl font-semibold text-slate-900">
              {item.title}
            </h3>
            <p id={item.descId} className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

function InquiryForm({
  title = 'Get a Free Sourcing Quote',
  description =
    'Tell us what you need to source, verify, inspect, or ship. We will review your brief and reply with a practical next step.',
}) {
  const [values, setValues] = useState(initialFormValues)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submittedInquiry, setSubmittedInquiry] = useState(null)

  const selectedServiceLabels = useMemo(
    () =>
      serviceOptions
        .filter((option) => values.service_interest.includes(option.value))
        .map((option) => option.label),
    [values.service_interest],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (serviceValue) => {
    setValues((current) => {
      const exists = current.service_interest.includes(serviceValue)
      return {
        ...current,
        service_interest: exists
          ? current.service_interest.filter((item) => item !== serviceValue)
          : [...current.service_interest, serviceValue],
      }
    })
  }

  const validate = () => {
    if (!values.company_name.trim()) return 'Please enter your company name.'
    if (!values.contact_name.trim()) return 'Please enter a contact name.'
    if (!values.email.trim()) return 'Please enter a business email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.country.trim()) return 'Please enter your country or market.'
    if (!values.product_category.trim()) return 'Please enter the product category.'
    if (values.service_interest.length === 0) return 'Please select at least one service.'
    if (values.requirements.trim().length < 10) {
      return 'Please share a little more detail about your sourcing requirement.'
    }
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate()

    if (validationError) {
      setStatus('error')
      setErrorMessage(validationError)
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const payload = {
      ...values,
      company_name: values.company_name.trim(),
      contact_name: values.contact_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      product_category: values.product_category.trim(),
      order_volume: values.order_volume.trim(),
      target_price: values.target_price.trim(),
      timeline: values.timeline.trim(),
      requirements: values.requirements.trim(),
      status: 'new',
    }

    console.log('[SourcingInquiry] submitting payload', payload)

    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      console.error('[SourcingInquiry] submit failed', error, response)
      setStatus('error')
      setErrorMessage(getErrorMessage(response, error))
      return
    }

    console.log('[SourcingInquiry] submit succeeded', response)
    setSubmittedInquiry(response?.data ?? null)
    setValues(initialFormValues)
    setStatus('success')
  }

  const submittedFields = getEntityFields(submittedInquiry)

  return (
    <section
      id="inquiry-form"
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Inquiry form
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">What to include</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
              <li>Product type, specifications, or reference sample details</li>
              <li>Target quantity, order volume, or MOQ expectations</li>
              <li>Quality, packaging, or compliance concerns</li>
              <li>Required services and desired timeline</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Selected services</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {selectedServiceLabels.join(', ')}
            </p>
          </div>

          {status === 'success' && submittedInquiry ? (
            <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-5">
              <p className="text-sm font-semibold text-teal-700">Inquiry received</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Thanks, {submittedFields.contact_name}. We have recorded your request for {submittedFields.product_category}.
              </p>
            </div>
          ) : null}
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Company name
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="company_name"
                onChange={handleChange}
                placeholder="Your company"
                value={values.company_name}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Contact name
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="contact_name"
                onChange={handleChange}
                placeholder="Full name"
                value={values.contact_name}
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Business email
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="email"
                onChange={handleChange}
                placeholder="you@company.com"
                type="email"
                value={values.email}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Phone / WhatsApp
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="phone"
                onChange={handleChange}
                placeholder="Optional"
                value={values.phone}
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Country / market
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="country"
                onChange={handleChange}
                placeholder="United States"
                value={values.country}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Product category
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="product_category"
                onChange={handleChange}
                placeholder="Kitchen accessories"
                value={values.product_category}
              />
            </label>
          </div>

          <div className="grid gap-2 text-sm font-medium text-slate-900">
            Services needed
            <div className="grid gap-3 md:grid-cols-2">
              {serviceOptions.map((option) => {
                const checked = values.service_interest.includes(option.value)
                return (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${checked ? 'border-blue-700 bg-blue-50 text-slate-900' : 'border-slate-300 bg-white text-slate-700'}`}
                  >
                    <input
                      checked={checked}
                      className="h-4 w-4 accent-blue-700"
                      onChange={() => toggleService(option.value)}
                      type="checkbox"
                    />
                    <span>{option.label}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Order volume
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="order_volume"
                onChange={handleChange}
                placeholder="5,000 units"
                value={values.order_volume}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Target price
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="target_price"
                onChange={handleChange}
                placeholder="USD range"
                value={values.target_price}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Timeline
              <input
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
                name="timeline"
                onChange={handleChange}
                placeholder="Need shipment in 8 weeks"
                value={values.timeline}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-900">
            Requirements
            <textarea
              className="min-h-40 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700"
              name="requirements"
              onChange={handleChange}
              placeholder="Share product details, quantity, quality expectations, packaging requirements, and what support you need from SSourcing China."
              value={values.requirements}
            />
          </label>

          {status === 'error' && errorMessage ? (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {errorMessage}
            </p>
          ) : null}

          <button
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            disabled={status === 'submitting'}
            type="submit"
          >
            {status === 'submitting' ? 'Submitting inquiry…' : 'Get a Free Sourcing Quote'}
          </button>
        </form>
      </div>
    </section>
  )
}

function IntroSection({ kicker, title, description }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{kicker}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <PageMeta
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              China-based sourcing support
            </p>
            <h1 id="home-hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-desc" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear, practical communication.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                to="/contact#inquiry-form"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                to="/services"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              alt="Factory quality control in China"
              className="h-full w-full object-cover"
              data-strk-img-id="home-hero-visual-3dr2m1"
              data-strk-img="[home-hero-desc] [home-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Services"
            title="End-to-end sourcing support from supplier search to shipment handover"
            description="SSourcing China supports overseas buyers who need a practical partner in China to evaluate suppliers, protect quality, and keep orders moving."
          />
          <div className="mt-12">
            <ServiceGrid compact />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Visual checkpoints"
            title="Factory, quality, and shipping visibility where it matters"
            description="Real sourcing work depends on what is happening on the ground in China, not just what appears in a quotation or email thread."
          />
          <div className="mt-12">
            <VisualHighlights />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="How it works"
            title="A structured sourcing process that keeps decisions clear"
            description="From first brief to shipment coordination, the process stays focused on practical fit, risk visibility, and execution."
          />
          <div className="mt-12">
            <ProcessGrid />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Products we source"
            title="Product categories commonly supported"
            description="The right sourcing approach depends on product type, specifications, production complexity, and the level of quality control required."
          />
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              alt="Factory inspection and production follow-up"
              className="h-full w-full object-cover"
              data-strk-img-id="home-problems-visual-82mkd1"
              data-strk-img="[home-problems-desc] [home-problems-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Problems we solve
            </p>
            <h2 id="home-problems-title" className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Common sourcing frustrations for overseas buyers
            </h2>
            <p id="home-problems-desc" className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              Many buyers do not need more supplier messages. They need clearer filtering, local follow-up, and better control before goods leave China.
            </p>
            <div className="mt-8">
              <ProblemList />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Why buyers work with us"
            title="Trust points that matter in real sourcing work"
            description="The value is not exaggerated promises. It is better visibility, practical communication, and local execution support when decisions matter."
          />
          <div className="mt-12">
            <TrustGrid />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Case studies"
              title="Examples of sourcing support in practice"
              description="Representative examples showing the kind of buyer situations SSourcing China supports."
            />
            <Link className="text-sm font-semibold text-blue-700" to="/case-studies">
              View all case studies
            </Link>
          </div>
          <div className="mt-12">
            <CaseStudyGrid />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Blog"
              title="Practical sourcing content for overseas buyers"
              description="Clear guidance on supplier evaluation, quality control, production follow-up, and shipping readiness."
            />
            <Link className="text-sm font-semibold text-blue-700" to="/blog">
              Visit the blog
            </Link>
          </div>
          <div className="mt-12">
            <BlogGrid />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            kicker="FAQ"
            title="Frequently asked questions"
            description="Straightforward answers for importers and buying teams evaluating sourcing support in China."
          />
          <div className="mt-12">
            <FaqList />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services | China Sourcing Agent Services | SSourcing China"
        description="Review SSourcing China services for supplier sourcing, verification, factory checks, quality inspection, production follow-up, and shipping coordination."
      />
      <IntroSection
        kicker="Services"
        title="Practical sourcing support for buyers working with China"
        description="Choose support for the specific stage you need, or combine services across supplier selection, verification, inspection, production follow-up, and shipping coordination."
      />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Service scope"
            title="Support designed around real sourcing tasks"
            description="Each service is intended to reduce uncertainty, improve communication, and help buyers make better decisions before orders move too far."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InquiryForm
            title="Need one service or a full sourcing workflow?"
            description="Send your project details and we will recommend the service mix that best fits your product, supplier situation, and timeline."
          />
        </div>
      </section>
    </>
  )
}

function HowItWorksPage() {
  return (
    <>
      <PageMeta
        title="How It Works | China Sourcing Process | SSourcing China"
        description="Understand the SSourcing China sourcing process from buyer brief and supplier search to verification, inspection, production follow-up, and shipping coordination."
      />
      <IntroSection
        kicker="How it works"
        title="A straightforward sourcing process with clear checkpoints"
        description="The goal is to help overseas buyers move from product brief to shipment handover with clearer supplier evaluation, better visibility, and fewer avoidable surprises."
      />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Process steps"
            title="From sourcing brief to shipping coordination"
            description="Each stage is designed to keep information practical and decisions documented rather than leaving buyers to chase updates."
          />
          <div className="mt-12">
            <ProcessGrid />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Working style"
            title="What buyers can expect while a project is active"
            description="Clear communication, defined next steps, and local follow-up when supplier progress, verification, or quality concerns need attention."
          />
          <div className="mt-12">
            <TrustGrid />
          </div>
        </div>
      </section>
    </>
  )
}

function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Products We Source | China Product Sourcing | SSourcing China"
        description="Explore product categories commonly sourced with SSourcing China, including homeware, packaging, textiles, accessories, hardware, and promotional goods."
      />
      <IntroSection
        kicker="Products we source"
        title="Product categories commonly supported for overseas buyers"
        description="Product type affects supplier selection, quality control, and production monitoring. We support a practical range of categories often sourced from China."
      />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Categories"
            title="Examples of the types of projects buyers ask us about"
            description="If your product sits outside these categories, send the inquiry anyway. The right sourcing approach depends more on fit and execution needs than on a generic list."
          />
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>
    </>
  )
}

function CaseStudiesPage() {
  return (
    <>
      <PageMeta
        title="Case Studies | China Sourcing Examples | SSourcing China"
        description="Read representative sourcing examples showing how SSourcing China helps overseas buyers with supplier changes, inspections, product launches, and shipment readiness."
      />
      <IntroSection
        kicker="Case studies"
        title="Representative sourcing situations and outcomes"
        description="These examples show the kind of sourcing support global buyers often need when working with China suppliers and factories."
      />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Examples"
            title="How sourcing support translates into practical buyer value"
            description="The focus is on better supplier fit, stronger visibility, and fewer avoidable issues during production and shipment."
          />
          <div className="mt-12">
            <CaseStudyGrid />
          </div>
        </div>
      </section>
    </>
  )
}

function BlogPage() {
  return (
    <>
      <PageMeta
        title="Blog | China Sourcing Insights | SSourcing China"
        description="Read practical sourcing articles from SSourcing China on supplier verification, factory checks, inspections, production follow-up, and shipping coordination."
      />
      <IntroSection
        kicker="Blog"
        title="Practical sourcing insights for overseas buyers"
        description="Useful guidance on supplier evaluation, quality control, production follow-up, and shipment preparation when buying from China."
      />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Articles"
            title="Clear business content, not generic sourcing hype"
            description="These topics reflect the questions importers, brand owners, and buying teams commonly ask when comparing suppliers and managing risk."
          />
          <div className="mt-12">
            <BlogGrid />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact | Get a Free Sourcing Quote | SSourcing China"
        description="Contact SSourcing China to discuss supplier sourcing, verification, factory audits, quality inspection, production follow-up, or shipping coordination from China."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              Tell us what you need to source, verify, inspect, or ship
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              If you are comparing suppliers, facing quality uncertainty, or need local follow-up in China, send us the details through the inquiry form.
            </p>
            <div className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">sourcing@ssourcingchina.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Coverage</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Supplier sourcing, verification, factory checks, inspection, production follow-up, and shipping coordination from China.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Best way to start</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Share product details, quantity expectations, target timing, and the support you need. Clear input leads to a faster and more useful response.
                </p>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  )
}

function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    setMenuOpen(false)

    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
              SS
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">SSourcing China</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">China sourcing agent</p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} className={navItemClass} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <NavLink
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              to="/contact#inquiry-form"
            >
              Get a Free Sourcing Quote
            </NavLink>
          </div>

          <button
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:hidden">
            <nav className="grid gap-4">
              {navigationLinks.map((link) => (
                <NavLink key={link.to} className={navItemClass} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                to="/contact#inquiry-form"
              >
                Get a Free Sourcing Quote
              </NavLink>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-950 py-16 text-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <p className="text-2xl font-semibold text-white">SSourcing China</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              China-based sourcing support for overseas buyers who need practical help with supplier search, verification, quality inspection, production follow-up, and shipping coordination.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Pages</p>
            <div className="mt-4 grid gap-3">
              {navigationLinks.map((link) => (
                <NavLink key={link.to} className="text-sm text-slate-300 transition hover:text-white" to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <p>China sourcing support for global importers, distributors, and brands.</p>
              <p>Email: sourcing@ssourcingchina.com</p>
              <p>Hours: Monday to Saturday, China time</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/products-we-source" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
