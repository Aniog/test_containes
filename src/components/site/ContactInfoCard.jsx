const ContactInfoCard = () => {
  return (
    <aside className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
        Inquiry support
      </p>
      <h3 className="mt-4 text-2xl font-semibold">Tell us what you need to source</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">
        The more detail you share, the easier it is to review supplier fit, service
        scope, and the best next steps for your sourcing project.
      </p>
      <div className="mt-8 space-y-5 text-sm text-slate-200">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="font-semibold text-white">Useful details to include</p>
          <ul className="mt-3 space-y-2 leading-7 text-slate-300">
            <li>Product type, materials, or reference photos</li>
            <li>Order quantity, target market, and delivery timeline</li>
            <li>Whether you need verification, QC, follow-up, or shipping support</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="font-semibold text-white">Typical support scope</p>
          <p className="mt-3 leading-7 text-slate-300">
            Supplier search, supplier verification, factory checks, product inspection,
            production follow-up, and shipment coordination.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default ContactInfoCard
