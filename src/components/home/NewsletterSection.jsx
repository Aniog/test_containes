import NewsletterForm from '@/components/common/NewsletterForm.jsx'

const NewsletterSection = () => {
  return (
    <section id="journal" className="bg-ivory pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-bronze/40 bg-bronze px-6 py-10 text-ink shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-ink/70">Private list</p>
              <h2 className="font-display text-5xl leading-none text-ink">Join for 10% off your first order</h2>
              <p className="max-w-lg text-base leading-8 text-ink/78">
                Receive styling notes, early access to new drops, and a welcome offer for your first Velmora piece.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
