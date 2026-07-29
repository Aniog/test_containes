import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import InquiryForm from '@/components/home/InquiryForm'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'info@ssourcingchina.com',
    subtitle: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    detail: '+86 138 0000 0000',
    subtitle: 'Mon-Fri, 9am-6pm CST',
  },
  {
    icon: MapPin,
    title: 'Office',
    detail: 'Guangzhou, Guangdong, China',
    subtitle: 'With teams in Yiwu & Shenzhen',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    detail: 'Monday - Friday',
    subtitle: '9:00 AM - 6:00 PM (China Standard Time)',
  },
]

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to start sourcing from China? Send us your requirements and we will get back to you within 24 hours with a free sourcing plan."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              <InquiryForm />
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-neutral-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-neutral-800 mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Get in Touch
                  </h3>
                  <div className="space-y-5">
                    {contactInfo.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-neutral-200">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-neutral-800 text-sm">{item.title}</h4>
                            <p className="text-neutral-800 font-medium">{item.detail}</p>
                            <p className="text-xs text-neutral-500">{item.subtitle}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 md:p-8">
                  <h4 className="font-semibold text-neutral-800 mb-3">What Happens Next?</h4>
                  <ol className="space-y-3 text-sm text-neutral-600">
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span>We review your requirements within 24 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span>Our team prepares a sourcing plan and cost estimate</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span>We schedule a call to discuss your project in detail</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      <span>Once approved, we begin supplier research immediately</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
