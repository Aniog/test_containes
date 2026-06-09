const FAQList = ({ items }) => {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
            {item.question}
          </summary>
          <p className="mt-4 text-base leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FAQList
