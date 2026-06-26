import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-sm font-medium text-slate-600 mb-6">
              Our Heritage
            </div>
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Four decades of engineering excellence.
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Since 1985, ARTITECT MACHINERY has been at the forefront of 
              sheet metal fabrication technology, delivering machines that 
              combine German engineering precision with intuitive operation.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl font-semibold text-slate-300 w-20">01</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Precision Engineering</h3>
                <p className="text-slate-600">Every component is machined to tolerances measured in microns, ensuring consistent, accurate bends every time.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-semibold text-slate-300 w-20">02</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User-Centered Design</h3>
                <p className="text-slate-600">We believe powerful machinery should be approachable. Our intuitive interfaces reduce training time and operator errors.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-semibold text-slate-300 w-20">03</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Built to Last</h3>
                <p className="text-slate-600">Our machines are engineered for decades of service, with readily available parts and comprehensive support worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About