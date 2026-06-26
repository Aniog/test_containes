import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-sm font-medium text-slate-600 mb-6">
            Precision Engineering Since 1985
          </div>
          
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-none">
            Master the art of<br />precision folding.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl">
            Industry-leading sheet metal folding machines engineered for accuracy, 
            durability, and effortless operation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#products">
                Explore Products <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Request a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero