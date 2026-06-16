import { ArrowRight, Shield, Award, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-brand-primary via-brand-accent to-brand-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Industry Leading Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Precision <span className="text-brand-secondary">Sheet Metal</span> Folding Machines
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
              ARTITECT MACHINERY delivers world-class double folding machines engineered for accuracy, durability, and unmatched performance in metal fabrication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#products" className="btn-secondary inline-flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-white/20">
                Request Quote
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-brand-secondary flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl">40+</p>
                  <p className="text-sm text-slate-300">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-secondary flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl">5000+</p>
                  <p className="text-sm text-slate-300">Machines Sold</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-brand-secondary flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl">24/7</p>
                  <p className="text-sm text-slate-300">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div
                className="aspect-video rounded-xl overflow-hidden bg-slate-800"
                data-strk-bg-id="hero-bg-a1b2c3"
                data-strk-bg="[hero-title] [hero-subtitle]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
              >
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <p className="text-sm">Industrial Machinery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-brand-secondary rounded-xl p-4 shadow-xl">
              <p className="text-brand-dark font-bold text-lg">ISO 9001</p>
              <p className="text-brand-dark/80 text-sm">Certified Quality</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
              <p className="text-brand-primary font-bold text-lg">CE</p>
              <p className="text-brand-gray text-sm">European Standard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}
