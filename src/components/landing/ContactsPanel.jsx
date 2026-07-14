import { Inbox, Mail, Trash2 } from 'lucide-react'

const ContactsPanel = ({ contacts, onClear }) => {
  return (
    <section id="saved-contacts" className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Saved contacts</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Review contacts later.</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Contacts are saved in this browser for the frontend preview. Durable database storage comes after design approval.
          </p>
        </div>
        {contacts.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-red-300 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Clear preview
          </button>
        )}
      </div>

      {contacts.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-800">
          <Inbox className="mx-auto h-10 w-10 text-blue-600" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-bold text-slate-900">No contacts yet</h3>
          <p className="mt-2 text-slate-600">Submit the form to see new contacts appear here instantly.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <article key={contact.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-800">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{contact.name}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {contact.email}
                  </p>
                  {contact.company && <p className="mt-1 text-sm font-medium text-slate-600">{contact.company}</p>}
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">{contact.interest}</span>
              </div>
              <p className="mt-4 leading-7 text-slate-800">{contact.message}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-600">Saved {contact.createdAt}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ContactsPanel
