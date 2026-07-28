import { faqItems } from '@/data/siteContent'

const FaqList = () => {
  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <article key={item.question} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-brand-navy">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
        </article>
      ))}
    </div>
  )
}

export default FaqList
