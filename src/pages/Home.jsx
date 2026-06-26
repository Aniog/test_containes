import React from 'react'
import Layout from '@/Layout'
import HomeHero from '@/components/home/HomeHero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import { ShieldCheck, Zap, Settings, Wrench } from 'lucide-react'

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      
      {/* Value Prop Section */}
      <section className="py-24 border-b border-brand-charcoal/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="h-12 w-12 flex items-center justify-center bg-brand-gold/10 rounded-none border border-brand-gold/20 text-brand-gold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif">Reliability</h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                Built with premium industrial-grade steel and high-end components for 24/7 operation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="h-12 w-12 flex items-center justify-center bg-brand-gold/10 rounded-none border border-brand-gold/20 text-brand-gold">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif">Efficiency</h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                Our double folding machines reduce cycle times by up to 40% with automated bidirectional folding.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="h-12 w-12 flex items-center justify-center bg-brand-gold/10 rounded-none border border-brand-gold/20 text-brand-gold">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif">Precision</h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                Advanced CNC control systems guarantee sub-millimeter accuracy on every bend.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="h-12 w-12 flex items-center justify-center bg-brand-gold/10 rounded-none border border-brand-gold/20 text-brand-gold">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif">Support</h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                Global service network providing installation, training, and 24/7 technical assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Modern Workshop Section */}
      <section className="py-24 bg-brand-charcoal text-brand-ivory overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Designed for the <br />
                <span className="text-brand-gold">Modern Workshop</span>
              </h2>
              <div className="space-y-6 text-brand-ivory/70 max-w-lg">
                <p>
                  At ARTITECT, we believe industrial machinery shouldn't just be functional—it should be a masterpiece of engineering. Our machines are designed with the operator in mind, featuring ergonomic interfaces and elegant aesthetics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 bg-brand-gold" />
                    <span>User-Friendly CNC Interfaces</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 bg-brand-gold" />
                    <span>Low Maintenance Design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 bg-brand-gold" />
                    <span>Architectural-Grade Precision</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video bg-white/5 border border-white/10 overflow-hidden">
               <img
                data-strk-img-id="workshop-image"
                data-strk-img="modern industrial sheet metal workshop machine high tech elegant"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Modern Workshop"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
