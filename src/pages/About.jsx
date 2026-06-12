import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Eyebrow from '@/components/Eyebrow'

const milestones = [
  {
    year: '1978',
    titleId: 'milestone-1978-title',
    descId: 'milestone-1978-desc',
    title: 'Founded in Stuttgart',
    description:
      'Heinrich Reinhardt builds his first folding machine in a converted carriage house, for an architectural sheet-metal commission.',
  },
  {
    year: '1992',
    titleId: 'milestone-1992-title',
    descId: 'milestone-1992-desc',
    title: 'The A-Series Is Born',
    description:
      'After eight years of development, the A-Series double folding machine introduces twin-beam folding to the industry.',
  },
  {
    year: '2008',
    titleId: 'milestone-2008-title',
    descId: 'milestone-2008-desc',
    title: 'CNC Without Compromise',
    description:
      'The CNC-Series proves that programmable precision and tactile craftsmanship can share a single machine.',
  },
  {
    year: '2024',
    titleId: 'milestone-2024-title',
    descId: 'milestone-2024-desc',
    title: 'Three Generations On',
    description:
      'The Reinhardt family still hand-fits every cast iron beam. Forty-six years, thirty-eight countries, one signature.',
  },
]

const principles = [
  {
    title: 'Iron, by hand.',
    description:
      'Cast frames are fettled, scraped, and fitted by people who measure twice and feel three times.',
  },
  {
    title: 'No invisible work.',
    description:
      'Every machine carries the assembler\u2019s initials. Accountability you can read off the plate.',
  },
  {
    title: 'Built to be inherited.',
    description:
      'We design for fifty-year service. Spare parts, manuals, and field engineers go back to 1978.',
  },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-ink"
          data-strk-bg-id="about-hero-bg-7p2x"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] heritage metal workshop craftsman hands"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-32 w-full">
          <Eyebrow tone="light" className="mb-8">
            Our Story
          </Eyebrow>
          <h1
            id="about-hero-title"
            className="font-serif font-light text-bone text-5xl md:text-7xl leading-[1.05] max-w-4xl"
          >
            A small workshop,
            <br />
            <span className="italic text-brass-soft">forty-six years on.</span>
          </h1>
          <p
            id="about-hero-subtitle"
            className="text-bone/80 text-lg max-w-2xl mt-8 leading-relaxed font-light"
          >
            ARTITECT MACHINERY has spent half a century perfecting a single craft — the
            precise, repeatable, beautiful folded line.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Eyebrow className="mb-6">Founded 1978</Eyebrow>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-tight mb-10">
            We don&rsquo;t make folding machines for everyone.
            <br />
            <span className="italic text-brass">Only for the people who care.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-steel leading-relaxed">
            <p>
              Heinrich Reinhardt built his first machine because he could not buy one
              accurate enough for the architectural cladding he was fabricating in his
              Stuttgart workshop. He scraped the folding beams himself, by candlelight,
              over four winters.
            </p>
            <p>
              Forty-six years later, the third generation of the same family still
              scrapes our beams by hand. We have grown — thirty-eight countries, eleven
              languages of service manual — but our floor still smells of cutting oil
              and patience.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ivory py-20 md:py-28 border-t border-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <Eyebrow className="mb-6">What We Believe</Eyebrow>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              Three principles, no exceptions.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-mist border border-mist">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-ivory p-10">
                <div className="font-serif text-brass text-2xl mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-2xl text-ink leading-snug mb-4">
                  {p.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <Eyebrow className="mb-6">Milestones</Eyebrow>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              Forty-six years, four moments.
            </h2>
          </div>
          <div className="space-y-px bg-mist border-t border-mist">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-bone grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-8 md:p-10 border-b border-mist"
              >
                <div className="md:col-span-3">
                  <div className="font-serif text-4xl md:text-5xl font-light text-brass">
                    {m.year}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3
                    id={m.titleId}
                    className="font-serif text-2xl text-ink mb-3"
                  >
                    {m.title}
                  </h3>
                  <p id={m.descId} className="text-steel leading-relaxed max-w-2xl">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight mb-6">
            Visit our floor in
            <span className="italic text-brass"> Stuttgart.</span>
          </h2>
          <p className="text-bone/70 max-w-xl mx-auto mb-10 leading-relaxed">
            We welcome serious buyers, fabricators, and apprentices to walk our
            assembly line and see a folding machine being born.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brass text-ink px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-bone transition-colors"
          >
            Arrange a Visit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
