import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { useStrkImages } from '@/hooks/useStrkImages'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const AboutPage = () => {
  const pageRef = useStrkImages([])

  return (
    <div ref={pageRef} className="pb-20 pt-32 md:pt-36">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="Jewelry that feels intimate, polished, and easy to live in"
            description="Velmora Fine Jewelry creates premium-but-accessible demi-fine pieces designed to be worn daily, gifted meaningfully, and treasured longer than a trend cycle."
          />
          <div className="mt-8 space-y-6 text-base leading-8 text-brand-mink">
            <p>
              We design around quiet confidence: soft shine, flattering proportions, and finishes that feel elevated without demanding attention.
            </p>
            <p>
              Every collection is created to move with real life, from weekday tailoring to evening dressing, with hypoallergenic comfort and warm editorial styling at the center.
            </p>
            <p>
              From gift-ready sets to daily huggies, our aim is simple: make jewelry that looks special, feels effortless, and holds its place in your routine.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.2rem] border border-brand-line bg-brand-surface shadow-soft">
          <img
            alt="About Velmora"
            className="h-full min-h-[560px] w-full object-cover"
            data-strk-img-id="velmora-about-image-h44n2m"
            data-strk-img="[about-copy] [about-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src={placeholder}
          />
          <div className="p-6">
            <h2 id="about-title" className="font-serif text-3xl text-brand-espresso">
              Warm craftsmanship, modern styling
            </h2>
            <p id="about-copy" className="mt-3 text-sm leading-7 text-brand-mink">
              A considered approach to gold tones, giftable details, and premium everyday wear.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutPage
