import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1987', title: 'Founded in Giessen', desc: 'Started as a two-man workshop fabricating press-brake tooling.' },
  { year: '1996', title: 'First Artitect folder', desc: 'Released the MF-1200, our first dedicated sheet metal folding machine.' },
  { year: '2008', title: 'CNC platform', desc: 'Introduced our in-house touch-screen CNC and 3D bend simulation.' },
  { year: '2019', title: 'Double folder DS-3200', desc: 'Launched our flagship twin-blade folder for high-volume fabrication.' },
  { year: '2024', title: '47 countries', desc: 'Active service partners across Europe, MENA, and the Asia-Pacific.' },
]

const About = () => {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-neutral-950 text-neutral-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          data-strk-bg-id="about-hero-bg-7d3f12"
          data-strk-bg="industrial precision machinery factory floor steel sparks"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-neutral-950/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-6">
            About Artitect Machinery
          </p>
          <h1
            id="about-page-title"
            className="font-serif font-light text-5xl md:text-6xl tracking-tight max-w-4xl"
          >
            We build the folder. Not the marketing around it.
          </h1>
          <p
            id="about-page-subtitle"
            className="mt-8 max-w-2xl text-lg text-neutral-300 leading-relaxed"
          >
            For nearly forty years, we&rsquo;ve been engineering folding machines for fabricators who
            care about the seventh decimal place. This is our story, our values, and the people who
            make it work.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden">
                <img
                  alt="Artitect engineer at the assembly line"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="about-engineer-91ac4e"
                  data-strk-img="industrial engineer assembling precision sheet metal folding machine factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <p
                id="about-philosophy-eyebrow"
                className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-5"
              >
                Our Philosophy
              </p>
              <h2
                id="about-philosophy-title"
                className="font-serif font-light text-3xl md:text-5xl tracking-tight text-neutral-950"
              >
                A folder is a tool, not a feature list.
              </h2>
              <p
                id="about-philosophy-desc"
                className="mt-8 text-lg text-neutral-700 leading-relaxed"
              >
                We design every machine around the operator&rsquo;s day. Less menu diving. Fewer
                error codes. A clamping system that doesn&rsquo;t need a wrench. We sweat the boring
                things so production lines don&rsquo;t.
              </p>
              <p className="mt-5 text-lg text-neutral-700 leading-relaxed">
                Every Artitect folder is built in the Netherlands by people who have personally bent
                metal for a living. That sensibility runs through the chassis, the controls, and the
                support line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-5">
            Milestones
          </p>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight text-neutral-950 mb-16">
            Nearly four decades. One craft.
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {milestones.map((m) => (
              <li key={m.year} className="border-t border-neutral-200 pt-6">
                <p className="font-serif text-3xl font-light text-amber-600">{m.year}</p>
                <h3 className="mt-3 text-neutral-950 text-base font-medium">{m.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center">
          <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight text-neutral-950 max-w-3xl mx-auto">
            Want to visit our factory?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-neutral-700 leading-relaxed">
            We welcome customers, students, and journalists. Tour the assembly floor, see a folder
            being calibrated, and meet the team that built it.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-neutral-950 text-neutral-50 px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition"
          >
            Schedule a visit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
