import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-900" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">Ready to Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6">
            Upgrade Your Metal Fabrication{' '}
            <span className="text-accent-400">Today</span>
          </h2>
          <p className="text-brand-200 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Get in touch with our engineering team to find the perfect folding machine
            for your specific requirements. Custom configurations available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="accent" className="gap-2 w-full sm:w-auto">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+18005551234">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
