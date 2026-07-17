import { Link } from 'react-router-dom'
import SectionHeader from '@/components/shared/SectionHeader'
import { buildImageQuery, getEditorialPlaceholder } from '@/lib/images'

const StorySection = () => {
  const titleId = 'story-title'
  const descId = 'story-desc'
  const noteId = 'story-note'

  return (
    <section id="story" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-rose-100 shadow-editorial">
        <img
          alt="Velmora story editorial"
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id="story-image-4c7e11"
          data-strk-img={buildImageQuery(noteId, descId, titleId)}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src={getEditorialPlaceholder('Velmora story editorial')}
        />
        <span id={noteId} className="sr-only">
          editorial still life of gold jewelry and velvet gift box on creamy surface
        </span>
      </div>
      <div className="flex items-center">
        <div className="space-y-8 rounded-[2rem] border border-velvet-200/70 bg-cream-100 p-8 shadow-editorial sm:p-10">
          <SectionHeader
            eyebrow="Our philosophy"
            title="Jewelry that feels intimate, considered, and easy to live in."
            description="Velmora began with a simple idea: create demi-fine gold jewelry that feels quietly elevated, photographs beautifully, and still fits real daily life. Every drop is produced in small runs, finished for gifting, and designed to become part of a personal uniform."
          />
          <p id={titleId} className="sr-only">
            Velmora story image
          </p>
          <p id={descId} className="sr-only">
            jewelry craftsmanship and gift-ready presentation
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-velvet-900 transition hover:text-gold-500"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
