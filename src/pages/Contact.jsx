import { 
  Mail, Phone, MapPin, Clock, Globe, MessageSquare, 
  Building, Users, Headphones, Send, ArrowRight
} from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@ssourcingchina.com',
    description: 'For general inquiries and new sourcing requests',
    link: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+86 138-0013-8000',
    description: 'Mon-Fri, 9:00 AM - 6:00 PM (China Standard Time)',
    link: 'tel:+8613800138000',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: '+86 138-0013-8000',
    description: 'Quick responses for urgent inquiries',
    link: '#',
  },
  {
    icon: Headphones,
    title: 'Live Chat',
    value: 'Available on website',
    description: 'Chat with our team during business hours',
    link: '#',
  },
]

const offices = [
  {
    city: 'Shenzhen',
    type: 'Headquarters',
    address: 'Room 1205, Tower B, Nanshan Science Park, Nanshan District, Shenzhen, Guangdong 518057, China',
    phone: '+86 138-0013-8000',
    email: 'info@ssourcingchina.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
  },
  {
    city: 'Guangzhou',
    type: 'Branch Office',
    address: 'Room 802, Tianhe Software Park, Tianhe District, Guangzhou, Guangdong 510630, China',
    phone: '+86 139-0013-9000',
    email: 'guangzhou@ssourcingchina.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
  },
  {
    city: 'Yiwu',
    type: 'Procurement Center',
    address: 'Floor 3, International Trade City, Yiwu, Zhejiang 322000, China',
    phone: '+86 137-0013-7000',
    email: 'yiwu@ssourcingchina.com',
    hours: 'Mon-Sat: 8:30 AM - 5:30 PM (CST)',
  },
]

export default function Contact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            Have questions about sourcing from China? Ready to start a project? 
            Our team is here to help. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-royal-200 transition-all group"
              >
                <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-200 transition-colors">
                  <method.icon className="w-6 h-6 text-royal-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-1">{method.title}</h3>
                <p className="text-cta-500 font-semibold text-sm mb-2">{method.value}</p>
                <p className="text-xs text-gray-500">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inquiry Form */}
            <div>
              <InquiryForm />
            </div>

            {/* Quick Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  Why Contact Us?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: '24-hour response time on all inquiries' },
                    { icon: Users, text: 'Dedicated account manager assigned to your project' },
                    { icon: Globe, text: 'English-speaking team with China expertise' },
                    { icon: Building, text: 'On-ground team in 3 major sourcing cities' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-trust-600" />
                      </div>
                      <p className="text-gray-700 pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-navy-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your requirements within 24 hours',
                    'A sourcing specialist contacts you to discuss details',
                    'You receive a detailed proposal with supplier options',
                    'We begin your sourcing project upon approval',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-cta-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-navy-900 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Need Urgent Assistance?</h3>
                <p className="text-navy-300 text-sm mb-4">
                  For time-sensitive inquiries, contact us directly via phone or WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+8613800138000"
                    className="inline-flex items-center justify-center gap-2 bg-cta-500 hover:bg-cta-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-trust-600 hover:bg-trust-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Offices</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              With offices in three major sourcing cities, we have on-ground presence 
              where it matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {offices.map((office) => (
              <div key={office.city} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-royal-100 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-royal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">{office.city}</h3>
                    <span className="text-xs text-cta-500 font-semibold">{office.type}</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
