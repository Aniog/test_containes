import PageHeader from '@/components/shared/PageHeader'
import InquiryForm from '@/components/shared/InquiryForm'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact SSourcing China"
        description="Have a sourcing project in mind? Send us a message and we will get back to you within one business day."
        badge="Get in Touch"
        pageId="contact"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <InquiryForm />

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">{siteConfig.email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-sm text-gray-600">{siteConfig.phone}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-sm text-gray-600">{siteConfig.address}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-sm text-gray-600">We reply to all inquiries within one business day.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Languages</h3>
                    <p className="text-sm text-gray-600">English and Mandarin support for smooth communication.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
