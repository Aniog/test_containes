import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              alt="ARTITECT MACHINERY manufacturing facility"
              data-strk-img-id="about-img-k4m7n2"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2
              id="about-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Crafting the Future of Metal Fabrication
            </h2>
            <div className="mt-4 w-16 h-1 bg-brand-gold" />
            <p
              id="about-subtitle"
              className="mt-6 text-brand-cream/70 text-base leading-relaxed"
            >
              Founded in 1998, ARTITECT MACHINERY has grown from a small workshop
              to a globally recognized manufacturer of premium metal folding
              machines. Our commitment to innovation, quality, and customer
              satisfaction drives everything we do.
            </p>
            <p className="mt-4 text-brand-cream/70 text-base leading-relaxed">
              With state-of-the-art manufacturing facilities and a team of
              experienced engineers, we deliver machines that set industry
              benchmarks for precision, reliability, and ease of use. Every
              machine that bears our name is a testament to our dedication to
              excellence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-gold pl-4">
                <div className="text-2xl font-bold text-brand-gold">25+</div>
                <div className="text-sm text-brand-cream/50 mt-1">Years of Innovation</div>
              </div>
              <div className="border-l-2 border-brand-gold pl-4">
                <div className="text-2xl font-bold text-brand-gold">200+</div>
                <div className="text-sm text-brand-cream/50 mt-1">Skilled Engineers</div>
              </div>
              <div className="border-l-2 border-brand-gold pl-4">
                <div className="text-2xl font-bold text-brand-gold">50+</div>
                <div className="text-sm text-brand-cream/50 mt-1">Countries Worldwide</div>
              </div>
              <div className="border-l-2 border-brand-gold pl-4">
                <div className="text-2xl font-bold text-brand-gold">99.8%</div>
                <div className="text-sm text-brand-cream/50 mt-1">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
