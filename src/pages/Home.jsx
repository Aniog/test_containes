import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import ContactForm from "@/components/landing/ContactForm"
import { Mail, MapPin, Phone } from "lucide-react"

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have a question or want to work together? Fill out the form and we'll save your details so we can follow up.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                    <Mail className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@reachly.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                    <Phone className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                    <MapPin className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Reachly. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care for great connections.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
