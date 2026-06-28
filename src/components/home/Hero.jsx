import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        data-strk-bg-id="hero-bg-1a2b3c"
        data-strk-bg="industrial sheet metal folding machine workshop glowing"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
        <div className="text-center sm:text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Precision Engineering for 
            <span className="text-blue-500 block mt-2">Modern Metal Forming</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl">
            Artitect Machinery designs and manufactures elegant, user-friendly double folding machines 
            that deliver unmatched accuracy and reliability for your production line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Explore Machines
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
            >
              Request a Demo <ChevronRight className="ml-2 h-5 w-5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}