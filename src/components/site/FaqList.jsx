const FaqList = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-3xl border border-brand-line bg-white p-6 shadow-card">
          <summary className="cursor-pointer list-none text-lg font-semibold text-brand-ink">
            {item.question}
          </summary>
          <p className="mt-4 text-base leading-7 text-brand-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
