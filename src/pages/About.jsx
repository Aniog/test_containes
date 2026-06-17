import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    title: 'Precision',
    description:
      'Every dimension, every tolerance, every weld is held to a standard we set ourselves — long before a customer asks.',
  },
  {
    title: 'Restraint',
    description:
      'We design machines that quietly do their job for decades. No gimmicks. No needless complexity. Only what matters.',
  },
  {
    title: 'Partnership',
    description:
      'We listen to the workshops that use our machines, and we evolve with them. Every release reflects their voice.',
  },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-paper">
      {/* Hero */}
      <section className="relative bg-bone pt-36 pb-20 md:pt-44 md:pb-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-6">
              About Artitect
            </span>
            <h1
              id="about-title"
              className="font-serif font-light text-5xl md:text-7xl text-ink leading-[1.05]"
            >
              A workshop devoted to one craft.
            </h1>
          </div>
          <p
            id="about-subtitle"
            className="lg:col-span-5 text-lg text-steel leading-relaxed"
          >
            Artitect Machinery is an independent manufacturer of double folding
            machines and sheet metal folders. We build every machine in our
            own workshop, with the same patience our customers bring to their
            most considered work.
          </p>
        </div>
      </section>

      {/* Story image + text */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-mist">
            <img
              alt="Artitect workshop"
              data-strk-img-id="about-workshop-9c8d7a"
              data-strk-img="[about-story-desc] [about-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6">
            <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
              Our Story
            </span>
            <h2
              id="about-story-title"
              className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.15]"
            >
              Born in the workshop. Built for it.
            </h2>
            <div
              id="about-story-desc"
              className="mt-8 space-y-5 text-steel text-lg leading-relaxed"
            >
              <p>
                Artitect Machinery was founded by a small group of fabricators
                and engineers who were tired of folders that were either too
                rough for fine architectural work or too fragile for serial
                production.
              </p>
              <p>
                We set out to design a single, honest machine — and ended up
                with a family of them. Today, our double folders and sheet
                metal folding machines run in fabrication shops, architectural
                studios, and production lines across more than forty countries.
              </p>
              <p>
                We remain a small company, deliberately. Every machine carries
                a serial number, a history, and the names of the people who
                built it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
              What We Stand For
            </span>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-[1.15]">
              Three principles, applied without exception.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-white/15 pt-8">
                <span className="font-serif text-5xl text-brass">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-mist/70 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { n: '25+', l: 'Years in operation' },
            { n: '40', l: 'Countries served' },
            { n: '1,800+', l: 'Machines delivered' },
            { n: '±0.05 mm', l: 'Standard tolerance' },
          ].map((item) => (
            <div key={item.l} className="border-t border-mist pt-6">
              <p className="font-serif text-5xl md:text-6xl text-ink">{item.n}</p>
              <p className="mt-3 text-xs tracking-[0.25em] uppercase text-steel">
                {item.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone py-20 md:py-24 border-t border-mist">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.15]">
            Want to visit our workshop?
          </h2>
          <p className="mt-5 text-steel text-lg max-w-xl mx-auto">
            We welcome customers and architects to see our machines in build.
            Get in touch to arrange a visit.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-brass transition group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
