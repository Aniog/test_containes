import AboutIntro from '@/components/about/AboutIntro'
import NewsletterSection from '@/components/home/NewsletterSection'
import { useImageLoader } from '@/hooks/useImageLoader'

const About = () => {
  const containerRef = useImageLoader('about-page')

  return (
    <div ref={containerRef}>
      <AboutIntro />
      <section className="bg-velmora-pearl py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ['Intentional materials', 'Hypoallergenic finishes, polished silhouettes, and easy-to-style proportions.'],
            ['Gift-ready details', 'Keepsake boxing and refined presentation built into every order.'],
            ['Everyday rituals', 'Jewelry that works for meetings, dinners, travel, and everything between.'],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-8 shadow-card">
              <h2 className="font-display text-3xl text-velmora-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-velmora-mist">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <NewsletterSection />
    </div>
  )
}

export default About
