import { useState, useEffect, useCallback } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { Trash2, Mail, Building2, MessageSquare, Calendar, Search, Users, Inbox, RefreshCw } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) return response.errors.join(', ');
  return error?.message || 'Request failed';
};

const ContactCard = ({ contact, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const fields = contact?.data ?? {};

  const timeAgo = (() => {
    try {
      return formatDistanceToNow(parseISO(contact.created_at), { addSuffix: true });
    } catch {
      return 'Unknown time';
    }
  })();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-700 font-bold text-sm">
                {(fields.name || '?').charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-900 truncate">{fields.name}</h3>
              <div className="flex items-center gap-1 text-slate-500 text-sm">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{fields.email}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(contact.id)}
            className="flex-shrink-0 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Delete contact"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {fields.company && (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              <Building2 className="w-3 h-3" />
              {fields.company}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
            <Calendar className="w-3 h-3" />
            {timeAgo}
          </span>
        </div>

        <div className="mt-4">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <MessageSquare className="w-4 h-4" />
            {expanded ? 'Hide message' : 'View message'}
          </button>
          {expanded && (
            <p className="mt-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-3 leading-relaxed border border-slate-200">
              {fields.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loadStatus, setLoadStatus] = useState('loading'); // loading | ready | error
  const [loadError, setLoadError] = useState(null);
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const fetchContacts = useCallback(async () => {
    setLoadStatus('loading');
    setLoadError(null);
    const { data: response, error } = await client
      .from('Contact Submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || response?.success === false) {
      const msg = getErrorMessage(response, error);
      console.error('Failed to load contacts:', msg);
      setLoadError(msg);
      setLoadStatus('error');
      return;
    }

    const rows = getRows(response);
    console.log('Contacts loaded:', rows.length);
    setContacts(rows);
    setLoadStatus('ready');
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleDelete = async (id) => {
    if (deleteConfirm !== id) {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
      return;
    }

    const { data: response, error } = await client
      .from('Contact Submissions')
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle();

    if (error || response?.success === false) {
      console.error('Delete failed:', getErrorMessage(response, error));
      return;
    }

    setContacts((prev) => prev.filter((c) => c.id !== id));
    setDeleteConfirm(null);
    console.log('Contact deleted:', id);
  };

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    const f = c?.data ?? {};
    return (
      (f.name || '').toLowerCase().includes(q) ||
      (f.email || '').toLowerCase().includes(q) ||
      (f.company || '').toLowerCase().includes(q) ||
      (f.message || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-6 h-6 text-indigo-600" />
              <h1 className="text-2xl font-bold text-slate-900">Saved Contacts</h1>
            </div>
            <p className="text-slate-500 text-sm">
              {loadStatus === 'ready'
                ? `${contacts.length} ${contacts.length === 1 ? 'contact' : 'contacts'} collected`
                : loadStatus === 'loading'
                ? 'Loading…'
                : 'Could not load contacts'}
            </p>
          </div>
          <button
            onClick={fetchContacts}
            disabled={loadStatus === 'loading'}
            className="self-start sm:self-auto flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 px-4 py-2 rounded-lg transition-colors font-medium disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loadStatus === 'loading' ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Loading state */}
        {loadStatus === 'loading' && (
          <div className="flex justify-center py-24">
            <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin" />
          </div>
        )}

        {/* Error state */}
        {loadStatus === 'error' && (
          <div className="text-center py-16">
            <p className="text-red-500 font-medium mb-2">Failed to load contacts</p>
            <p className="text-slate-500 text-sm mb-4">{loadError}</p>
            <button
              onClick={fetchContacts}
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium underline underline-offset-2"
            >
              Try again
            </button>
          </div>
        )}

        {/* Search */}
        {loadStatus === 'ready' && contacts.length > 0 && (
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, company, or message…"
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            />
          </div>
        )}

        {/* Empty state */}
        {loadStatus === 'ready' && contacts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">No contacts yet</h2>
            <p className="text-slate-500 text-sm max-w-xs">
              Contacts submitted through the form on the home page will appear here.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Go to Home Page
            </a>
          </div>
        )}

        {/* No search results */}
        {loadStatus === 'ready' && contacts.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">No contacts match your search.</p>
            <button
              onClick={() => setSearch('')}
              className="mt-3 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Contact grid */}
        {loadStatus === 'ready' && filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {deleteConfirm && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-5 py-3 rounded-xl shadow-lg">
            Click delete again to confirm removal
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
