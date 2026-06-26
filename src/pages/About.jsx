import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const values = [
  {
    title: "Precision is a culture",
    body: "Every Artitect engineer measures their own work. Twice. We don't ship a fold we wouldn't be proud to hang on a museum façade.",
  },
  {
    title: "Designed for the operator",
    body: "Our machines are built around the person standing in front of them. Quiet, intuitive, predictable — even on day one.",
  },
  {
    title: "Built to last decades",
    body: "An Artitect machine isn't a quarterly purchase. It's a 30-year partner. We engineer, support, and calibrate accordingly.",
  },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-accent" />
              <p id="about-eyebrow" className="text-xs uppercase tracking-[0.35em] text-accent">Our story</p>
            </div>
            <h1 id="about-title" className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight text-graphite">
              A workshop philosophy, <span className="italic text-accent">cast in steel.</span>
            </h1>
            <p id="about-subtitle" className="mt-8 text-muted-ink leading-relaxed text-lg max-w-xl">
              Artitect was founded in 1992 by three engineers who believed that a
              folder should feel as refined as the panels it produces. Today, our
              machines fold façades, kitchens, and signage in more than 40 countries.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-cloud">
              <img
                alt="Artitect workshop"
                data-strk-img-id="about-hero-image-d4e8a1"
                data-strk-img="[about-subtitle] [about-title] precision engineering workshop"
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10">
            {values.map((v) => (
              <div key={v.title} className="bg-graphite p-10">
                <h3 className="font-serif text-2xl text-accent">{v.title}</h3>
                <p className="mt-4 text-bone/75 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: "1992", l: "Founded" },
            { n: "40+", l: "Countries served" },
            { n: "2,800+", l: "Machines installed" },
            { n: "±0.1mm", l: "Standard accuracy" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif font-light text-5xl md:text-6xl text-graphite">{s.n}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-ink">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
          <div className="border border-hairline bg-cloud p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-serif font-light text-3xl md:text-4xl text-graphite leading-tight">
                Ready to plan your folding line?
              </h2>
              <p className="mt-3 text-muted-ink max-w-xl">
                We'll meet you on-site or on a video call, walk through your
                process, and propose a machine configuration tailored to your workshop.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-graphite text-bone px-7 py-4 text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-steel transition-colors self-start md:self-auto"
            >
              Start the conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
