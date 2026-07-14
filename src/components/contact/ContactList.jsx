import { formatDistanceToNow, format } from 'date-fns';
import { Mail, User, MessageSquare, Trash2, Inbox } from 'lucide-react';

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-slate-600">
        <Inbox className="mb-3 h-10 w-10 text-slate-400" />
        <p className="text-lg font-medium text-slate-900">No contacts yet</p>
        <p className="text-sm">Submit the form on the home page to see contacts here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <article
          key={contact.id}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1 space-y-2">
              <div className="flex items-center gap-2 text-slate-900">
                <User className="h-4 w-4 text-brand-600" />
                <span className="truncate font-semibold">{contact.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Mail className="h-4 w-4 text-slate-400" />
                <a href={`mailto:${contact.email}`} className="truncate hover:text-brand-600 hover:underline">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <p className="whitespace-pre-wrap">{contact.message}</p>
              </div>
              <p className="text-xs text-slate-400" title={format(new Date(contact.createdAt), 'PPpp')}>
                {formatDistanceToNow(new Date(contact.createdAt), { addSuffix: true })}
              </p>
            </div>
            <button
              onClick={() => onDelete(contact.id)}
              className="inline-flex items-center gap-1.5 self-start rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
              aria-label={`Delete contact from ${contact.name}`}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
