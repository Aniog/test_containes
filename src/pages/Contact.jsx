import InquiryFormSection from '../components/home/InquiryFormSection'
import {
  Phone, Mail, MapPin, Clock, Globe, MessageSquare
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '+86 138 0000 0000',
    secondary: 'Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'info@ssourcingchina.com',
    secondary: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Office',
    primary: 'Guangzhou, Guangdong, China',
    secondary: 'Visits by appointment only',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    primary: '+86 138 0000 0000',
    secondary: 'Available during business hours',
  },
  {
    icon: Globe,
    title: 'WeChat',
    primary: 'SSourcingChina',
    secondary: 'Scan QR code or search ID',
  },
  {
    icon: Clock,
    title: 'Response Time',
    primary: 'Within 24 Hours',
    secondary: 'Urgent requests: same day',
  },
]

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Let's Discuss Your
              <br />
              <span className="text-accent-400">Sourcing Needs</span>
            </h1>
            <p className="text-lg text-steel-200 leading-relaxed max-w-xl">
              Whether you have a specific product in mind or need guidance on sourcing
              from China, we are here to help. Get in touch and our team will respond
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Ways to Reach Us</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Choose the method that works best for you. We are available across
              multiple channels to serve buyers in different time zones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.title} className="card-base card-hover text-center">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-800 mb-1">{method.title}</h3>
                  <p className="text-steel-800 font-medium text-sm mb-1">{method.primary}</p>
                  <p className="text-steel-400 text-xs">{method.secondary}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryFormSection />

      {/* Map / Location Section */}
      <section className="section-padding bg-steel-50">
        <div className="container-wide mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-section mb-4">Our Location</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Our headquarters are in Guangzhou — the commercial hub of South China
              and one of the country's largest manufacturing and trading centers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                city: 'Guangzhou (HQ)',
                focus: 'Main office, sourcing team, QC inspection center',
                detail: 'Baiyun District, near major wholesale markets',
              },
              {
                city: 'Shenzhen',
                focus: 'Electronics sourcing, tech product specialists',
                detail: 'Huaqiangbei electronics market proximity',
              },
              {
                city: 'Yiwu',
                focus: 'Small commodities, promotional products',
                detail: 'Adjacent to Yiwu International Trade City',
              },
            ].map((office) => (
              <div key={office.city} className="card-base text-center">
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-brand-800 mb-2">{office.city}</h3>
                <p className="text-sm text-steel-600 mb-2">{office.focus}</p>
                <p className="text-xs text-steel-400">{office.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
