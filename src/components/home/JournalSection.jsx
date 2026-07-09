import { Link } from 'react-router-dom'
import SectionIntro from '@/components/shared/SectionIntro.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const stories = [
  {
    id: 'journal-1',
    title: 'How to layer gold for day and night',
    excerpt: 'A restrained guide to pairing close-to-ear shine with soft chain texture.',
  },
  {
    id: 'journal-2',
    title: 'The art of gifting jewelry beautifully',
    excerpt: 'Thoughtful details that turn a small box into a memorable gesture.',
  },
]

const JournalSection = () => {
  const containerRef = useStrkImages([])

  return (
    <section className="bg-ivory py-16 md:py-24" id="journal">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Journal"
          title="Editorial notes from the Velmora world"
          description="Soft styling inspiration, gifting cues, and care rituals for pieces made to stay in rotation."
        />

        <div ref={containerRef} className="grid gap-6 lg:grid-cols-2">
          {stories.map((story) => {
            const titleId = `${story.id}-title`
            const excerptId = `${story.id}-excerpt`

            return (
              <article
                key={story.id}
                className="overflow-hidden rounded-[2.25rem] border border-truffle/10 bg-white shadow-card"
              >
                <img
                  alt={story.title}
                  className="h-[360px] w-full object-cover"
                  data-strk-img={`[${excerptId}] [${titleId}]`}
                  data-strk-img-id={`${story.id}-image`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="space-y-4 p-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-champagne">Editorial note</p>
                  <h3 id={titleId} className="font-editorial text-4xl leading-none text-velvet">
                    {story.title}
                  </h3>
                  <p id={excerptId} className="text-sm leading-7 text-truffle">
                    {story.excerpt}
                  </p>
                  <Link
                    className="inline-flex text-xs uppercase tracking-[0.24em] text-velvet transition-colors duration-300 hover:text-champagne"
                    to="/shop"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
