import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Demi-Fine Craftsmanship',
    text: 'Each Velmora piece is cast in brass with a thick layer of 18k gold plating, then hand-polished for a luminous finish that lasts.',
  },
  {
    title: 'Designed for Everyday',
    text: 'Quiet luxury should be wearable. Our silhouettes are refined enough for evening, comfortable enough for morning coffee.',
  },
  {
    title: 'Hypoallergenic & Kind',
    text: 'We use nickel-free, lead-free materials so even sensitive skin can wear Velmora all day without worry.',
  },
  {
    title: 'Meaningful Gifting',
    text: 'Every order arrives in our signature gift-ready packaging, because jewelry is rarely just for yourself.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-ivory pt-32 pb-24">
      <div className="container-velmora">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold">Our Story</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-velmora-dark md:text-6xl">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-velmora-muted">
            Velmora was born from a simple belief: fine jewelry should feel attainable, and everyday
            jewelry should feel special. We design demi-fine gold pieces for women who move between
            roles, rooms, and occasions with quiet confidence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="border border-velmora-hairline bg-white p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl text-velmora-dark">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-velmora-muted">{value.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/shop" className="btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
