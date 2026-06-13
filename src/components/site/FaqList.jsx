const FaqList = ({ items }) => {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
            {item.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
