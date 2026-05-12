import React from 'react'

const features = [
  { icon: '🌿', title: 'Safe & Caring Environment', desc: 'Our horses are well-trained and our instructors are certified professionals who prioritize your safety.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: 'Morning, afternoon, and evening slots available 7 days a week to fit your busy life.' },
  { icon: '👨‍👩‍👧', title: 'All Ages Welcome', desc: 'We teach riders from age 5 to 75. It\'s never too early or too late to start riding.' },
  { icon: '🏆', title: 'Experienced Instructors', desc: 'Our team has 20+ years of combined experience in English and Western riding disciplines.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-stone-800 mb-5 leading-tight">
              A Place Where Riders<br />Find Their Passion
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              Nestled in the rolling countryside, our stable has been a home for horses and riders for over 15 years.
              We believe that riding is more than a sport — it's a bond between human and horse that builds confidence,
              discipline, and joy.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed">
              From your very first lesson to your first competition, we'll be with you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="font-bold text-stone-800 mb-1">{f.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
