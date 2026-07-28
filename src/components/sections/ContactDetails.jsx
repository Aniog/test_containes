const details = [
  {
    title: 'Email us',
    text: 'hello@ssourcingchina.com',
  },
  {
    title: 'Typical topics',
    text: 'Supplier search, verification, QC planning, production follow-up, and shipment readiness.',
  },
  {
    title: 'Best first step',
    text: 'Send product details, order quantity, target market, and any current supplier or quality concerns.',
  },
]

const ContactDetails = () => {
  return (
    <div className="space-y-4">
      {details.map((item) => (
        <article key={item.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
        </article>
      ))}
    </div>
  )
}

export default ContactDetails
