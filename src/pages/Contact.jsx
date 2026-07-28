import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import ContactForm from "@/components/ContactForm"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office",
    details: ["Room 1205, Block A, Fortune Plaza", "Shenzhen, China 518000"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+86 138 1234 5678"],
    href: "tel:+8613812345678",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@ssourcingchina.com"],
    href: "mailto:hello@ssourcingchina.com",
  },
  {
    icon: Clock,
    title: "Response time",
    details: ["We reply to all inquiries within 24 business hours."],
  },
]

export default function Contact() {
  return (
    <div>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-site">
          <SectionHeader
            label="Contact"
            title="Get in touch with our sourcing team"
            description="Have a product to source, a factory to verify, or a shipment to coordinate? Send us a message and we will respond quickly."
          />
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-slate-600 hover:text-blue-600">
                        {item.details[0]}
                      </a>
                    ) : (
                      item.details.map((line) => (
                        <p key={line} className="text-slate-600">{line}</p>
                      ))
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">LinkedIn</h3>
                  <a href="#" className="text-slate-600 hover:text-blue-600">SSourcing China</a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="rounded-2xl bg-navy-900 p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold md:text-3xl">Prefer to book a call?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Share your availability and a short project summary. We will schedule a 30-minute video call to discuss your needs.
            </p>
            <a
              href="mailto:hello@ssourcingchina.com?subject=Book%20a%20sourcing%20call"
              className="mt-6 inline-flex items-center rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600"
            >
              Request a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
