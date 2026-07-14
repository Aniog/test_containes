import { useRef } from 'react'
import HeroSection from '@/components/home/HeroSection'
import ContactForm from '@/components/contact/ContactForm'
import { useContacts } from '@/hooks/useContacts'
import { Mail, MapPin, Phone as PhoneIcon } from 'lucide-react'

export default function Home() {
  const formRef = useRef(null)
  const { addContact } = useContacts()

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (data) => {
    addContact(data)
  }

  return (
    <div>
      <HeroSection onScrollToForm={scrollToForm} />

      {/* Contact section */}
      <section
        ref={formRef}
        id="contact"
        className="bg-slate-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Whether you have a question about our services, pricing, or
                  anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">(555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Office</h3>
                    <p className="text-slate-600">
                      123 Business Ave, Suite 100<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex justify-center lg:justify-end">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; 2026 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
