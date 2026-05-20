import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "I launched my portfolio in under an hour. Strikingly's templates are gorgeous and the editor is so intuitive. I've gotten 3 new clients directly from my site!",
    name: 'Sarah Chen',
    role: 'Freelance Photographer',
    initials: 'SC',
    color: 'bg-emerald-500',
  },
  {
    quote: 'Setting up my online store was a breeze. I was skeptical at first, but Strikingly handled everything — payments, inventory, even SEO. Sales are up 40% since launch.',
    name: 'Marcus Rivera',
    role: 'Small Business Owner',
    initials: 'MR',
    color: 'bg-green-500',
  },
  {
    quote: 'My website looks like it was built by a professional agency. I get compliments on it all the time. Strikingly made it possible without any technical knowledge.',
    name: 'Aisha Patel',
    role: 'Life Coach & Speaker',
    initials: 'AP',
    color: 'bg-teal-500',
  },
  {
    quote: 'We needed a landing page fast for our product launch. Strikingly had us live in 2 hours. The analytics helped us optimize our conversion rate significantly.',
    name: 'Tom Nakamura',
    role: 'Startup Founder',
    initials: 'TN',
    color: 'bg-teal-500',
  },
  {
    quote: 'The blog features are fantastic. My readers love the clean design and I love how easy it is to publish new content. Strikingly is simply the best.',
    name: 'Elena Vasquez',
    role: 'Food Blogger',
    initials: 'EV',
    color: 'bg-emerald-600',
  },
  {
    quote: 'I needed a site that could showcase my music and sell beats. Strikingly does it all beautifully. The mobile experience is especially impressive.',
    name: 'David Kim',
    role: 'Music Producer',
    initials: 'DK',
    color: 'bg-green-600',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by creators worldwide</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Join millions of people who have already built their dream websites with Strikingly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-7 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 transition-all duration-200 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
