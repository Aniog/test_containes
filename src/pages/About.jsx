import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Two decades of engineering excellence in metal fabrication equipment.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-story-title" className="text-2xl md:text-3xl font-bold text-navy mb-6">
                Engineering the Future of Metal Fabrication
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Founded in 2005, ARTITECT MACHINERY has grown from a small machine shop into a leading manufacturer of premium metal folding equipment. Our journey began with a simple mission: to build machines that combine industrial-grade durability with intuitive operation.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Today, our products are trusted by fabrication shops, manufacturers, and educational institutions across North America and beyond. Each machine is designed by engineers who understand the challenges of the shop floor.
              </p>
              <p className="text-muted leading-relaxed">
                We believe that quality machinery shouldn't require a steep learning curve. That's why every ARTITECT MACHINERY product is built with the operator in mind — powerful enough for the most demanding jobs, yet simple enough for any skilled technician to master.
              </p>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <img
                alt="Our manufacturing facility"
                data-strk-img-id="about-facility-img-1x2y3z"
                data-strk-img={`[about-story-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality First',
                desc: 'Every component is inspected and tested before assembly. We use only premium materials and proven manufacturing processes.',
              },
              {
                title: 'Customer Focus',
                desc: 'Your success is our priority. We provide comprehensive training, responsive support, and genuine spare parts for every machine we sell.',
              },
              {
                title: 'Innovation',
                desc: 'We continuously invest in R&D to bring the latest automation and safety features to our product line.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-xl p-8 border border-border text-center"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-steel text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Reach out to our team for detailed specifications, pricing, or to schedule a demonstration.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
