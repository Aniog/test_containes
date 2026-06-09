const FaqList = ({ items }) => {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
          key={item.question}>
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span className="ml-3">{item.question}</span>
          </summary>
          <p className="mt-4 text-base leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
