const entries = [
  {
    id: 'journal-layering',
    title: 'How to build a warm gold jewelry stack',
    copy: 'Layer huggies, cuffs, and pendant necklaces with intention for a quietly luxurious everyday look.',
    imageId: 'journal-layering-image',
    imageUrl:
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1673285743108-75abe80e7bc1',
  },
  {
    id: 'journal-gifting',
    title: 'Gift edits for birthdays, bridesmaids, and thank-you moments',
    copy: 'Thoughtful gift-worthy jewelry picks under $120 that still feel beautifully elevated.',
    imageId: 'journal-gifting-image',
    imageUrl:
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1644893748093-fc1aff047db9',
  },
]

export default function JournalPage() {
  return (
    <div className="container-shell pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="max-w-3xl space-y-6">
        <p className="section-eyebrow">Journal</p>
        <h1 id="journal-title" className="font-serif text-5xl leading-none text-velmora-noir md:text-7xl">
          Notes on styling, gifting, and everyday glow
        </h1>
        <p id="journal-copy" className="text-base leading-8 text-velmora-espresso/76 md:text-lg">
          A small editorial space for jewelry rituals, elegant styling ideas, and stories behind the Velmora mood.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {entries.map((entry) => {
          const titleId = `${entry.id}-title`
          const copyId = `${entry.id}-copy`
          return (
            <article key={entry.id} className="overflow-hidden rounded-[2.25rem] border border-velmora-espresso/10 bg-white/70 shadow-card">
              <img
                alt={entry.title}
                className="h-72 w-full object-cover"
                data-strk-img-id={entry.imageId}
                data-strk-img={`[${copyId}] [${titleId}] [journal-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src={entry.imageUrl}
              />
              <div className="space-y-4 p-6">
                <h2 id={titleId} className="font-serif text-3xl text-velmora-noir">{entry.title}</h2>
                <p id={copyId} className="text-sm leading-7 text-velmora-espresso/74">{entry.copy}</p>
                <button type="button" className="premium-button-outline">
                  Read Story
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
