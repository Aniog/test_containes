import { useRef } from 'react'

const ugcItems = [
  { id: 1, caption: 'Golden hour with the Aura Cuff ✨', label: 'Ear Stack' },
  { id: 2, caption: 'Date night essentials', label: 'Necklace Layer' },
  { id: 3, caption: 'Everyday huggies that go with everything', label: 'Huggies' },
  { id: 4, caption: 'Gift unboxing — the Royal Heirloom Set 💫', label: 'Gift Set' },
  { id: 5, caption: 'Stacked & styled for brunch', label: 'Ear Cuffs' },
  { id: 6, caption: 'The perfect bridal shower gift', label: 'Gift' },
]

export default function UGCRow() {
  const scrollRef = useRef(null)

  return (
    <section className="py-20 md:py-28 bg-warm-white overflow-hidden">
      <div className="container-narrow mb-10 md:mb-14">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-wider">
            As Seen On You
          </h2>
          <p className="mt-3 text-muted text-sm font-sans">Tag @velmora for a chance to be featured</p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-[#E8E0D5]/40 relative group overflow-hidden snap-start"
          >
            <img
              data-strk-img-id={`ugc-${item.id}-img`}
              data-strk-img={`[ugc-${item.id}-label]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/60 via-transparent to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 p-4 text-cream font-serif text-sm italic leading-snug">
              {item.caption}
            </p>
            <span id={`ugc-${item.id}-label`} className="hidden">{item.label} gold jewelry</span>
          </div>
        ))}
      </div>
    </section>
  )
}