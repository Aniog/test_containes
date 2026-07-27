import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'SSourcing China transformed our supply chain. They found us manufacturers we would have never discovered on our own. Our product quality improved and costs dropped by 30%.',
    author: 'Michael Thompson',
    role: 'CEO, TechGear Inc.',
    country: 'United States',
  },
  {
    quote: 'Having someone on the ground in China who speaks the language and understands manufacturing is invaluable. They caught a quality issue before our first shipment—saved us thousands.',
    author: 'Sarah Lindström',
    role: 'Founder, Nordic Home Goods',
    country: 'Sweden',
  },
  {
    quote: 'Professional, responsive, and thorough. From factory audit to final delivery, everything was handled with care. We now source 100% of our products through them.',
    author: 'James Chen',
    role: 'Procurement Director, Pacific Retail Group',
    country: 'Australia',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-primary" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-slate-300 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Don't just take our word for it—hear from the businesses we work with every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-200 leading-relaxed mb-6 text-sm md:text-base">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-white/10 pt-5">
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-sm text-slate-400">{t.role}</div>
                <div className="text-xs text-slate-500 mt-1">{t.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
