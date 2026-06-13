import { Button } from "./ui/button"

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1a1f2e] text-white pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:4px_4px]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#b8860b]/30 bg-[#b8860b]/10">
          <span className="text-[#b8860b] text-sm font-medium tracking-wider">EST. 1987</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Precision.<br />Reliability.<br />Excellence.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto">
          World-class sheet metal folding machinery engineered for professionals who demand the best.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToProducts}>
            Explore Our Machines
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact} className="border-white text-white hover:bg-white hover:text-[#1a1f2e]">
            Request a Quote
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/30"></div>
      </div>
    </section>
  )
}

export default Hero