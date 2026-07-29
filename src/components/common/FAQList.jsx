const FAQList = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
            <span>{item.question}</span>
          </summary>
          <p className="mt-4 text-base leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FAQList
