import React from 'react'

const lessons = [
  {
    icon: '🐴',
    title: 'Beginner Lessons',
    duration: '60 min',
    price: '$65',
    description: 'Perfect for first-timers. Learn basic safety, grooming, mounting, and walking with a gentle, patient horse.',
    tag: 'beginner',
  },
  {
    icon: '🏇',
    title: 'Intermediate Lessons',
    duration: '60 min',
    price: '$75',
    description: 'Build on your foundation with trotting, posting, and light cantering. Improve balance and communication with your horse.',
    tag: 'intermediate',
  },
  {
    icon: '🥇',
    title: 'Advanced Lessons',
    duration: '75 min',
    price: '$90',
    description: 'Refine your technique with collection, lateral movements, jumping basics, and advanced canter work.',
    tag: 'advanced',
  },
  {
    icon: '⭐',
    title: 'Private Lessons',
    duration: '60 min',
    price: '$110',
    description: 'One-on-one instruction tailored entirely to your goals and pace. All levels welcome.',
    tag: 'private',
  },
]

export default function LessonsSection() {
  return (
    <section id="lessons" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Riding Lessons</h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Whether you've never sat in a saddle or you're looking to compete, we have a lesson for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.tag}
              className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{lesson.icon}</div>
              <h3 className="text-xl font-bold text-stone-800 mb-1">{lesson.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-stone-400">{lesson.duration}</span>
                <span className="text-sm font-semibold text-amber-600">{lesson.price}</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed flex-1">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
