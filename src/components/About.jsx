const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#b8860b]/10">
              <span className="text-[#b8860b] text-sm font-medium tracking-wider">OUR HERITAGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1f2e] mb-6">
              Four decades of precision engineering
            </h2>
            <p className="text-lg text-[#2d3748]/70 mb-6 leading-relaxed">
              Since 1987, ARTITECT MACHINERY has been at the forefront of sheet metal fabrication technology. What began as a small workshop has grown into a globally recognized manufacturer of premium folding equipment.
            </p>
            <p className="text-lg text-[#2d3748]/70 leading-relaxed">
              Every machine we build carries forward our commitment to uncompromising quality, innovative design, and the needs of fabricators who refuse to settle for less than excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#faf8f5] p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">150+</div>
              <div className="text-[#1a1f2e] font-medium mb-1">Countries Served</div>
              <div className="text-sm text-[#2d3748]/60">Worldwide installations</div>
            </div>
            <div className="bg-[#faf8f5] p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">12,000+</div>
              <div className="text-[#1a1f2e] font-medium mb-1">Machines Delivered</div>
              <div className="text-sm text-[#2d3748]/60">And counting</div>
            </div>
            <div className="bg-[#faf8f5] p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">98%</div>
              <div className="text-[#1a1f2e] font-medium mb-1">Customer Retention</div>
              <div className="text-sm text-[#2d3748]/60">Year after year</div>
            </div>
            <div className="bg-[#faf8f5] p-8 rounded-2xl">
              <div className="text-4xl font-bold text-[#b8860b] mb-2">24/7</div>
              <div className="text-[#1a1f2e] font-medium mb-1">Technical Support</div>
              <div className="text-sm text-[#2d3748]/60">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About