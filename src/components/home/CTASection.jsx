import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-brand-navy to-brand-navy-light overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="cta-bg-main"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Sourcing from China?
        </h2>
        <p id="cta-subtitle" className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Join hundreds of global businesses that trust SSourcing China for reliable, cost-effective sourcing. Get your free quote today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-base px-8 py-4 h-auto">
            <Link to="/contact" className="flex items-center gap-2">
              Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-4 h-auto">
            <a href="tel:+862088886666" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call +86 20 8888 6666
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
