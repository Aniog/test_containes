import { Quote } from 'lucide-react'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const quotes = [
  {
    id: 'leeuwenhoek',
    name: 'Antonie van Leeuwenhoek',
    role: 'Pioneer of microscopy, 1676',
    text: 'I saw very many small living animalcules, very prettily a-moving. The motion of most of these was so swift, and so various, that it was wonderful to behold.',
    query: 'antique microscope vintage scientific instrument',
    imgId: 'voice-leeuwenhoek-aa',
  },
  {
    id: 'sagan',
    name: 'Carl Sagan',
    role: 'Astronomer, writer',
    text: 'The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together.',
    query: 'cosmic galaxy stars scientific',
    imgId: 'voice-sagan-bb',
  },
  {
    id: 'margulis',
    name: 'Lynn Margulis',
    role: 'Evolutionary biologist',
    text: 'Life did not take over the globe by combat, but by networking.',
    query: 'bacteria cell networking microscope',
    imgId: 'voice-margulis-cc',
  },
]

export default function Voices() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-300">Voices of the lens</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
            Three centuries of wonder
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.id}
              className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/60 p-6 md:p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-teal-300/70" />
              <blockquote className="mt-4 text-slate-200 text-base md:text-lg leading-relaxed flex-1">
                “{q.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
                  <img
                    alt={q.name}
                    src={PLACEHOLDER}
                    className="absolute inset-0 h-full w-full object-cover"
                    data-strk-img-id={q.imgId}
                    data-strk-img={q.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                  />
                </div>
                <figcaption>
                  <div className="text-sm font-semibold text-slate-50">{q.name}</div>
                  <div className="text-xs text-slate-400">{q.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
