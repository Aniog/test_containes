import { useState } from 'react';
import { getContacts, deleteContact } from '@/lib/contacts';
import { Trash2, Mail, Building2, MessageSquare, Users, ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

export default function ContactsPage() {
  const [contacts, setContacts] = useState(() => getContacts());
  const [confirmId, setConfirmId] = useState(null);

  function handleDelete(id) {
    const updated = deleteContact(id);
    setContacts(updated);
    setConfirmId(null);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
            <div className="w-px h-5 bg-slate-200" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <h1 className="text-lg font-semibold text-slate-900">Contacts</h1>
            </div>
          </div>
          <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {contacts.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">No contacts yet</h2>
            <p className="text-slate-500 mb-6">
              Contacts submitted through the form will appear here.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Go to contact form
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              >
                {/* Avatar + name */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-700 font-semibold text-sm">
                        {contact.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm leading-tight">{contact.name}</p>
                      {contact.company && (
                        <p className="text-xs text-slate-400 mt-0.5">{contact.company}</p>
                      )}
                    </div>
                  </div>

                  {confirmId === contact.id ? (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-xs text-red-600 hover:text-red-700 font-medium px-2 py-1 rounded bg-red-50 hover:bg-red-100 transition-colors duration-200"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="text-xs text-slate-500 hover:text-slate-700 font-medium px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmId(contact.id)}
                      className="text-slate-300 hover:text-red-400 transition-colors duration-200 flex-shrink-0 p-1 rounded"
                      aria-label="Delete contact"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-indigo-600 hover:text-indigo-700 truncate transition-colors duration-200"
                    >
                      {contact.email}
                    </a>
                  </div>

                  {contact.company && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Building2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{contact.company}</span>
                    </div>
                  )}

                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="line-clamp-3 leading-relaxed">{contact.message}</p>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{format(parseISO(contact.createdAt), 'MMM d, yyyy · h:mm a')}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
