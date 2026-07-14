import { Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import ContactList from '@/components/contact/ContactList';

export default function Contacts({ contacts, onDelete }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-brand-100 p-2.5 text-brand-600">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Saved contacts</h1>
            <p className="text-slate-600">
              {contacts.length === 1 ? '1 contact' : `${contacts.length} contacts`} saved on this device
            </p>
          </div>
        </div>

        <ContactList contacts={contacts} onDelete={onDelete} />
      </div>
    </div>
  );
}
