const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              About Artitect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Crafting Precision Since 1985
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              For over three decades, Artitect Machinery has been at the forefront
              of metal folding technology. Our commitment to innovation and quality
              has made us a trusted partner for manufacturers worldwide.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From our state-of-the-art manufacturing facility, we design and build
              double folding machines, sheet metal folders, and metal folding
              equipment that set industry standards for precision and reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-amber-500">35+</div>
                <div className="text-slate-400 text-sm mt-1">Years of Excellence</div>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-amber-500">2,500+</div>
                <div className="text-slate-400 text-sm mt-1">Machines Worldwide</div>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-amber-500">50+</div>
                <div className="text-slate-400 text-sm mt-1">Countries Served</div>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-amber-500">99%</div>
                <div className="text-slate-400 text-sm mt-1">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="aspect-square rounded-2xl overflow-hidden"
              data-strk-bg-id="about-bg-j4k5l6"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
            <div className="absolute -bottom-6 -left-6 p-6 bg-amber-600 rounded-xl shadow-xl">
              <div className="text-white font-bold text-2xl">ISO 9001</div>
              <div className="text-amber-100 text-sm">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
